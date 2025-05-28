"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-center items-center bg-gradient-to-b from-emerald-400 to-teal-600 text-white text-xl sm:text-2xl gap-8 py-7 border-r-4 rounded-r-full border-l-4 rounded-l-full">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
