import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { Stats } from "@/components/sections/Stats";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { MiniApps } from "@/components/sections/MiniApps";
import { OfflineUSSD } from "@/components/sections/OfflineUSSD";
import { BudgetingSection } from "@/components/sections/BudgetingSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. Global High-Tech Glass Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero with Interactive Phone Mockup & Transfer Simulator */}
        <Hero />

        {/* 3. Partner & Regulatory Ecosystem Marquee Ticker */}
        <PartnerMarquee />

        {/* 4. Platform Performance & Growth Stats */}
        <Stats />

        {/* 5. Core SuperApp Capabilities & Category Filter */}
        <FeaturesGrid />

        {/* 6. 50+ In-App Mini Apps Ecosystem Interactive Preview */}
        <MiniApps />

        {/* 7. Offline & *996# USSD Zero-Downtime Resilience */}
        <OfflineUSSD />

        {/* 8. AI Spending Analytics & Target Saving Pots */}
        <BudgetingSection />

        {/* 9. Bank-Grade Security & Interactive Card Freeze */}
        <SecuritySection />

        {/* 10. Community & Customer Stories */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions Guide */}
        <FaqSection />

        {/* 12. App Store, Google Play & QR Download CTA */}
        <CtaSection />
      </main>

      {/* 13. High-End Fintech Footer */}
      <Footer />
    </div>
  );
}
