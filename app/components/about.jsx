"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import image from "../images/nurses.jpg";
export default function BusinessProcess() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-white px-4 md:px-16 lg:px-20 py-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-teal-500 tracking-wider text-sm md:text-base font-medium">
          ABOUT OUR COMPANY
        </h3>
      </div>

      {/* Main Content */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Our business process road
          </h1>

          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="text-teal-400 text-7xl md:text-8xl font-light leading-none">
              01.
            </div>
            <div className="space-y-2 pt-3">
              <h2 className="text-xl md:text-2xl font-bold">Create an Idea</h2>
              <p className="text-gray-400 max-w-md">
                What's hard is to develop the habits that enable us to come up
                with great ideas.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <div className="text-teal-400 text-7xl md:text-8xl font-light leading-none">
              02.
            </div>
            <div className="space-y-2 pt-3">
              <h2 className="text-xl md:text-2xl font-bold">
                Complete the Project
              </h2>
              <p className="text-gray-400 max-w-md">
                You can organize yourself and your team in endless ways.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative ">
          <Image
            src={image}
            alt="Team collaborating on a project"
            width={600}
            height={400}
            className="rounded-3xl object-cover h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
