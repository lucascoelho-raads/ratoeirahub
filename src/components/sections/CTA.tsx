"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-28 relative overflow-hidden bg-gray-100"
      id="parcerias"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[120rem] 6xl:max-w-[132rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 4xl:px-24 5xl:px-32 6xl:px-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Emoji + tagline */}
          

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl 3xl:text-7xl font-black text-[#111827] leading-tight  max-w-4xl 5xl:max-w-[70rem] 6xl:max-w-[78rem] mx-auto">
            <span className="block text-[#111827]">Pare de operar no escuro.</span>
            <span className="block text-base sm:text-2xl lg:text-3xl 3xl:text-5xl font-black text-brand-primary">
              Cada real investido merece uma origem rastreada.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#4b5563] text-base sm:text-lg 3xl:text-[1.75rem] max-w-2xl 2xl:max-w-[40rem] 3xl:max-w-[52rem] 4xl:max-w-[58rem] 5xl:max-w-[64rem] 6xl:max-w-[72rem] mx-auto leading-relaxed ">
            Configure em minutos. Rastreie cada venda, cada lead, cada clique — no Google e no Meta. Tome as decisões que a maioria adia por falta de dado real.
          </p>

          {/* Garantia */}
          <h3 className="text-xl 3xl:text-3xl font-black text-[#111827]">Risco Zero</h3>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-yellow-600/30 rounded-full text-yellow-600 text-sm 3xl:text-lg">
            <span className="text-green-600">✓</span> Comece no plano gratuito. Sem compromisso, sem cartão. Faça upgrade quando quiser.
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/planos#vamos-transformar"
              className="inline-flex items-center gap-2.5 px-10 py-5 min-h-12 bg-brand-primary text-white font-black rounded-button text-lg hover:bg-brand-primary-hover transition-all duration-200 shadow-2xl shadow-orange-900/25 hover:-translate-y-0.5 group"
            >
              Quero Acessar a Ratoeira Hub
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
