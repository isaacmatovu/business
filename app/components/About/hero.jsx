import Image from "next/image";
import image from "./images/doc.jpg";

export default function Hero() {
  return (
    <section className="relative pt-32" style={{ height: "500px" }}>
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
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Healthcare Partner
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
            Providing exceptional medical care with compassion and expertise.
            Your health is our priority, and we're here to support you every
            step of the way.
          </p>

          {/* Call-to-action button */}
          <button className="bg-green-700 hover:bg-green-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
