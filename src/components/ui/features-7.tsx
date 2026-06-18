"use client";

import Image from "next/image";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { cn } from "@/lib/utils";

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
    {
      key: "clonador-url",
      imageSrc: "/imagem pages/clonepages.png",
      imageAlt: "Clonador de Páginas",
      titlePrefix: "Clonador de Páginas:",
      titleHighlight: "Replice Qualquer Página em Segundos.",
      description:
        "Cole a URL da página que deseja replicar e o sistema clona a estrutura, os estilos e os elementos automaticamente. Edite textos, imagens e cores no editor visual — sem precisar construir do zero.",
    },
    {
      key: "teste-ab",
      imageSrc: "/testab.png",
      imageAlt: "Testes A/B",
      titlePrefix: "Testes A/B",
      titleHighlight: "Nativos na Plataforma.",
      description:
        "Crie variações da mesma página e distribua o tráfego entre elas diretamente no Ratoeira Pages. Acompanhe impressões, conversões, taxa de conversão e receita em tempo real — sem ferramentas externas.",
    },
    {
      key: "sites-cod",
      imageSrc: "/sitecod.png",
      imageAlt: "Sites COD",
      titlePrefix: "Sites COD",
      titleHighlight: "Prontos para Escalar.",
      description:
        "Estrutura completa para operações Cash on Delivery com upload de arquivos, validação de pedidos e integração nativa com o tracking. Suba seu site COD em minutos com toda a infraestrutura pronta.",
    },
    {
      key: "templates-nicho",
      imageSrc: "/templatesprontos.png",
      imageAlt: "Templates por Nicho",
      titlePrefix: "Biblioteca de Templates por",
      titleHighlight: "Nicho.",
      description:
        "Mais de 100 templates organizados por categoria: Capture, Forms, Nutra, Presell, Review, Sell, Social Network e Thanks. Cada um testado para conversão e pronto para ser personalizado à sua oferta.",
    },
  ] as const;

  return (
    <section id="como-funciona" className="overflow-hidden bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] space-y-10 px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
        <div className="relative z-10 mx-auto max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[60rem] 3xl:max-w-[75rem] 4xl:max-w-[72rem] 5xl:max-w-[80rem] 6xl:max-w-[90rem] text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl 3xl:text-7xl">
            Tudo que você precisa<br className="md:hidden" /> para<br className="hidden md:block" />construir páginas que <span className="text-[#FF7E4A]">convertem</span>.
          </h2>
          <p className="mt-6 text-lg 3xl:text-3xl leading-relaxed text-gray-400 ">
            Construtor, hospedagem e tracking numa plataforma só — feita para<br />anunciantes que não têm tempo a perder com configuração.
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
                <div className="flex-1 space-y-6 w-full text-center md:text-left">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF7E4A]/20 to-[#FF7E4A]/8 flex items-center justify-center border ${isLight ? "border-black/10" : "border-white/10"}`}>
                    <Zap className="w-8 h-8 text-[#FF7E4A]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl 3xl:text-6xl font-black leading-tight">
                    <GradientText variant="orange" className="font-black">
                      {slide.key === "flash-pages" ? (
                        <>Flash Pages:<br />Valide qualquer<br className="md:hidden" /> oferta em minutos.</>
                      ) : slide.key === "drag-and-drop" ? (
                        <>Editor Drag-and-Drop. Sem código.</>
                      ) : slide.key === "presell-ia" ? (
                        <>Geração de Página por IA</>
                      ) : slide.key === "integracao-ads" ? (
                        <>Tracking Integrado<br className="md:hidden" /> Desde o Primeiro Clique</>
                      ) : slide.key === "templates-nicho" ? (
                        <>Biblioteca de<br className="md:hidden" /> Templates por Nicho.</>
                      ) : (
                        <>{slide.titlePrefix}<br />{slide.titleHighlight}</>
                      )}
                    </GradientText>
                  </h3>
                  <p className={`text-xl 3xl:text-3xl leading-relaxed ${isLight ? "text-[#4b5563]" : "text-gray-400"}`}>
                    <BlurTextEffect key={`${slide.key}-desc`}>{slide.description}</BlurTextEffect>
                  </p>
                </div>

                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.35, zIndex: 20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={cn("relative aspect-[4/3] rounded-2xl border border-white/10 bg-[#111111] overflow-hidden group cursor-zoom-in shadow-xl")}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(255,126,74,0.14)_0%,rgba(0,0,0,0)_70%)] z-10" />
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 900px, 100vw"
                      className="transition-transform duration-500 object-contain"
                      priority={index === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent z-10" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
