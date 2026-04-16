import svgPaths from "../../imports/svg-5qho7fhee1";
import { SlideUp } from "./SlideUp";
import imgWhoAttends from "figma:asset/fb933dc162db17f0059b5014d667b680bc3baba6.png";

const leftAttendees = [
  {
    title: "Brokers & Brokerage Firms",
    desc: "Partnering with African technology providers and liquidity specialists to scale operations.",
    iconMain: svgPaths.pb3af100,
    iconAccent: svgPaths.p3c776d00,
  },
  {
    title: "Payment Service Providers",
    desc: "Offering secure, compliant mobile money and cross-border settlement solutions.",
    iconMain: svgPaths.pb53e600,
    iconAccent: svgPaths.p215d1600,
  },
  {
    title: "Technology Providers",
    desc: "Presenting cutting-edge platforms, AI, blockchain, and analytics for African markets.",
    iconMain: svgPaths.p38792c80,
    iconAccent: svgPaths.p3d564880,
  },
];

const rightAttendees = [
  {
    title: "Investors & Capital Allocators",
    desc: "Seeking high-growth opportunities in African fintech and financial infrastructure.",
    iconMain: svgPaths.p29488200,
    iconAccent: svgPaths.pfe34380,
  },
  {
    title: "Regulators & Compliance",
    desc: "Providing guidance on licensing and regulatory frameworks across African jurisdictions.",
    iconMain: svgPaths.p13846500,
    iconAccent: svgPaths.p391b7f00,
  },
  {
    title: "Affiliates & IBs",
    desc: "Expanding reach through strategic broker partnerships and affiliate networks.",
    iconMain: svgPaths.p2ee62300,
    iconAccent: svgPaths.p11fc2a00,
  },
];

function AttendeeIcon({ main, accent }: { main: string; accent: string }) {
  return (
    <div className="w-[30px] h-[32px] relative">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="absolute inset-0">
        <path d={accent} fill="#e30071" opacity="0.2" />
        <path d={main} fill="#e30071" />
      </svg>
    </div>
  );
}

function AttendeeCard({
  attendee,
  delay,
}: {
  attendee: { title: string; desc: string; iconMain: string; iconAccent: string };
  delay: number;
}) {
  return (
    <SlideUp delay={delay}>
      <div className="flex flex-col gap-5 pb-5 relative">
        <AttendeeIcon main={attendee.iconMain} accent={attendee.iconAccent} />
        <div className="flex flex-col gap-1">
          <h4 className="font-['Inter',sans-serif] font-medium text-white text-[22px] tracking-[-0.5px] leading-[34px]">
            {attendee.title}
          </h4>
          <p className="font-['Inter',sans-serif] text-white/50 text-[15px] tracking-[-0.2px] leading-[22px]">
            {attendee.desc}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </div>
    </SlideUp>
  );
}

export function WhoAttendsSection() {
  return (
    <section id="who-attends" className="bg-[#0e0e1c] py-20 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-[10px] items-center text-center">
          <SlideUp>
            <span className="text-[#e30071] text-[15px] font-['Inter',sans-serif] tracking-[-0.2px] leading-[22px]">
              Who attends
            </span>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h2 className="font-['Inter',sans-serif] font-semibold text-white text-[40px] md:text-[58px] leading-[68px] tracking-[-3px]">
              Made for Future Financial Leaders.
            </h2>
          </SlideUp>
        </div>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-10">
            {leftAttendees.map((attendee, i) => (
              <AttendeeCard key={attendee.title} attendee={attendee} delay={i * 0.1} />
            ))}
          </div>

          {/* Center image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-[482px] rounded-lg overflow-hidden flex items-center justify-center p-6 bg-[#ffffff]">
              <img
                src={imgWhoAttends}
                alt="Africa Financial Week attendees networking"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-10">
            {rightAttendees.map((attendee, i) => (
              <AttendeeCard key={attendee.title} attendee={attendee} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}