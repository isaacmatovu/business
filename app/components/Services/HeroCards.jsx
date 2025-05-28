import Image from "next/image";
import image from "../../images/nurses.jpg";
import GreenCard from "./green";
import { IoDiamondSharp } from "react-icons/io5";
import { FaStarAndCrescent } from "react-icons/fa";
import { GiPschentDoubleCrown } from "react-icons/gi";

export default function HeroCards() {
  return (
    <div className="relative h-screen min-h-[600px] md:h-[80vh] w-full mx-auto">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt=""
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center p-4">
        {/* Text content */}
        <div className="text-white text-center w-full max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Your Title Here
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 px-2">
            Your description text goes here
          </p>

          {/* Process steps */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 w-full">
            {/* Step 1: Brainstorming */}
            <div className="flex flex-col items-center text-center group w-full px-2">
              <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-emerald-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 transition-transform group-hover:scale-105">
                  <IoDiamondSharp
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Connecting line to next step */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-0.5 bg-emerald-500 transform -translate-y-1/2"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                Brainstorming
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base italic">
                Stop chasing the money and start chasing the passion.
              </p>
            </div>

            {/* Step 2: Start Designing */}
            <div className="flex flex-col items-center text-center group w-full px-2">
              <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-emerald-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 transition-transform group-hover:scale-105">
                  <FaStarAndCrescent
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Connecting line to next step */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-0.5 bg-emerald-500 transform -translate-y-1/2"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                Start Designing
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base italic">
                Stop chasing the money and start chasing the passion.
              </p>
            </div>

            {/* Step 3: Development & Payment */}
            <div className="flex flex-col items-center text-center group w-full px-2">
              <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-emerald-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 transition-transform group-hover:scale-105">
                <GiPschentDoubleCrown
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                Development & Payment
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base italic">
                Stop chasing the money and start chasing the passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
