import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { SlideUp } from "./SlideUp";
import imgRegion1 from "figma:asset/c93465f8b947f83f01e13958fa9fd4ce73435396.png";
import imgRegion2 from "figma:asset/55d220000469b2d3c0fee3f8a3dde19765ea4990.png";
import imgRegion3 from "figma:asset/fc16b2e4b54e0198e044ac1b1b089977d3ca51e9.png";
import imgRegion4 from "figma:asset/3ec4feeff151e204122381b626f147d6eaa21fb5.png";

const regions = [
  {
    number: "01",
    heading: "Accra",
    description:
      "Ghana's thriving fintech capital — explore digital banking innovation, mobile money ecosystems, and West Africa's fastest-growing startup scene.",
    cta: "Explore Accra",
    accent: "#34D399",
    image: imgRegion1,
    imageFirst: true,
  },
  {
    number: "02",
    heading: "Lagos",
    description:
      "Africa's largest economy and fintech powerhouse. Discover groundbreaking payment platforms, neobanks, and the investment opportunities driving Nigeria's digital revolution.",
    cta: "Discover Lagos",
    accent: "#60A5FA",
    image: imgRegion2,
    imageFirst: false,
  },
  {
    number: "03",
    heading: "Nairobi",
    description:
      "The birthplace of mobile money and East Africa's innovation hub. Engage with pioneers in M-Pesa-driven ecosystems, agent banking, and cross-border payment solutions.",
    cta: "Explore Nairobi",
    accent: "#A78BFA",
    image: imgRegion3,
    imageFirst: true,
  },
  {
    number: "04",
    heading: "Dar es Salaam",
    description:
      "Tanzania's commercial gateway and a rising force in financial inclusion. Connect with leaders shaping microfinance, agricultural fintech, and mobile-first banking across the region.",
    cta: "Discover Dar es Salaam",
    accent: "#FBBF24",
    image: imgRegion4,
    imageFirst: false,
  },
];

function ParallaxImage({ src, alt, accent, number, scrollYProgress }: { src: string; alt: string; accent: string; number: string; scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
      />
      {/* Color tint overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(127deg, ${accent}15 0%, transparent 60%)`,
        }}
      />
      {/* Top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-transparent" />
      {/* Large number */}
      <p className="absolute top-3 right-6 font-['Space_Grotesk',sans-serif] font-bold text-[100px] lg:text-[120px] leading-none text-white/[0.06] select-none">
        {number}
      </p>
    </div>
  );
}

function RegionCard({
  region,
}: {
  region: (typeof regions)[0];
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageBlock = (
    <div ref={imageRef} className="relative overflow-hidden min-h-[450px] lg:min-h-[600px]">
      <ParallaxImage
        src={region.image}
        alt={region.heading}
        accent={region.accent}
        number={region.number}
        scrollYProgress={scrollYProgress}
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center px-8 lg:px-14 py-12 lg:py-16">
      <SlideUp delay={0.1}>
        <div className="w-full h-px mb-6" style={{ background: `linear-gradient(90deg, ${region.accent}40, transparent)` }} />
      </SlideUp>
      <SlideUp delay={0.15}>
        <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-white text-[32px] lg:text-[42px] leading-[1.1] tracking-[-1.4px] mb-5">
          {region.heading}
        </h3>
      </SlideUp>
      <SlideUp delay={0.2}>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/40 text-[14px] leading-[24px] max-w-[400px] mb-8 text-[#ffffffb8]">
          {region.description}
        </p>
      </SlideUp>
      <SlideUp delay={0.25}>
        <button
          className="inline-flex items-center gap-2 border border-white/10 text-white/80 text-[13px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold tracking-[0.39px] px-6 py-3 hover:border-white/30 hover:text-white transition-all cursor-pointer self-start"
        >
          {region.cta}
          <ArrowUpRight size={14} style={{ color: region.accent }} />
        </button>
      </SlideUp>
    </div>
  );

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2">
      {region.imageFirst ? (
        <>
          <div className="relative">{imageBlock}</div>
          <div>{textBlock}</div>
        </>
      ) : (
        <>
          <div className="lg:order-2">{imageBlock}</div>
          <div className="lg:order-1">{textBlock}</div>
        </>
      )}
    </div>
  );
}

export function RegionsSection() {
  return (
    <section className="bg-[#050510] relative">
      {/* Section header */}
      <div className="max-w-[1120px] mx-auto px-6 py-20">
        <div className="flex flex-col gap-2.5 text-center items-center">
          <SlideUp>
            <span className="text-[#e30071] text-[15px] font-['Inter',sans-serif] tracking-[-0.2px]">
              Regional Focus Areas
            </span>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h2 className="font-['Inter',sans-serif] font-semibold text-white text-[46px] md:text-[56px] leading-[1.15] tracking-[-3px]">
              Explore Africa's
              <br />
              Financial Hubs.
            </h2>
          </SlideUp>
        </div>
      </div>

      <div>
        {regions.map((region) => (
          <RegionCard key={region.number} region={region} />
        ))}
      </div>
    </section>
  );
}