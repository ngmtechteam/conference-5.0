import Image from "next/image";

export function ContactImage() {
  return (
    <div className="w-full lg:flex-1">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-full lg:min-h-200">
        <Image
          src="/contact/connect-with-ngm.jpg"
          alt="The NGM Conference community"
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
