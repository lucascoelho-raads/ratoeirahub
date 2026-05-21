"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Bell, BarChart3 } from "lucide-react";

export default function AppSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Que tal uma ratoeira no seu{" "}
              <span className="text-brand-primary">bolso</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Com o APP da Ratoeira Ads, você recebe as notificações e tem acesso ao seu
              Dashboard de vendas, tudo em tempo real.
            </p>

            {/* Feature highlights */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <Bell className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="text-sm font-semibold text-gray-200">Notificações em tempo real</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="text-sm font-semibold text-gray-200">Dashboard de vendas</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <Image
                src="/Notificações.png"
                alt="App Ratoeira Ads - Notificações"
                width={320}
                height={640}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-[3rem] blur-2xl -z-10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
