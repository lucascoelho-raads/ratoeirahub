"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function PricingHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Escolha o Plano Ideal <br className="hidden sm:block" />
            Para <span className="text-brand-primary">Escalar sua Operação</span>
          </h1>
          <p className="text-xl text-gray-400">
            Sem surpresas ou letras miúdas. Entenda os limites de cada plano e escolha a estrutura que vai multiplicar seus resultados.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-surface-subdued shadow-2xl aspect-video group"
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

              <div className="absolute bottom-8 left-8 text-left z-20">
                <p className="text-white font-bold text-lg">Um papo rápido sobre nossos limites</p>
                <p className="text-gray-300 text-sm">Com Eitor, CEO</p>
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
