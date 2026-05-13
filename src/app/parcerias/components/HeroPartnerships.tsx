"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function HeroPartnerships() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-[#050505]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary mb-8 backdrop-blur-md">
              <Handshake className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wider uppercase">Programa de Parceiros</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              Cresça junto com a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Plataforma Definitiva
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
              Indique o ecossistema Ratoeira Hub para sua audiência ou clientes de agência e garanta comissões recorrentes enquanto eles escalam com segurança.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <a 
                href="#formulario-parceria" 
                className="w-full sm:w-auto px-8 py-4 rounded-button font-bold text-black bg-brand-primary hover:bg-brand-primary-hover transition-all duration-300 shadow-lg shadow-brand-primary/20 text-center"
              >
                Quero ser Parceiro
              </a>
              <a 
                href="#beneficios" 
                className="w-full sm:w-auto px-8 py-4 rounded-button font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                Ver Benefícios
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}