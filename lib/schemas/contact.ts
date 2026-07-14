import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Please enter a subject"),
  message: z
    .string()
    .min(10, "Your message should be at least 10 characters")
    .max(2000, "Your message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
