import { Rocket, PackageOpen, Users, Handshake, MapPin, Presentation } from "lucide-react";
import { SlideUp } from "./SlideUp";

const experiences = [
  {
    icon: Rocket,
    title: "Innovation Showcases",
    desc: "Live demonstrations of trading platforms, payment solutions, blockchain applications, and RegTech tools specifically adapted for African markets.",
    tag: "Live Demo",
    tagColor: "bg-[#e30071]",
  },
  {
    icon: PackageOpen,
    title: "Product Launches",
    desc: "Be first to witness groundbreaking solutions designed to address Africa's unique financial infrastructure challenges.",
    tag: "Exclusive",
    tagColor: "bg-[#7c3aed]",
  },
  {
    icon: Users,
    title: "Strategic Networking Zones",
    desc: "Purpose-built spaces designed to facilitate meaningful conversations and partnership discussions.",
    tag: "Networking",
    tagColor: "bg-[#2563eb]",
  },
  {
    icon: Handshake,
    title: "Matchmaking Opportunities",
    desc: "Utilize our official Africa Financial Week networking app to schedule meetings with specific exhibitors and attendees.",
    tag: "Connect",
    tagColor: "bg-[#059669]",
  },
  {
    icon: MapPin,
    title: "Regional Focus Areas",
    desc: "Dedicated zones highlighting innovations from West Africa, East Africa, Southern Africa, and North Africa.",
    tag: "Regional",
    tagColor: "bg-[#d97706]",
  },
  {
    icon: Presentation,
    title: "Exhibition Sessions & Networking",
    desc: "Meet industry leaders in both structured exhibition sessions and informal networking environments designed to maximize visibility, engagement, and professional interactions.",
    tag: "Sessions",
    tagColor: "bg-[#0891b2]",
  },
];

export function AgendaSection() {
  return (
    <section className="bg-[#050510] py-20 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <SlideUp>
              <span className="text-[#e30071] text-[15px] font-['Inter',sans-serif] tracking-[-0.2px]">
                The Exhibition Floor
              </span>
            </SlideUp>
            <SlideUp delay={0.1}>
              <h2 className="font-['Inter',sans-serif] font-semibold text-white text-[46px] md:text-[56px] leading-[1.15] tracking-[-3px]">
                What You'll
                <br />
                Experience.
              </h2>
            </SlideUp>
          </div>
          <SlideUp delay={0.15}>
            <p className="text-white/50 text-[15px] font-['Inter',sans-serif] leading-[22px] tracking-[-0.2px] max-w-[400px]">
              The Exhibition Floor is the vibrant heart of Africa Financial Week, meticulously
              designed to showcase the latest innovations, technologies, and solutions transforming
              Africa's financial and fintech landscape.
            </p>
          </SlideUp>
        </div>

        <div className="flex flex-col gap-4 overflow-hidden">
          {/* Top row - scrolls left */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-[scrollLeft_30s_linear_infinite] w-max">
              {[...Array(3)].map((_, setIdx) =>
                experiences.slice(0, 3).map((item, i) => (
                  <div
                    key={`top-${setIdx}-${i}`}
                    className="bg-[#121216] rounded-lg p-6 flex flex-col gap-4 group hover:bg-[#1a1a22] transition-colors w-[360px] shrink-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-lg bg-[#e30071]/10 flex items-center justify-center">
                        <item.icon size={22} className="text-[#e30071]" />
                      </div>
                      <span
                        className={`${item.tagColor} text-white text-[12px] font-['Inter',sans-serif] font-medium px-3 py-1 rounded-full`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h4 className="text-white text-[19px] font-['Inter',sans-serif] font-medium leading-[26px]">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-[15px] font-['Inter',sans-serif] leading-[22px] tracking-[-0.2px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Bottom row - scrolls right */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-[scrollRight_30s_linear_infinite] w-max">
              {[...Array(3)].map((_, setIdx) =>
                experiences.slice(3, 6).map((item, i) => (
                  <div
                    key={`bottom-${setIdx}-${i}`}
                    className="bg-[#121216] rounded-lg p-6 flex flex-col gap-4 group hover:bg-[#1a1a22] transition-colors w-[360px] shrink-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-lg bg-[#e30071]/10 flex items-center justify-center">
                        <item.icon size={22} className="text-[#e30071]" />
                      </div>
                      <span
                        className={`${item.tagColor} text-white text-[12px] font-['Inter',sans-serif] font-medium px-3 py-1 rounded-full`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h4 className="text-white text-[19px] font-['Inter',sans-serif] font-medium leading-[26px]">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-[15px] font-['Inter',sans-serif] leading-[22px] tracking-[-0.2px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </div>
    </section>
  );
}