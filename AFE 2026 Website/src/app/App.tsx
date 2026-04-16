import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TickerBar } from "./components/TickerBar";
import { AboutSection } from "./components/AboutSection";
import { RegionsSection } from "./components/RegionsSection";
import { SpeakersSection } from "./components/SpeakersSection";
import { WhoAttendsSection } from "./components/WhoAttendsSection";
import { AgendaSection } from "./components/AgendaSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { FAQSection } from "./components/FAQSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="w-full min-h-screen font-['Inter',sans-serif]">
      <Navbar />
      <HeroSection />
      <TickerBar />
      <AboutSection />
      <RegionsSection />
      <SpeakersSection />
      <WhoAttendsSection />
      <AgendaSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}