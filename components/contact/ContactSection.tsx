import { ContactHeading } from "./ContactHeading";
import { ContactForm } from "./ContactForm";
import { ContactImage } from "./ContactImage";

export default function ContactSection() {
  return (
    <section className="font-epilogue">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-stretch lg:py-24">
        {/* Left: heading + form */}
        <div className="w-full max-w-lg">
          <ContactHeading />
          <ContactForm />
        </div>

        {/* Right: image */}
        <ContactImage />
      </div>
    </section>
  );
}
