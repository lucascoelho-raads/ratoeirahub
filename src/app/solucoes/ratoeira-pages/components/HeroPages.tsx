"use client";

import { motion } from "framer-motion";
import { ArrowRight, LayoutTemplate, MousePointerClick } from "lucide-react";
import { BeamsBackground } from "@/components/ui/ethereal-beams-hero";
import Image from "next/image";

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
          <div className="max-w-6xl 3xl:max-w-[90rem] 4xl:max-w-[110rem] text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(2.75rem,4.2vw,6rem)] font-black text-white tracking-tight leading-[1.04] mb-8"
            >
              Páginas rápidas, integradas ao seu <span className="text-[#FF7E4A]">tracking</span>. Prontas em minutos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[clamp(1.05rem,1.25vw,1.35rem)] text-neutral-400 mb-12 max-w-3xl 3xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto"
            >
              Construtor visual com templates testados para conversão, Flash Pages ultra-rápidas e geração por IA. Cada página já nasce com o tracking do Ratoeira Ads integrado — sem scripts avulsos, sem configuração manual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/planos#fale-conosco"
                className="inline-flex items-center gap-2 px-8 py-4 2xl:px-10 2xl:py-5 rounded-button bg-[#FF7E4A] text-white font-bold hover:bg-[#e86b3b] transition-colors"
              >
                Começar grátis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-8 py-4 2xl:px-10 2xl:py-5 rounded-button bg-white/5 text-[#FF7E4A] font-semibold border border-white/10 hover:bg-white/10 transition-colors"
              >
                <MousePointerClick className="w-5 h-5" />
                Como Funciona
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-4 text-sm text-neutral-400"
            >
              Plano gratuito disponível. Sem cartão.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mx-auto mt-12 w-full max-w-6xl 3xl:max-w-[90rem] 4xl:max-w-[110rem]"
            >
              <div className="relative mx-auto h-[clamp(14rem,30vw,28rem)] w-full max-w-5xl 3xl:max-w-[80rem] 4xl:max-w-[100rem] rounded-2xl border border-white/10 bg-black/20 shadow-2xl shadow-black/60 overflow-hidden">
                <Image
                  src="/imagem pages/draganddrop.png"
                  alt="Editor visual em uso"
                  fill
                  priority
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </BeamsBackground>
    </section>
  );
}
