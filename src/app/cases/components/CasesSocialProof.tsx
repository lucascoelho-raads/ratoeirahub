"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, Mic, Quote, CheckCircle2, Award } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ─── Types ─── */
type CardType =
  | "award"
  | "video-large"
  | "audio"
  | "rating"
  | "quote-wide"
  | "video-small"
  | "quote-small";

interface BaseCard {
  type: CardType;
  colSpan: string;
  rowSpan: string;
}

interface AwardCard extends BaseCard {
  type: "award";
  year: string;
  label: string;
  title: string;
}

interface VideoLargeCard extends BaseCard {
  type: "video-large";
  image: string;
  tag: string;
  name: string;
  role: string;
}

interface AudioCard extends BaseCard {
  type: "audio";
  image: string;
  quote: string;
  description: string;
}

interface RatingCard extends BaseCard {
  type: "rating";
  score: string;
  reviews: string;
}

interface QuoteWideCard extends BaseCard {
  type: "quote-wide";
  quote: string;
  name: string;
  role: string;
  initial: string;
}

interface VideoSmallCard extends BaseCard {
  type: "video-small";
  image: string;
  quote: string;
  name: string;
}

interface QuoteSmallCard extends BaseCard {
  type: "quote-small";
  quote: string;
  name: string;
  role: string;
  initial: string;
}

type SocialCard =
  | AwardCard
  | VideoLargeCard
  | AudioCard
  | RatingCard
  | QuoteWideCard
  | VideoSmallCard
  | QuoteSmallCard;

/* ─── Data ─── */
const decks: SocialCard[][] = [
  // ── Deck A (original) ──
  [
    {
      type: "award",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1",
      year: "Vencedor 2026",
      label: "Vencedor 2026",
      title: "Plataforma de Tracking<br/>Mais Confiável",
    },
    {
      type: "video-large",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "Customer Story",
      name: "Michel Pogne",
      role: "Especialista em Tráfego Pago",
    },
    {
      type: "audio",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-2",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Foi a transição mais fácil que já fiz.",
      description:
        "Saí de um frankenstein de ferramentas para um dashboard único.",
    },
    {
      type: "rating",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1",
      score: "4.9",
      reviews: "Aprovado por +2.600 anunciantes.",
    },
    {
      type: "quote-wide",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-1",
      quote:
        "ROI triplicou no primeiro mês bloqueando bots e com páginas voando de tão rápidas. Sem explicação!",
      name: "Thiago Rocha",
      role: "Anunciante Top Player",
      initial: "T",
    },
    {
      type: "video-small",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      quote: "A assertividade salvou nossa operação.",
      name: "Lucas Martins",
    },
    {
      type: "quote-small",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1",
      quote:
        "A Ratoeira Hub mudou o jogo para mim. Tracking server-side impecável e conversão absurda.",
      name: "Michel Pogne",
      role: "Especialista",
      initial: "M",
    },
  ],

  // ── Deck B (novo) ──
  [
    {
      type: "award",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1",
      year: "Reconhecimento 2026",
      label: "Reconhecimento 2026",
      title: "Melhor Ecossistema<br/>de Ads do Brasil",
    },
    {
      type: "video-large",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "Depoimento",
      name: "Rafael Borges",
      role: "Gestor de Tráfego Profissional",
    },
    {
      type: "audio",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-2",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Melhor investimento que fiz no ano.",
      description:
        "Saí de planilhas manuais para automação total. O tempo que economizo paga a ferramenta sozinho.",
    },
    {
      type: "rating",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1",
      score: "4.9",
      reviews: "Aprovado por +2.600 anunciantes.",
    },
    {
      type: "quote-wide",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-1",
      quote:
        "Nosso CAC caiu 35% em 60 dias com tracking limpo e páginas otimizadas. Resultado surreal.",
      name: "André Lima",
      role: "Diretor de Performance",
      initial: "A",
    },
    {
      type: "video-small",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      quote: "As páginas convertem o dobro do que convertiam antes.",
      name: "Fernanda Souza",
    },
    {
      type: "quote-small",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1",
      quote:
        "Finalmente tenho clareza de qual criativo vende de verdade. O dashboard é simplesmente brutal.",
      name: "Rafael Borges",
      role: "Gestor de Tráfego",
      initial: "R",
    },
  ],
];

/* ─── Card Renderers ─── */
function AwardCard({ card }: { card: AwardCard }) {
  return (
    <div className="col-span-1 md:col-span-1 row-span-1 bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col items-center justify-center text-center group hover:border-brand-primary/30 transition-colors relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Award className="relative z-10 w-12 h-12 text-brand-primary mb-4" />
      <p className="relative z-10 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">
        {card.label}
      </p>
      <h3
        className="relative z-10 text-white font-bold text-lg leading-tight"
        dangerouslySetInnerHTML={{ __html: card.title }}
      />
    </div>
  );
}

function VideoLargeCard({ card }: { card: VideoLargeCard }) {
  return (
    <div className="col-span-1 md:col-span-2 row-span-2 bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden relative group cursor-pointer h-full">
      <Image
        src={card.image}
        alt={`Case Video ${card.name}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-brand-primary text-black flex items-center justify-center pl-1 transform group-hover:scale-110 transition-transform shadow-lg shadow-brand-primary/20">
          <Play className="w-6 h-6 fill-current" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-8">
        <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
          {card.tag}
        </p>
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-2">
          {card.name}
        </h3>
        <p className="text-gray-300 text-base sm:text-lg">{card.role}</p>
      </div>
    </div>
  );
}

function AudioCard({ card }: { card: AudioCard }) {
  return (
    <div className="col-span-1 md:col-span-1 row-span-2 bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-white/5 rounded-[32px] overflow-hidden flex flex-col group hover:border-brand-primary/30 transition-colors h-full">
      <div className="h-1/2 relative overflow-hidden">
        <Image
          src={card.image}
          alt="Podcast cover"
          fill
          className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
          <Mic className="w-5 h-5 text-brand-primary" />
        </div>
      </div>
      <div className="h-1/2 p-6 flex flex-col justify-between relative z-10">
        <div>
          <h4 className="text-white font-bold text-lg mb-2 leading-snug">
            &ldquo;{card.quote}&rdquo;
          </h4>
          <p className="text-gray-400 text-sm line-clamp-3">{card.description}</p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors border border-white/5 mt-4">
          <div className="w-8 h-8 rounded-full bg-brand-primary text-black flex items-center justify-center pl-0.5 shrink-0">
            <Play className="w-3 h-3 fill-current" />
          </div>
          <div className="flex-1 flex gap-1 items-center h-4 opacity-50 overflow-hidden">
            {[30, 80, 50, 90, 40, 70, 100, 60, 80, 40, 90, 50, 70, 30, 80].map(
              (h, i) => (
                <div
                  key={i}
                  className="w-1 bg-brand-primary rounded-full"
                  style={{ height: `${h}%` }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RatingCard({ card }: { card: RatingCard }) {
  return (
    <div className="col-span-1 md:col-span-1 row-span-1 bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col items-center justify-center text-center group hover:border-brand-primary/30 transition-colors relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="relative z-10 text-3xl sm:text-6xl font-black text-white mb-2">
        {card.score}
      </h3>
      <div className="relative z-10 flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-brand-primary fill-brand-primary" />
        ))}
      </div>
      <p className="relative z-10 text-gray-400 text-sm font-medium leading-snug">
        {card.reviews}
      </p>
    </div>
  );
}

function QuoteWideCard({ card }: { card: QuoteWideCard }) {
  return (
    <div className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-brand-primary/10 to-[#111111] border border-white/5 rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden group hover:border-brand-primary/30 transition-colors h-full">
      <Quote className="absolute top-6 right-6 w-24 h-24 text-brand-primary/5 -rotate-12 group-hover:text-brand-primary/10 transition-colors duration-500" />
      <div className="relative z-10">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-brand-primary fill-brand-primary" />
          ))}
        </div>
        <p className="text-lg sm:text-xl text-gray-400 font-medium mb-6 leading-snug line-clamp-3">
          &ldquo;{card.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center font-bold text-brand-primary border border-brand-primary/30">
            {card.initial}
          </div>
          <div>
            <p className="text-white font-bold text-sm">{card.name}</p>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              {card.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoSmallCard({ card }: { card: VideoSmallCard }) {
  return (
    <div className="col-span-1 md:col-span-1 row-span-1 bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden relative group cursor-pointer h-full">
      <Image
        src={card.image}
        alt={`Small Case ${card.name}`}
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
        <p className="text-white font-bold leading-tight line-clamp-2">
          &ldquo;{card.quote}&rdquo;
        </p>
        <p className="text-brand-primary text-xs mt-2 font-semibold">{card.name}</p>
      </div>
    </div>
  );
}

function QuoteSmallCard({ card }: { card: QuoteSmallCard }) {
  return (
    <div className="col-span-1 md:col-span-1 row-span-1 bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col justify-between group hover:border-brand-primary/30 transition-colors relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <Quote className="w-6 h-6 text-brand-primary/40 mb-3 group-hover:text-brand-primary/60 transition-colors" />
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
          &ldquo;{card.quote}&rdquo;
        </p>
      </div>
      <div className="relative z-10 flex items-center gap-3 mt-4">
        <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center font-bold text-brand-primary text-xs border border-brand-primary/20">
          {card.initial}
        </div>
        <div>
          <p className="text-white font-bold text-xs">{card.name}</p>
          <p className="text-gray-500 text-[10px]">{card.role}</p>
        </div>
      </div>
    </div>
  );
}

function CardSwitch({ card }: { card: SocialCard }) {
  switch (card.type) {
    case "award":
      return <AwardCard card={card} />;
    case "video-large":
      return <VideoLargeCard card={card} />;
    case "audio":
      return <AudioCard card={card} />;
    case "rating":
      return <RatingCard card={card} />;
    case "quote-wide":
      return <QuoteWideCard card={card} />;
    case "video-small":
      return <VideoSmallCard card={card} />;
    case "quote-small":
      return <QuoteSmallCard card={card} />;
    default:
      return null;
  }
}

/* ─── Main Component ─── */
export default function CasesSocialProof() {
  const [deckIndex, setDeckIndex] = useState(0);

  /* Ciclo automático a cada 5 segundos */
  useEffect(() => {
    const timer = setInterval(() => {
      setDeckIndex((prev) => (prev + 1) % decks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-16 md:pt-32 pb-12 md:pb-24 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold uppercase tracking-widest">
            Cases de Sucesso
          </div>
          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Eles confiaram. <br />
            <span className="text-brand-primary">Eles escalaram.</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl 3xl:max-w-[50rem] 4xl:max-w-[70rem] 3xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto">
            Não acredite apenas em nós. Veja o que os maiores players do mercado
            estão falando sobre o ecossistema Ratoeira Hub.
          </p>
        </motion.div>

        {/* Bento Grid with deck swap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={deckIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[240px] sm:auto-rows-[280px] md:auto-rows-[240px]"
          >
            {decks[deckIndex].map((card, i) => (
              <motion.div
                key={`${deckIndex}-${card.type}-${i}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                className={`${card.colSpan} ${card.rowSpan}`}
              >
                <CardSwitch card={card} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
