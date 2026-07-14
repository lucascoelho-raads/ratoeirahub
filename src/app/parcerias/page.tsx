"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";
import CommissionStructure from "./components/CommissionStructure";
import CTAPartnerships from "./components/CTAPartnerships";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from "react";

export default function ParceriasPage() {
  const { t } = useLanguage();

  const badge = useMemo(() => t("parcerias.hero.badge"), [t]);
  const title1 = useMemo(() => t("parcerias.hero.title1"), [t]);
  const title2 = useMemo(() => t("parcerias.hero.title2"), [t]);
  const subtitle = useMemo(() => t("parcerias.hero.subtitle"), [t]);

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <HeroGeometric
        badge={badge}
        title1={title1}
        title2={title2}
        subtitle={subtitle}
        className="min-h-[60svh] md:min-h-[50svh]"
      />
      <section className="py-4 md:py-8 bg-[#0a0a0a]">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <ExpandableCardDemo />
        </div>
      </section>
      <CommissionStructure />

      <CTAPartnerships />

      <Footer />
    </main>
  );
}
