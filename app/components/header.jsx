"use client";
import image from "../images/nurses.jpg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Tagline from "./tagline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="Business team collaborating"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Curved Navigation Container */}
      <div className="absolute top-0 w-full md:w-[90%] h-[100px] bg-white sm:rounded-b-[300px] shadow-2xl">
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 mr-3">
              <svg
                viewBox="0 0 50 50"
                className="w-full h-full fill-emerald-500"
              >
                <path
                  d="M25,2C12.3,2,2,12.3,2,25s10.3,23,23,23s23-10.3,23-23S37.7,2,25,2z M35.8,18.2c-2.5,2.5-5.1,5-7.6,7.5
                c-1.2,1.2-2.4,2.4-3.6,3.6c-0.3,0.3-0.6,0.6-0.9,0.9c-0.3,0.3-0.7,0.5-1.1,0.5c-0.4,0-0.8-0.2-1.1-0.5c-1.5-1.5-3-3-4.5-4.5
                c-0.3-0.3-0.5-0.7-0.5-1.1c0-0.4,0.2-0.8,0.5-1.1c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c1.2,1.2,2.3,2.3,3.5,3.5
                c3.8-3.8,7.6-7.6,11.4-11.4c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1C36.3,17.5,36.1,17.9,35.8,18.2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">XTRA</h1>
              <p className="text-sm uppercase tracking-wider">BUSINESS</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-emerald-500 font-medium px-3 py-2 rounded-full bg-emerald-50"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Blog
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-emerald-500 transition-colors">
                Pages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-10">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-500"
                >
                  Team
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-500"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-500"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <Link
              href="#"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow">
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-2xl z-20 md:hidden">
          <div className="flex flex-col p-4">
            <Link href="#" className="px-4 py-2 text-emerald-500 font-medium">
              Home
            </Link>
            <Link href="#" className="px-4 py-2 text-gray-600">
              About
            </Link>
            <Link href="#" className="px-4 py-2 text-gray-600">
              Services
            </Link>
            <Link href="#" className="px-4 py-2 text-gray-600">
              Blog
            </Link>
            <button
              className="px-4 py-2 text-gray-600 text-left flex items-center justify-between"
              onClick={() => {}}
            >
              Pages <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="#" className="px-4 py-2 text-gray-600">
              Contact
            </Link>
            <button className="mt-4 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-6 py-3 rounded-full font-medium">
              Free Consultation
            </button>
          </div>
        </div>
      )}

      <Tagline />
    </div>
  );
}
