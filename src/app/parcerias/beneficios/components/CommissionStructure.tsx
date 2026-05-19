"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Parceiro",
    req: "1 a 10 clientes ativos",
    comission: "20%",
    perks: ["Dashboard Básico", "Material de Apoio", "Suporte por Email"],
  },
  {
    name: "Parceiro Gold",
    req: "11 a 50 clientes ativos",
    comission: "25%",
    perks: ["Gerente Dedicado", "Treinamento Avançado", "Saques Imediatos"],
    featured: true,
  },
  {
    name: "Embaixador",
    req: "51+ clientes ativos",
    comission: "30%",
    perks: ["Mastermind Exclusivo", "Premiações Físicas", "Co-marketing"],
  },
];

export default function CommissionStructure() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Estrutura de <span className="text-brand-primary">Comissionamento</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Seu esforço é recompensado. Quanto mais clientes você traz para o ecossistema, maior é a sua porcentagem de participação na receita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <div className="text-5xl font-black text-white mb-2">{tier.comission}</div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
