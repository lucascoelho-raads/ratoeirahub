"use client";

import { motion } from "framer-motion";

export default function CTAPartnerships() {
  return (
    <section id="formulario-parceria" className="py-16 md:py-24 bg-[#050505] relative scroll-mt-20">
      <div className="max-w-4xl 3xl:max-w-[70rem] 4xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#161616] to-[#111111] border border-white/10 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-brand-primary/20 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 tracking-tight relative z-10 text-balance">
            Pronto para multiplicar seus ganhos?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl 2xl:max-w-[30rem] 3xl:max-w-[40rem] 4xl:max-w-[60rem] mx-auto relative z-10 text-balance">
            Preencha o formulário rápido abaixo. Nosso time de parcerias analisará seu perfil e entrará em contato com os próximos passos.
          </p>

          <div className="bg-[#050505] border border-white/5 rounded-3xl p-4 sm:p-8 relative z-10">
            <p className="text-gray-500 font-medium text-sm mb-4 uppercase tracking-widest">
              Formulário de Aplicação
            </p>
            {/* Placeholder para integração real de formulário (ex: Typeform, Hubspot, etc) */}
            <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
              <span className="text-gray-400 font-medium mb-4">[ Embed do Formulário Aqui ]</span>
              <button className="px-8 py-3 rounded-button font-bold text-black bg-brand-primary hover:bg-brand-primary-hover transition-colors">
                Abrir Formulário Externo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
