"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";

const milestones = [
  {
    year: "Dez 2022",
    title: "A Descoberta",
    description: "Eitor Guimarães, com background em analytics corporativo, começa a anunciar como afiliado de Google Ads e sistematiza um método inédito no Brasil: capturar o dado do clique, cruzar com a conversão e alimentar o algoritmo com sinal limpo. O que antes parecia impossível para afiliados começa a funcionar.",
    align: "left",
  },
  {
    year: "Out 2023",
    title: "O mercado descobre o método",
    description: "Eitor publica um vídeo no YouTube explicando o método. Explode em visualizações. Afiliados que faziam de 50 a 100 mil reais passam a enxergar — e a atingir — resultados acima de um milhão. Eitor se torna referência nacional no assunto.",
    align: "right",
  },
  {
    year: "Jan 2024",
    title: "Paulo encontra Eitor",
    description: "Paulo Furtado, desenvolvedor com mais de dez anos de experiência incluindo passagem pela Localiza, assiste ao vídeo e vai direto ao Instagram de Eitor propor transformar o método em software. A parceria começa.",
    align: "left",
  },
  {
    year: "Abr 2024",
    title: "Ratoeira Ads vai ao ar",
    description: "Em 15 de abril de 2024, a Ratoeira Ads é lançada — focada em afiliados de Google Ads. Trackeamento server-side via API de Conversões, bloqueio de IPs inválidos e atribuição real do clique à venda. O sistema ainda era muito manual, mas já revolucionário. O que Eitor sistematizou como método, Paulo transformou em plataforma.",
    align: "right",
  },
  {
    year: "2025",
    title: "Expansão do ecossistema",
    description: "Nasce a Ratoeira Pages — construtor de páginas com hospedagem inclusa e trackeamento já integrado. Os dois produtos se tornam Ratoeira Hub: quando conectados, rastreiam além do que cada um entrega separado. Suas funcionalidades passam a ser ainda mais automáticas e diretas. A Ratoeira consolida sua posição como referência do mercado.",
    align: "left",
  },
  {
    year: "2026",
    title: "IA e novos canais",
    description: "MCP da Ratoeira Ads e da Ratoeira Pages: o Claude e o ChatGPT passam a consultar, analisar e executar ações diretamente nas contas dos anunciantes. Expansão para Meta Ads com envio enriquecido via browser + CAPI. A plataforma expande para atender produtores, infoprodutores, gestores de tráfego e agências — com mais de 2.500 assinantes ativos.",
    align: "right",
  }
];

export default function TimelineAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight ">Dois anos. O <span className="text-[#FFB800]">mercado</span> não é mais o <span className="text-[#FFB800]">mesmo</span></h2>
          <p className="mt-4 text-base sm:text-xl text-gray-400 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto px-4 sm:px-0 ">
            De uma descoberta individual a mais de 2.500 anunciantes que escalam com dado real.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Static Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full" />

          {/* Animated Glow Line */}
          <motion.div 
            style={{ height }}
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)] origin-top z-10" 
          />

          <div className="space-y-12 md:space-y-24">
            {milestones.map((item) => {
              const isLeft = item.align === "left";
              return (
                <div key={item.year} className="relative flex flex-col md:flex-row items-center justify-center">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-[#050505] transform -translate-x-1/2 shadow-md z-20" />
                  
                  {/* Content Left */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 text-center ${isLeft ? "md:pr-20 md:text-left" : "md:pl-20 md:order-2 md:text-right"}`}
                  >
                    <div className="bg-[#111111] p-5 sm:p-8 rounded-3xl shadow-lg border border-white/10 hover:shadow-xl transition-shadow relative group">
                      <div className={`absolute top-8 ${isLeft ? "-right-3" : "-left-3"} w-6 h-6 bg-[#111111] transform rotate-45 border-t border-r border-white/10 hidden md:block ${isLeft ? "" : "rotate-[-135deg]"}`} />
                      
                      <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/20 text-orange-300 font-bold text-sm mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                        <GradientText className="font-bold">
                          {item.title}
                        </GradientText>
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Empty Space for Grid Alignment */}
                  <div className={`hidden md:block w-1/2 ${isLeft ? "order-2" : "order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
