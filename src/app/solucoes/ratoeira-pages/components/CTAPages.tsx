"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/animated-background";

export default function CTAPages() {
  return (
    <AuroraBackground className="flex items-center justify-center min-h-[clamp(600px,70vh,900px)] py-24">
      <div className="max-w-4xl mx-auto px-4 relative z-20 text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-6xl mx-auto"
        >
          <h2 className="text-[clamp(2.25rem,3.2vw,4.5rem)] font-black text-white mb-6 tracking-tight drop-shadow-xl">
            Construa páginas que <span className="text-[#FF7E4A]">convertem</span>.
          </h2>
          <p className="text-[clamp(1.1rem,1.25vw,1.5rem)] text-gray-300 max-w-3xl mx-auto drop-shadow-md mb-12 leading-relaxed">
            Liberte-se das ferramentas lentas e complexas. Use o <span className="text-[#FF7E4A] font-semibold">Ratoeira Pages</span> para focar no que realmente importa: escalar suas vendas.
          </p>
          
          <Link
            href="/planos"
            className="inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-[#FF7E4A] text-white font-bold rounded-full hover:bg-[#e86b3b] transition-all text-lg sm:text-xl shadow-xl shadow-[#FF7E4A]/20 hover:scale-105 active:scale-95"
          >
            Começar a Criar
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
