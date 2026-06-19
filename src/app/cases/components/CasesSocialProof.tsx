"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, Mic, Quote, CheckCircle2, Award, X } from "lucide-react";
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
  | "image-small"
  | "quote-small"
  | "youtube-short";

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
  image?: string;
  position?: "top" | "center" | "bottom";
}

interface VideoLargeCard extends BaseCard {
  type: "video-large";
  image: string;
  videoSrc?: string;
  tag: string;
  name: string;
  role: string;
}

interface AudioCard extends BaseCard {
  type: "audio";
  image: string;
  quote: string;
  name?: string;
  description?: string;
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
  image?: string;
  nameColor?: "white" | "primary";
}

interface VideoSmallCard extends BaseCard {
  type: "video-small";
  image: string;
  quote: string;
  name: string;
}

interface ImageSmallCard extends BaseCard {
  type: "image-small";
  image: string;
  quote: string;
  name: string;
  fit?: "cover" | "contain";
  aspectRatio?: string;
  position?: "top" | "center" | "bottom";
  overlay?: boolean;
}

interface QuoteSmallCard extends BaseCard {
  type: "quote-small";
  quote: string;
  name: string;
  role: string;
  initial: string;
}

interface YoutubeShortCard extends BaseCard {
  type: "youtube-short";
  url?: string;
  videoSrc?: string;
  thumbnail: string;
  title: string;
  speaker: string;
}

type SocialCard =
  | AwardCard
  | VideoLargeCard
  | AudioCard
  | RatingCard
  | QuoteWideCard
  | VideoSmallCard
  | ImageSmallCard
  | QuoteSmallCard
  | YoutubeShortCard;

function getYouTubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/shorts\/|youtube\.com\/watch\?v=|youtu\.be\/)([^/?&]+)/
  );
  return match ? match[1] : "";
}

/* ─── Data ─── */
const decks: SocialCard[][] = [
  // ── Deck A ──
  [
    {
      type: "youtube-short",
      colSpan: "col-span-1",
      rowSpan: "row-span-1 sm:row-span-2 lg:row-span-2",
      url: "https://www.youtube.com/shorts/5edTCBZu-ds",
      thumbnail: "https://img.youtube.com/vi/5edTCBZu-ds/maxresdefault.jpg",
      title: "Depoimento 1",
      speaker: "Amanda & Lígia - Fênix",
    },
    {
      type: "youtube-short",
      colSpan: "col-span-1",
      rowSpan: "row-span-1 sm:row-span-2 lg:row-span-2",
      videoSrc:
        "/depoimentos/Michael%20Pogne%20indica%20a%20Ratoeira%20Ads%20para%20afiliados.mp4",
      thumbnail: "/depoimentos/michel_pogne_thumb.jpg",
      title: "Customer Story",
      speaker: "Michel Pogne",
    },
    {
      type: "youtube-short",
      colSpan: "col-span-1",
      rowSpan: "row-span-1 sm:row-span-2 lg:row-span-2",
      url: "https://www.youtube.com/shorts/fmfF1_7g0mM",
      thumbnail: "https://img.youtube.com/vi/fmfF1_7g0mM/maxresdefault.jpg",
      title: "Depoimento Bruno",
      speaker: "Bruno Matos",
    },
    {
      type: "quote-wide",
      colSpan: "col-span-2",
      rowSpan: "row-span-1",
      quote: "faço gringa também, Buygoods, e não falhou nenhuma",
      name: "Larissa Gomes",
      role: "",
      initial: "L",
      image: "/depoimentos/depoimento5.jpeg",
      nameColor: "primary",
    },
    {
      type: "image-small",
      colSpan: "col-span-2",
      rowSpan: "row-span-1",
      image: "/depoimentos/depoimento2.jpeg",
      quote: "A ferramente é ótima!",
      name: "Karina",
    },
  ],

  // ── Deck B ──
  [
    {
      type: "award",
      colSpan: "col-span-2",
      rowSpan: "row-span-1 sm:row-span-2 lg:row-span-2",
      year: "",
      label: "",
      title: "",
      image: "/depoimentos/depoimento3.jpeg",
      position: "bottom",
    },
    {
      type: "youtube-short",
      colSpan: "col-span-1",
      rowSpan: "row-span-1 sm:row-span-2 lg:row-span-2",
      url: "https://www.youtube.com/shorts/qdP5z0bFfP8",
      thumbnail: "https://img.youtube.com/vi/qdP5z0bFfP8/maxresdefault.jpg",
      title: "Depoimento 3",
      speaker: "Jéssica Maciel",
    },
    {
      type: "youtube-short",
      colSpan: "col-span-1",
      rowSpan: "row-span-1 sm:row-span-2 lg:row-span-2",
      url: "https://www.youtube.com/shorts/04xowV0-fPw",
      thumbnail: "https://img.youtube.com/vi/04xowV0-fPw/maxresdefault.jpg",
      title: "Depoimento 4",
      speaker: "Alexander Lopes",
    },
    {
      type: "audio",
      colSpan: "col-span-2 lg:col-start-2",
      rowSpan: "row-span-1",
      image: "/depoimentos/depoimento4.png",
      quote: "Com a Ratoeira tenho mais cliques qualificados",
    },
  ],
];

/* ─── Card Renderers ─── */
function AwardCard({ card }: { card: AwardCard }) {
  return (
    <div className="bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col items-center justify-center text-center group hover:border-brand-primary/30 transition-colors relative overflow-hidden h-full">
      {card.image ? (
        <>
          <Image
            src={card.image}
            alt={card.title}
            fill
            className={`object-cover ${
              card.position === "top"
                ? "object-top"
                : card.position === "bottom"
                ? "object-bottom"
                : "object-center"
            } transition-transform duration-700 group-hover:scale-105`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      {card.label && (
        <p className="relative z-10 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-2">
          {card.label}
        </p>
      )}
      {card.title && (
        <h3
          className="relative z-10 text-white font-bold text-lg leading-tight"
          dangerouslySetInnerHTML={{ __html: card.title }}
        />
      )}
    </div>
  );
}

function VideoLargeCard({
  card,
  onClick,
}: {
  card: VideoLargeCard;
  onClick: () => void;
}) {
  return (
    <div
      className="bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden relative group cursor-pointer h-full"
      onClick={onClick}
    >
      {card.videoSrc ? (
        <video
          src={card.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 bg-[#0a0a0a]"
        />
      ) : (
        <Image
          src={card.image}
          alt={`Case Video ${card.name}`}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 bg-[#0a0a0a]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
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

function AudioCard({
  card,
  onImageClick,
}: {
  card: AudioCard;
  onImageClick: (src: string) => void;
}) {
  return (
    <div
      className="bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden relative group hover:border-brand-primary/30 transition-colors h-full cursor-pointer"
      onClick={() => onImageClick(card.image)}
    >
      <Image
        src={card.image}
        alt="Depoimento"
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6">
        <p className="text-white font-bold leading-tight line-clamp-2">
          &ldquo;{card.quote}&rdquo;
        </p>
        {card.name && (
          <p className="text-brand-primary text-xs mt-2 font-semibold">
            {card.name}
          </p>
        )}
      </div>
    </div>
  );
}

function RatingCard({ card }: { card: RatingCard }) {
  return (
    <div className="bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col items-center justify-center text-center group hover:border-brand-primary/30 transition-colors relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="relative z-10 text-3xl sm:text-6xl font-black text-white mb-2">
        {card.score}
      </h3>
      <div className="relative z-10 flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-brand-primary fill-brand-primary"
          />
        ))}
      </div>
      <p className="relative z-10 text-gray-400 text-sm font-medium leading-snug">
        {card.reviews}
      </p>
    </div>
  );
}

function QuoteWideCard({
  card,
  onImageClick,
}: {
  card: QuoteWideCard;
  onImageClick: (src: string) => void;
}) {
  return (
    <div
      className={`border border-white/5 rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden group transition-colors h-full ${
        card.image
          ? "cursor-pointer hover:border-brand-primary/30"
          : "bg-gradient-to-br from-brand-primary/10 to-[#111111] hover:border-brand-primary/30"
      }`}
      onClick={() => card.image && onImageClick(card.image)}
    >
      {card.image ? (
        <>
          <Image
            src={card.image}
            alt={`Depoimento ${card.name}`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </>
      ) : (
        <Quote className="absolute top-6 right-6 w-24 h-24 text-brand-primary/5 -rotate-12 group-hover:text-brand-primary/10 transition-colors duration-500" />
      )}
      <div className="relative z-10 max-w-2xl">
        <p className="text-lg sm:text-xl text-gray-200 font-medium mb-6 leading-snug line-clamp-3">
          &ldquo;{card.quote}&rdquo;
        </p>
        <div>
          <p className={`font-bold text-sm ${card.nameColor === "primary" ? "text-brand-primary" : "text-white"}`}>{card.name}</p>
          {card.role && (
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              {card.role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function VideoSmallCard({ card }: { card: VideoSmallCard }) {
  return (
    <div className="bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden relative group cursor-pointer h-full">
      <Image
        src={card.image}
        alt={`Small Case ${card.name}`}
        fill
        className="object-contain transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-70"
        sizes="(max-width: 768px) 100vw, 25vw"
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
        <p className="text-brand-primary text-xs mt-2 font-semibold">
          {card.name}
        </p>
      </div>
    </div>
  );
}

function ImageSmallCard({
  card,
  onImageClick,
}: {
  card: ImageSmallCard;
  onImageClick: (src: string) => void;
}) {
  return (
    <div
      className={`bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden relative group cursor-pointer ${card.aspectRatio ? "h-auto" : "h-full"}`}
      style={card.aspectRatio ? { aspectRatio: card.aspectRatio } : undefined}
      onClick={() => onImageClick(card.image)}
    >
      <Image
        src={card.image}
        alt={`Depoimento ${card.name}`}
        fill
        className={`${
          card.fit === "contain" ? "object-contain" : "object-cover"
        } ${
          card.position === "top"
            ? "object-top"
            : card.position === "bottom"
            ? "object-bottom"
            : "object-center"
        } transition-transform duration-700 group-hover:scale-105`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {card.overlay !== false && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      )}
      {(card.quote || card.name) && (
        <div className="absolute bottom-0 left-0 w-full p-6">
          {card.quote && (
            <p className="text-white font-bold leading-tight line-clamp-2">
              &ldquo;{card.quote}&rdquo;
            </p>
          )}
          {card.name && (
            <p className="text-brand-primary text-xs mt-2 font-semibold">
              {card.name}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function QuoteSmallCard({ card }: { card: QuoteSmallCard }) {
  return (
    <div className="bg-[#111111] border border-white/5 rounded-[32px] p-6 flex flex-col justify-between group hover:border-brand-primary/30 transition-colors relative overflow-hidden h-full">
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
          <p className="text-gray-500 text-xs">{card.role}</p>
        </div>
      </div>
    </div>
  );
}

function YoutubeShortCard({
  card,
  onClick,
}: {
  card: YoutubeShortCard;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#161616] border border-white/5 rounded-[24px] sm:rounded-[32px] overflow-hidden relative group cursor-pointer h-full text-left w-full hover:border-brand-primary/30 transition-colors"
    >
      <img
        src={card.thumbnail}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-brand-primary text-black flex items-center justify-center pl-1 transform group-hover:scale-110 transition-transform shadow-lg shadow-brand-primary/20">
          <Play className="w-5 h-5 fill-current" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-5">
        <p className="text-white font-bold text-sm leading-tight">
          {card.speaker}
        </p>
      </div>
    </button>
  );
}

function CardSwitch({
  card,
  onVideoClick,
  onImageClick,
  onYouTubeShortClick,
}: {
  card: SocialCard;
  onVideoClick: (src: string) => void;
  onImageClick: (src: string) => void;
  onYouTubeShortClick: (videoId: string) => void;
}) {
  switch (card.type) {
    case "award":
      return <AwardCard card={card} />;
    case "video-large":
      return (
        <VideoLargeCard
          card={card}
          onClick={() => card.videoSrc && onVideoClick(card.videoSrc)}
        />
      );
    case "audio":
      return <AudioCard card={card} onImageClick={onImageClick} />;
    case "rating":
      return <RatingCard card={card} />;
    case "quote-wide":
      return <QuoteWideCard card={card} onImageClick={onImageClick} />;
    case "video-small":
      return <VideoSmallCard card={card} />;
    case "image-small":
      return <ImageSmallCard card={card} onImageClick={onImageClick} />;
    case "quote-small":
      return <QuoteSmallCard card={card} />;
    case "youtube-short":
      return (
        <YoutubeShortCard
          card={card}
          onClick={() =>
            card.videoSrc
              ? onVideoClick(card.videoSrc)
              : onYouTubeShortClick(getYouTubeId(card.url ?? ""))
          }
        />
      );
    default:
      return null;
  }
}

/* ─── Main Component ─── */
export default function CasesSocialProof() {
  const [deckIndex, setDeckIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeYouTubeShort, setActiveYouTubeShort] = useState<string | null>(null);

  /* Ciclo automático a cada 5 segundos */
  useEffect(() => {
    const timer = setInterval(() => {
      setDeckIndex((prev) => (prev + 1) % decks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="pt-16 md:pt-32 pb-12 md:pb-24 bg-[#050505] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
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
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto">
              Não acredite apenas em nós. Veja o que os maiores players do
              mercado estão falando sobre o ecossistema Ratoeira Hub.
            </p>
          </motion.div>

          {/* Bento Grid with deck swap */}
          <AnimatePresence mode="wait">
            {deckIndex === 0 ? (
              <motion.div
                key="deck0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Mobile: grid original preservado */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-[minmax(180px,auto)] sm:auto-rows-[minmax(220px,auto)] lg:hidden">
                  {decks[0].map((card, i) => (
                    <motion.div
                      key={`0-${card.type}-${i}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.07,
                        ease: "easeOut",
                      }}
                      className={`${card.colSpan} ${card.rowSpan} w-full h-full`}
                    >
                      <CardSwitch
                        card={card}
                        onVideoClick={setActiveVideo}
                        onImageClick={setActiveImage}
                        onYouTubeShortClick={setActiveYouTubeShort}
                      />
                    </motion.div>
                  ))}
                </div>
                {/* Desktop: 3 shorts centralizados + 2 cards */}
                <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6 lg:auto-rows-[minmax(200px,auto)]">
                  {/* 3 shorts via sub-grid para manter dimensões exatas */}
                  <div className="col-span-4">
                    <div className="grid grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)] w-[calc(75%-6px)] mx-auto">
                      {decks[0].slice(0, 3).map((card, i) => (
                        <motion.div
                          key={`0-${card.type}-${i}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: i * 0.07,
                            ease: "easeOut",
                          }}
                          className="col-span-1 row-span-2 w-full h-full"
                        >
                          <CardSwitch
                            card={card}
                            onVideoClick={setActiveVideo}
                            onImageClick={setActiveImage}
                            onYouTubeShortClick={setActiveYouTubeShort}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {/* quote-wide + image-small */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 3 * 0.07,
                      ease: "easeOut",
                    }}
                    className="col-span-2 row-span-1 w-full h-full"
                  >
                    <CardSwitch
                      card={decks[0][3]}
                      onVideoClick={setActiveVideo}
                      onImageClick={setActiveImage}
                      onYouTubeShortClick={setActiveYouTubeShort}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 4 * 0.07,
                      ease: "easeOut",
                    }}
                    className="col-span-2 row-span-1 w-full h-full"
                  >
                    <CardSwitch
                      card={decks[0][4]}
                      onVideoClick={setActiveVideo}
                      onImageClick={setActiveImage}
                      onYouTubeShortClick={setActiveYouTubeShort}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="deck1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] sm:auto-rows-[minmax(220px,auto)] lg:auto-rows-[minmax(200px,auto)]"
              >
                {decks[1].map((card, i) => (
                  <motion.div
                    key={`1-${card.type}-${i}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.07,
                      ease: "easeOut",
                    }}
                    className={`${card.colSpan} ${card.rowSpan} w-full h-full`}
                  >
                    <CardSwitch
                      card={card}
                      onVideoClick={setActiveVideo}
                      onImageClick={setActiveImage}
                      onYouTubeShortClick={setActiveYouTubeShort}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Os maiores <span className="text-brand-500">players</span> do{" "}
              <span className="text-brand-500">mercado</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(255,184,0,0.25)] hover:border-brand-500/40"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-brand-500/0 via-white/0 to-brand-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" />
            <Image
              src="/depoimentos/players.webp"
              alt="Players que confiam na Ratoeira"
              width={1600}
              height={900}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Video Modal -->
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[85vh] rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={activeVideo}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Short Modal */}
      <AnimatePresence>
        {activeYouTubeShort && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveYouTubeShort(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[85vh] rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveYouTubeShort(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeYouTubeShort}?autoplay=1&rel=0`}
                title="YouTube Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeImage}
                alt="Depoimento ampliado"
                className="w-full h-full object-contain max-h-[85vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}