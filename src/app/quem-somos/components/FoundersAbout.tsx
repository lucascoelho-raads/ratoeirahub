"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

export default function FoundersAbout() {
  return (
    <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            <span className="text-brand-primary">Duas</span> pessoas. Um <span className="text-brand-primary">problema</span> real. Uma <span className="text-brand-primary">plataforma</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-400 mx-auto text-center px-4 text-balance">
            As mentes por trás do ecossistema que está revolucionando o tráfego pago.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* Eitor Guimarães */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="w-full md:w-5/12">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/10 group">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-white/5 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Foto Eitor Guimarães</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>
            
            <div className="w-full md:w-7/12 space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Eitor Guimarães</h3>
                <p className="text-brand-primary font-bold tracking-widest uppercase text-sm">Co-Fundador & CEO</p>
              </div>
              
              <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg text-center md:text-left">
                <p>
                  Formado pela UNICAMP, Eitor construiu sua carreira em analytics e inteligência de mercado — passando por
                  3M (onde se certificou como Lean Six Sigma Green Belt) e PepsiCo, onde liderou times de Business
                  Intelligence e Data & Analytics para a América Latina. Em 2022, levou esse repertório para o tráfego
                  pago e descobriu o que o mercado brasileiro ainda não havia sistematizado: como usar o tracking
                  server-side para que o Google Ads otimize para compradores reais. O método mudou o patamar do mercado
                  de afiliados no Brasil. Em abril de 2024, junto com Paulo, transformou a descoberta em produto. Hoje
                  lidera a Ratoeira como CEO.
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Paulo Furtado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
          >
            <div className="w-full md:w-5/12">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/10 group">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-white/5 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Foto Paulo Furtado</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>
            
            <div className="w-full md:w-7/12 space-y-6 text-center md:text-right">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Paulo Furtado</h3>
                <p className="text-brand-primary font-bold tracking-widest uppercase text-sm">Co-Fundador & CTO</p>
              </div>
              
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <p>
                  Formado em análise de sistemas em 2012, Paulo passou mais de uma década construindo sistemas robustos e
                  trabalhando em grandes empresas — incluindo a Localiza. Em janeiro de 2024, assistiu ao vídeo de Eitor
                  sobre tracking para afiliados de Google Ads e enxergou o produto que ainda não existia. Foi direto ao
                  Instagram propor a parceria. Como CTO da Ratoeira, Paulo é responsável pela arquitetura que garante
                  rastreamento ~100%, processamento de eventos em tempo real e as integrações via API com Google Ads,
                  Meta e plataformas de IA.
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 justify-center md:justify-end">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
