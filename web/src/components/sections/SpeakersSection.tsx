"use client";

import svgPaths from "@/components/figma/svg-kkfr6lgz0f";
import { SlideUp } from "@/components/ui/SlideUp";
import Image from "next/image";

const imgSpeaker1 = "/assets/5db0424e5ac75a321e1db479d7f6f8754e9d9375.png";
const imgSpeaker2 = "/assets/853f8fd3e27f1c3bfd6ebe8faf7dd58096a3dacc.png";
const imgSpeaker3 = "/assets/0b8669bc62fdfdee0d9767030c9896fd0d440f86.png";
const imgSpeaker4 = "/assets/754af36fc492883a877d409d4baa1600a54a00d2.png";
const imgSpeaker5 = "/assets/406fd059d1c8e41882381ea7b7e4b4a0e9c80736.png";
const imgSpeaker6 = "/assets/75ffc67b009066d78f57d70105fa24d3fdcc72de.png";

const leftColumnSpeakers = [
  { img: imgSpeaker1 },
  { img: imgSpeaker2 },
  { img: imgSpeaker5 },
];

const rightColumnSpeakers = [
  { img: imgSpeaker4 },
  { img: imgSpeaker3 },
  { img: imgSpeaker6 },
];

function SpeakerCard({ speaker }: { speaker: { img: string } }) {
  return (
    <div className="w-full h-[340px] rounded-lg overflow-hidden relative shrink-0 flex items-end justify-center bg-[#ffffff]">
      <Image
        src={speaker.img}
        alt="Speaker"
        width={300}
        height={340}
        className="h-[95%] w-auto object-contain"
        style={{ imageRendering: "auto", filter: "contrast(1.05) saturate(1.1)" }}
      />
    </div>
  );
}

export function SpeakersSection() {
  return (
    <section id="speakers" className="bg-[#000005] py-12 lg:py-20 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[10px] items-center lg:items-stretch">
          {/* Left content */}
          <div className="lg:flex-1 flex flex-col justify-between shrink-0 lg:min-h-[480px]">
            <div className="flex flex-col gap-[10px]">
              <SlideUp>
                <span className="text-white text-[15px] font-sans tracking-[-0.2px] leading-[22px]">
                  Speakers
                </span>
              </SlideUp>
              <SlideUp delay={0.1}>
                <h2 className="font-sans font-semibold text-white text-[36px] md:text-[58px] leading-[1.1] md:leading-[68px] tracking-[-2px] md:tracking-[-3px]">
                  Meet the Voices
                  <br />
                  Shaping Africa's
                  <br />
                  Financial Future.
                </h2>
              </SlideUp>
            </div>

            {/* Info card */}
            <SlideUp delay={0.2}>
              <div className="bg-[#121216] rounded-lg p-5 flex flex-col gap-[19px] max-w-[310px]">
                <div className="w-[30px] h-[32px]">
                  <svg width="30" height="32" viewBox="0 0 26 26" fill="none">
                    <path d={svgPaths.p1ef7bb00} fill="white" />
                  </svg>
                </div>
                <p className="text-white text-[14px] font-sans tracking-[-0.2px] leading-[22px]">
                  Leaders, policymakers, and technologists
                  <br />
                  defining the future of African finance.
                </p>
                
              </div>
            </SlideUp>
          </div>

          {/* Right ticker columns */}
          <div className="flex-1 flex gap-[5px] h-[250px] lg:h-[900px] overflow-hidden relative">
            {/* Fade mask top & bottom */}
            <div className="absolute inset-x-0 top-0 h-[180px] lg:h-full z-10 pointer-events-none bg-gradient-to-b from-[#000005] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[180px] lg:h-full z-10 pointer-events-none bg-gradient-to-t from-[#000005] to-transparent" />

            {/* Left column - scrolls UP */}
            <div
              className="flex-1 overflow-hidden relative"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div className="flex flex-col gap-[10px] animate-[scrollUp_18s_linear_infinite]">
                {[...Array(3)].map((_, setIdx) =>
                  leftColumnSpeakers.map((speaker, i) => (
                    <SpeakerCard key={`left-${setIdx}-${i}`} speaker={speaker} />
                  ))
                )}
              </div>
            </div>

            {/* Right column - scrolls DOWN */}
            <div
              className="flex-1 overflow-hidden relative"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div className="flex flex-col gap-[10px] animate-[scrollDown_18s_linear_infinite]">
                {[...Array(3)].map((_, setIdx) =>
                  rightColumnSpeakers.map((speaker, i) => (
                    <SpeakerCard key={`right-${setIdx}-${i}`} speaker={speaker} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-33.333%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
