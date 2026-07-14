import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { db } from "@/lib/db";
import { ApplicationStatus, type Application } from "@/lib/generated/prisma/client";
import {
  Competition,
  sendApplicationAcceptedEmail,
  sendApplicationDeclinedEmail,
} from "@/lib/email";
import { apiLogger } from "@/lib/logger";

interface RouteParams {
  params: Promise<{ id: string }>;
}

type Decision = "accept" | "decline";

const COMPETITION_NAMES: Record<string, Competition> = {
  DARE_NIGERIA: "dare_nigeria",
  SME_PITCH: "sme_pitch",
  CASE_STUDY: "case_study",
};

/** Applicant contact details, normalised across the different data shapes. */
interface Applicant {
  email?: string;
  name: string;
}

/** Multi-step competitions (DARE, SME) nest the applicant under step1. */
interface MultiStepApplicationData {
  step1?: {
    personalInfo?: {
      firstName?: string;
      lastName?: string;
      email?: string;
    };
  };
}

/** The case study competition stores the applicant at the top level. */
interface CaseStudyApplicationData {
  fullName?: string;
  email?: string;
}

function isValidDecision(value: unknown): value is Decision {
  return value === "accept" || value === "decline";
}

function isAlreadyDecided(status: ApplicationStatus): boolean {
  return (
    status === ApplicationStatus.ACCEPTED ||
    status === ApplicationStatus.DECLINED
  );
}

function decisionToStatus(decision: Decision): ApplicationStatus {
  return decision === "accept"
    ? ApplicationStatus.ACCEPTED
    : ApplicationStatus.DECLINED;
}

async function getAdminId(request: Request): Promise<string> {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  return token?.id as string;
}

/** Maps the stored (uppercase) competition onto the email module's naming. */
function resolveCompetition(competition: string): Competition {
  return COMPETITION_NAMES[competition] || (competition as Competition);
}

/** Applicant contact details live in a different shape per competition. */
function extractApplicant(application: Application): Applicant {
  if (application.competition === "CASE_STUDY") {
    const data = application.data as unknown as CaseStudyApplicationData;
    return { email: data.email, name: data.fullName ?? "" };
  }

  const info = (application.data as unknown as MultiStepApplicationData).step1
    ?.personalInfo;
  const name = `${info?.firstName ?? ""} ${info?.lastName ?? ""}`.trim();
  return { email: info?.email, name };
}

function sendDecisionEmail(
  decision: Decision,
  params: { to: string; applicantName: string; competition: Competition },
) {
  const send =
    decision === "accept"
      ? sendApplicationAcceptedEmail
      : sendApplicationDeclinedEmail;
  return send(params);
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { decision, notes } = await request.json();

    if (!isValidDecision(decision)) {
      return NextResponse.json(
        { error: "Invalid decision. Must be 'accept' or 'decline'" },
        { status: 400 },
      );
    }

    const adminId = await getAdminId(request);

    const application = await db.application.findUnique({ where: { id } });

    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 },
      );
    }

    if (isAlreadyDecided(application.status)) {
      return NextResponse.json(
        { error: "Application has already been decided" },
        { status: 400 },
      );
    }

    const updatedApplication = await db.application.update({
      where: { id },
      data: {
        status: decisionToStatus(decision),
        adminNotes: notes || application.adminNotes,
        decidedAt: new Date(),
        decidedBy: adminId,
      },
    });

    const applicant = extractApplicant(application);

    if (applicant.email) {
      await sendDecisionEmail(decision, {
        to: applicant.email,
        applicantName: applicant.name,
        competition: resolveCompetition(application.competition),
      });
    }

    apiLogger.info(
      {
        applicationId: id,
        decision,
        adminId,
        competition: application.competition,
      },
      "Application decision processed",
    );

    return NextResponse.json({
      success: true,
      application: updatedApplication,
      emailSent: !!applicant.email,
    });
  } catch (error) {
    apiLogger.error({ error }, "Admin decision error");
    return NextResponse.json(
      { error: "Failed to process decision" },
      { status: 500 },
    );
  }
}
