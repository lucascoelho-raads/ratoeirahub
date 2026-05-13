"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAAds() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/5" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111111] border border-brand-primary/20 p-12 md:p-16 rounded-[40px]"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pare de jogar dinheiro no <span className="text-brand-primary">lixo</span>.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Integre a Ratoeira Ads hoje mesmo e descubra o verdadeiro ROI das suas campanhas.
          </p>
          <Link
            href="/planos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-black font-black rounded-full hover:bg-brand-primary-hover transition-colors text-lg shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95"
          >
            Escolher Meu Plano
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
