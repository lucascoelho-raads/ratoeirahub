"use client";

import { motion } from "framer-motion";
import { Server, Ghost, Bot, Zap, Target, LineChart } from "lucide-react";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import Image from "next/image";

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

        <div className="space-y-24">
          {features.map((feature, index) => {
            const isServerSide = feature.title === "Tracking Server-Side";
            const isAntiFraude = feature.title === "Bloqueio Anti-Fraude";
            const isEconomizometro = feature.title === "Recuperação de Vendas Invisíveis";
            const isDashboard = feature.title === "Dashboard em Tempo Real";
            const featureImageSrc =
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

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-12 items-stretch"
              >
                <div className={isServerSide ? "space-y-6 max-w-2xl" : "flex-1 space-y-6"}>
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  <BlurTextEffect key={feature.title}>{feature.title}</BlurTextEffect>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  <BlurTextEffect key={`${feature.title}-desc`}>{feature.description}</BlurTextEffect>
                </p>
              </div>

                <div className="w-full">
                  <div className="relative rounded-[40px] bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center overflow-hidden group h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
                    <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {featureImageSrc ? (
                      <div className="absolute inset-0">
                        <Image
                          src={featureImageSrc}
                          alt={feature.title}
                          fill
                          sizes="(min-width: 768px) 100vw, 100vw"
                          className={imageClassName}
                          priority={isServerSide}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      </div>
                    ) : (
                      <div className="relative z-10 p-8 text-center flex flex-col items-center">
                        <feature.icon className="w-24 h-24 text-white/10 group-hover:text-brand-primary/40 transition-colors duration-700 mb-6 group-hover:scale-110 transform" />
                        <p className="text-white/30 font-bold uppercase tracking-widest text-sm mb-2">Interface Visual</p>
                        <p className="text-white/50 text-sm">Dashboard de {feature.title}</p>
                      </div>
                    )}

                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-primary/30 transition-colors duration-700" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
