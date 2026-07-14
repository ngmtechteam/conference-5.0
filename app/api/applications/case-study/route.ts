import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { validateCaseStudyApplication } from "@/lib/validation";
import { Competition } from "@/lib/generated/prisma/client";
import { sendApplicationReceivedEmail } from "@/lib/email";
import { apiLogger } from "@/lib/logger";
import {
  enforceApplicationRateLimit,
  validationErrorResponse,
  duplicateRegistrationResponse,
} from "@/lib/api/applications";

const COMPETITION_NAME = "Case Study & Research Analysis Competition";

/**
 * True when this email already has a Case Study application on file.
 *
 * The Case Study form stores email at the top level, while the other
 * competitions nest it under step1.personalInfo.email — so we match both
 * shapes to detect a registration made under any competition.
 */
async function hasExistingCaseStudyRegistration(
  email: string,
): Promise<boolean> {
  const existing = await db.application.findFirst({
    where: {
      OR: [
        { data: { path: ["email"], equals: email } },
        { data: { path: ["step1", "personalInfo", "email"], equals: email } },
      ],
    },
    select: { id: true, competition: true },
  });

  return existing?.competition === Competition.CASE_STUDY;
}

export async function POST(request: Request) {
  try {
    const rateLimited = await enforceApplicationRateLimit(request);
    if (rateLimited) return rateLimited;

    const { formData } = await request.json();

    const validation = validateCaseStudyApplication(formData);
    if (!validation.success) {
      return validationErrorResponse(validation.error);
    }

    const applicantEmail = validation.data.email;
    const applicantName = validation.data.fullName;

    if (await hasExistingCaseStudyRegistration(applicantEmail)) {
      return duplicateRegistrationResponse(COMPETITION_NAME);
    }

    const application = await db.application.create({
      data: {
        competition: Competition.CASE_STUDY,
        data: validation.data,
      },
    });

    await sendApplicationReceivedEmail({
      to: applicantEmail,
      applicantName,
      competition: "case_study",
    });

    apiLogger.info(
      { applicationId: application.id, competition: "CASE_STUDY" },
      "Application submitted successfully",
    );

    return NextResponse.json({
      success: true,
      applicationId: application.id,
      message: "Application submitted successfully",
    });
  } catch (error) {
    apiLogger.error(
      { error, competition: "CASE_STUDY" },
      "Application submission failed",
    );
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
