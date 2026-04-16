"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { SlideUp } from "@/components/ui/SlideUp";
import Image from "next/image";

const imgHeroBg = "/assets/3587493c2ab9b505b5f1ac5d56d80d86ac27329d.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#000005]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imgHeroBg}
          alt="AFE 2026 Background"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000005] via-[#000005]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 pb-16 pt-32 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="flex flex-col gap-6 max-w-[700px]">
            <SlideUp>
              <div className="flex items-center gap-3">
                <span className="bg-[#e30071] text-white text-[13px] font-sans font-medium px-3 py-1 rounded-full">
                  2026
                </span>
                <span className="text-white/70 text-[14px] font-sans">
                  Africa's Premier Financial Event
                </span>
              </div>
            </SlideUp>

            <SlideUp delay={0.1}>
              <h1 className="font-sans font-semibold text-white text-[52px] md:text-[66px] leading-[1.05] tracking-[-3px]">
                Africa Financial
                <br />
                <span className="block">Week 2026</span>
              </h1>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="bg-[#e30071] text-white text-[15px] font-sans font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-[#c9005f] transition-colors cursor-pointer">
                  Get Tickets
                  <ArrowUpRight size={18} />
                </button>
                <button className="border border-white text-white text-[15px] font-sans font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-white/10 transition-colors cursor-pointer">
                  View Venue
                  <MapPin size={16} />
                </button>
              </div>
            </SlideUp>

          </div>

          <SlideUp delay={0.2}>
            <div className="max-w-[320px]">
              <p className="text-white/70 text-[15px] font-sans leading-[22px] tracking-[-0.2px]">
                Connecting Africa's financial future through innovation, 
                partnerships, and the continent's most dynamic fintech ecosystem.
              </p>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
