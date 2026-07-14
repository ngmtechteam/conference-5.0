"use client";

interface ContactSubmitButtonProps {
  isSubmitting: boolean;
}

export function ContactSubmitButton({ isSubmitting }: ContactSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F1990] py-4 text-base font-semibold text-white transition-colors hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isSubmitting ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Sending...
        </>
      ) : (
        "Submit Message"
      )}
    </button>
  );
}
