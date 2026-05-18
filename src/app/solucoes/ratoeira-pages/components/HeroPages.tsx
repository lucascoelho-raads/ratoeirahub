"use client";

import { motion } from "framer-motion";
import { ArrowRight, LayoutTemplate, MousePointerClick } from "lucide-react";
import { BeamsBackground } from "@/components/ui/ethereal-beams-hero";

export default function HeroPages() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <BeamsBackground
        className="min-h-screen"
        beamsProps={{
          beamWidth: 3,
          beamHeight: 20,
          beamNumber: 15,
          lightColor: "#FF7E4A", // brand-secondary (orange)
          speed: 1.5,
          noiseIntensity: 2,
          scale: 0.15,
          rotation: -45, // Changed rotation to make it distinct from Ads
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-[clamp(4.5rem,10vh,8.5rem)] relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <LayoutTemplate className="w-4 h-4 text-[#FF7E4A]" />
              <span className="text-sm text-neutral-300 uppercase tracking-wider font-semibold">Ratoeira Pages</span>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="max-w-6xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(2.75rem,4.2vw,6rem)] font-black text-white tracking-tight leading-[1.04] mb-8"
            >
              Templates e <span className="text-[#FF7E4A]">construtor visual</span> integrados ao <span className="text-white">tracking</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[clamp(1.05rem,1.25vw,1.35rem)] text-neutral-400 mb-12 max-w-3xl mx-auto"
            >
              Crie páginas de alta conversão em minutos usando nossos templates validados e editor arrastar-e-soltar, com integração nativa ao Ratoeira Ads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/planos"
                className="inline-flex items-center gap-2 px-8 py-4 2xl:px-10 2xl:py-5 rounded-full bg-[#FF7E4A] text-white font-bold hover:bg-[#e86b3b] transition-colors"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-8 py-4 2xl:px-10 2xl:py-5 rounded-full bg-white/5 text-[#FF7E4A] font-semibold border border-white/10 hover:bg-white/10 transition-colors"
              >
                <MousePointerClick className="w-5 h-5" />
                Como Funciona
              </a>
            </motion.div>
          </div>
        </div>
      </BeamsBackground>
    </section>
  );
}
