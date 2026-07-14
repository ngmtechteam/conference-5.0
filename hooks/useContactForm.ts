"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { submitContactMessage } from "@/lib/api/submissions";

const FALLBACK_ERROR = "Something went wrong. Please try again.";

/**
 * Encapsulates the contact form's validation, submission and result state so
 * the UI components stay presentational.
 */
export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const result = await submitContactMessage(data);

      if (!result.success) {
        throw new Error(result.error);
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : FALLBACK_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  });

  const dismissSuccess = () => setIsSubmitted(false);

  return {
    register,
    errors,
    isSubmitting,
    submitError,
    isSubmitted,
    onSubmit,
    dismissSuccess,
  };
}
