"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import image1 from "../../images/nurses.jpg";
import image2 from "../../images/hen.jpg";

const products = [
  {
    title: "Summer Dress Collection",
    subtitle: "Starting from $29.99",
    image: image1,
  },
  {
    title: "Luxury Handbags",
    subtitle: "Premium Collection",
    image: image2,
  },
  {
    title: "Sports Footwear",
    subtitle: "New Arrivals",
    image: image1,
  },
];

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="mt-8">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-96 object-contain rounded-lg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p>{product.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
