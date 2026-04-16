import { Users, Mic, Presentation, Globe } from "lucide-react";

const stats = [
  { icon: Users, label: "5,000+ Attendees" },
  { icon: Mic, label: "30+ Global Speakers" },
  { icon: Presentation, label: "50+ Sessions & Workshops" },
  { icon: Globe, label: "40+ Countries" },
];

export function TickerBar() {
  return (
    <div className="bg-[#e30071] overflow-hidden">
      <div className="relative flex items-center h-[60px]">
        <div className="flex animate-[ticker_20s_linear_infinite] whitespace-nowrap">
          {[...Array(3)].map((_, setIdx) =>
            stats.map((stat, i) => (
              <div
                key={`${setIdx}-${i}`}
                className="flex items-center gap-2.5 shrink-0 mx-8"
              >
                <stat.icon size={22} className="text-white" />
                <span className="text-white text-[20px] font-['Inter',sans-serif] font-medium tracking-[-0.5px] whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
