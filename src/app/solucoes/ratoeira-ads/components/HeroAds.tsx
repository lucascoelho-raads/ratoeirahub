"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Crosshair, TrendingUp } from "lucide-react";

export default function HeroAds() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="w-4 h-4" />
            Ratoeira Ads
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tight"
          >
            Recupere conversões <br className="hidden md:block" />
            <span className="text-brand-primary">invisíveis</span> e bloqueie <span className="text-red-500">fraude</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            A tecnologia de tracking mais avançada do mercado para quem não tem margem para perder dinheiro com cliques falsos e dados imprecisos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/planos"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-black font-black rounded-full hover:bg-brand-primary-hover transition-colors text-lg"
            >
              Ver Planos
            </Link>
            <Link
              href="#como-funciona"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-colors border border-white/10 text-lg"
            >
              Como Funciona
            </Link>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: TrendingUp, label: "Recuperação Média", value: "+30%" },
            { icon: ShieldCheck, label: "Bloqueio de Bots", value: "99.9%" },
            { icon: Crosshair, label: "Precisão do Pixel", value: "100%" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#111111] border border-white/5 p-6 rounded-3xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                <stat.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-black text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
