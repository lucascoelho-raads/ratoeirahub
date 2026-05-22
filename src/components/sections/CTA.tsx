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
      className="py-16 md:py-28 relative overflow-hidden bg-[#f9fafb]"
      id="parcerias"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-6xl 3xl:max-w-[90rem] 4xl:max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Emoji + tagline */}
          

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-black text-[#111827] leading-tight">
            <span className="block text-[#111827]">Pare de operar no escuro.</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-brand-primary">
              Cada real investido merece uma origem rastreada.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#4b5563] text-base sm:text-lg max-w-2xl 3xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto leading-relaxed">
            Configure em minutos. Veja cada venda, cada lead, cada clique — no Google e no Meta. E tome a decisão que a
            maioria adia.
          </p>

          {/* Garantia */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 border border-brand-primary/30 rounded-full text-brand-primary text-sm">
            <span className="text-green-600">✓</span> Risco Zero. Comece no plano gratuito. Sem compromisso, sem cartão.
            Upgrade quando quiser.
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/fale-conosco"
              className="inline-flex items-center gap-2.5 px-10 py-5 bg-brand-primary text-white font-black rounded-button text-lg hover:bg-brand-primary-hover transition-all duration-200 shadow-2xl shadow-orange-900/25 hover:-translate-y-0.5 group"
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
