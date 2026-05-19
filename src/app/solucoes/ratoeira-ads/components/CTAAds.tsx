"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, ShieldCheck, Target, Ghost, LineChart, Zap } from "lucide-react";
import { Radar, IconContainer } from "@/components/ui/radar-effect";

export default function CTAAds() {
  const angle = useMotionValue(0);

  useAnimationFrame(() => {
    // Aumenta o ângulo gradativamente a cada frame para rotacionar o radar
    // Ajuste o multiplicador (ex: 0.5) para deixar mais rápido ou mais devagar
    angle.set((angle.get() + 0.8) % 360);
  });

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center min-h-[clamp(700px,90vh,1100px)]">
      
      {/* Background glow para o Radar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Radar Effect Section (Agora como Background Absoluto) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-60">
        <div className="relative flex h-[800px] w-full max-w-5xl flex-col items-center justify-center space-y-4 overflow-visible px-4">
          {/* Row 1 */}
          <div className="mx-auto w-full max-w-4xl absolute top-16">
            <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
              <IconContainer
                text="Server-Side"
                delay={0.2}
                icon={<Server className="h-6 w-6 text-brand-primary" />}
                angle={angle}
                targetAngle={45} // Superior Esquerdo
              />
              <IconContainer
                delay={0.4}
                text="Anti-Fraude"
                icon={<ShieldCheck className="h-6 w-6 text-brand-primary" />}
                angle={angle}
                targetAngle={90} // Topo
              />
              <IconContainer
                text="Tracking"
                delay={0.3}
                icon={<Target className="h-6 w-6 text-brand-primary" />}
                angle={angle}
                targetAngle={135} // Superior Direito
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="mx-auto w-full max-w-5xl absolute top-1/2 -translate-y-1/2">
            <div className="flex w-full items-center justify-between">
              <IconContainer
                text="Recuperação"
                delay={0.5}
                icon={<Ghost className="h-6 w-6 text-brand-primary" />}
                angle={angle}
                targetAngle={0} // Esquerda Central
              />
              <IconContainer
                text="Tempo Real"
                delay={0.8}
                icon={<LineChart className="h-6 w-6 text-brand-primary" />}
                angle={angle}
                targetAngle={180} // Direita Central
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="mx-auto w-full max-w-4xl absolute bottom-16">
            <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
              <IconContainer
                delay={0.6}
                text="Velocidade"
                icon={<Zap className="h-6 w-6 text-brand-primary" />}
                angle={angle}
                targetAngle={315} // Inferior Esquerdo
              />
              <IconContainer
                delay={0.7}
                text="Dados 100%"
                icon={<Target className="h-6 w-6 text-brand-primary" />}
                angle={angle}
                targetAngle={225} // Inferior Direito
              />
            </div>
          </div>

          <Radar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" angle={angle} />
        </div>
      </div>

      {/* Content Section (Sobreposto no centro) */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-6xl mx-auto"
        >
          <h2 className="text-[clamp(2.25rem,3.2vw,4.5rem)] font-black text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
            Pare de tomar decisão com dado <span className="text-brand-primary">incompleto</span>.
          </h2>
          <p className="text-[clamp(1.1rem,1.25vw,1.5rem)] text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] leading-relaxed">
            Configure a <span className="text-brand-primary font-semibold">Ratoeira Ads</span> em minutos e descubra o ROI real das suas campanhas com rastreamento ~100% e proteção automática no Google Ads.
          </p>
        </motion.div>

        <div className="mt-16">
          <Link
            href="/planos"
            className="inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-brand-primary text-white font-black rounded-full hover:bg-brand-primary-hover transition-all text-lg sm:text-xl shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95"
          >
            Começar grátis — ver planos
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

    </section>
  );
}
