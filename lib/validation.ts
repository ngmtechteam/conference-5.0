import { z } from "zod";
import {
  step1Schema as dareStep1,
  step2Schema as dareStep2,
  step3Schema as dareStep3,
  step4Schema as dareStep4,
} from "@/lib/schemas/dare-nigeria";
import {
  step1Schema as smeStep1,
  step2Schema as smeStep2,
  step3Schema as smeStep3,
  step4Schema as smeStep4,
} from "@/lib/schemas/sme-pitch";
import { caseStudySchema } from "@/lib/schemas/case-study";
import { contactSchema } from "@/lib/schemas/contact";

export const dareNigeriaApplicationSchema = z.object({
  step1: dareStep1,
  step2: dareStep2,
  step3: dareStep3,
  step4: dareStep4,
});

export const smePitchApplicationSchema = z.object({
  step1: smeStep1,
  step2: smeStep2,
  step3: smeStep3,
  step4: smeStep4,
});

export type DareNigeriaApplication = z.infer<typeof dareNigeriaApplicationSchema>;
export type SMEPitchApplication = z.infer<typeof smePitchApplicationSchema>;

export function validateDareNigeriaApplication(data: unknown) {
  return dareNigeriaApplicationSchema.safeParse(data);
}

export function validateSMEPitchApplication(data: unknown) {
  return smePitchApplicationSchema.safeParse(data);
}

export function validateCaseStudyApplication(data: unknown) {
  return caseStudySchema.safeParse(data);
}

export function validateContactMessage(data: unknown) {
  return contactSchema.safeParse(data);
}

export interface ApplicationFiles {
  [fieldName: string]: {
    key: string;
    filename: string;
    contentType: string;
  };
}
