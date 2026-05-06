"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import {
  BarChart3,
  BellRing,
  Bot,
  FileBarChart,
  LayoutTemplate,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    label: "Benefício 1",
    title: "Pare de Perder Vendas Invisíveis",
    description:
      "Afiliados que migram do pixel padrão para o tracking server-side do Ratoeira Ads recuperam em média 25-40% de conversões que estavam invisíveis. Cada venda recuperada é dinheiro que volta para o seu bolso.",
    imageLeft: false,
    icon: BarChart3,
    gradient: "from-yellow-100 via-amber-50 to-orange-100",
  },
  {
    label: "Benefício 2",
    title: "Proteja Seu Orçamento de Bots e Concorrentes",
    description:
      "O bloqueio automático de tráfego fraudulento economiza em média R$4.000 a R$5.000 por mês. Cada real do seu investimento vai para quem tem chance real de comprar.",
    imageLeft: true,
    icon: Bot,
    gradient: "from-orange-100 via-amber-50 to-yellow-100",
  },
  {
    label: "Benefício 3",
    title: "Publique Páginas em Minutos, Não Dias",
    description:
      "Templates prontos, editor visual e integração automática de tracking. O que antes levava horas agora leva minutos. E cada página já nasce rastreada.",
    imageLeft: false,
    icon: LayoutTemplate,
    gradient: "from-yellow-100 via-amber-50 to-orange-100",
  },
  {
    label: "Benefício 4",
    title: "Tome Decisões Com Dados Reais, Não Intuição",
    description:
      "Dashboard consolidado com +50 métricas do Google Ads, plataformas de vendas e anti-fraude. Tudo em uma tela. Escalar campanhas vira estratégia, não aposta.",
    imageLeft: true,
    icon: FileBarChart,
    gradient: "from-orange-100 via-amber-50 to-yellow-100",
  },
  {
    label: "Benefício 5",
    title: "Acompanhe De Qualquer Lugar",
    description:
      "App próprio para iOS e Android. Notificações de vendas e bloqueio de bots em tempo real. Seu negócio na palma da mão, onde quer que você esteja.",
    imageLeft: false,
    icon: BellRing,
    gradient: "from-yellow-100 via-amber-50 to-orange-100",
  },
  {
    label: "Benefício 6",
    title: "Risco Zero",
    description:
      "Garantia incondicional de 7 dias. Se não gostar, devolvemos 100%. Sem perguntas, sem burocracia. Você não tem nada a perder.",
    imageLeft: true,
    icon: ShieldCheck,
    gradient: "from-orange-100 via-amber-50 to-yellow-100",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

function getExitDirection(transitionIndex: number) {
  return transitionIndex % 2 === 0 ? 100 : -100;
}

function getEntryDirection(transitionIndex: number) {
  return -getExitDirection(transitionIndex);
}

function getCardOffset(index: number, rawProgress: number, totalCards: number) {
  const lastIndex = totalCards - 1;

  if (index === 0) {
    if (rawProgress <= 0) return 0;
    if (rawProgress < 1) return lerp(0, getExitDirection(0), rawProgress);
    return getExitDirection(0);
  }

  if (index === lastIndex) {
    const entryTransition = index - 1;
    const entryStart = getEntryDirection(entryTransition);

    if (rawProgress <= entryTransition) return entryStart;
    if (rawProgress < entryTransition + 1) {
      return lerp(entryStart, 0, rawProgress - entryTransition);
    }
    return 0;
  }

  const entryTransition = index - 1;
  const exitTransition = index;
  const entryStart = getEntryDirection(entryTransition);
  const exitEnd = getExitDirection(exitTransition);

  if (rawProgress <= entryTransition) return entryStart;
  if (rawProgress < entryTransition + 1) {
    return lerp(entryStart, 0, rawProgress - entryTransition);
  }
  if (rawProgress < exitTransition + 1) {
    return lerp(0, exitEnd, rawProgress - exitTransition);
  }
  return exitEnd;
}

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ["start start", "end end"],
  });
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  const transitionCount = benefits.length - 1;
  const rawProgress = clamp(progress * transitionCount, 0, transitionCount);
  const activeIndex = clamp(Math.round(rawProgress), 0, benefits.length - 1);

  return (
    <section ref={ref} className="py-28 bg-white" id="solucoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
            Por Que <span style={{ color: "var(--color-brand-primary)" }}>+2.600 Afiliados</span> Escolheram o{" "}
            <span className="whitespace-nowrap">Ratoeira Hub</span>
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Ferramentas integradas para dominar o tráfego pago, aumentar a conversão e escalar sua operação com dados reais.
          </p>
        </motion.div>

      </div>

      <div ref={sliderRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="relative w-full h-full">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const offset = getCardOffset(index, rawProgress, benefits.length);
              const cardOpacity = 1 - Math.min(Math.abs(offset) / 120, 1);
              const zIndex = benefits.length - Math.abs(index - activeIndex);

              return (
                <article
                  key={benefit.title}
                  className="absolute inset-0 px-4 sm:px-8 lg:px-12 py-8 flex items-center"
                  style={{
                    transform: `translateX(${offset}%)`,
                    opacity: cardOpacity,
                    zIndex,
                  }}
                >
                  <div className="w-full max-w-7xl mx-auto">
                    <div className="h-[78vh] min-h-[520px] rounded-3xl border border-orange-100 bg-white shadow-xl p-6 md:p-10 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
                        <div className={benefit.imageLeft ? "order-2" : "order-1"}>
                          <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5">
                            {benefit.label}
                          </span>
                          <h3 className="mt-6 text-3xl lg:text-4xl font-black text-black leading-tight">
                            {benefit.title}
                          </h3>
                          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>

                        <div className={benefit.imageLeft ? "order-1" : "order-2"}>
                          <div className={`relative h-[320px] md:h-[380px] rounded-2xl border border-orange-200 bg-gradient-to-br ${benefit.gradient} overflow-hidden flex items-center justify-center`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),rgba(255,255,255,0.15))]" />
                            <div className="relative z-10 flex flex-col items-center text-center px-6">
                              <div className="w-20 h-20 rounded-2xl bg-white/85 border border-orange-200 flex items-center justify-center">
                                <Icon className="w-10 h-10 text-orange-700" />
                              </div>
                              <p className="mt-4 text-sm font-semibold text-orange-900">
                                Imagem ilustrativa do {benefit.label.toLowerCase()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
