"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Instagram,
  Users,
  TrendingUp,
  Inbox,
  Send,
  Archive,
  Filter,
  Search,
} from "lucide-react";
import SpotlightBackground from "@/components/ui/spotlight-background";

function HeroVideoMockup({ onReady }: { onReady?: () => void }) {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsReady(true);
      onReady?.();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
      {hasError ? (
        <img
          src="/videos/video1-poster.jpg"
          alt="Dashboard Preview"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          src="/videos/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/video1-poster.jpg"
          className="w-full h-full object-cover"
          onLoadedData={() => setIsReady(true)}
          onError={() => setHasError(true)}
        />
      )}

      {!isReady && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="h-9 w-9 rounded-full border-2 border-[#FFB800]/30 border-t-[#FFB800] animate-spin" />
        </div>
      )}
    </div>
  );
}

// Mockups que alternam no lado direito
const slides = [
  {
    id: 0,
    label: "Dashboard de Conversões",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const panelInterval = setInterval(() => {
      setActivePanel((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(panelInterval);
  }, []);

  return (
    <section className="relative min-h-[100svh] lg:min-h-[120svh] bg-[#050505] z-0 overflow-hidden flex flex-col pt-20 lg:pt-24">
      <motion.div
        initial={false}
        animate={{ x: activePanel === 0 ? "0%" : "-50%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex w-[200%] bg-[#050505]"
      >
        <div className="relative w-1/2 h-full flex items-start justify-center pt-28 lg:pt-32">
          <SpotlightBackground className="absolute inset-0">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect x='4' y='4' width='112' height='112' rx='20' ry='20' fill='none' stroke='%23FFFFFF' stroke-width='1' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
                  backgroundSize: "120px 120px",
                }}
              />
              <div className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.18),transparent_70%)] blur-3xl pointer-events-none" />
              <div className="relative w-full h-full max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] 4xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 3xl:px-20 4xl:px-28 flex flex-col lg:grid lg:grid-cols-[1fr_1.1fr] 2xl:grid-cols-[1.25fr_1fr] 3xl:grid-cols-[1.35fr_1fr] 4xl:grid-cols-[1.45fr_1fr] gap-6 lg:gap-10 2xl:gap-14 3xl:gap-20 lg:items-start min-w-0 pt-28 lg:pt-32 pb-8 lg:pb-20">
                {/* Texto + CTA */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-6"
                >
                  <motion.h1
                    variants={itemVariants}
                    className="text-[clamp(2rem,8vw,5.25rem)] lg:text-[clamp(2.75rem,3.8vw,5.25rem)] 3xl:text-[clamp(3.5rem,4.2vw,7rem)] font-extrabold tracking-tight leading-[1.04] break-words text-center lg:text-left text-balance"
                  >
                    <span className="text-white">Cada venda tem uma origem.</span>
                    <br />
                    <span className="text-[#FFB800]">A Ratoeira te mostra qual é.</span>
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-[clamp(1rem,1.15vw,1.125rem)] 3xl:text-[clamp(1.125rem,1.2vw,1.5rem)] text-white/70 leading-relaxed max-w-xl 2xl:max-w-[34rem] 3xl:max-w-[46rem] 4xl:max-w-[56rem] text-center lg:text-left"
                  >
                    Rastreamento ~100% para Google Ads e Meta Ads. Visitas, leads e vendas num único dashboard — em tempo
                    real.
                  </motion.p>

                  <motion.div variants={itemVariants} className="flex flex-col gap-2 pt-2">
                    <Link
                      href="/planos#vamos-transformar"
                      className="inline-flex self-center lg:self-start items-center justify-center px-6 py-3 bg-brand-primary text-white font-semibold text-sm rounded-button hover:bg-brand-primary-hover transition-colors duration-200 text-center"
                    >
                      Começar grátis
                    </Link>
                    <span className="text-white/60 text-sm text-center lg:text-left">Plano gratuito disponível. Sem cartão.</span>
                  </motion.div>
                </motion.div>

                {/* Mockup - visível em todas as telas */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  className="relative lg:col-start-2 lg:row-start-1"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d0d0d] shadow-card-resting h-[clamp(280px,55vw,420px)] lg:h-[clamp(420px,46vh,640px)] 2xl:h-[clamp(520px,22vw,820px)] 3xl:h-[clamp(600px,24vw,900px)]">
                    <div className="bg-[#161616] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={activeSlide}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-neutral-500 text-[10px] font-semibold tracking-widest uppercase absolute left-1/2 -translate-x-1/2"
                        >
                          {slides[activeSlide].label}
                        </motion.span>
                      </AnimatePresence>
                      <div className="flex gap-1">
                        {slides.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i === activeSlide ? "bg-[#E6A600]" : "bg-white/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="relative h-[calc(100%-45px)] p-3">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSlide}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="absolute inset-3"
                        >
                          <HeroVideoMockup />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Cards flutuantes - desktop apenas */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -bottom-5 -left-8 bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-xl px-4 py-3 items-center gap-3 shadow-card-hover hidden lg:flex"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-text-primary text-xs font-bold">~100%</p>
                      <p className="text-text-secondary text-[10px]">conversões rastreadas</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="absolute -top-5 -right-4 bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-xl px-4 py-3 items-center gap-3 shadow-card-hover hidden lg:flex"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#E6A600]/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#E6A600]" />
                    </div>
                    <div>
                      <p className="text-text-primary text-xs font-bold">+2.600</p>
                      <p className="text-text-secondary text-[10px]">anunciantes ativos</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Slider Controls */}
                <div className="relative z-30 flex items-center justify-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-primary/50 mt-4 w-fit mx-auto lg:col-span-2">
                  <button 
                    onClick={() => setActivePanel((prev) => (prev === 0 ? 1 : 0))}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
                  <div className="flex gap-2 items-center px-2">
                    <button 
                      onClick={() => setActivePanel(0)}
                      className={`transition-all duration-300 rounded-full ${activePanel === 0 ? 'w-8 h-3 bg-[#FFB800]' : 'w-3 h-3 bg-white/40 hover:bg-white/60'}`}
                      aria-label="Slide 1"
                    />
                    <button 
                      onClick={() => setActivePanel(1)}
                      className={`transition-all duration-300 rounded-full ${activePanel === 1 ? 'w-8 h-3 bg-[#FFB800]' : 'w-3 h-3 bg-white/40 hover:bg-white/60'}`}
                      aria-label="Slide 2"
                    />
                  </div>

                  <button 
                    onClick={() => setActivePanel((prev) => (prev === 0 ? 1 : 0))}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </SpotlightBackground>
        </div>

        <div className="relative w-1/2 h-full flex items-start justify-center overflow-hidden pt-28 lg:pt-32">
          <SpotlightBackground className="absolute inset-0">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect x='4' y='4' width='112' height='112' rx='20' ry='20' fill='none' stroke='%23FFFFFF' stroke-width='1' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
                  backgroundSize: "120px 120px",
                }}
              />
              <div className="relative w-full h-full max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] 4xl:max-w-[140rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 3xl:px-20 4xl:px-28 flex flex-col lg:grid lg:grid-cols-[1fr_1.1fr] 2xl:grid-cols-[1.25fr_1fr] 3xl:grid-cols-[1.35fr_1fr] 4xl:grid-cols-[1.45fr_1fr] gap-6 lg:gap-10 2xl:gap-14 3xl:gap-20 lg:items-start min-w-0 pt-28 lg:pt-32 pb-8 lg:pb-20">
                {/* Texto */}
                <div className="flex flex-col gap-6">
                  <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] sm:text-[clamp(2.25rem,5vw,4rem)] lg:text-[clamp(2.75rem,3.8vw,5.25rem)] 3xl:text-[clamp(3.5rem,4.2vw,7rem)] font-extrabold tracking-tight leading-tight lg:leading-[1.04] text-white break-words text-center lg:text-left text-balance">
                    Páginas que convertem.{" "}
                    <span style={{ color: "var(--color-brand-primary)" }}>
                      Integradas ao seu tracking desde o primeiro clique.
                    </span>
                  </h2>
                  <p className="text-[clamp(0.875rem,3vw,1.125rem)] sm:text-[clamp(1rem,2vw,1.125rem)] 3xl:text-[clamp(1.125rem,1.2vw,1.5rem)] text-white/70 leading-relaxed max-w-2xl 2xl:max-w-[34rem] 3xl:max-w-[46rem] 4xl:max-w-[56rem] text-center lg:text-left">
                    Construtor visual com templates prontos, Flash Pages ultra-rápidas e geração por IA. Cada página já
                    nasce com o tracking integrado — sem scripts avulsos, sem configuração manual, sem dados perdidos
                    entre a página e a campanha.
                  </p>
                </div>

                {/* Mockup Pages - visível em todas as telas */}
                <div className="relative lg:col-start-2 lg:row-start-1">
                  <div className="relative w-full">
                    <img
                      src="/paginasqueconvertem.png"
                      alt="Ratoeira Pages Preview"
                      className="w-full h-auto rounded-3xl border border-neutral-200 shadow-card-resting"
                    />
                  </div>
                </div>

                {/* CTA - separado, abaixo do mockup no mobile */}
                <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 lg:col-start-1">
                  <Link
                    href="/solucoes/ratoeira-pages"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold text-sm rounded-button hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    Conhecer o Ratoeira Pages →
                  </Link>
                </div>

                {/* Slider Controls */}
                <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-primary/50">
                  <button 
                    onClick={() => setActivePanel((prev) => (prev === 0 ? 1 : 0))}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
                  <div className="flex gap-2 items-center px-2">
                    <button 
                      onClick={() => setActivePanel(0)}
                      className={`transition-all duration-300 rounded-full ${activePanel === 0 ? 'w-8 h-3 bg-[#FFB800]' : 'w-3 h-3 bg-white/40 hover:bg-white/60'}`}
                      aria-label="Slide 1"
                    />
                    <button 
                      onClick={() => setActivePanel(1)}
                      className={`transition-all duration-300 rounded-full ${activePanel === 1 ? 'w-8 h-3 bg-[#FFB800]' : 'w-3 h-3 bg-white/40 hover:bg-white/60'}`}
                      aria-label="Slide 2"
                    />
                  </div>

                  <button 
                    onClick={() => setActivePanel((prev) => (prev === 0 ? 1 : 0))}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </SpotlightBackground>
        </div>
      </motion.div>
    </section>
  );
}
