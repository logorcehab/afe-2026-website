"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SlideUp } from "@/components/ui/SlideUp";

const faqs = [
  {
    q: "When and where is Africa Financial Week?",
    a: "Africa Financial Week 2026 will be hosted at a world-class venue in a major African financial hub, providing modern facilities, excellent connectivity, and convenient access for international and regional attendees. The event runs for three intensive days.",
  },
  {
    q: "Who should attend Africa Financial Week?",
    a: "The event brings together retail and professional traders, brokers, affiliates, liquidity providers, payment service providers, technology and infrastructure providers, regulators, compliance specialists, and investors from across Africa and beyond.",
  },
  {
    q: "What will I experience at the event?",
    a: "You'll experience innovation showcases, product launches, strategic networking zones, matchmaking opportunities, regional focus areas, expert-led panel discussions, regulatory roundtables, technology demonstrations, and VIP networking receptions.",
  },
  {
    q: "How can I exhibit at Africa Financial Week?",
    a: "Exhibiting represents a strategic investment in Africa's financial future. Contact our team to discuss booth packages, sponsorship tiers, and brand visibility opportunities. Exhibitors gain lead generation, market intelligence, and partnership development benefits.",
  },
  {
    q: "What networking opportunities are available?",
    a: "We offer structured matchmaking via our official app, dedicated networking zones, VIP reception events, regional networking sessions organized by geography, and speaker meet & greets following each session.",
  },
  {
    q: "Are there different ticket tiers available?",
    a: "Yes, we offer multiple ticket tiers from standard exhibition floor access to VIP all-access passes that include priority seating, exclusive networking events, speaker meet & greets, and premium hospitality services.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#0e0e1c] py-20 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2.5 text-center items-center">
          <SlideUp>
            <span className="text-[#e30071] text-[15px] font-sans tracking-[-0.2px]">
              FAQ
            </span>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h2 className="font-sans font-semibold text-white text-[46px] md:text-[56px] leading-[1.15] tracking-[-3px]">
              Your Questions,
              <br />
              Answered.
            </h2>
          </SlideUp>
        </div>

        <div className="flex flex-col gap-3 max-w-[800px] mx-auto w-full">
          {faqs.map((faq, i) => (
            <SlideUp key={i} delay={i * 0.05}>
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 cursor-pointer"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span className="text-white text-[15px] font-sans font-medium text-left">
                    {faq.q}
                  </span>
                  <span className="shrink-0 ml-4">
                    <motion.div
                      className="bg-[#e30071] rounded-full w-[26px] h-[26px] flex items-center justify-center"
                      animate={{ rotate: openIdx === i ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      {openIdx === i ? (
                        <Minus size={14} className="text-white" />
                      ) : (
                        <Plus size={14} className="text-white" />
                      )}
                    </motion.div>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      key={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-white/50 text-[15px] font-sans leading-[22px] tracking-[-0.2px]">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
