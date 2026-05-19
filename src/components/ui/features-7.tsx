"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

export function Features() {
  const slides = [
    {
      key: "flash-pages",
      imageSrc: "/imagem pages/flashpages.png",
      imageAlt: "Flash Pages",
      titlePrefix: "Flash Pages:",
      titleHighlight: "Valide qualquer oferta em minutos.",
      description:
        "Para anunciantes que precisam testar rápido. Modelos pré-configurados para conversão — presell, cookie, idade, gênero, país e captcha. Textos, cores e imagens editáveis sem uma linha de código. Publique enquanto a janela de oportunidade ainda está aberta.",
    },
    {
      key: "templates",
      imageSrc: "/imagem pages/templates.png",
      imageAlt: "Templates Prontos",
      titlePrefix: "Templates Prontos:",
      titleHighlight: "Design Profissional ao Seu Alcance",
      description: "Adaptáveis à identidade da sua marca em minutos.",
    },
    {
      key: "drag-and-drop",
      imageSrc: "/imagem pages/draganddrop.png",
      imageAlt: "Construtor Drag-and-Drop",
      titlePrefix: "Editor Drag-and-Drop.",
      titleHighlight: "Sem código.",
      description:
        "Monte sua página arrastando blocos prontos. Headings, imagens, vídeos, formulários e CTAs — tudo editável visualmente. Nenhuma linha de código. Nenhum desenvolvedor necessário. Publique e teste em minutos.",
    },
    {
      key: "presell-ia",
      imageSrc: "/imagem pages/iapages.png",
      imageAlt: "Presell Review com IA",
      titlePrefix: "Geração de Página por",
      titleHighlight: "IA",
      description:
        "Descreva o produto, a oferta e o público. A IA gera a estrutura, os textos e o layout — você ajusta, publica e rastreia. Menos tempo criando, mais tempo escalando.",
    },
    {
      key: "integracao-ads",
      imageSrc: "/imagem pages/itegracaopages.png",
      imageAlt: "Integração Ratoeira Ads",
      titlePrefix: "Tracking Integrado Desde o Primeiro",
      titleHighlight: "Clique",
      description:
        "Cada página criada no Ratoeira Pages já nasce com o script do Ratoeira Ads embutido. Sem instalação manual. Sem risco de erro. Seus dados de tracking e suas páginas falam a mesma língua — automaticamente.",
    },
    {
      key: "clonador",
      imageSrc: "/imagem pages/analyticspages.png",
      imageAlt: "Hospedagem Rápida Inclusa",
      titlePrefix: "Hospedagem Rápida",
      titleHighlight: "Inclusa",
      description:
        "Suas páginas ficam hospedadas na infraestrutura da Ratoeira com carregamento ultra-rápido. Sem servidor para contratar, sem CDN para configurar. Publique e comece a rastrear imediatamente.",
    },
  ] as const;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  function goPrev() {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }

  return (
    <section id="como-funciona" className="overflow-hidden bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Tudo que você precisa para construir páginas que <span className="text-brand-primary">convertem</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Construtor, hospedagem e tracking numa plataforma só — feita para anunciantes que não têm tempo a perder com configuração.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSlide.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="mx-auto w-full max-w-5xl">
                <BorderRotate
                  animationMode="stop-rotate-on-hover"
                  animationSpeed={3}
                  gradientColors={{ primary: "#FFB800", secondary: "#FF7E4A", accent: "#E6A600" }}
                  backgroundColor="#111111"
                  borderWidth={2}
                  borderRadius={24}
                  className="relative h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] 2xl:h-[720px] overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(255,184,0,0.12)_0%,rgba(0,0,0,0)_70%)]" />
                  <Image
                    src={activeSlide.imageSrc}
                    alt={activeSlide.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="relative z-10 object-cover object-top"
                    priority={activeSlide.key === "flash-pages"}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                </BorderRotate>
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
                    <Zap className="h-4 w-4 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                      {activeSlide.titlePrefix} <span className="text-brand-primary">{activeSlide.titleHighlight}</span>
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">{activeSlide.description}</p>
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
                  key={s.key}
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
