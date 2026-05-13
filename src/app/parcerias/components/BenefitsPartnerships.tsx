"use client";

import { motion } from "framer-motion";
import { DollarSign, Headset, FolderSync, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Comissões Recorrentes",
    description: "Ganhe até 30% de comissão recorrente sobre as mensalidades de todas as indicações ativas, todos os meses, enquanto eles utilizarem a plataforma.",
  },
  {
    icon: Headset,
    title: "Suporte VIP Exclusivo",
    description: "Tenha acesso a um gerente de contas dedicado via WhatsApp para ajudar no fechamento de negócios e na resolução rápida de qualquer dúvida técnica.",
  },
  {
    icon: FolderSync,
    title: "Materiais de Alta Conversão",
    description: "Acesse nossa biblioteca de swipes, criativos validados, apresentações comerciais e copys prontas para disparar para sua base.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Transparente",
    description: "Acompanhe seus cliques, leads gerados, assinaturas ativas e histórico de saques em tempo real através de um painel 100% transparente.",
  },
];

export default function BenefitsPartnerships() {
  return (
    <section id="beneficios" className="py-24 bg-[#0a0a0a] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Por que ser um parceiro <span className="text-brand-primary">Ratoeira Hub?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Criamos um programa desenhado para maximizar seus ganhos e facilitar sua indicação, com todo o suporte que você precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] border border-white/10 rounded-[32px] p-8 md:p-10 hover:border-brand-primary/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-colors">
                  <Icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}