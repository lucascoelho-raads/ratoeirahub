"use client";

import Image from "next/image";
import { Zap } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

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

  return (
    <section id="como-funciona" className="overflow-hidden bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] space-y-10 px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20">
        <div className="relative z-10 mx-auto max-w-2xl 3xl:max-w-[50rem] 4xl:max-w-[70rem] text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Tudo que você precisa para construir páginas que <span className="text-[#FF7E4A]">convertem</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Construtor, hospedagem e tracking numa plataforma só — feita para anunciantes que não têm tempo a perder com configuração.
          </p>
        </div>

        <div className="space-y-24">
          {slides.map((slide, index) => {
            const isReversed = index % 2 === 1;
            const isLight = index % 2 === 0;

            return (
              <div
                key={slide.key}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24 rounded-3xl border p-8 md:p-12 ${isLight ? "bg-white border-black/10" : "bg-[#111111] border-white/10"}`}
              >
                <div className="flex-1 space-y-6 w-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF7E4A]/20 to-[#FF7E4A]/8 flex items-center justify-center border ${isLight ? "border-black/10" : "border-white/10"}`}>
                    <Zap className="w-8 h-8 text-[#FF7E4A]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black leading-tight">
                    <GradientText variant="orange" className="font-black">
                      {slide.titlePrefix} {slide.titleHighlight}
                    </GradientText>
                  </h3>
                  <p className={`text-xl leading-relaxed ${isLight ? "text-[#4b5563]" : "text-gray-400"}`}>{slide.description}</p>
                </div>

                <div className="flex-1 w-full">
                  <div className={`relative aspect-video rounded-2xl border overflow-hidden ${isLight ? "border-black/10 bg-[#f3f4f6]" : "border-white/10 bg-[#111111]"}`}>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(255,126,74,0.14)_0%,rgba(0,0,0,0)_70%)]" />
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 900px, 100vw"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
