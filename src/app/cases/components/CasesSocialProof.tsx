"use client";

import { motion } from "framer-motion";
import { Play, MessageCircle } from "lucide-react";
import { useState } from "react";

const socialProofs = [
  {
    id: 1,
    type: "video",
    name: "Michel Pogne",
    role: "Especialista em Tráfego Pago",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "A Ratoeira Hub mudou o jogo para mim. Tracking server-side impecável e conversão absurda nas páginas.",
  },
  {
    id: 2,
    type: "print",
    name: "Thiago Rocha",
    role: "Afiliado Top Player",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "ROI triplicou no primeiro mês bloqueando bots e com páginas voando de tão rápidas. Sem explicação!",
  },
  {
    id: 3,
    type: "video",
    name: "Camila Fernandes",
    role: "Produtora de Infoprodutos",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "Foi a transição mais fácil que já fiz. Sai de um frankenstein de ferramentas para um dashboard único.",
  },
  {
    id: 4,
    type: "print",
    name: "Lucas Martins",
    role: "Gestor de Agência",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "A assertividade dos dados do Ratoeira Ads salvou nossa operação de Meta Ads e Google Ads.",
  },
];

export default function CasesSocialProof() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="pt-32 pb-24 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Eles confiaram. <br />
            <span className="text-brand-primary">Eles escalaram.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Não acredite apenas em nós. Veja o que os maiores players do mercado estão falando sobre o ecossistema Ratoeira Hub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {socialProofs.map((proof, index) => (
            <motion.div
              key={proof.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#111111] border border-white/5 aspect-video"
            >
              {proof.type === "video" ? (
                <>
                  {playingVideo === proof.id ? (
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                      <p className="text-gray-500 font-medium">[Player do Vídeo]</p>
                    </div>
                  ) : (
                    <div className="absolute inset-0 cursor-pointer" onClick={() => setPlayingVideo(proof.id)}>
                      <img 
                        src={proof.thumbnail} 
                        alt={`Vídeo de ${proof.name}`} 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0">
                  <img 
                    src={proof.image} 
                    alt={`Print de ${proof.name}`} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}

              {/* Informações sempre visíveis na parte inferior */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 pointer-events-none">
                <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                  &quot;{proof.quote}&quot;
                </p>
                <div>
                  <p className="text-white font-bold text-lg">{proof.name}</p>
                  <p className="text-brand-primary text-sm font-semibold">{proof.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
