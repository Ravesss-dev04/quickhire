"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`w-full py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-xl border-b border-white/50 shadow-lg shadow-gray-200/20" 
        : "bg-white border-b border-gray-100"
    }`}>
      {/* Brand */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center">
          <img src="/Quichhire.svg" className="h-[40px]"/> <span className="text-3xl">uickHire</span>
        </Link>
      </div>
{/* Nav Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-primary transition-colors">home</Link>
        <Link href="/jobs" className="hover:text-primary transition-colors">jobs</Link>
        <Link href="#" className="hover:text-primary transition-colors">Companies</Link>
        <Link href="#" className="hover:text-primary transition-colors">Odd jobs</Link>
        <Link href="#" className="hover:text-primary transition-colors">about</Link>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <Link 
          href="#" 
          className="hidden md:block px-4 py-2 border border-primary text-primary rounded-md font-medium hover:bg-secondary transition-colors"
        >
          Post job
        </Link>
        <Link 
          href="#" 
          className="px-5 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-hover transition-colors shadow-sm shadow-blue-200"
        >
          get started
        </Link>

      </div>

    </nav>
  );
}