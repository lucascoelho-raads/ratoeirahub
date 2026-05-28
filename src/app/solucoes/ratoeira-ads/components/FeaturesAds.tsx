"use client";

import { Bot, Ghost, LineChart, Server, Settings2, SlidersHorizontal, BarChart3, Target, Zap } from "lucide-react";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { GradientText } from "@/components/ui/gradient-text";
import Image from "next/image";

const features = [
  {
    icon: Server,
    title: "Tracking Server-Side",
    description:
      "Seus dados não dependem mais de cookies ou do pixel nativo. A Ratoeira envia as conversões direto para as APIs do Google e do Meta com envio enriquecido via browser e API — chegando a ~100% de trackeamento. O que o pixel padrão perde entre 25% e 40% das vezes, a Ratoeira registra. Mais conversões chegando ao Google e ao Meta significa algoritmo otimizando para quem realmente compra.",
  },
  {
    icon: Bot,
    title: "Bloqueio Automático de IP",
    description:
      "Exclusivo para Google Ads. Você define o limite de cliques aceitos por IP — a Ratoeira bloqueia automaticamente quem ultrapassa. Concorrentes que clicam nos seus anúncios, tráfego inválido e bots são eliminados antes de consumir seu orçamento. Na maioria dos casos, o que você economiza já paga o plano inteiro.",
  },
  {
    icon: Ghost,
    title: "Pixel de Qualidade Máxima",
    description:
      "Para Meta Ads. A Ratoeira envia suas conversões com deduplicação e dados enriquecidos — via browser e API ao mesmo tempo. Isso eleva o Pixel Quality Score do Meta, que passa a encontrar pessoas com perfil real de compra, não só de clique. CPL cai. ROAS sobe. O algoritmo finalmente trabalha com dado verdadeiro.",
  },
  {
    icon: Target,
    title: "Recuperação de Conversões Invisíveis",
    description:
      "Anunciantes que migram para o trackeamento server-side da Ratoeira recuperam em média 25% a 40% de conversões que estavam invisíveis. Cada venda recuperada é lucro que você já tinha gerado — e não sabia. Com mais conversões chegando ao Google e ao Meta, o algoritmo otimiza mais rápido e sua campanha escala com mais segurança.",
  },
  {
    icon: Zap,
    title: "Dados em Tempo Real",
    description:
      "O Ads Manager demora para consolidar conversões — e nesse intervalo o algoritmo pode continuar otimizando para o público errado. A Ratoeira mostra seus dados integrados — visitas, leads e vendas — mais rápido do que o próprio painel do Google e do Meta. Você vê o que está funcionando e age antes que o orçamento vá para o lugar errado.",
  },
  {
    icon: LineChart,
    title: "Funil Completo Visível",
    description:
      "Enquanto outras ferramentas mostram apenas de onde vieram os cliques, a Ratoeira mostra de onde vieram as vendas — com visitas, leads e conversões integradas num só lugar. Mais dados reais no pixel significa públicos melhores, criativos mais inteligentes e um custo por aquisição que cai enquanto o lucro sobe.",
  },
  {
    icon: SlidersHorizontal,
    title: "Gerenciador Integrado",
    description:
      "Controle campanhas, orçamentos, criativos e públicos do Google Ads e Meta Ads em um único painel. A Ratoeira unifica a gestão das duas plataformas — você pausa, escala e ajusta sem precisar alternar entre abas. Menos fricção, mais velocidade de execução e zero campanha esquecida rodando no vermelho.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Consolidado",
    description:
      "Visualize métricas dos dois lados em um só lugar: impressões, cliques, CPC, CPL, ROAS, conversões e receita — tudo cruzado entre Google Ads, Meta Ads e as plataformas de venda. Sem planilhas, sem importação manual. O dashboard que você sempre quis ter, mas nenhuma ferramenta sozinha entregava.",
  },
];

export default function FeaturesAds() {
  const slides = features.map((feature) => {
    const imageSrc =
      feature.title === "Tracking Server-Side"
        ? null
        : feature.title === "Bloqueio Automático de IP"
          ? "/ip_bloqueado.png"
          : feature.title === "Recuperação de Conversões Invisíveis"
            ? "/economizometro.png"
            : feature.title === "Dados em Tempo Real"
              ? "/dash.png"
              : null;

    const imageClassName = imageSrc ? "object-cover object-top" : null;

    return { ...feature, imageSrc, imageClassName } as const;
  });

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20">
        <div className="text-center mb-16 max-w-4xl 2xl:max-w-[50rem] 3xl:max-w-[70rem] 4xl:max-w-[90rem] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 text-center md:text-left text-balance">
            O fim do <span className="text-brand-primary">achismo</span> no tráfego pago.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl 2xl:max-w-[44rem] 3xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto text-center md:text-left text-balance">
            A Ratoeira Ads atua em 6 frentes para garantir que você saiba exatamente qual anúncio gerou cada centavo de
            resultado — no Google Ads e no Meta Ads.
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                    <GradientText className="font-black">
                      {slide.title}
                    </GradientText>
                  </h3>
                  <p className={`text-base sm:text-xl leading-relaxed ${index % 2 === 0 ? "text-[#4b5563]" : "text-gray-400"}`}>
                    <BlurTextEffect key={`${slide.title}-desc`}>{slide.description}</BlurTextEffect>
                  </p>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative aspect-video rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(255,184,0,0.12)_0%,rgba(0,0,0,0)_70%)]" />

                    {slide.title === "Tracking Server-Side" ? (
                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <svg viewBox="0 0 560 260" className="w-full max-w-xl h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Horizontal scale / funnel */}
                          <path d="M40 180 L520 180" stroke="white" strokeWidth="2" />
                          
                          {/* Level 1 - Red (low) */}
                          <path d="M40 180 L120 180 L140 140 L60 140 Z" fill="#EF4444" opacity="0.9" />
                          
                          {/* Level 2 - Orange (medium) */}
                          <path d="M140 180 L300 180 L320 120 L160 120 Z" fill="#F59E0B" opacity="0.9" />
                          
                          {/* Level 3 - Green/Lime (max) */}
                          <path d="M300 180 L520 180 L520 100 L320 100 Z" fill="#84CC16" opacity="0.95" />
                          
                          {/* Blue marker triangle pointing to green level */}
                          <path d="M420 85 L440 55 L460 85 Z" fill="#3B82F6" />
                          
                          {/* RAADS text */}
                          <text x="440" y="45" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="system-ui, sans-serif">RAADS</text>
                          
                          {/* Máx.nível API text */}
                          <text x="440" y="115" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">Máx.nível</text>
                          <text x="440" y="135" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">API</text>
                          
                          {/* Labels below */}
                          <text x="100" y="205" textAnchor="middle" fill="#9CA3AF" fontSize="12" fontFamily="system-ui, sans-serif">Pixel padrão</text>
                          <text x="100" y="220" textAnchor="middle" fill="#9CA3AF" fontSize="12" fontFamily="system-ui, sans-serif">(60–75%)</text>
                          
                          <text x="240" y="205" textAnchor="middle" fill="#9CA3AF" fontSize="12" fontFamily="system-ui, sans-serif">Browser + API</text>
                          <text x="240" y="220" textAnchor="middle" fill="#9CA3AF" fontSize="12" fontFamily="system-ui, sans-serif">(85–95%)</text>
                          
                          <text x="420" y="205" textAnchor="middle" fill="#84CC16" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">Ratoeira Ads</text>
                          <text x="420" y="220" textAnchor="middle" fill="#84CC16" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">(~100%)</text>
                        </svg>
                      </div>
                    ) : slide.title === "Pixel de Qualidade Máxima" ? (
                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <svg viewBox="0 0 520 300" className="w-full max-w-xl h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            {/* Glow filters */}
                            <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="6" result="blur" />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="4" result="blur" />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="black" floodOpacity="0.4" />
                            </filter>
                            {/* Gradient for green zone */}
                            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#65A30D" />
                              <stop offset="100%" stopColor="#A3E635" />
                            </linearGradient>
                            {/* Gradient for score text */}
                            <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#60A5FA" />
                              <stop offset="100%" stopColor="#2563EB" />
                            </linearGradient>
                          </defs>

                          {/* Outer bezel ring */}
                          <path d="M 70 235 A 190 190 0 0 1 450 235" stroke="#1F1F1F" strokeWidth="28" fill="none" strokeLinecap="round" />
                          <path d="M 70 235 A 190 190 0 0 1 450 235" stroke="#2A2A2A" strokeWidth="24" fill="none" strokeLinecap="round" />

                          {/* Zone backgrounds (subtle fill) */}
                          <path d="M 80 235 A 180 180 0 0 1 158 130 A 180 180 0 0 0 80 235" fill="#EF4444" opacity="0.08" />
                          <path d="M 242 235 A 180 180 0 0 1 158 130 A 180 180 0 0 0 242 235" fill="#F59E0B" opacity="0.08" />
                          <path d="M 278 235 A 180 180 0 0 1 242 55 A 180 180 0 0 0 278 235" fill="#EAB308" opacity="0.08" />
                          <path d="M 440 235 A 180 180 0 0 1 278 55 A 180 180 0 0 0 440 235" fill="#84CC16" opacity="0.12" />

                          {/* Colored zone arcs */}
                          <path d="M 80 235 A 180 180 0 0 1 158 130" stroke="#DC2626" strokeWidth="8" fill="none" strokeLinecap="round" />
                          <path d="M 158 130 A 180 180 0 0 1 242 105" stroke="#F59E0B" strokeWidth="8" fill="none" strokeLinecap="round" />
                          <path d="M 242 105 A 180 180 0 0 1 338 122" stroke="#EAB308" strokeWidth="8" fill="none" strokeLinecap="round" />
                          <path d="M 338 122 A 180 180 0 0 1 440 235" stroke="url(#greenGrad)" strokeWidth="10" fill="none" strokeLinecap="round" filter="url(#greenGlow)" />

                          {/* Inner tick ring */}
                          <path d="M 95 235 A 165 165 0 0 1 425 235" stroke="#333333" strokeWidth="1" fill="none" />

                          {/* Major ticks */}
                          <g strokeWidth="3" strokeLinecap="round">
                            {/* Red zone ticks */}
                            <line x1="82" y1="218" x2="98" y2="214" stroke="#EF4444" />
                            <line x1="88" y1="198" x2="104" y2="192" stroke="#EF4444" />
                            <line x1="100" y1="176" x2="115" y2="168" stroke="#EF4444" />
                            <line x1="118" y1="154" x2="132" y2="144" stroke="#EF4444" />
                            <line x1="142" y1="134" x2="154" y2="122" stroke="#EF4444" />
                            {/* Orange zone ticks */}
                            <line x1="172" y1="114" x2="182" y2="100" stroke="#F59E0B" />
                            <line x1="198" y1="98" x2="206" y2="84" stroke="#F59E0B" />
                            <line x1="226" y1="88" x2="232" y2="72" stroke="#F59E0B" />
                            {/* Yellow zone ticks */}
                            <line x1="258" y1="72" x2="264" y2="88" stroke="#EAB308" />
                            <line x1="288" y1="84" x2="294" y2="98" stroke="#EAB308" />
                            <line x1="314" y1="100" x2="324" y2="114" stroke="#EAB308" />
                            <line x1="338" y1="122" x2="350" y2="134" stroke="#EAB308" />
                            {/* Green zone ticks */}
                            <line x1="366" y1="144" x2="380" y2="154" stroke="#84CC16" />
                            <line x1="386" y1="168" x2="402" y2="176" stroke="#84CC16" />
                            <line x1="402" y1="192" x2="418" y2="198" stroke="#84CC16" />
                            <line x1="412" y1="214" x2="428" y2="218" stroke="#84CC16" />
                            <line x1="418" y1="235" x2="435" y2="235" stroke="#84CC16" />
                          </g>

                          {/* Minor ticks */}
                          <g strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
                            <line x1="85" y1="208" x2="95" y2="205" stroke="#666" />
                            <line x1="94" y1="187" x2="104" y2="183" stroke="#666" />
                            <line x1="109" y1="165" x2="119" y2="160" stroke="#666" />
                            <line x1="130" y1="144" x2="139" y2="138" stroke="#666" />
                            <line x1="157" y1="123" x2="164" y2="116" stroke="#666" />
                            <line x1="185" y1="106" x2="191" y2="98" stroke="#666" />
                            <line x1="212" y1="93" x2="217" y2="85" stroke="#666" />
                            <line x1="242" y1="80" x2="245" y2="72" stroke="#666" />
                            <line x1="273" y1="72" x2="276" y2="80" stroke="#666" />
                            <line x1="301" y1="85" x2="306" y2="93" stroke="#666" />
                            <line x1="329" y1="98" x2="335" y2="106" stroke="#666" />
                            <line x1="356" y1="116" x2="363" y2="123" stroke="#666" />
                            <line x1="381" y1="138" x2="390" y2="144" stroke="#666" />
                            <line x1="401" y1="160" x2="411" y2="165" stroke="#666" />
                            <line x1="416" y1="183" x2="426" y2="187" stroke="#666" />
                            <line x1="425" y1="205" x2="435" y2="208" stroke="#666" />
                          </g>

                          {/* Scale numbers */}
                          <text x="75" y="250" textAnchor="middle" fill="#6B7280" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">0</text>
                          <text x="158" y="118" textAnchor="middle" fill="#6B7280" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">2.5</text>
                          <text x="260" y="62" textAnchor="middle" fill="#6B7280" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">5</text>
                          <text x="344" y="112" textAnchor="middle" fill="#6B7280" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">7.5</text>
                          <text x="445" y="250" textAnchor="middle" fill="#84CC16" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">10</text>

                          {/* Center hub */}
                          <circle cx="260" cy="235" r="14" fill="#1E3A5F" stroke="#3B82F6" strokeWidth="3" filter="url(#shadow)" />
                          <circle cx="260" cy="235" r="6" fill="#3B82F6" />

                          {/* Pointer shadow */}
                          <line x1="260" y1="235" x2="410" y2="115" stroke="black" strokeWidth="6" strokeLinecap="round" opacity="0.4" transform="translate(2, 3)" />
                          
                          {/* Pointer body */}
                          <line x1="260" y1="235" x2="410" y2="115" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" filter="url(#blueGlow)" />
                          <line x1="260" y1="235" x2="410" y2="115" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
                          
                          {/* Pointer tip */}
                          <polygon points="410,115 396,122 400,106" fill="#2563EB" filter="url(#blueGlow)" />
                          <polygon points="410,115 398,121 401,108" fill="#93C5FD" />

                          {/* Score background circle */}
                          <circle cx="260" cy="170" r="48" fill="#0A0A0A" stroke="#222222" strokeWidth="2" />
                          <circle cx="260" cy="170" r="42" fill="#050505" stroke="#1A1A1A" strokeWidth="1" />

                          {/* Score text */}
                          <text x="260" y="182" textAnchor="middle" fill="url(#scoreGrad)" fontSize="48" fontWeight="black" fontFamily="system-ui, sans-serif" filter="url(#blueGlow)">9,2</text>
                          
                          {/* Score subtitle */}
                          <text x="260" y="200" textAnchor="middle" fill="#3B82F6" fontSize="10" fontWeight="600" letterSpacing="0.15em" fontFamily="system-ui, sans-serif">EXCELENTE</text>

                          {/* Bottom label */}
                          <text x="260" y="275" textAnchor="middle" fill="#E5E7EB" fontSize="16" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">Pixel Quality Score</text>
                          <text x="260" y="290" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="system-ui, sans-serif">Meta Pixel Quality Score com Ratoeira Ads</text>
                        </svg>
                      </div>
                    ) : slide.imageSrc ? (
                      <Image
                        src={slide.imageSrc}
                        alt={slide.title}
                        fill
                        sizes="(min-width: 1024px) 900px, 100vw"
                        className={slide.imageClassName ?? undefined}
                        priority={index === 0}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white/35">
                          <Icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="font-bold uppercase tracking-wider text-sm">Espaço para Imagem/Mockup</p>
                        </div>
                      </div>
                    )}

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
