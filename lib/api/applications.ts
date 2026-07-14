import { NextResponse } from "next/server";
import type { ZodError } from "zod";
import {
  applicationRatelimit,
  checkRateLimit,
  getClientIp,
} from "@/lib/ratelimit";

/**
 * Server-side HTTP helpers shared by the competition application intake routes
 * (dare-nigeria, sme-pitch, case-study). These cover the boilerplate that is
 * identical across every route; competition-specific logic stays in the route.
 *
 * (Not to be confused with `lib/api/submissions.ts`, the client-side fetchers.)
 */

/**
 * Enforces the shared application rate limit. Returns a ready-to-send 429
 * response when the caller is over the limit, or `null` when the request may
 * proceed — letting a handler early-return with `if (limited) return limited;`.
 */
export async function enforceApplicationRateLimit(
  request: Request,
): Promise<NextResponse | null> {
  const ip = getClientIp(request);
  const { success } = await checkRateLimit(applicationRatelimit, ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  return null;
}

/** 400 response carrying the flattened Zod issues. */
export function validationErrorResponse(error: ZodError): NextResponse {
  return NextResponse.json(
    { error: "Validation failed", details: error.flatten() },
    { status: 400 },
  );
}

/** 409 response used when an applicant re-registers for the same competition. */
export function duplicateRegistrationResponse(
  competitionName: string,
): NextResponse {
  return NextResponse.json(
    {
      error: `You have already registered for the ${competitionName}. Each participant can only register for one competition.`,
    },
    { status: 409 },
  );
}
