"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "section";
}

export function SlideUp({ children, className = "", delay = 0, as = "div" }: SlideUpProps) {
  const MotionTag = motion[as] as any;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
