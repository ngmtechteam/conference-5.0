import { NextResponse } from "next/server";
import { validateContactMessage } from "@/lib/validation";
import { sendContactMessageEmail } from "@/lib/email";
import {
  contactRatelimit,
  checkRateLimit,
  getClientIp,
} from "@/lib/ratelimit";
import { apiLogger } from "@/lib/logger";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const { success: rateLimitOk } = await checkRateLimit(contactRatelimit, ip);

    if (!rateLimitOk) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a moment." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { formData } = body;

    const validation = validateContactMessage(formData);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { fullName, email, subject, message } = validation.data;

    const result = await sendContactMessageEmail({
      name: fullName,
      email,
      subject,
      message,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to send your message. Please try again later." },
        { status: 502 },
      );
    }

    apiLogger.info({ subject }, "Contact message submitted successfully");

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    apiLogger.error({ error }, "Contact message submission failed");
    return NextResponse.json(
      { error: "Failed to send your message." },
      { status: 500 },
    );
  }
}
