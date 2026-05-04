"use client";

import { ArrowUpRight } from "lucide-react";
import { SlideUp } from "@/components/ui/SlideUp";
import Image from "next/image";

const imgMaleSpeaker = "/assets/6ee33ac2a532455d8d7817893cb7ba714cf34d2c.png";

export function CTASection() {
  return (
    <section className="bg-[#000005] py-20 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left card */}
          <SlideUp>
            <div className="bg-[#121216] rounded-lg p-10 flex flex-col gap-6 justify-between border border-white/5 h-full">
              <div className="flex flex-col gap-4">
                <h2 className="font-sans font-semibold text-white text-[40px] md:text-[46px] leading-[1.15] tracking-[-3px]">
                  Learn, Build, and
                  <br />
                  Be Inspired.
                </h2>
                <p className="text-white/60 text-[15px] font-sans leading-[22px] tracking-[-0.2px] max-w-[400px]">
                  Join thousands of professionals who understand that Africa's financial future 
                  cannot be shaped from the sidelines. Secure your place at the continent's 
                  most impactful financial services event.
                </p>
              </div>
              <button className="bg-[#e30071] text-white text-[15px] font-sans font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#c9005f] transition-colors cursor-pointer self-start">
                Register Now
                <ArrowUpRight size={18} />
              </button>
            </div>
          </SlideUp>

          {/* Right card */}
          <SlideUp delay={0.15}>
            <div className="bg-[#121216] rounded-lg overflow-hidden relative border border-white/5 h-full min-h-[400px]">
              <Image
                src={imgMaleSpeaker}
                alt="Speaker at event"
                fill
                sizes="(max-width: 1024px) 100vw, 545px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
