"use client";

import Image from "next/image";
import { ArrowUp, Download, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import image from "../../images/nurses.jpg";
import { FaPeopleRobbery } from "react-icons/fa6";

export default function Hero() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f5fafd]">
      {/* Scroll to top button */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-10">
          <button
            onClick={scrollToTop}
            className="bg-green-500 p-4 rounded-full shadow-lg"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Person image */}
          <div className="w-full md:w-1/2 py-8">
            <Image
              src={image}
              alt="Team member"
              width={600}
              height={800}
              className="object-contain"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 py-8 px-4 md:px-8">
            {/* Logo */}
            <div className="flex justify-center items-center">
              <FaPeopleRobbery className="text-green-700 text-8xl" />
            </div>

            {/* About Our Company */}
            <div className="text-center mb-6">
              <h3 className="text-[#2aa3cc] tracking-widest font-medium">
                ABOUT OUR COMPANY
              </h3>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-center">
                We are team of expert people with creativity ideas
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-gray-400 text-lg">
                As an example, let's take the content marketing process. It's a
                process you'll find in every Marketing Department out there.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-4 group">
                <div className="bg-green-400 p-4 rounded-full transition-all duration-300 group-hover:scale-150">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-300 group-hover:scale-110"
                  >
                    <path
                      d="M3 21V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V21L17 19L14 21L12 20L10 21L7 19L3 21Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L11 14L17 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold hover:text-blue-600">
                  Designing
                </h3>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-green-400 p-4 rounded-full transition-all duration-300 group-hover:scale-150">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-300 group-hover:scale-110"
                  >
                    <path
                      d="M12 4V20M20 12H4"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 4C13.3132 5.21071 14.5136 6.55972 15.5 8C16.5 9.5 17 11 17 12C17 13 16.5 14.5 15.5 16C14.5136 17.4403 13.3132 18.7893 12 20C10.6868 18.7893 9.48642 17.4403 8.5 16C7.5 14.5 7 13 7 12C7 11 7.5 9.5 8.5 8C9.48642 6.55972 10.6868 5.21071 12 4Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold hover:text-blue-800">
                  Development
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
