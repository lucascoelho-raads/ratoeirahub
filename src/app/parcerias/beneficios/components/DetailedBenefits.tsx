"use client";

import { motion } from "framer-motion";
import { DollarSign, Repeat, ShieldCheck, Zap, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const detailedBenefits = [
  {
    icon: Repeat,
    title: "Receita Recorrente Real",
    description: "Você não ganha apenas na primeira venda. Enquanto seu indicado usar o Ratoeira Hub, você recebe até 30% do valor da assinatura todos os meses.",
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: "Produto que se Vende Sozinho",
    description: "Indique uma solução que resolve a maior dor do mercado: bloqueios e perda de ROI. O Ratoeira Hub tem altíssima taxa de retenção.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Saques Rápidos",
    description: "Sem burocracia. Solicite seus saques diretamente pelo dashboard e receba em sua conta com agilidade e transparência.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Gerente de Contas Dedicado",
    description: "Parceiros que atingem o nível Gold ganham um gerente de contas via WhatsApp para ajudar a fechar grandes negociações.",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Treinamento de Vendas",
    description: "Acesso exclusivo à nossa academia de parceiros, com aulas de como abordar, apresentar e converter clientes para a plataforma.",
    highlight: false,
  },
  {
    icon: DollarSign,
    title: "Premiações por Metas",
    description: "Alcance marcos de faturamento e desbloqueie prêmios físicos, viagens exclusivas e acesso aos nossos masterminds fechados.",
    highlight: true,
  },
];

export default function DetailedBenefits() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "rounded-3xl p-8 border transition-all duration-300",
                  benefit.highlight 
                    ? "bg-[#161616] border-brand-primary/30 shadow-lg shadow-brand-primary/5" 
                    : "bg-[#111111] border-white/5 hover:border-white/20"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                  benefit.highlight ? "bg-brand-primary/10 text-brand-primary" : "bg-white/5 text-gray-400"
                )}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
