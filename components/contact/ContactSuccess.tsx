"use client";

interface ContactSuccessProps {
  onReset: () => void;
}

export function ContactSuccess({ onReset }: ContactSuccessProps) {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
      <p className="text-lg font-semibold text-[#0DA04C]">Message sent!</p>
      <p className="mt-1 text-sm text-gray-600">
        Thanks for reaching out. Our team will get back to you shortly.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm font-semibold text-[#0F1990] hover:underline"
      >
        Send another message
      </button>
    </div>
  );
}
