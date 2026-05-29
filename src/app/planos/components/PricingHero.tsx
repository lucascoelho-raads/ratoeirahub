"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function PricingHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-black">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl 3xl:max-w-[70rem] 4xl:max-w-[90rem] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl 3xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 text-balance">
            Escolha o Plano Ideal Para <span className="text-brand-primary">Escalar sua Operação</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 px-4 sm:px-0 text-balance">
            Sem surpresas ou letras miúdas. Entenda os limites de cada plano e escolha a estrutura que vai multiplicar seus resultados.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl 3xl:max-w-[70rem] 4xl:max-w-[90rem] 3xl:max-w-[70rem] 4xl:max-w-[90rem] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-surface-subdued shadow-2xl aspect-video group"
        >
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="CEO explicando os planos" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="relative z-20 w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center shadow-xl shadow-brand-primary/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
              </div>

              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-left z-20">
                <p className="text-gray-400 font-bold text-sm sm:text-lg">Um papo rápido sobre nossos limites</p>
                <p className="text-gray-300 text-xs sm:text-sm">Com Eitor, CEO</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <p className="text-gray-500 font-medium">[Player de Vídeo será carregado aqui]</p>
              {/* Aqui entraria o iframe do YouTube/Vimeo/Wistia */}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
