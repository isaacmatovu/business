import Image from "next/image";
import { ArrowUp, Download, ThumbsUp } from "lucide-react";
import image from "../images/nurses.jpg";
import { FaQuoteLeft, FaThumbsUp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

export default function DownSection() {
  return (
    <div className="mx-auto px-11 py-16 relative">
      {/* Left side content */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2">
          {/* Thumbs up icon */}
          <div className="mb-4">
            <div className="inline-block relative">
              <div className="w-24 h-24 relative">
                <FaRegMessage
                  className="w-full h-full text-gray-800"
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <FaThumbsUp
                    className="w-full h-full text-emerald-400"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials heading */}
          <h3 className="text-emerald-500 tracking-wider mb-4 uppercase font-medium">
            O U R T E S T I M O N I A L S
          </h3>

          <h2 className="text-5xl font-bold mb-6">Our happy customers</h2>

          <p className="text-gray-500 text-lg">
            The testimonials feature lets you collect kudos from customers and
            clients and display them on your site in different ways to add
            credibility and a professional feel.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-8 relative pb-16">
            {" "}
            {/* Added pb-16 for bottom padding */}
            {/* Quote marks */}
            <FaQuoteLeft className="h-9 w-9 text-green-500" />
            {/* Testimonial content */}
            <div className="text-center mb-6">
              <p className="text-lg text-gray-800 mb-6">
                "Great customer service, Social Media Marketing Company is
                professional and extremely serious about business. I have
                increased my revenue of my business."
              </p>

              <p className="text-emerald-500 font-medium">Sarah Lee</p>
              <p className="text-gray-500 text-sm">Teacher</p>
            </div>
            {/* Avatar - now absolutely positioned */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {" "}
                {/* Increased shadow */}
                <Image
                  src={image}
                  alt="Avatar"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-6 right-6 bg-emerald-500 text-white p-3 rounded-full shadow-md hover:bg-emerald-600 transition-colors">
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
