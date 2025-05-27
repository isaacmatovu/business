import Image from "next/image";
import image from "../../images/nurses.jpg"; // Adjust the path as necessary
export default function HeroService() {
  return (
    <div>
      <section className="relative pt-32" style={{ height: "400px" }}>
        {/* Background image layer - stays exactly as you had it */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="Business team working together"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{
              objectPosition: "top",
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Text content layer - this sits on top */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            {/* Subheading */}
            <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
              services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
