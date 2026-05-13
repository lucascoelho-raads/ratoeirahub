"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HeroBenefits() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-[#050505]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary mb-8 backdrop-blur-md">
            <Star className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wider uppercase">Vantagens Exclusivas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            Mais do que comissões. <br />
            Um <span className="text-brand-primary">Ecossistema de Vantagens.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Descubra por que os maiores players do mercado digital escolhem o programa de parcerias do Ratoeira Hub para monetizar sua influência e autoridade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}