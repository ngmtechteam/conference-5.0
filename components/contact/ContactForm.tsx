"use client";

import { FormField, Input, Textarea } from "@/components/ui/FormField";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactSuccess } from "./ContactSuccess";
import { ContactSubmitButton } from "./ContactSubmitButton";

export function ContactForm() {
  const {
    register,
    errors,
    isSubmitting,
    submitError,
    isSubmitted,
    onSubmit,
    dismissSuccess,
  } = useContactForm();

  if (isSubmitted) {
    return <ContactSuccess onReset={dismissSuccess} />;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <FormField label="Full Name" required error={errors.fullName}>
        <Input
          {...register("fullName")}
          placeholder="Enter your full name"
          className="py-3.5 text-base"
          error={!!errors.fullName}
        />
      </FormField>

      <FormField label="Email Address" required error={errors.email}>
        <Input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className="py-3.5 text-base"
          error={!!errors.email}
        />
      </FormField>

      <FormField label="Subject" required error={errors.subject}>
        <Input
          {...register("subject")}
          placeholder="General Inquiry"
          className="py-3.5 text-base"
          error={!!errors.subject}
        />
      </FormField>

      <FormField label="Message" required error={errors.message}>
        <Textarea
          {...register("message")}
          placeholder="Enter your message here"
          rows={6}
          className="text-base"
          error={!!errors.message}
        />
      </FormField>

      {submitError && <p className="text-sm text-red-500">{submitError}</p>}

      <ContactSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
