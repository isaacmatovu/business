import Image from "next/image";
import { Download } from "lucide-react";
import image from "./images/doc.jpg";
import { FaWolfPackBattalion } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <div className="relative w-full min-h-screen bg-amber-50 p-6">
      {/* Logo */}
      <FaWolfPackBattalion className="w-14 h-14 text-green-800" />

      {/* About Our Company */}
      <div className="text-[#4ECDC4] tracking-wider mb-6">
        ABOUT OUR COMPANY
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We are team of expert people with creativity ideas
          </h1>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed">
            As an example, let's take the content marketing process. It's a
            process you'll find in every Marketing Department out there. There
            will be writers, designers, SEO experts, and web designers, all
            working together to create a single piece of content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8">
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row w-full">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center bg-green-600 px-20 py-4 rounded-3xl hover:bg-blue-400 transition-colors duration-300 mb-2 w-24 text-center">
                  <p className="text-white text-4xl">16+</p>
                </div>
                <p className="text-lg sm:text-xl text-center">
                  Patients reached
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center bg-green-600 px-20 py-4 rounded-3xl hover:bg-blue-400 transition-colors duration-300 mb-2 w-24 text-center">
                  <p className="text-white text-4xl">1000+</p>
                </div>
                <p className="text-lg sm:text-xl text-center">
                  Customers attained
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center bg-green-600 px-20 py-4 rounded-3xl hover:bg-blue-400 transition-colors duration-300 mb-2 w-24 text-center">
                  <p className="text-white text-4xl">4+</p>
                </div>
                <p className="text-lg sm:text-xl text-center">
                  Referral hospitals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={image}
            alt="Team member working with content"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
