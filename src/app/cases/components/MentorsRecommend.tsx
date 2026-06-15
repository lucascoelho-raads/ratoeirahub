"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const shorts = [
  {
    id: "1",
    url: "https://www.youtube.com/shorts/5edTCBZu-ds",
    thumbnail: "https://img.youtube.com/vi/5edTCBZu-ds/maxresdefault.jpg",
    title: "Depoimento 1",
    speaker: "Amanda & Lígia - Fênix",
  },
  {
    id: "2",
    url: "https://www.youtube.com/shorts/fmfF1_7g0mM",
    thumbnail: "https://img.youtube.com/vi/fmfF1_7g0mM/maxresdefault.jpg",
    title: "Depoimento 2",
    speaker: "Bruno Matos",
  },
  {
    id: "3",
    url: "https://www.youtube.com/shorts/qdP5z0bFfP8",
    thumbnail: "https://img.youtube.com/vi/qdP5z0bFfP8/maxresdefault.jpg",
    title: "Depoimento 3",
    speaker: "Jéssica Maciel",
  },
  {
    id: "4",
    url: "https://www.youtube.com/shorts/04xowV0-fPw",
    thumbnail: "https://img.youtube.com/vi/04xowV0-fPw/maxresdefault.jpg",
    title: "Depoimento 4",
    speaker: "Alexander Lopes",
  },
];

function getYouTubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/shorts\/|youtube\.com\/watch\?v=|youtu\.be\/)([^/?&]+)/
  );
  return match ? match[1] : "";
}

export default function MentorsRecommend() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
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

        {/* Grid de 4 placeholders de vídeo (YouTube Shorts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[400px] sm:auto-rows-[480px] md:auto-rows-[420px]">
          {shorts.map((short, index) => (
            <motion.button
              key={short.id}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveVideo(getYouTubeId(short.url))}
              className="col-span-1 row-span-1 bg-[#161616] border border-black/10 rounded-[32px] overflow-hidden relative group cursor-pointer hover:border-brand-primary/30 transition-colors text-left"
            >
              <Image
                src={short.thumbnail}
                alt={short.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-[#050505]/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-black flex items-center justify-center pl-1 transform group-hover:scale-110 transition-transform shadow-lg shadow-brand-primary/20">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-white font-bold text-sm leading-tight">
                  {short.speaker}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
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
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="YouTube Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
