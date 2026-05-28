"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HeroBenefits() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] flex items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 text-center py-[clamp(5rem,10vh,9rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl 2xl:max-w-[50rem] 3xl:max-w-[70rem] 4xl:max-w-[90rem] mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary mb-8 backdrop-blur-md">
            <Star className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wider uppercase">Vantagens Exclusivas</span>
          </div>
          
          <h1 className="text-[clamp(2.75rem,4.2vw,6rem)] font-black text-white mb-8 tracking-tight leading-[1.04] text-balance">
            Mais do que comissões. Um <span className="text-brand-primary">Ecossistema de Vantagens.</span>
          </h1>
          
          <p className="text-[clamp(1.05rem,1.25vw,1.35rem)] text-gray-400 leading-relaxed max-w-3xl 2xl:max-w-[44rem] 3xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto text-balance">
            Todo assinante da Ratoeira pode ser parceiro. Indique, ganhe recorrente e acesse vantagens exclusivas — enquanto sua operação cresce junto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
