"use client";

import { Zap, Globe, Handshake, Smartphone, TrendingUp } from "lucide-react";
import { SlideUp } from "@/components/ui/SlideUp";
import Image from "next/image";

const imgAbout = "/assets/8e669bebda42d383b1b57e0a36e6ed077f44a36d.png";

const features = [
  { icon: TrendingUp, text: "Access Africa's fastest-growing markets." },
  { icon: Globe, text: "Real-world innovation showcases." },
  { icon: Zap, text: "Interactive fintech and tech labs." },
  { icon: Handshake, text: "Networking with industry pioneers." },
  { icon: Smartphone, text: "Mobile-first innovation insights." },
];

export function AboutSection() {
  return (
    <section id="agenda" className="bg-[#0e0e1c] py-20 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2.5">
          <SlideUp>
            <span className="text-[#e30071] text-[15px] font-sans tracking-[-0.2px]">
              Welcome to Africa Financial Week
            </span>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h2 className="font-sans font-semibold text-white text-[46px] md:text-[58px] leading-[1.18] tracking-[-3px]">
              An Event for Thinkers,
              <br />
              Dreamers, and Doers.
            </h2>
          </SlideUp>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[545px] shrink-0 rounded-lg overflow-hidden relative min-h-[300px]">
            <Image 
              src={imgAbout} 
              alt="Africa Financial Week" 
              fill
              sizes="(max-width: 1024px) 100vw, 545px"
              className="object-cover rounded-lg" 
            />
          </div>

          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <SlideUp>
                <h3 className="font-sans font-medium text-white text-[22px] tracking-[-0.5px]">
                  Why Attend Africa Financial Week
                </h3>
              </SlideUp>
              <SlideUp delay={0.1}>
                <p className="text-white/50 text-[15px] font-sans leading-[22px] tracking-[-0.2px]">
                  Africa Financial Week brings together global leaders, innovators, and decision-makers
                  shaping the future of African financial services. It's more than an expo - it's where
                  ideas turn into partnerships, connections spark collaborations, and the next era of
                  continental finance begins.
                </p>
              </SlideUp>
            </div>

            <div className="flex flex-col gap-2.5">
              <SlideUp>
                <h3 className="font-sans font-medium text-white text-[22px] tracking-[-0.5px]">
                  What You'll Experience
                </h3>
              </SlideUp>
              <div className="flex flex-col gap-2.5">
                {features.map((feat, i) => (
                  <SlideUp key={feat.text} delay={0.05 * (i + 1)}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                        <feat.icon size={18} className="text-[#e30071]" />
                      </div>
                      <span className="text-white/50 text-[15px] font-sans tracking-[-0.2px]">
                        {feat.text}
                      </span>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
