import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioSection from "@/components/StudioSection";
import SelectedWork from "@/components/SelectedWork";
import DesignLanguage from "@/components/DesignLanguage";
import VectorDesignMoment from "@/components/VectorDesignMoment";
import CraftSection from "@/components/CraftSection";
import ApproachSection from "@/components/ApproachSection";
import FullScreenMoment from "@/components/FullScreenMoment";
import BrandPhilosophy from "@/components/BrandPhilosophy";
import StudioLocation from "@/components/StudioLocation";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <main className="w-full bg-[#09090b] text-[#f4f4f5] min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Vector Engine */}
      <Hero />

      {/* Section 01 — Studio Introduction */}
      <StudioSection />

      {/* Section 02 — Selected Work Gallery */}
      <SelectedWork />

      {/* Section 03 — Design Language */}
      <DesignLanguage />

      {/* Section 04 — Vector-Driven Design Moment (Plan -> Form -> Space) */}
      <VectorDesignMoment />

      {/* Section 05 — Craft & Materiality */}
      <CraftSection />

      {/* Section 06 — Approach & Methodology */}
      <ApproachSection />

      {/* Section 07 — Full Screen Panoramic Moment */}
      <FullScreenMoment />

      {/* Section 08 — Brand Philosophy Statement */}
      <BrandPhilosophy />

      {/* Section 09 — Studio Location & Identity */}
      <StudioLocation />

      {/* Final Section — Closing Moment + CTAs */}
      <ClosingSection />
    </main>
  );
}
