"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function TutorialSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#050505]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,rgba(202,138,4,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(202,138,4,0.10)_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      {/* Top-right gold glow */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-yellow-500/25 rounded-full blur-[120px] pointer-events-none" />

      {/* Bottom-left gold glow */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Center subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-bold tracking-wider uppercase mb-6">
            <Play className="w-4 h-4" />
            <span>Tutorial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight hyphens-none">
            Confira Nosso <span className="text-yellow-500">Tutorial Completo</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto hyphens-none">
            Aprenda a configurar a <span className="whitespace-nowrap">Ratoeira Ads</span> passo a passo, desde a instalação da tag até a ativação do bloqueio automático de fraude. Em menos de 15 minutos, sua operação estará protegida e rastreando ~100% das conversões do <span className="whitespace-nowrap">Google Ads</span>.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Link
              href="https://ratoeira-ads.gitbook.io/help-ratoeira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-black font-black rounded-button hover:bg-yellow-400 transition-all text-lg shadow-xl shadow-yellow-500/20 hover:scale-105 active:scale-95"
            >
              <span className="text-black">Ver tutorial</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
