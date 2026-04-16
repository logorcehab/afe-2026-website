import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TickerBar } from "@/components/sections/TickerBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { RegionsSection } from "@/components/sections/RegionsSection";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { WhoAttendsSection } from "@/components/sections/WhoAttendsSection";
import { AgendaSection } from "@/components/sections/AgendaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PhotoGallerySection } from "@/components/sections/PhotoGallerySection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#000005]">
      <Navbar />
      <main>
        <HeroSection />
        <TickerBar />
        <AboutSection />
        <RegionsSection />
        <SpeakersSection />
        <WhoAttendsSection />
        <AgendaSection />
        <TestimonialsSection />
        <PhotoGallerySection />
        <CTASection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}
