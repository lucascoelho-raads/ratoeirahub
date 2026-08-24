"use client";

import dynamic from "next/dynamic";

const EtherealBeamsHero = dynamic(() => import("@/components/ui/ethereal-beams-hero"), { ssr: false });

export default function HeroAds() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <EtherealBeamsHero />
    </section>
  );
}
