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
      "Anunciantes que migram para tracking server-side recuperam em média 25% a 40% de conversões que estavam invisíveis. Cada venda recuperada é lucro que você já tinha gerado — e não sabia.",
    imageLeft: false,
    icon: BarChart3,
  },
  {
    label: "Benefício 2",
    title: "Proteja Seu Orçamento no Google Ads",
    description:
      "Para quem anuncia no Google Ads, o bloqueio automático de IPs inválidos elimina cliques que nunca vão converter. Na maioria dos casos, o que você economiza já cobre o custo do plano inteiro.",
    imageLeft: true,
    icon: Bot,
  },
  {
    label: "Benefício 3",
    title: "Publique Páginas em Minutos, Não Dias",
    description:
      "Templates prontos, carregamento ultra-rápido e integração automática com o tracking. Sua página no ar antes do próximo anúncio subir — e cada clique já rastreado desde o início.",
    imageLeft: false,
    icon: LayoutTemplate,
  },
  {
    label: "Benefício 4",
    title: "Tome Decisões Com Dados Reais, Não Intuição",
    description:
      "Dashboard consolidado com métricas do Google Ads, Meta Ads e plataformas de vendas. Tudo numa tela. Você sabe qual campanha escalar, qual pausar — sem achismo, sem esperar o algoritmo descobrir.",
    imageLeft: true,
    icon: FileBarChart,
  },
  {
    label: "Benefício 5",
    title: "Acompanhe De Qualquer Lugar",
    description:
      "App próprio para iOS e Android. Notificação de venda em tempo real, acompanhamento de campanhas e alertas — onde quer que você esteja. Sua operação na palma da mão.",
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
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section ref={ref} className="relative pt-28 pb-0 bg-[#050505]" id="solucoes">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-text-inverse leading-tight">
            Por que <span style={{ color: "var(--color-brand-primary)" }}>+2.600 anunciantes</span> escolheram a{" "}
            <span className="whitespace-normal sm:whitespace-nowrap">Ratoeira Hub</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Do anunciante que não quer perder a primeira venda ao gestor que escala múltiplos clientes — uma plataforma
            para cada momento da sua operação.
          </p>
        </motion.div>

      </div>

      <div className="relative z-10 min-h-[100dvh] sm:h-screen overflow-hidden flex items-center">
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
                  <div className="w-full max-w-7xl mx-auto">
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
                      className="h-[78vh] min-h-[520px] w-full"
                    >
                      <div className="relative h-full rounded-card border border-white/10 bg-[#050505] shadow-card-resting p-6 md:p-10 lg:p-12 overflow-hidden">
                        <BackgroundPaths reverse={benefit.imageLeft} />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
                          <div className={benefit.imageLeft ? "order-2" : "order-1"}>
                            <h3 className="mt-6 text-3xl lg:text-4xl font-black text-gray-50 leading-tight">
                              {benefit.title}
                            </h3>
                            <p className="mt-5 text-lg text-gray-200 leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>

                          <div className={benefit.imageLeft ? "order-1" : "order-2"}>
                            <div
                              className="relative h-[320px] md:h-[380px] rounded-card border border-border-default overflow-hidden flex items-center justify-center"
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
                          </div>
                        </div>
                      </div>
                    </ShineBorder>
                  </div>
                );
              })()}
            </motion.article>
          </AnimatePresence>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Card anterior"
              className="w-10 h-10 rounded-full bg-surface-default/90 border border-border-default text-text-primary hover:bg-surface-default transition-colors flex items-center justify-center"
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
              className="w-10 h-10 rounded-full bg-surface-default/90 border border-border-default text-text-primary hover:bg-surface-default transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
