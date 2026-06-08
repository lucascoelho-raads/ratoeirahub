"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

const mvvData = [
  {
    id: "missao",
    title: "Missão",
    icon: Target,
    content: "Transformar operações digitais em máquinas previsíveis de resultado através de tecnologia, dados e inteligência de rastreamento."
  },
  {
    id: "visao",
    title: "Visão",
    icon: Eye,
    content: "Ser a empresa que define o padrão global de performance, rastreabilidade e inteligência de dados para quem vende na internet."
  },
  {
    id: "valores",
    title: "Valores",
    icon: ShieldCheck,
    items: [
      {
        title: "Mudar vidas",
        body: "A vida dos nossos clientes. A vida da empresa. A nossa. Não construímos tecnologia para impressionar — construímos para que cada anunciante que usa a Ratoeira tome decisões melhores e chegue mais longe.",
      },
      {
        title: "Cliente é o motivo",
        body: "Cada cliente importa. Nosso negócio só funciona se funcionar para o cliente — por isso tratamos a operação de cada anunciante como se fosse a nossa. Sem isso, não existe Ratoeira.",
      },
      {
        title: "Ser os melhores naquilo que fazemos",
        body: "Rastreamento, dados, performance. É o que fazemos — e queremos ser a referência global nisso. Não o maior em número de clientes. O melhor em qualidade de solução.",
      },
      {
        title: "A verdade, sempre",
        body: "Dado claro, comunicação direta, sem relatório que embeleza o que não funcionou. A confiança é a base da empresa — com os clientes, com o time, com o mercado.",
      },
      {
        title: "Inovar é sobreviver",
        body: "O mundo do tráfego pago muda rápido. Buscar novas formas de resolver o mesmo problema não é diferencial — é sobrevivência. Se a gente não fizer, o concorrente faz.",
      },
    ]
  }
];

export default function MVVAbout() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const valoresItems = mvvData[2].items || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValueIndex((prev) => (prev + 1) % valoresItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [valoresItems.length]);

  return (
    <section id="manifesto" className="py-16 md:py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-100/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[92%] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Missão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111111] p-6 sm:p-8 rounded-3xl shadow-xl border border-white/10 hover:-translate-y-2 transition-transform duration-300 text-center sm:text-left"
          >
            <div className="w-14 h-14 bg-orange-500/15 border border-orange-500/20 rounded-2xl flex items-center justify-center mb-5 mx-auto sm:mx-0">
              <Target className="w-7 h-7 text-orange-300" />
            </div>
            <h2 className="text-2xl sm:text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              <GradientText className="font-black">Missão</GradientText>
            </h2>
            <p className="text-gray-400 font-medium leading-relaxed text-sm sm:text-base">
              {mvvData[0].content}
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111111] p-6 sm:p-8 rounded-3xl shadow-xl border border-white/10 hover:-translate-y-2 transition-transform duration-300 text-center sm:text-left"
          >
            <div className="w-14 h-14 bg-amber-500/15 border border-amber-500/20 rounded-2xl flex items-center justify-center mb-5 mx-auto sm:mx-0">
              <Eye className="w-7 h-7 text-amber-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              <GradientText className="font-black">Visão</GradientText>
            </h2>
            <p className="text-gray-400 font-medium leading-relaxed">
              {mvvData[1].content}
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#111111] p-8 rounded-3xl shadow-xl border border-white/10 hover:-translate-y-2 transition-transform duration-300 overflow-hidden text-center sm:text-left"
          >
            <div className="w-14 h-14 bg-orange-500/15 border border-orange-500/20 rounded-2xl flex items-center justify-center mb-5 mx-auto sm:mx-0">
              <ShieldCheck className="w-7 h-7 text-orange-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              <GradientText className="font-black">Valores</GradientText>
            </h2>
            <div className="relative min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValueIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center sm:flex-row sm:items-start gap-3"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-400 font-medium text-sm leading-relaxed">
                    <strong className="text-white font-bold">{valoresItems[activeValueIndex].title}:</strong> {valoresItems[activeValueIndex].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
