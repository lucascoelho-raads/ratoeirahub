"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

export function Features() {
  const slides = [
    {
      key: "flash-pages",
      imageSrc: "/imagem pages/flashpages.png",
      imageAlt: "Flash Pages",
      titlePrefix: "Flash Pages:",
      titleHighlight: "Criação e Validação em Tempo Recorde",
      description:
        "Ideal para afiliados construindo presell. Modelos pré-configurados para conversão que vão ao ar em minutos. Textos, cores e imagens editáveis sem uma linha de código — para validar qualquer oferta enquanto a janela de oportunidade ainda está aberta. Crie páginas de Cookie, Idade, Gênero, País e Captcha.",
    },
    {
      key: "templates",
      imageSrc: "/imagem pages/templates.png",
      imageAlt: "Templates Prontos",
      titlePrefix: "Templates Prontos:",
      titleHighlight: "Design Profissional ao Seu Alcance",
      description: "Adaptáveis à identidade da sua marca em minutos.",
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
            <span className="text-[#FF7E4A]">Liberdade</span> para criar
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Uma plataforma completa para construir, hospedar e otimizar as páginas da sua operação de tráfego pago.
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
              <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12">
                <div className="[perspective:800px]">
                  <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
                    <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#111111] sm:h-[380px] md:h-[460px] lg:h-[520px]">
                      <div className="pointer-events-none absolute inset-0 bg-[#FF7E4A]/10 blur-[80px]" />
                      <Image
                        src={activeSlide.imageSrc}
                        alt={activeSlide.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 900px, 100vw"
                        className="relative z-10 object-cover object-top"
                        priority={activeSlide.key === "flash-pages"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF7E4A]/10">
                    <Zap className="h-4 w-4 text-[#FF7E4A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                      {activeSlide.titlePrefix}{" "}
                      <span className="text-[#FF7E4A]">{activeSlide.titleHighlight}</span>
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">{activeSlide.description}</p>
                  </div>
                </div>
              </div>
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
                    i === activeIndex ? "w-8 bg-[#FF7E4A]" : "w-2.5 bg-white/20 hover:bg-white/35"
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
