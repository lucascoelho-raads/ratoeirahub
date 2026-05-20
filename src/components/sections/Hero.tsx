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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const readyNotifiedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // autoplay bloqueado é OK — o vídeo ainda pode estar carregado
      }
    };

    tryPlay();
  }, [retryCount]);

  // Timeout de segurança: sempre remove o spinner após 5s
  useEffect(() => {
    const timer = window.setTimeout(() => {
      console.log("[HeroVideo] Safety timeout fired — forcing ready state");
      setIsReady(true);
      if (!readyNotifiedRef.current) {
        readyNotifiedRef.current = true;
        onReady?.();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [retryCount, onReady]);

  const notifyReady = () => {
    if (readyNotifiedRef.current) return;
    readyNotifiedRef.current = true;
    onReady?.();
  };

  const markReady = () => {
    console.log("[HeroVideo] markReady called");
    setIsReady(true);
    notifyReady();
  };

  const handleError = () => {
    console.error("[HeroVideo] Video error event fired");
    setIsReady(false);
    if (retryCount < 2) {
      setRetryCount((v) => v + 1);
    } else {
      // Depois de 3 tentativas, desistimos e escondemos o spinner
      console.warn("[HeroVideo] Max retries reached — hiding spinner");
      setIsReady(true);
      notifyReady();
    }
  };

  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
      <video
        key={retryCount}
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        onLoadedMetadata={(event) => {
          console.log("[HeroVideo] onLoadedMetadata");
          try {
            event.currentTarget.currentTime = 0.1;
          } catch {
            // ignore
          }
          markReady();
        }}
        onCanPlay={(event) => {
          console.log("[HeroVideo] onCanPlay — readyState:", event.currentTarget.readyState);
          markReady();
        }}
        onLoadedData={(event) => {
          console.log("[HeroVideo] onLoadedData");
          markReady();
        }}
        onPlaying={() => {
          console.log("[HeroVideo] onPlaying");
          markReady();
        }}
        onError={handleError}
      >
        <source src={`/videos/video1.mp4?v=${retryCount}`} type="video/mp4" />
      </video>

      {!isReady && (
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
    <section className="relative min-h-[100svh] bg-[#050505] z-0 overflow-hidden">
      {/* Slider Controls - Absolute positioned at bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-primary/50">
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

      <motion.div
        initial={false}
        animate={{ x: activePanel === 0 ? "0%" : "-50%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex w-[200%] bg-[#050505]"
      >
        <div className="relative w-1/2 h-full flex items-center justify-center">
          <SpotlightBackground className="absolute inset-0">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect x='4' y='4' width='112' height='112' rx='20' ry='20' fill='none' stroke='%23FFFFFF' stroke-width='1' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
                  backgroundSize: "120px 120px",
                }}
              />
              <div className="relative w-full h-full max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 lg:px-12 2xl:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] 2xl:grid-cols-[1fr_1.25fr] gap-16 2xl:gap-20 items-center">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-6"
                >
                  <motion.h1
                    variants={itemVariants}
                    className="text-[clamp(2.75rem,3.8vw,5.25rem)] font-extrabold tracking-tight leading-[1.04]"
                  >
                    <span className="text-white">Cada venda tem uma origem.</span>
                    <br />
                    <span className="text-[#FFB800]">A Ratoeira te mostra qual é.</span>
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-[clamp(1rem,1.15vw,1.125rem)] text-white/70 leading-relaxed max-w-xl"
                  >
                    Rastreamento ~100% para Google Ads e Meta Ads. Visitas, leads e vendas num único dashboard — em tempo
                    real.
                  </motion.p>

                  <motion.div variants={itemVariants} className="flex flex-col gap-2 pt-2">
                    <Link
                      href="#demo"
                      className="inline-flex self-start items-center justify-center px-6 py-3 bg-brand-primary text-white font-semibold text-sm rounded-button hover:bg-brand-primary-hover transition-colors duration-200 text-center"
                    >
                      Começar grátis
                    </Link>
                    <span className="text-white/60 text-sm">Plano gratuito disponível. Sem cartão.</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  className="relative hidden lg:block"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d0d0d] shadow-card-resting h-[clamp(420px,46vh,640px)] 2xl:h-[clamp(520px,22vw,820px)]">
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

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -bottom-5 -left-8 bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-card-hover"
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
                    className="absolute -top-5 -right-4 bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-card-hover"
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
              </div>
            </SpotlightBackground>
        </div>

        <div className="relative w-1/2 h-full flex items-center justify-center">
          <SpotlightBackground className="absolute inset-0">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect x='4' y='4' width='112' height='112' rx='20' ry='20' fill='none' stroke='%23FFFFFF' stroke-width='1' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
                  backgroundSize: "120px 120px",
                }}
              />
              <div className="relative w-full h-full max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 lg:px-12 2xl:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] 2xl:grid-cols-[1fr_1.25fr] gap-16 2xl:gap-20 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="text-[clamp(2.75rem,3.8vw,5.25rem)] font-extrabold tracking-tight leading-[1.04] text-white">
                  Páginas que convertem.{" "}
                  <span style={{ color: "var(--color-brand-primary)" }}>
                    Integradas ao seu tracking desde o primeiro clique.
                  </span>
                </h2>
                <p className="text-[clamp(1rem,1.15vw,1.125rem)] text-white/70 leading-relaxed max-w-2xl">
                  Construtor visual com templates prontos, Flash Pages ultra-rápidas e geração por IA. Cada página já
                  nasce com o tracking integrado — sem scripts avulsos, sem configuração manual, sem dados perdidos
                  entre a página e a campanha.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href="/solucoes/ratoeira-pages"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold text-sm rounded-button hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    Conhecer o Ratoeira Pages →
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative h-[clamp(420px,46vh,640px)] 2xl:h-[clamp(520px,22vw,820px)] rounded-3xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-[#FFF8E6] via-white to-orange-50 shadow-card-resting">
                  <div className="absolute top-6 left-6 right-6 h-12 rounded-xl bg-white/90 border border-neutral-200 flex items-center px-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60 mr-1.5" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60 mr-1.5" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60 mr-3" />
                    <span className="text-xs font-semibold text-neutral-500">
                      Ratoeira Pages Preview
                    </span>
                  </div>
                  <div className="absolute inset-x-6 top-24 bottom-6 rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm">
                    <div className="h-24 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 mb-4 flex items-center px-5">
                      <span className="text-white text-lg font-black">
                        Template de Alta Conversão
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-lg bg-neutral-100 border border-neutral-200" />
                      <div className="h-20 rounded-lg bg-neutral-100 border border-neutral-200" />
                      <div className="h-10 rounded-lg bg-amber-100 border border-amber-200 col-span-2 flex items-center justify-center text-amber-700 text-sm font-bold">
                        Publicar em minutos
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-amber-200/70 blur-2xl" />
                </div>
              </div>
              </div>
            </SpotlightBackground>
        </div>
      </motion.div>
    </section>
  );
}
