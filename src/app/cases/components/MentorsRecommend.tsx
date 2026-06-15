"use client";

import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const shorts = [
  {
    id: "1",
    url: "https://www.youtube.com/shorts/5edTCBZu-ds",
    thumbnail: "https://img.youtube.com/vi/5edTCBZu-ds/maxresdefault.jpg",
    title: "Depoimento 1",
  },
  {
    id: "2",
    url: "https://www.youtube.com/shorts/fmfF1_7g0mM",
    thumbnail: "https://img.youtube.com/vi/fmfF1_7g0mM/maxresdefault.jpg",
    title: "Depoimento 2",
  },
  {
    id: "3",
    url: "https://www.youtube.com/shorts/qdP5z0bFfP8",
    thumbnail: "https://img.youtube.com/vi/qdP5z0bFfP8/maxresdefault.jpg",
    title: "Depoimento 3",
  },
  {
    id: "4",
    url: "https://www.youtube.com/shorts/04xowV0-fPw",
    thumbnail: "https://img.youtube.com/vi/04xowV0-fPw/maxresdefault.jpg",
    title: "Depoimento 4",
  },
];

export default function MentorsRecommend() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

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
            <motion.a
              key={short.id}
              href={short.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="col-span-1 row-span-1 bg-[#161616] border border-black/10 rounded-[32px] overflow-hidden relative group cursor-pointer hover:border-brand-primary/30 transition-colors"
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
