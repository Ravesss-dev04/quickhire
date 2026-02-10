"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-primary transition-colors">home</Link>
        <Link href="/jobs" className="hover:text-primary transition-colors">jobs</Link>
        <Link href="#" className="hover:text-primary transition-colors">Companies</Link>
        <Link href="#" className="hover:text-primary transition-colors">Odd jobs</Link>
        <Link href="#" className="hover:text-primary transition-colors">about</Link>
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link 
          href="#" 
          className="px-4 py-2 border border-primary text-primary rounded-md font-medium hover:bg-secondary transition-colors"
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

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col p-6 space-y-4 md:hidden animate-in fade-in slide-in-from-top-5">
          <Link 
            href="/" 
            className="text-lg font-medium text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            home
          </Link>
          <Link 
            href="/jobs" 
            className="text-lg font-medium text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            jobs
          </Link>
          <Link 
            href="#" 
            className="text-lg font-medium text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Companies
          </Link>
          <Link 
            href="#" 
            className="text-lg font-medium text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Odd jobs
          </Link>
          <Link 
            href="#" 
            className="text-lg font-medium text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            about
          </Link>
          <div className="pt-4 flex flex-col space-y-3">
            <Link 
              href="#" 
              className="w-full py-3 text-center border border-primary text-primary rounded-md font-medium hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Post job
            </Link>
            <Link 
              href="#" 
              className="w-full py-3 text-center bg-primary text-white rounded-md font-medium hover:bg-primary-hover transition-colors shadow-sm shadow-blue-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              get started
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}