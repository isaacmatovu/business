"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, LinkIcon, Download } from "lucide-react";
import Image from "next/image";
import image from "../images/nurses.jpg";
import image2 from "../images/hen.jpg";

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");
  const [slideTransition, setSlideTransition] = useState("");

  const slides = [
    {
      id: 0,
      image: image,
      title: "Typewriter",
      subtitle: "3D Design, Photography",
      icon: <LinkIcon className="h-6 w-6" />,
      color: "bg-gradient-to-br from-emerald-400 to-teal-600",
      alt: "Eric Amaral business card design",
    },
    {
      id: 1,
      image: image,
      title: "Nurses",
      subtitle: "Healthcare, Photography",
      icon: <LinkIcon className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-400 to-indigo-600",
      alt: "eric",
    },
    {
      id: 2,
      image: image,
      title: "Branding",
      subtitle: "Graphic Design, Branding",
      icon: <Download className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-400 to-pink-600",
      alt: "Branding materials with black background and light blue elements",
    },
    {
      id: 3,
      image: image,
      title: "Portfolio",
      subtitle: "Graphic Design, Web",
      icon: <Download className="h-6 w-6" />,
      color: "bg-gradient-to-br from-yellow-400 to-orange-600",
      alt: "Portfolio showcase with vibrant designs",
    },
    {
      id: 4,
      image: image2,
      title: "Nature",
      subtitle: "Photography, Wildlife",
      icon: <Download className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-400 to-lime-600",
      alt: "Wildlife photography of a hen",
    },
    {
      id: 5,
      image: image2,
      title: "Farm Life",
      subtitle: "Photography, Rural",
      icon: <Download className="h-6 w-6" />,
      color: "bg-gradient-to-br from-red-400 to-rose-600",
      alt: "Rural farm photography featuring a hen",
    },
  ];

  // Function to get visible slides for display
  const getVisibleIndices = () => {
    if (sliding) {
      if (slideDirection === "next") {
        // When sliding right/next: current, next, and next+1
        return [
          currentIndex,
          (currentIndex + 1) % slides.length,
          (currentIndex + 2) % slides.length,
          (currentIndex + 3) % slides.length,
        ];
      } else {
        // When sliding left/prev: prev-1, prev, current
        return [
          (currentIndex - 2 + slides.length) % slides.length,
          (currentIndex - 1 + slides.length) % slides.length,
          currentIndex,
          (currentIndex + 1) % slides.length,
        ];
      }
    }

    // Normal display: prev, current, next
    return [
      (currentIndex - 1 + slides.length) % slides.length,
      currentIndex,
      (currentIndex + 1) % slides.length,
    ];
  };

  const nextSlide = () => {
    if (sliding) return;
    setSlideDirection("next");
    setSliding(true);
    setSlideTransition("transform 500ms ease-out");

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setSliding(false);

      // Reset transition after completion
      setTimeout(() => {
        setSlideTransition("");
      }, 50);
    }, 500);
  };

  const prevSlide = () => {
    if (sliding) return;
    setSlideDirection("prev");
    setSliding(true);
    setSlideTransition("transform 500ms ease-out");

    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setSliding(false);

      // Reset transition after completion
      setTimeout(() => {
        setSlideTransition("");
      }, 50);
    }, 500);
  };

  const goToSlide = (index) => {
    if (sliding) return;
    const direction = index > currentIndex ? "next" : "prev";
    setSlideDirection(direction);
    setSliding(true);
    setSlideTransition("transform 500ms ease-out");

    setTimeout(() => {
      setCurrentIndex(index);
      setSliding(false);

      // Reset transition after completion
      setTimeout(() => {
        setSlideTransition("");
      }, 50);
    }, 500);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div className="flex items-center justify-center h-[500px] md:h-[600px]">
        {/* Left Navigation Arrow */}
        <button
          onClick={prevSlide}
          disabled={sliding}
          className="absolute left-0 z-30 p-2 bg-white/10 backdrop-blur-sm rounded-r-lg hover:bg-white/20 transition-colors disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        {/* Main Carousel Track */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-all relative"
            style={{
              transition: slideTransition,
              transform: sliding
                ? slideDirection === "next"
                  ? "translateX(-100%)"
                  : "translateX(100%)"
                : "translateX(0)",
            }}
          >
            {/* Carousel Items Container */}
            <div className="flex justify-center items-center w-full min-w-full px-12">
              {getVisibleIndices().map((slideIndex, positionIndex) => {
                const slide = slides[slideIndex];
                const isCenter =
                  (!sliding && positionIndex === 1) ||
                  (sliding &&
                    slideDirection === "next" &&
                    positionIndex === 2) ||
                  (sliding && slideDirection === "prev" && positionIndex === 1);

                const isOffscreen =
                  (sliding &&
                    slideDirection === "next" &&
                    positionIndex === 0) ||
                  (sliding && slideDirection === "prev" && positionIndex === 3);

                return (
                  <div
                    key={`${slide.id}-${slideIndex}-${positionIndex}`}
                    className={`transition-all duration-300 ${
                      isCenter ? "w-2/5 z-20" : "w-1/4 opacity-70"
                    } ${isOffscreen ? "opacity-0" : ""}`}
                  >
                    <div
                      className={`group relative h-[400px] md:h-[500px] rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                        isCenter ? "scale-105" : "scale-95"
                      }`}
                    >
                      {/* Background image */}
                      <div className="absolute inset-0 bg-gray-100">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          className="object-cover opacity-90"
                        />
                      </div>

                      {/* Overlay that appears on hover */}
                      <div
                        className={`absolute inset-0 ${slide.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col items-center justify-center text-white`}
                      >
                        <div className="absolute inset-0 overflow-hidden opacity-20">
                          <div className="absolute -rotate-12 -left-10 top-20 w-64 h-64 bg-white/20 rounded-lg"></div>
                          <div className="absolute rotate-12 -right-10 bottom-20 w-64 h-64 bg-white/20 rounded-lg"></div>
                        </div>

                        <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white rounded-full p-6 mb-6">
                          {slide.icon}
                        </div>
                        <h2 className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 text-4xl font-bold mb-2 text-center px-4">
                          {slide.title}
                        </h2>
                        <p className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 text-white/80 text-center">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={nextSlide}
          disabled={sliding}
          className="absolute right-0 z-30 p-2 bg-white/10 backdrop-blur-sm rounded-l-lg hover:bg-white/20 transition-colors disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={sliding}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
