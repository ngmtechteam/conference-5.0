import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { validateSMEPitchApplication } from "@/lib/validation";
import { Competition } from "@/lib/generated/prisma/client";
import { sendApplicationReceivedEmail } from "@/lib/email";
import { apiLogger } from "@/lib/logger";
import {
  enforceApplicationRateLimit,
  validationErrorResponse,
  duplicateRegistrationResponse,
} from "@/lib/api/applications";

/** Finds any existing application registered under this email (DARE or SME). */
async function findExistingRegistration(email: string) {
  return db.application.findFirst({
    where: {
      data: { path: ["step1", "personalInfo", "email"], equals: email },
    },
    select: { id: true, competition: true },
  });
}

export async function POST(request: Request) {
  try {
    const rateLimited = await enforceApplicationRateLimit(request);
    if (rateLimited) return rateLimited;

    const { formData } = await request.json();

    const validation = validateSMEPitchApplication(formData);
    if (!validation.success) {
      return validationErrorResponse(validation.error);
    }

    const { personalInfo } = validation.data.step1;
    const applicantEmail = personalInfo.email;
    const applicantName = `${personalInfo.firstName} ${personalInfo.lastName}`;

    // SME Pitch blocks anyone already registered for another competition.
    const existing = await findExistingRegistration(applicantEmail);
    if (existing) {
      const competitionName =
        existing.competition === Competition.DARE_NIGERIA
          ? "DARE Nigeria Challenge"
          : "SME Pitch Competition";
      return duplicateRegistrationResponse(competitionName);
    }

    const application = await db.application.create({
      data: {
        competition: Competition.SME_PITCH,
        data: validation.data,
      },
    });

    await sendApplicationReceivedEmail({
      to: applicantEmail,
      applicantName,
      competition: "sme_pitch",
    });

    apiLogger.info(
      { applicationId: application.id, competition: "SME_PITCH" },
      "Application submitted successfully",
    );

    return NextResponse.json({
      success: true,
      applicationId: application.id,
      message: "Application submitted successfully",
    });
  } catch (error) {
    apiLogger.error(
      { error, competition: "SME_PITCH" },
      "Application submission failed",
    );
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
