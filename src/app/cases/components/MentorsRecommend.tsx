"use client";

import { motion, useInView } from "framer-motion";
import { BadgeCheck, Quote, Users } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function MentorsRecommend() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[92%] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#111111] leading-tight tracking-tight">
            Os Maiores Mentores <br />
            <span className="text-brand-primary">Indicam a Ratoeira Hub</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[240px] sm:auto-rows-[280px] md:auto-rows-[240px]">
          
          {/* Card 1: Large Video/Photo (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-2 row-span-2 bg-[#161616] border border-black/10 rounded-[32px] overflow-hidden relative group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Rafael Cardoso"
              fill 
              className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-8">
              <BadgeCheck className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black mb-2 leading-tight">Rafael Cardoso</h3>
              <p className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-6">Mentor de Agências</p>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                &quot;Escalar tráfego sem a Ratoeira Hub é voar às cegas. A ferramenta é o diferencial competitivo das agências que faturam alto.&quot;
              </p>
            </div>
          </motion.div>

          {/* Card 2: Wide Quote (2x1) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 md:col-span-2 row-span-1 bg-[#111111] border border-black/10 rounded-[32px] p-8 flex flex-col justify-center relative group overflow-hidden hover:border-brand-primary/30 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Quote className="absolute top-6 right-6 w-20 h-20 text-brand-primary/5 -rotate-12 group-hover:text-brand-primary/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-gray-400 font-medium mb-6 leading-snug line-clamp-3">
                &quot;A única plataforma de tracking que recomendo para meus alunos. Simples, robusta e não perde dados.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary/20">
                  <Image 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Alexandre Oliveira" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold flex items-center gap-1.5">
                    Alexandre Oliveira <BadgeCheck className="w-4 h-4 text-brand-primary" />
                  </h4>
                  <p className="text-gray-500 text-sm">Estrategista Digital</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Small Text Quote (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 md:col-span-1 row-span-1 bg-[#111111] border border-black/10 rounded-[32px] p-6 flex flex-col justify-between group overflow-hidden relative hover:border-brand-primary/30 transition-colors"
          >
            <div className="relative z-10">
              <Quote className="w-6 h-6 text-brand-primary/40 mb-3 group-hover:text-brand-primary/60 transition-colors" />
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                &quot;A velocidade das páginas aliada ao tracking cirúrgico fez nossos CPLs caírem quase pela metade nos últimos lançamentos.&quot;
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 mt-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Amanda Silva" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm flex items-center gap-1">
                  Amanda Silva <BadgeCheck className="w-3 h-3 text-brand-primary" />
                </h4>
                <p className="text-gray-500 text-xs">Lançamentos</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Stats/Badge (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 md:col-span-1 row-span-1 bg-brand-primary border border-black/10 rounded-[32px] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:brightness-110 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            <div className="relative z-10">
              <Users className="w-8 h-8 text-black mx-auto mb-3 opacity-80" />
              <h3 className="text-2xl sm:text-5xl font-black text-black mb-1">+50</h3>
              <p className="text-black/80 font-bold uppercase tracking-widest text-xs mb-3">Masterminds</p>
              <p className="text-black/70 text-xs font-semibold leading-tight px-2">
                Recomendado oficialmente nas maiores imersões do Brasil.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
