import { Quote } from "lucide-react";
import { SlideUp } from "./SlideUp";

const testimonials = [
  {
    quote:
      "This event connected us directly with payment providers who understand Africa's mobile-first reality. We secured three strategic partnerships that would have taken us months to identify independently.",
    name: "Amina Diallo",
    title: "CEO, Emerging Market Brokerage",
  },
  {
    quote:
      "The regulatory roundtables provided clarity we couldn't find anywhere else. Understanding compliance across multiple African jurisdictions in one place saved us countless hours of research.",
    name: "James Okonkwo",
    title: "Head of Compliance, Regional Fintech Platform",
  },
  {
    quote:
      "We came to learn about the African market. We left with signed agreements and a clear roadmap for expansion. The quality of attendees and their decision-making authority made all the difference.",
    name: "Sarah Chen",
    title: "Business Development Director, Trading Technology Provider",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#0e0e1c] py-20 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2.5 text-center items-center">
          <SlideUp>
            <span className="text-[#e30071] text-[15px] font-['Inter',sans-serif] tracking-[-0.2px]">
              Testimonials
            </span>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h2 className="font-['Inter',sans-serif] font-semibold text-white text-[46px] md:text-[56px] leading-[1.15] tracking-[-3px]">
              The Experience,
              <br />
              Through Their Words.
            </h2>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SlideUp key={t.name} delay={i * 0.1}>
              <div
                className="bg-[#121216] rounded-lg p-6 flex flex-col gap-5 border border-white/5 transition-all duration-300 ease-out hover:border-[#e30071]/30 hover:bg-[#1a1a22] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(227,0,113,0.15)] group cursor-default h-full"
              >
                <Quote size={24} className="text-[#e30071] transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white/80 text-[15px] font-['Inter',sans-serif] leading-[22px] tracking-[-0.2px] flex-1 transition-colors duration-300 group-hover:text-white/90">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-white text-[15px] font-['Inter',sans-serif] font-medium">
                    {t.name}
                  </p>
                  <p className="text-white/50 text-[13px] font-['Inter',sans-serif] transition-colors duration-300 group-hover:text-[#e30071]/70">
                    {t.title}
                  </p>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}