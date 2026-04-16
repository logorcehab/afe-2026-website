"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";

const imgLogo = "/assets/63783a47e53e8172b0de8f0cd3374a6d84f397af.png";
const navLinks = ["Speakers", "Who Attends", "Agenda", "Sponsors", "Venue"];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#000005]/90">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 h-[60px]">
        <Image 
          src={imgLogo} 
          alt="Africa Financial Week" 
          width={180}
          height={40}
          className="h-[40px] w-auto object-contain" 
        />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-white text-[15px] font-sans tracking-[-0.2px] hover:opacity-80 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href="#contact"
            className="bg-[#e30071] text-white text-[15px] font-sans font-medium px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#c9005f] transition-colors"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#000005] border-t border-white/10 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="block text-white text-[15px] font-sans py-3 border-b border-white/5"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 bg-[#e30071] text-white text-[15px] font-sans font-medium px-4 py-2 rounded-full flex items-center gap-1.5 justify-center hover:bg-[#c9005f] transition-colors"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}
