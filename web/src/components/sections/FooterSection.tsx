"use client";

import { ArrowUpRight } from "lucide-react";
import { SlideUp } from "@/components/ui/SlideUp";
import Image from "next/image";

const imgLogo = "/assets/63783a47e53e8172b0de8f0cd3374a6d84f397af.png";

export function FooterSection() {
  return (
    <footer id="contact" className="bg-[#000005] pt-20 pb-10 px-6">
      <div className="max-w-[1120px] mx-auto">
        {/* CTA strip */}
        <SlideUp>
          <div className="bg-[#e30071] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="flex flex-col gap-2">
              <h2 className="font-sans font-semibold text-white text-[36px] md:text-[46px] leading-[1.15] tracking-[-3px]">
                Shaping Africa's
                <br />
                Financial Tomorrow.
              </h2>
              <p className="text-white/80 text-[15px] font-sans max-w-[400px]">
                Connect, learn, grow, and transform at Africa's premier financial services event.
              </p>
            </div>
            <button className="bg-white text-[#000005] text-[15px] font-sans font-medium px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-white/90 transition-colors cursor-pointer shrink-0">
              Register Today
              <ArrowUpRight size={18} />
            </button>
          </div>
        </SlideUp>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div className="col-span-2 md:col-span-1">
            <Image src={imgLogo} alt="Africa Financial Week" width={160} height={36} className="h-[36px] w-auto mb-4 object-contain" />
            <p className="text-white/50 text-[14px] font-sans leading-[20px]">
              The continent's premier B2B financial services exposition.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[14px] font-sans font-medium mb-4">
              Event
            </h4>
            <div className="flex flex-col gap-2">
              {["Speakers", "Agenda", "Who Attends", "Venue", "Sponsors"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-white/50 text-[14px] font-sans hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white text-[14px] font-sans font-medium mb-4">
              Attend
            </h4>
            <div className="flex flex-col gap-2">
              {["Register", "Tickets", "Travel Info", "Accommodation", "FAQ"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/50 text-[14px] font-sans hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white text-[14px] font-sans font-medium mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {["Contact Us", "Exhibit", "Sponsor", "Press", "Newsletter"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/50 text-[14px] font-sans hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[13px] font-sans">
            2026 Africa Financial Week. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/30 text-[13px] font-sans hover:text-white/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
