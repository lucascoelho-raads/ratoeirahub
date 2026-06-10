"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, title: "Primeiro Escritório", year: "2024", aspect: "aspect-square", src: "/time1.peg.jpeg", type: "image" as const },
  { id: 2, title: "Lançamento V2", year: "2024", aspect: "aspect-[4/5]", src: "/time2.jpeg", type: "image" as const },
  { id: 3, title: "Evento São Paulo", year: "2024", aspect: "aspect-square", src: "/time3.jpeg", type: "image" as const },
  { id: 4, title: "Expansão Equipe", year: "2025", aspect: "aspect-[4/3]", src: "/time4.jpeg", type: "image" as const },
  { id: 5, title: "Prêmio Inovação", year: "2025", aspect: "aspect-square", src: "/time5.jpeg", type: "image" as const },
  { id: 6, title: "Summit Ratoeira", year: "2024", aspect: "aspect-[3/4]", src: "/time6.jpeg", type: "image" as const },
  { id: 7, title: "Integração IA", year: "2026", aspect: "aspect-video", src: "/time7.jpeg", type: "image" as const },
  { id: 8, title: "Nossa Cultura", year: "Hoje", aspect: "aspect-square", src: "/time8.jpeg", type: "image" as const },
  { id: 9, title: "Nosso Time", year: "Hoje", aspect: "aspect-square", src: "/time9.jpeg", type: "image" as const },
  { id: 10, title: "Nosso Time em Ação", year: "Hoje", aspect: "aspect-[3/4]", src: "/time10-HD 720p.mov", type: "video" as const },
];

export default function GalleryAbout() {
  return (
    <section className="py-16 md:py-32 bg-[#050505]">
      <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight ">
            O <span className="text-brand-primary">time</span> por trás da <span className="text-brand-primary">plataforma</span>.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-400 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto px-4 sm:px-0 ">
            Um time técnico, direto e obcecado com o problema do anunciante. A Ratoeira não foi construída em sala de reunião — foi construída por quem viveu o problema por dentro.
          </p>
        </motion.div>

        {/* Masonry-like Grid */}
        <div className="columns-2 md:columns-3 gap-3 sm:gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden bg-[#111111] rounded-3xl shadow-md border border-white/10 ${item.aspect} break-inside-avoid mb-3 sm:mb-4 md:mb-6 inline-block w-full`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-center sm:text-left">
                <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-1">
                  {item.year}
                </span>
                <h3 className="text-white font-bold text-lg tracking-tight leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
