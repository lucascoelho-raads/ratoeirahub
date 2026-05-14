"use client";

import { useState, useEffect } from "react";
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

// Mockups que alternam no lado direito
const slides = [
  {
    id: 0,
    label: "Central de Atendimento",
    content: (
      <div className="w-full h-full bg-[#111111] rounded-xl overflow-hidden flex text-left">
        {/* Sidebar */}
        <div className="w-48 border-r border-white/5 p-3 flex flex-col gap-1">
          <div className="flex items-center gap-2 px-2 py-1.5 mb-2">
            <div className="w-5 h-5 rounded bg-[#E6A600] flex items-center justify-center">
              <MessageCircle className="w-3 h-3 text-black" />
            </div>
            <span className="text-white text-[11px] font-bold">Ratoeira Hub</span>
          </div>
          {[
            { icon: Inbox, label: "Entrada", count: 24 },
            { icon: Send, label: "Enviados", count: 0 },
            { icon: Archive, label: "Arquivados", count: 142 },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-2 py-1.5 rounded-md text-[11px] ${i === 0 ? "bg-white/10 text-white" : "text-neutral-500"}`}
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </div>
              {item.count > 0 && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${i === 0 ? "bg-[#E6A600] text-black font-bold" : "bg-white/10"}`}>
                  {item.count}
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Conversation list */}
        <div className="flex-1 flex flex-col">
          <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-neutral-500" />
            <span className="text-neutral-500 text-[11px]">Buscar conversas...</span>
            <Filter className="w-3.5 h-3.5 text-neutral-500 ml-auto" />
          </div>
          <div className="flex-1 overflow-hidden">
            {[
              { name: "Ana Lima", msg: "Quero saber sobre os planos!", time: "agora", icon: MessageCircle, color: "bg-emerald-500", unread: true },
              { name: "Carlos Mendes", msg: "Resolvi meu problema em 2 minutos!", time: "3 min", icon: Phone, color: "bg-blue-500", unread: false },
              { name: "Marina Costa", msg: "Atendimento incrível! ⭐⭐⭐⭐⭐", time: "12 min", icon: Instagram, color: "bg-pink-500", unread: false },
              { name: "Roberto Silva", msg: "Preciso de um orçamento urgente", time: "1h", icon: MessageCircle, color: "bg-amber-500", unread: true },
            ].map((conv, i) => (
              <div key={i} className={`flex items-center gap-3 px-3 py-2.5 border-b border-white/[0.03] cursor-pointer hover:bg-white/5 ${conv.unread ? "bg-white/[0.03]" : ""}`}>
                <div className={`w-8 h-8 rounded-full ${conv.color} flex items-center justify-center flex-shrink-0`}>
                  <conv.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-[11px] font-semibold truncate">{conv.name}</span>
                    <span className="text-neutral-600 text-[9px] ml-1">{conv.time}</span>
                  </div>
                  <p className="text-neutral-500 text-[10px] truncate">{conv.msg}</p>
                </div>
                {conv.unread && <div className="w-1.5 h-1.5 rounded-full bg-[#E6A600] flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    label: "Painel de Performance",
    content: (
      <div className="w-full h-full bg-[#111111] rounded-xl overflow-hidden p-5 text-left">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold">Visão Geral</p>
            <h3 className="text-white font-bold text-sm">Campanha — Meta Ads</h3>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 text-[10px] font-bold uppercase">Ao vivo</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Receita", value: "R$ 142k", change: "+12%", positive: true },
            { label: "ROI", value: "8.4x", change: "+2x", positive: true },
            { label: "CPA", value: "R$ 4,20", change: "-18%", positive: true },
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.04] rounded-lg p-3 border border-white/5">
              <p className="text-neutral-500 text-[9px] uppercase tracking-widest font-bold mb-1">{stat.label}</p>
              <p className="text-white text-lg font-black tracking-tight">{stat.value}</p>
              <span className="text-emerald-400 text-[10px] font-bold">{stat.change}</span>
            </div>
          ))}
        </div>
        {/* Mini bar chart */}
        <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
          <p className="text-neutral-500 text-[10px] font-bold mb-3 uppercase tracking-widest">Vendas — últimos 7 dias</p>
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 50, 80, 55, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm"
                  style={{ height: `${h}%`, background: i === 5 ? "#E6A600" : "rgba(255,255,255,0.15)" }}
                />
                <span className="text-[8px] text-neutral-600">{["S", "T", "Q", "Q", "S", "S", "D"][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Leads & Contatos",
    content: (
      <div className="w-full h-full bg-[#111111] rounded-xl overflow-hidden p-5 text-left">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold">CRM</p>
            <h3 className="text-white font-bold text-sm">Pipeline de Leads</h3>
          </div>
          <div className="flex gap-1">
            <div className="px-2.5 py-1 bg-white/5 rounded-button text-neutral-400 text-[10px] font-semibold border border-white/5">Filtrar</div>
            <div className="px-2.5 py-1 bg-[#E6A600] rounded-button text-black text-[10px] font-bold">+ Novo</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 h-[calc(100%-60px)]">
          {[
            { stage: "Novos", color: "border-blue-500/30", count: 12, leads: ["Ana Lima", "Pedro Costa", "Maria S."] },
            { stage: "Em contato", color: "border-amber-500/30", count: 8, leads: ["Carlos M.", "Juliana R.", "Bruno T."] },
            { stage: "Convertidos", color: "border-emerald-500/30", count: 5, leads: ["Rafael K.", "Camila V.", "Diego F."] },
          ].map((col, i) => (
            <div key={i} className={`bg-white/[0.025] rounded-lg border ${col.color} p-2 flex flex-col gap-1.5`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-white text-[10px] font-bold">{col.stage}</span>
                <span className="text-neutral-500 text-[9px] bg-white/5 px-1.5 py-0.5 rounded-full">{col.count}</span>
              </div>
              {col.leads.map((lead, j) => (
                <div key={j} className="bg-white/[0.04] rounded-md px-2 py-1.5 border border-white/[0.05]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center text-[8px] font-bold text-white">
                      {lead[0]}
                    </div>
                    <span className="text-white text-[9px] font-medium truncate">{lead}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
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
    <section className="relative h-screen bg-surface-default z-0 overflow-hidden">
      {/* Slider Controls - Absolute positioned at bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
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

      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activePanel}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-white flex items-center justify-center"
        >
          {activePanel === 0 ? (
            <>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect x='4' y='4' width='112' height='112' rx='20' ry='20' fill='none' stroke='%23000000' stroke-width='1' stroke-opacity='0.04'/%3E%3C/svg%3E")`,
                  backgroundSize: "120px 120px",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 30%, rgba(255,255,255,0.6) 100%)",
                }}
              />
              <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-6"
                >
                  <motion.h1
                    variants={itemVariants}
                    className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06]"
                  >
                    <span className="text-text-primary">Atendimento que vende.</span>
                    <br />
                    <span className="text-[#FFB800]">Sem perder dinheiro.</span>
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-text-secondary leading-relaxed max-w-md"
                  >
                    3000+ clientes usam a Ratoeira Hub para trackear e converter vendas
                    sem desperdiçar verba com bots.
                  </motion.p>

                  <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
                    <Link
                      href="#demo"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-black font-semibold text-sm rounded-button hover:bg-brand-primary-hover transition-colors duration-200"
                    >
                      Começar Agora
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  className="relative hidden lg:block"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d0d0d] shadow-card-resting"
                    style={{ height: "420px" }}
                  >
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
                          {slides[activeSlide].content}
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
                      <p className="text-text-primary text-xs font-bold">+42% Conversão</p>
                      <p className="text-text-secondary text-[10px]">Último mês</p>
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
                      <p className="text-text-primary text-xs font-bold">+1.500 clientes</p>
                      <p className="text-text-secondary text-[10px]">Empresas ativas</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </>
          ) : (
            <>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect x='4' y='4' width='112' height='112' rx='20' ry='20' fill='none' stroke='%23000000' stroke-width='1' stroke-opacity='0.04'/%3E%3C/svg%3E")`,
                  backgroundSize: "120px 120px",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 30%, rgba(255,255,255,0.6) 100%)",
                }}
              />
              <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] text-black">
                  Sua Página Está Pronta{" "}
                  <span style={{ color: "var(--color-brand-primary)" }}>Para O Próximo Clique?</span>
                </h2>
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
                  Enquanto você rastreia com precisão cada origem de venda, o
                  Ratoeira Pages entrega templates prontos para publicação com foco
                  em conversão, velocidade e experiência mobile.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href="#planos"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-black font-semibold text-sm rounded-button hover:bg-brand-primary-hover transition-colors duration-200"
                  >
                    Quero Conhecer o Hub
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative h-[420px] rounded-3xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-[#FFF8E6] via-white to-orange-50 shadow-card-resting">
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
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
