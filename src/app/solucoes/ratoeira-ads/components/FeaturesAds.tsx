"use client";

import { motion } from "framer-motion";
import { Bot, LineChart, Server, Settings2, SlidersHorizontal, BarChart3, Target, Zap } from "lucide-react";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { GradientText } from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
  {
    icon: Server,
    title: "Tracking Server-Side",
    description:
      "Seus dados não dependem mais de cookies ou do pixel no navegador. A Ratoeira envia as conversões direto para a API de Conversões do Google — server-side, com envio enriquecido. O que o pixel padrão perde entre 25% e 40% das vezes, a Ratoeira registra. Mais conversões reais chegando ao Google Ads significa algoritmo otimizando para quem realmente compra.",
  },
  {
    icon: Bot,
    title: "Bloqueio Automático de IP",
    description:
      "Exclusivo para Google Ads. Você define o limite de cliques aceitos por IP — a Ratoeira bloqueia automaticamente quem ultrapassa. Concorrentes que clicam nos seus anúncios, tráfego inválido e bots são eliminados antes de consumir seu orçamento. Na maioria dos casos, o que você economiza já paga o plano inteiro.",
  },
  {
    icon: Settings2,
    title: "Conversões Otimizadas com Dado Enriquecido",
    description:
      "A Ratoeira não envia só o evento — envia o sinal enriquecido. Com dados primários tratados e protegidos (como e-mail e telefone) enviados pela API de Conversões, o Google casa mais vendas ao clique que as gerou. O Smart Bidding passa a aprender com dado real, encontra mais pessoas parecidas com seus melhores compradores e o custo por aquisição cai enquanto o ROAS sobe.",
  },
  {
    icon: Target,
    title: "Recuperação de Conversões Invisíveis",
    description:
      "Anunciantes que migram para o trackeamento server-side da Ratoeira recuperam em média 25% a 40% de conversões que estavam invisíveis. Cada venda recuperada é lucro que você já tinha gerado — e não sabia. Com mais conversões chegando ao Google Ads, o algoritmo otimiza mais rápido e sua campanha escala com mais segurança.",
  },
  {
    icon: Zap,
    title: "Dados em Tempo Real",
    description:
      "O Google Ads demora para consolidar conversões — e nesse intervalo o algoritmo pode continuar otimizando para o público errado. A Ratoeira mostra seus dados integrados — visitas, leads e vendas — mais rápido do que o próprio painel do Google. Você vê o que está funcionando e age antes que o orçamento vá para o lugar errado.",
  },
  {
    icon: LineChart,
    title: "Funil Completo Visível",
    description:
      "Enquanto outras ferramentas mostram apenas de onde vieram os cliques, a Ratoeira mostra de onde vieram as vendas — com visitas, leads e conversões integradas num só lugar. Mais dado real chegando ao Google Ads significa públicos melhores, lances mais inteligentes e um custo por aquisição que cai enquanto o lucro sobe.",
  },
  {
    icon: SlidersHorizontal,
    title: "Gerenciador Integrado",
    description:
      "Controle campanhas, orçamentos, anúncios e públicos do Google Ads direto pela Ratoeira. Você pausa, escala e ajusta sem precisar alternar entre abas nem abrir o Google Ads. Menos fricção, mais velocidade de execução e zero campanha esquecida rodando no vermelho.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Consolidado",
    description:
      "Visualize tudo em um só lugar: impressões, cliques, CPC, CPL, ROAS, conversões e receita — métricas do Google Ads cruzadas com as suas plataformas de venda. Sem planilhas, sem importação manual. O dashboard que você sempre quis ter, mas nenhuma ferramenta sozinha entregava.",
  },
];

export default function FeaturesAds() {
  const slides = features.map((feature) => {
    const imageSrc =
      feature.title === "Tracking Server-Side"
        ? "/serveraside.webp"
        : feature.title === "Bloqueio Automático de IP"
          ? "/bloqueioips.png"
          : feature.title === "Conversões Otimizadas com Dado Enriquecido"
            ? "/conversoesotimizadas.webp"
            : feature.title === "Recuperação de Conversões Invisíveis"
              ? "/recupera.webp"
              : feature.title === "Dados em Tempo Real"
                ? "/dash.png"
                : feature.title === "Gerenciador Integrado"
                  ? "/gerenciadorgoogle.png"
                  : feature.title === "Dashboard Consolidado"
                    ? "/slide4home.png"
                    : feature.title === "Funil Completo Visível"
                      ? "/funil.webp"
                      : null;

    const imageClassName =
      feature.title === "Tracking Server-Side"
        ? "object-contain"
        : feature.title === "Bloqueio Automático de IP"
          ? "object-cover object-center"
          : feature.title === "Recuperação de Conversões Invisíveis"
            ? "object-contain"
            : imageSrc
              ? "object-contain"
              : null;

    const aspectRatio =
      feature.title === "Bloqueio Automático de IP" || feature.title === "Funil Completo Visível"
        ? "aspect-[16/9]"
        : feature.title === "Conversões Otimizadas com Dado Enriquecido" || feature.title === "Gerenciador Integrado"
          ? "aspect-[3/2]"
          : "aspect-[4/3]";

    return { ...feature, imageSrc, imageClassName, aspectRatio } as const;
  });

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
        <div className="text-center mb-16 max-w-4xl xl:max-w-5xl 2xl:max-w-[65rem] 3xl:max-w-[80rem] 4xl:max-w-[90rem] 5xl:max-w-[100rem] 6xl:max-w-[110rem] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl 3xl:text-7xl font-black text-white mb-6 text-center tracking-tight leading-tight text-pretty hyphens-none">
            O fim do <span className="text-brand-primary">achismo</span> no tráfego pago.
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl 3xl:text-3xl max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 4xl:max-w-[80rem] 5xl:max-w-[90rem] 6xl:max-w-[100rem] mx-auto text-center text-pretty hyphens-none">
            A Ratoeira Ads atua em 6 frentes para garantir que você saiba exatamente qual anúncio do Google Ads gerou cada centavo de
            resultado — do clique à venda.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {slides.map((slide, index) => {
            const isReversed = index % 2 === 1;
            const Icon = slide.icon;

            return (
              <div
                key={slide.title}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 lg:gap-24 rounded-3xl p-6 sm:p-8 ${index % 2 === 0 ? "bg-white" : "bg-[#0a0a0a]"}`}
              >
                <div className="flex-1 space-y-6 w-full text-center md:text-left">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/15 to-orange-500/15 flex items-center justify-center border ${index % 2 === 0 ? "border-black/10" : "border-white/10"}`}>
                    <Icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-6xl font-black leading-tight tracking-tight text-pretty hyphens-none">
                    <GradientText className="font-black">
                      {slide.title === "Recuperação de Conversões Invisíveis" ? (
                        <>Recuperação de<br className="md:hidden" /> Conversões Invisíveis</>
                      ) : (
                        slide.title
                      )}
                    </GradientText>
                  </h3>
                  <p className={`text-lg sm:text-xl 3xl:text-3xl leading-relaxed text-pretty hyphens-none ${index % 2 === 0 ? "text-[#4b5563]" : "text-gray-400"}`}>
                    <BlurTextEffect key={`${slide.title}-desc`}>{slide.description}</BlurTextEffect>
                  </p>
                </div>

                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, zIndex: 20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={cn("relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden group cursor-zoom-in shadow-xl will-change-transform", slide.aspectRatio)}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(255,184,0,0.12)_0%,rgba(0,0,0,0)_70%)] z-10" />

                    {slide.imageSrc ? (
                      <Image
                        src={slide.imageSrc}
                        alt={slide.title}
                        fill
                        sizes="(min-width: 1024px) 900px, 100vw"
                        className={cn("transition-transform duration-500", slide.imageClassName ?? undefined)}
                        priority={index === 0}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400/35">
                          <Icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="font-bold uppercase tracking-wider text-sm">Espaço para Imagem/Mockup</p>
                        </div>
                      </div>
                    )}

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
