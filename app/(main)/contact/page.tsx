import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | NGM Conference 5.0",
  description:
    "Get in touch with the NGM Conference 5.0 team. We're here to help with any questions.",
};

export default function ContactPage() {
  return <ContactSection />;
}
