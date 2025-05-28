"use client";

import { ArrowUp } from "lucide-react";
import { GiDoubleDragon } from "react-icons/gi";
import { GiLion } from "react-icons/gi";
import { FaWolfPackBattalion } from "react-icons/fa";
import { GiElephant } from "react-icons/gi";
import { FaVolleyballBall } from "react-icons/fa";

export default function BusinessCTA() {
  return (
    <div className="bg-sky-50 min-h-screen w-full flex flex-col items-center justify-center relative">
      <h1 className="text-4xl font-bold">Partners in crime</h1>
      {/* Company logos section */}
      <div className="w-full max-w-7xl px-4 py-8 flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center">
          <GiDoubleDragon className="h-16 w-16 " />

          <h1>Nile breweries</h1>
        </div>
        <div className="flex items-center">
          <GiLion className="h-16 w-16 text-blue-800" />
          <h1>Uganda waragi</h1>
        </div>
        <div className="flex items-center">
          <FaWolfPackBattalion className="h-16 w-16 text-black" />
          <h1>Uganda tyres</h1>
        </div>
        <div className="flex items-center">
          <GiElephant className="h-16 w-16 text-yellow-400" />
          <h1>Bwindi gamepark</h1>
        </div>
        <div className="flex items-center">
          <FaVolleyballBall className="h-16 w-17 text-green-900" />
          <h1>betpawa</h1>
        </div>
      </div>

      {/* Main CTA section */}
      <div className="w-full max-w-6xl px-6 py-16">
        <div className="bg-white rounded-[40px] shadow-lg p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-emerald-400">Ready?</span> Start your own
              business
            </h2>
            <p className="text-gray-400 text-xl mt-4">
              We are here to start your new project and finish it soon
            </p>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-medium text-lg transition-transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Contact Us Today
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        className="fixed bottom-6 right-6 p-3 rounded-full bg-emerald-400 text-white shadow-md hover:bg-emerald-500 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
