"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  BarChart3,
  BellRing,
  Bot,
  ChevronLeft,
  ChevronRight,
  FileBarChart,
  LayoutTemplate,
  ShieldCheck,
} from "lucide-react";
import { ShineBorder } from "@/components/ui/ShineBorder";
import { BackgroundPaths } from "@/components/ui/background-paths";

const benefits = [
  {
    label: "Benefício 1",
    title: "Pare de Perder Vendas Invisíveis",
    description:
      "Anunciantes que migram para o trackeamento server-side da Ratoeira recuperam em média 25% a 40% de conversões que estavam invisíveis. Cada venda recuperada é lucro que você já tinha gerado — e que o pixel padrão estava escondendo do Google.",
    imageLeft: false,
    icon: BarChart3,
  },
  {
    label: "Benefício 2",
    title: "Proteja Seu Orçamento no Google Ads",
    description:
      "Para quem anuncia no Google Ads, a Ratoeira bloqueia automaticamente os IPs que clicam no seu anúncio sem intenção de comprar — concorrentes, bots, tráfego inválido. Na maioria das operações, a economia com bloqueio já cobre o custo do plano inteiro no primeiro mês.",
    imageLeft: true,
    icon: Bot,
  },
  {
    label: "Benefício 3",
    title: "Publique Páginas em Minutos, Não Dias",
    description:
      "Templates prontos e validados, Flash Pages que abrem em menos de 1 segundo e trackeamento automático desde o primeiro clique. Sua página no ar antes do próximo anúncio subir — e cada visita já rastreada.",
    imageLeft: false,
    icon: LayoutTemplate,
  },
  {
    label: "Benefício 4",
    title: "Tome Decisões Com Dados Reais, Não Intuição",
    description:
      "Dashboard consolidado com métricas do Google Ads, Meta Ads e plataformas de vendas numa tela só. Você vê qual campanha escalar, qual pausar — e age antes que o algoritmo tome a decisão errada por você.",
    imageLeft: true,
    icon: FileBarChart,
  },
  {
    label: "Benefício 5",
    title: "Acompanhe De Qualquer Lugar",
    description:
      "App próprio para iOS e Android. Notificação de venda em tempo real, acompanhamento de campanhas e alertas de bloqueio — onde quer que você esteja. A operação na palma da mão.",
    imageLeft: false,
    icon: BellRing,
  },
  {
    label: "Benefício 6",
    title: "Risco Zero",
    description:
      "Garantia incondicional de 7 dias. Se não gostar, devolvemos 100%. Sem perguntas, sem burocracia. Você não tem nada a perder.",
    imageLeft: true,
    icon: ShieldCheck,
  },
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const goToNext = () => {
    setSlideDirection(1);
    setActiveIndex((prev) => (prev + 1) % benefits.length);
  };

  const goToPrev = () => {
    setSlideDirection(-1);
    setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToIndex = (index: number) => {
    if (index === activeIndex) return;
    setSlideDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 25000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section ref={ref} className="relative pt-16 md:pt-28 pb-0 bg-[#050505]" id="solucoes">
      <div className="relative z-10 max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-black text-text-inverse leading-tight text-balance max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto">
            Por que <span style={{ color: "var(--color-brand-primary)" }}>+2.600 anunciantes</span> escolheram a{" "}
            <span className="whitespace-normal sm:whitespace-nowrap">Ratoeira Hub</span>
          </h2>
          <p className="text-gray-400/80 text-lg mx-auto">
            Do primeiro anúncio ao gestor que escala múltiplos clientes —<br />a Ratoeira transforma cada real investido em tráfego numa origem rastreada e numa decisão mais inteligente.
          </p>
        </motion.div>

      </div>

      <div className="relative z-10 h-[520px] sm:h-screen overflow-visible sm:overflow-hidden flex items-center">
        <div className="relative w-full h-full">
          <AnimatePresence mode="sync" initial={false}>
            <motion.article
              key={benefits[activeIndex].title}
              initial={{ x: slideDirection > 0 ? "100%" : "-100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: slideDirection > 0 ? "-100%" : "100%", opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 px-4 sm:px-8 lg:px-12 py-8 flex items-center"
            >
              {(() => {
                const benefit = benefits[activeIndex];
                const Icon = benefit.icon;

                return (
                  <div className="w-full max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto">
                    <ShineBorder
                      borderRadius={24}
                      borderWidth={5.5}
                      duration={3.8}
                      color={[
                        "var(--color-brand-300)",
                        "var(--color-brand-primary)",
                        "var(--color-brand-secondary)",
                        "var(--color-brand-primary-hover)",
                      ]}
                      className="h-auto min-h-[420px] sm:h-[78vh] sm:min-h-[520px] w-full"
                    >
                      <div className="relative h-full rounded-card border border-white/10 bg-[#050505] shadow-card-resting p-5 sm:p-6 md:p-10 lg:p-12 overflow-hidden">
                        <BackgroundPaths reverse={benefit.imageLeft} />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[1.2fr_1fr] 3xl:grid-cols-[1.3fr_1fr] 4xl:grid-cols-[1.35fr_1fr] gap-10 items-center h-full">
                          <div className={benefit.imageLeft ? "order-2" : "order-1"}>
                            <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-4xl font-black text-gray-50 leading-tight text-center lg:text-left text-balance max-w-2xl lg:max-w-3xl">
                              {benefit.title}
                            </h3>
                            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-200 leading-relaxed text-center lg:text-left text-balance">
                              {benefit.description}
                            </p>
                          </div>

                          <div className={benefit.imageLeft ? "order-1" : "order-2"}>
                            {activeIndex === 0 || activeIndex === 1 || activeIndex === 2 || activeIndex === 3 || activeIndex === 5 ? (
                              <div className={activeIndex === 2 ? "relative rounded-card overflow-hidden lg:scale-110" : "relative rounded-card overflow-hidden"}>
                                <img
                                  src={activeIndex === 0 ? "/slide1home.png" : activeIndex === 1 ? "/slide2home.png" : activeIndex === 2 ? "/slide3home.png" : activeIndex === 3 ? "/slide4home.png" : "/slide6home.png"}
                                  alt={benefit.title}
                                  className="w-full h-auto"
                                />
                              </div>
                            ) : activeIndex === 4 ? (
                              <div className="relative aspect-[9/16] max-w-[260px] sm:max-w-[300px] max-h-full mx-auto">
                                <video
                                  src="/slide5home.mp4"
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  preload="auto"
                                  className="w-full h-full object-contain rounded-card border border-border-default"
                                />
                              </div>
                            ) : (
                              <div
                                className="relative h-[220px] sm:h-[280px] md:h-[380px] rounded-card border border-border-default overflow-hidden flex items-center justify-center"
                                style={{
                                  background: benefit.imageLeft
                                    ? "linear-gradient(135deg, var(--color-brand-100) 0%, var(--color-brand-50) 100%)"
                                    : "linear-gradient(135deg, var(--color-brand-50) 0%, var(--color-brand-100) 100%)",
                                }}
                              >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),rgba(255,255,255,0.15))]" />
                                <div className="relative z-10 flex flex-col items-center text-center px-6">
                                  <div className="w-20 h-20 rounded-card bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Icon className="w-10 h-10 text-brand-primary" />
                                  </div>
                                  <p className="mt-4 text-sm font-semibold text-gray-200">
                                    Imagem ilustrativa do {benefit.label.toLowerCase()}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </ShineBorder>
                  </div>
                );
              })()}
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls - outside card, below it */}
      <div className="relative z-20 flex items-center justify-center gap-3 mt-4 pb-8 sm:pb-0 sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Card anterior"
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-gray-100 hover:bg-white/20 transition-colors flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {benefits.map((benefit, index) => (
            <button
              key={benefit.title}
              type="button"
              onClick={() => goToIndex(index)}
              aria-label={`Ir para ${benefit.label}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-brand-primary"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Próximo card"
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-gray-100 hover:bg-white/20 transition-colors flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
