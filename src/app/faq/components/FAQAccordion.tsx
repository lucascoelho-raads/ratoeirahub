"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "O que é o Ratoeira Hub?",
    answer: "O Ratoeira Hub é o ecossistema definitivo para escalar suas operações de tráfego pago. Integramos ferramentas de tracking avançado (Ratoeira Ads) com um construtor de páginas otimizado (Ratoeira Pages) em um único dashboard para garantir máxima conversão e proteção contra fraudes.",
  },
  {
    question: "Como funciona a proteção contra fraudes?",
    answer: "Nossa tecnologia utiliza algoritmos de inteligência artificial e bloqueio de IPs dinâmicos em tempo real para identificar e barrar tráfego de bots, cliques fraudulentos e agentes mal-intencionados antes que eles consumam seu orçamento.",
  },
  {
    question: "Posso usar meus próprios domínios?",
    answer: "Sim! Dependendo do seu plano, você pode conectar de 1 a ilimitados domínios customizados, mantendo a identidade visual da sua marca enquanto aproveita toda a nossa infraestrutura de rastreamento server-side.",
  },
  {
    question: "Qual a diferença entre os planos Mensal e Anual?",
    answer: "Ao optar pelo plano Anual, além de garantir o acesso ininterrupto à plataforma por 12 meses, você ganha um desconto exclusivo de 20% no valor total. Todos os recursos do plano escolhido permanecem os mesmos independentemente do ciclo de faturamento.",
  },
  {
    question: "O Ratoeira Hub tem período de teste ou garantia?",
    answer: "Sim, você está protegido por nossa garantia incondicional de 14 dias (conforme o CDC). Se dentro desse período você achar que a plataforma não atende às suas necessidades, basta solicitar o cancelamento e devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Preciso de conhecimento técnico para configurar o tracking?",
    answer: "Não! Desenvolvemos o Ratoeira Hub com foco na facilidade de uso. Nossas integrações nativas permitem conectar o Ratoeira Ads às principais fontes de tráfego (Google, Meta, etc.) e gateways de pagamento com apenas alguns cliques.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={index}
            initial={false}
            animate={{ backgroundColor: isOpen ? "rgba(255, 255, 255, 0.05)" : "rgba(17, 17, 17, 1)" }}
            className={cn(
              "border rounded-2xl overflow-hidden transition-colors duration-300",
              isOpen ? "border-brand-primary/50" : "border-white/10 hover:border-white/20"
            )}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex min-h-12 items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                  isOpen ? "bg-brand-primary text-black" : "bg-white/10 text-gray-400"
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-base text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
