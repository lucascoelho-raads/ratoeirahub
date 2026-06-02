"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";

export default function HeroAbout() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white flex items-center">
      {/* Background Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[92%] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 py-[clamp(5rem,10vh,9rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[1.3fr_1fr] 3xl:grid-cols-[1.4fr_1fr] 4xl:grid-cols-[1.5fr_1fr] gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-[#374151] mx-auto lg:mx-0">
              <span className="text-sm font-semibold">NOSSA HISTÓRIA</span>
            </div>

            <h1 className="text-[clamp(1.25rem,4.2vw,4.5rem)] lg:text-[clamp(1.25rem,3.2vw,5rem)] font-black text-[#111827] leading-[1.04] tracking-tight text-balance max-w-3xl lg:max-w-4xl mx-auto lg:mx-0">
              A <GradientText className="font-black">Ratoeira</GradientText> nasceu de <GradientText className="font-black">dentro</GradientText> do mercado.
              <br />
              Não de fora.
            </h1>

            <div className="space-y-6 text-[#4b5563] font-medium leading-relaxed max-w-xl 2xl:max-w-[50rem] 4xl:max-w-[64rem] text-[clamp(1rem,1.1vw,1.125rem)] mx-auto lg:mx-0">
              <p>
                Em dezembro de 2022, Eitor Guimarães anunciava como afiliado de Google Ads e aplicava o que sabia de
                analytics corporativo a um problema que o mercado brasileiro ainda não havia resolvido: como capturar os
                dados do clique, cruzar com a conversão e devolver esse sinal limpo ao algoritmo do Google para ele
                otimizar para quem realmente compra. Ferramentas gringas faziam isso — e não afetavam. Chegavam a custar
                R$1.000 por mês e ainda assim não entendiam o ecossistema brasileiro de afiliados.
              </p>
              <p>
                Eitor sistematizou o método e publicou um vídeo no YouTube em outubro de 2023. Explodiu. O mercado de
                afiliados de Google Ads mudou de patamar: operações que antes travavam em só a R$100 mil passaram a
                escalar além de um milhão. Em janeiro de 2024, Paulo Furtado viu o vídeo e foi direto ao Instagram de
                Eitor propor construir o software. Em 15 de abril de 2024, a Ratoeira Ads entrava no ar. Hoje, mais de
                2.500 anunciantes são assinantes ativos — e mais de 10.000 já passaram pela plataforma.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual / Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square">
              {/* Main Image (Top Right) */}
              <div className="absolute top-0 right-0 w-[70%] h-[60%] bg-gray-100 rounded-3xl shadow-xl overflow-hidden group border border-gray-200">
                <img
                  src="/quemsomos1.jpg.jpeg"
                  alt="Equipe Fundadora"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Secondary Image (Bottom Left) */}
              <div className="absolute bottom-10 left-0 w-[60%] h-[50%] bg-gray-50 rounded-3xl shadow-2xl overflow-hidden z-10 group border border-gray-200">
                <img
                  src="/quemsomos2.jpg.jpeg"
                  alt="Primeiro Evento"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-[50%] left-[50%] w-24 h-24 border-t-4 border-r-4 border-amber-400 rounded-tr-3xl z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
