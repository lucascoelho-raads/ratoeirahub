"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

export default function FoundersAbout() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            Conheça Nossos <span className="text-brand-primary">Fundadores</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            As mentes por trás do ecossistema que está revolucionando o tráfego pago.
          </p>
        </div>

        <div className="space-y-24">
          {/* Eitor Guimarães */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
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
            
            <div className="w-full md:w-7/12 space-y-6">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Eitor Guimarães</h3>
                <p className="text-brand-primary font-bold tracking-widest uppercase text-sm">Co-Fundador & CEO</p>
              </div>
              
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <p>
                  Com anos de experiência em gestão de tráfego e escala de negócios digitais, Eitor percebeu que as ferramentas disponíveis no mercado limitavam o potencial das operações.
                </p>
                <p>
                  Sua visão estratégica foi fundamental para criar um ecossistema focado não apenas em métricas, mas em resultados reais e tangíveis. Eitor lidera a inovação do Ratoeira Hub, garantindo que a plataforma esteja sempre um passo à frente das necessidades do mercado.
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
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
            className="flex flex-col md:flex-row-reverse items-center gap-12"
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
            
            <div className="w-full md:w-7/12 space-y-6 md:text-right">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Paulo Furtado</h3>
                <p className="text-brand-primary font-bold tracking-widest uppercase text-sm">Co-Fundador & CTO</p>
              </div>
              
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <p>
                  O cérebro por trás da arquitetura robusta do Ratoeira Hub. Paulo trouxe sua vasta experiência em engenharia de software para construir uma plataforma capaz de processar milhões de eventos sem latência.
                </p>
                <p>
                  Ele é o responsável por garantir que a tecnologia de rastreamento server-side e o bloqueio de fraudes operem com precisão cirúrgica, proporcionando segurança e velocidade incomparáveis para todos os nossos usuários.
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 md:justify-end">
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