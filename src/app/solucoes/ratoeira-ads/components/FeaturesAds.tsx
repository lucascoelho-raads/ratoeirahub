"use client";

import { motion } from "framer-motion";
import { Server, Ghost, Bot, Zap, Target, LineChart } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] border border-white/5 p-8 rounded-3xl hover:border-brand-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                <feature.icon className="w-7 h-7 text-gray-400 group-hover:text-brand-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
