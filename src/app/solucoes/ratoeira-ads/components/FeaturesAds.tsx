"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, ChevronLeft, ChevronRight, Ghost, LineChart, Server, Target, Zap } from "lucide-react";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import Image from "next/image";
import { useState } from "react";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

const features = [
  {
    icon: Server,
    title: "Tracking Server-Side",
    description: "Seus dados não dependem mais de cookies no navegador. Enviamos as conversões direto para as APIs do Facebook e Google.",
  },
  {
    icon: Bot,
    title: "Bloqueio Anti-Fraude",
    description: "Identificamos e bloqueamos IPs maliciosos, bots e cliques concorrentes que drenam o seu orçamento diário.",
  },
  {
    icon: Ghost,
    title: "Recuperação de Vendas Invisíveis",
    description: "Rastreamos as vendas que o pixel normal perde por causa de AdBlockers e atualizações do iOS 14+.",
  },
  {
    icon: Target,
    title: "GCLID e UTMs 100% Salvos",
    description: "Nunca mais perca o rastreio da origem da venda. Mapeamos toda a jornada do clique até o checkout.",
  },
  {
    icon: Zap,
    title: "Velocidade Extrema",
    description: "O script de rastreamento mais leve do mercado, que não atrasa o carregamento da sua página.",
  },
  {
    icon: LineChart,
    title: "Dashboard em Tempo Real",
    description: "Tome decisões com base em dados reais e atualizados segundo a segundo no seu painel.",
  },
];

export default function FeaturesAds() {
  const slides = features.map((feature) => {
    const isAntiFraude = feature.title === "Bloqueio Anti-Fraude";
    const isEconomizometro = feature.title === "Recuperação de Vendas Invisíveis";
    const isDashboard = feature.title === "Dashboard em Tempo Real";

    const imageSrc =
      feature.title === "Tracking Server-Side"
        ? "/serveraside.png"
        : feature.title === "Bloqueio Anti-Fraude"
          ? "/ip_bloqueado.png"
          : feature.title === "Recuperação de Vendas Invisíveis"
            ? "/economizometro.png"
            : feature.title === "Dashboard em Tempo Real"
              ? "/dash.png"
              : null;

    const imageClassName =
      isAntiFraude || isEconomizometro || isDashboard ? "object-cover object-top" : "object-contain object-center";

    return { ...feature, imageSrc, imageClassName } as const;
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  function goPrev() {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }

  return (
    <section id="como-funciona" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            O fim do <span className="text-brand-primary">achismo</span> no tráfego.
          </h2>
          <p className="text-gray-400 text-lg">
            Nossa tecnologia atua em 6 frentes para garantir que você saiba exatamente qual anúncio gerou cada centavo de lucro.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSlide.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12">
                <div className="[perspective:800px]">
                  <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
                    <BorderRotate
                      animationSpeed={7}
                      gradientColors={{ primary: "#FFB800", secondary: "#FF7E4A", accent: "#E6A600" }}
                      backgroundColor="#111111"
                      borderWidth={2}
                      borderRadius={24}
                      className="relative h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] 2xl:h-[720px] overflow-hidden"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-brand-primary/10 blur-[80px]" />

                      {activeSlide.imageSrc ? (
                        <Image
                          src={activeSlide.imageSrc}
                          alt={activeSlide.title}
                          fill
                          sizes="(min-width: 1024px) 900px, 100vw"
                          className={`relative z-10 ${activeSlide.imageClassName}`}
                          priority={activeSlide.title === "Tracking Server-Side"}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white/35">
                            <activeSlide.icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="font-bold uppercase tracking-wider text-sm">Espaço para Imagem/Mockup</p>
                          </div>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                    </BorderRotate>
                  </div>
                </div>
              </div>

              <BorderRotate
                animationMode="stop-rotate-on-hover"
                animationSpeed={3}
                gradientColors={{ primary: "#FFB800", secondary: "#FF7E4A", accent: "#E6A600" }}
                backgroundColor="#0B0B0B"
                borderWidth={2}
                borderRadius={24}
                className="mx-auto max-w-4xl p-6 sm:p-8"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/10">
                    <activeSlide.icon className="h-4 w-4 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                      <BlurTextEffect key={activeSlide.title}>{activeSlide.title}</BlurTextEffect>
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
                      <BlurTextEffect key={`${activeSlide.title}-desc`}>{activeSlide.description}</BlurTextEffect>
                    </p>
                  </div>
                </div>
              </BorderRotate>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:bg-white/[0.06]"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeIndex ? "w-8 bg-brand-primary" : "w-2.5 bg-white/20 hover:bg-white/35"
                  }`}
                  aria-label={`Ir para ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:bg-white/[0.06]"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
