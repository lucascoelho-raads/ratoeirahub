"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function CTAPages() {
  return (
    <section className="flex items-center justify-center min-h-[auto] md:min-h-[clamp(600px,70vh,900px)] py-16 md:py-24 bg-white">
      <div className="max-w-4xl 3xl:max-w-[70rem] 4xl:max-w-[90rem] mx-auto px-4 3xl:px-12 4xl:px-20 relative z-20 text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-6xl 3xl:max-w-[90rem] 4xl:max-w-[110rem] 3xl:max-w-[90rem] 4xl:max-w-[110rem] mx-auto"
        >
          <h2 className="text-[clamp(1.15rem,3.2vw,4.5rem)] font-black text-[#111827] mb-6 tracking-tight text-balance">
            Sua <span className="text-orange-500">próxima página</span> já poderia estar no ar.
          </h2>
          <p className="text-[clamp(1.1rem,1.25vw,1.5rem)] text-[#4b5563] max-w-3xl 2xl:max-w-[44rem] 3xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto mb-12 leading-relaxed text-balance">
            Pare de perder tempo com ferramentas que não integram entre si. Com o{" "}
            <span className="text-[#FF7E4A] font-semibold">Ratoeira Pages</span>, você cria, publica e já começa a rastrear — tudo em um lugar, tudo conectado.
          </p>
          
          <Link
            href="/planos#vamos-transformar"
            className="inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-[#FF7E4A] text-white font-bold rounded-button hover:bg-[#e86b3b] transition-all text-lg sm:text-xl shadow-xl shadow-[#FF7E4A]/20 hover:scale-105 active:scale-95"
          >
            Começar grátis
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
