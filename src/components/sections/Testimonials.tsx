"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Star, Mic, Quote, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-28 bg-black" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold uppercase tracking-widest">
            Cases de Sucesso
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Eles confiaram. <br className="hidden md:block" />
            <span className="text-brand-primary">Eles escalaram.</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Veja como os maiores players do mercado transformaram suas operações com o ecossistema Ratoeira Hub.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[240px]">
          
          {/* Card 1: Award (1x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-1 row-span-1 bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col items-center justify-center text-center group hover:border-brand-primary/30 transition-colors"
          >
            <Award className="w-12 h-12 text-brand-primary mb-4" />
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Vencedor 2026</p>
            <h3 className="text-white font-bold text-lg leading-tight">Plataforma de Tracking<br/>Mais Confiável</h3>
          </motion.div>

          {/* Card 2: Video Large (2x2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 md:col-span-2 row-span-2 bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden relative group cursor-pointer"
          >
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Case Video Agência Vortex"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            
            {/* Play Button Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary text-black flex items-center justify-center pl-1 transform group-hover:scale-110 transition-transform shadow-lg shadow-brand-primary/20">
                <Play className="w-6 h-6 fill-current" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8">
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Customer Story</p>
              <h3 className="text-white text-3xl md:text-4xl font-black leading-tight">Como a Agência Vortex reduziu 40% das fraudes</h3>
            </div>
          </motion.div>

          {/* Card 3: Audio Podcast (1x2) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 md:col-span-1 row-span-2 bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-white/5 rounded-[32px] overflow-hidden flex flex-col group"
          >
            <div className="h-1/2 relative overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Podcast cover"
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                <Mic className="w-5 h-5 text-brand-primary" />
              </div>
            </div>
            <div className="h-1/2 p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-white font-bold text-lg mb-2 leading-snug">&quot;O ROI ficou previsível.&quot;</h4>
                <p className="text-gray-400 text-sm line-clamp-3">A integração entre tracking e páginas encurtou nosso tempo operacional de horas para minutos.</p>
              </div>
              
              {/* Audio Player visual */}
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors border border-white/5">
                <div className="w-8 h-8 rounded-full bg-brand-primary text-black flex items-center justify-center pl-0.5 shrink-0">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                <div className="flex-1 flex gap-1 items-center h-4 opacity-50 overflow-hidden">
                  {[30, 80, 50, 90, 40, 70, 100, 60, 80, 40, 90, 50, 70, 30, 80].map((h, i) => (
                    <div key={i} className="w-1 bg-brand-primary rounded-full" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Stars/Reviews (1x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 md:col-span-1 row-span-1 bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col items-center justify-center text-center group hover:border-brand-primary/30 transition-colors"
          >
            <h3 className="text-6xl font-black text-white mb-2">4.9</h3>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-primary fill-brand-primary" />
              ))}
            </div>
            <p className="text-gray-400 text-sm font-medium leading-snug">Aprovado por mais de 2.600 afiliados.</p>
          </motion.div>

          {/* Card 5: Wide Text Quote (2x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-brand-primary/10 to-[#111111] border border-white/5 rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden group hover:border-brand-primary/30 transition-colors"
          >
            <Quote className="absolute top-6 right-6 w-24 h-24 text-brand-primary/5 -rotate-12 group-hover:text-brand-primary/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-primary fill-brand-primary" />
                ))}
              </div>
              <p className="text-xl text-white font-medium mb-6 leading-snug line-clamp-3">
                &quot;A Ratoeira Hub trouxe clareza total sobre a origem das vendas. Hoje decidimos com base em dado real, não em achismo. Mudou o jogo.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center font-bold text-brand-primary border border-brand-primary/30">
                  R
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Roberto Santiago</p>
                  <p className="text-gray-500 text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Mentor de Tráfego
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Small Video/Photo (1x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-1 md:col-span-1 row-span-1 bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden relative group cursor-pointer"
          >
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Small Case"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center pl-1 border border-white/20">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <p className="text-white font-bold leading-tight line-clamp-2">&quot;O resultado foi imediato na operação.&quot;</p>
              <p className="text-brand-primary text-xs mt-2 font-semibold">Juliana C.</p>
            </div>
          </motion.div>

          {/* Card 7: Small Text Quote (1x1) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="col-span-1 md:col-span-1 row-span-1 bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col justify-between group hover:border-brand-primary/30 transition-colors"
          >
            <div>
              <Quote className="w-6 h-6 text-brand-primary/40 mb-3 group-hover:text-brand-primary/60 transition-colors" />
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                &quot;A confiabilidade da plataforma me deu segurança para investir mais em tráfego sem medo.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center font-bold text-brand-primary text-xs border border-brand-primary/20">
                M
              </div>
              <div>
                <p className="text-white font-bold text-xs">Marcos V.</p>
                <p className="text-gray-500 text-[10px]">Investidor</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
