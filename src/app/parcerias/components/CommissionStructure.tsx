"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Assinante da Ratoeira",
    req: "1 a 10 clientes ativos",
    comission: "10%",
    perks: ["Dashboard Básico", "Material de Apoio"],
    note: "Para entrar neste tier, basta entrar em contato pelo WhatsApp e solicitar.",
  },
  {
    name: "Top10 Parceiro Gold",
    req: "11 a 50 clientes ativos",
    comission: "20%",
    perks: ["Gerente Dedicado", "Grupo VIP WhatsApp c/ time dedicado", "Prêmios físicos", "Acesso liberado da Ratoeira Ads", "Módulo de trackeamento completo para o seu curso"],
    featured: true,
  },
  {
    name: "Embaixador Top5",
    req: "51+ clientes ativos",
    comission: "30%",
    perks: ["Mastermind Exclusivo", "Premiações Físicas", "Co-marketing"],
  },
];

export default function CommissionStructure() {
  return (
    <section className="py-16 md:py-24 bg-[#050505]">
      <div className="max-w-7xl 2xl:max-w-[92%] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 tracking-tight text-balance">
            Estrutura de <span className="text-brand-primary">Comissionamento</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto px-4 sm:px-0 text-balance">
            Seu esforço é recompensado. Quanto mais clientes você traz para a Ratoeira, maior é a sua participação na receita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl 2xl:max-w-[92%] 4xl:max-w-[100rem] mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 border ${
                tier.featured 
                  ? "bg-[#161616] border-brand-primary scale-105 z-10 shadow-2xl shadow-brand-primary/10" 
                  : "bg-[#111111] border-white/10"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-primary text-black text-xs font-black uppercase tracking-widest rounded-full">
                  Mais Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm">{tier.req}</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl sm:text-5xl font-black text-white mb-2">{tier.comission}</div>
                <p className="text-brand-primary font-bold text-sm uppercase tracking-widest">Recorrente</p>
              </div>

              <ul className="space-y-4 flex-1">
                {tier.perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    {perk}
                  </li>
                ))}
              </ul>
              {tier.note && (
                <p className="mt-4 text-xs text-gray-500 text-center italic">{tier.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
