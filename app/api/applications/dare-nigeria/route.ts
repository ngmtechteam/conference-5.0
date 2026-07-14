import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { validateDareNigeriaApplication } from "@/lib/validation";
import { Competition } from "@/lib/generated/prisma/client";
import { sendApplicationReceivedEmail } from "@/lib/email";
import { apiLogger } from "@/lib/logger";
import {
  enforceApplicationRateLimit,
  validationErrorResponse,
  duplicateRegistrationResponse,
} from "@/lib/api/applications";

const COMPETITION_NAME = "DARE Nigeria Challenge";

/** True when this email already has a DARE Nigeria application on file. */
async function hasExistingDareRegistration(email: string): Promise<boolean> {
  const existing = await db.application.findFirst({
    where: {
      data: { path: ["step1", "personalInfo", "email"], equals: email },
    },
    select: { id: true, competition: true },
  });

  return existing?.competition === Competition.DARE_NIGERIA;
}

export async function POST(request: Request) {
  try {
    const rateLimited = await enforceApplicationRateLimit(request);
    if (rateLimited) return rateLimited;

    const { formData } = await request.json();

    const validation = validateDareNigeriaApplication(formData);
    if (!validation.success) {
      return validationErrorResponse(validation.error);
    }

    const { personalInfo } = validation.data.step1;
    const applicantEmail = personalInfo.email;
    const applicantName = `${personalInfo.firstName} ${personalInfo.lastName}`;

    if (await hasExistingDareRegistration(applicantEmail)) {
      return duplicateRegistrationResponse(COMPETITION_NAME);
    }

    const application = await db.application.create({
      data: {
        competition: Competition.DARE_NIGERIA,
        data: validation.data,
      },
    });

    await sendApplicationReceivedEmail({
      to: applicantEmail,
      applicantName,
      competition: "dare_nigeria",
    });

    apiLogger.info(
      { applicationId: application.id, competition: "DARE_NIGERIA" },
      "Application submitted successfully",
    );

    return NextResponse.json({
      success: true,
      applicationId: application.id,
      message: "Application submitted successfully",
    });
  } catch (error) {
    apiLogger.error(
      { error, competition: "DARE_NIGERIA" },
      "Application submission failed",
    );
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
