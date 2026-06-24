"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, ShieldCheck } from "lucide-react";

export default function PlatformCTAAbout() {
  return (
    <section className="py-16 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
        
        {/* Banner "Somos uma plataforma inovadora" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-gray-100 mb-16 md:mb-32 relative overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[1fr_1.2fr] gap-12 items-center relative z-10">
            <div className="relative aspect-square max-w-md mx-auto w-full">
              {/* Abstract Platform Representation */}
              <div className="absolute inset-0 border-2 border-orange-100 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border-2 border-amber-50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-lg flex items-center justify-center text-white">
                  <Zap className="w-10 h-10" />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 left-10 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <BarChart3 className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="absolute bottom-10 right-10 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight text-center lg:text-left text-pretty hyphens-none">
                Somos o ecossistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">definitivo</span> para escala.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-center lg:text-left text-pretty hyphens-none">
                Projetamos a Ratoeira Hub para aniquilar o desperdício de verba e a complexidade técnica. 
                Oferecemos uma solução segura, rápida e abrangente que une rastreamento cirúrgico e páginas 
                de altíssima conversão em um único lugar.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
