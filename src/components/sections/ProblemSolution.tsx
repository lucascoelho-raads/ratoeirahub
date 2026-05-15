"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Radar, LayoutTemplate, Link2 } from "lucide-react";

const tabs = [
  { id: "rastreamento", label: "Rastreamento Inteligente", icon: Radar },
  { id: "paginas", label: "Páginas de Alta Conversão", icon: LayoutTemplate },
  { id: "ecossistema", label: "Ratoeira Hub", icon: Link2 },
];

const trackingHighlights = [
  "Tracking server-side com ~100% de conversões rastreadas",
  "Bloqueio automático de bots e IPs fraudulentos",
  "Dashboard consolidado: Google Ads + Plataformas + Anti-Fraude",
  "+60 plataformas de vendas conectadas",
  "Notificações em tempo real via app e Telegram",
];

const pagesHighlights = [
  "Templates prontos e testados para conversão",
  "Editor visual drag-and-drop (sem código)",
  "Flash Pages: páginas prontas em segundos",
  "Geração de páginas por IA",
  "Hospedagem gratuita com SSL e domínios customizados",
  "Integração nativa com o Ratoeira Ads",
];

const ecosystemHighlights = [
  "Integração nativa Ads + Pages (sem configuração manual)",
  "Dashboard único com +50 métricas consolidadas",
  "ROAS real calculado com vendas confirmadas",
  "Dados de tráfego + páginas + vendas em uma tela",
];

const tabHighlights = {
  rastreamento: trackingHighlights,
  paginas: pagesHighlights,
  ecossistema: ecosystemHighlights,
} as const;

const contents = {
  rastreamento: {
    title: "Rastreie Cada Venda. Bloqueie Cada Bot. Saiba Tudo.",
    description:
      "O pixel padrão do Google captura entre 60% e 75% das conversões reais de afiliados. O Ratoeira Ads utiliza tracking server-side com validação cruzada, chegando a ~100% de conversões rastreadas. Cada venda confirmada na plataforma aparece no Google Ads — sem gaps, sem dados perdidos, sem “o pixel não pegou essa.”\n\nAlém disso, o sistema identifica e bloqueia automaticamente cliques de bots, concorrentes e IPs fraudulentos na lista de exclusão do Google Ads. Usuários reportam bloqueio médio de R$4.000 a R$5.000 por mês em tráfego fraudulento. Cada real do seu orçamento vai para quem realmente compra.",
  },
  paginas: {
    title: "Construa Páginas Que Vendem Em Minutos. Sem Código.",
    description:
      "A Ratoeira Pages é o construtor de landing pages integrado ao Hub. Templates profissionais testados para conversão, editor visual drag-and-drop, Flash Pages (páginas ultra-rápidas) e geração por IA. O diferencial? Cada página já nasce com o script de tracking do Ratoeira Ads embutido nativamente — zero configuração, zero gaps de rastreamento.",
  },
  ecossistema: {
    title: "Ads + Pages Juntos. Seus Dados Conversam Entre Si.",
    description:
      "O verdadeiro poder do Ratoeira Hub está na integração nativa entre tracking e páginas. Enquanto outros afiliados usam três ou mais ferramentas separadas que não conversam entre si, você tem tudo consolidado em um único dashboard. O Google Ads recebe dados corretos, o algoritmo otimiza para compradores reais, e você escala sabendo exatamente o que está multiplicando.",
  },
};

export default function ProblemSolution() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("rastreamento");
  const [highlightIndex, setHighlightIndex] = useState(0);

  const activeContent = contents[activeTab as keyof typeof contents];
  const activeHighlights = tabHighlights[activeTab as keyof typeof tabHighlights];
  const contentParts = activeContent.description.split("\n\n");

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % activeHighlights.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [activeHighlights, activeTab]);

  return (
    <section ref={ref} className="py-24 bg-black" id="solucoes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Tudo o Que Você Precisa Para Escalar sua Operação — Em Um Só Lugar
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="block whitespace-nowrap">
              O afiliado que escala no Google Ads não trabalha com ferramentas soltas. Ele
            </span>
            <span className="block whitespace-nowrap">
              usa um ecossistema integrado onde tracking, páginas e dados conversam entre si.
            </span>
            <span className="block whitespace-nowrap">
              Conheça os três pilares do Ratoeira Hub.
            </span>
          </p>
          <p className="text-lg text-orange-400 font-semibold">
            Escolha a ferramenta que falta na sua operação ou integre ambas para resultados explosivos.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setHighlightIndex(0);
                }}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-button font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/30"
                    : "bg-white/10 text-gray-100 border border-white/20 hover:border-orange-400 hover:bg-white/15"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-10"
        >
          <h3 className="text-3xl font-bold text-white text-center">
            {activeContent.title}
          </h3>

          {/* First paragraph */}
          <div
            className={`w-full ${
              activeTab === "rastreamento" ? "max-w-5xl" : "max-w-4xl"
            }`}
          >
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line text-center">
              {contentParts[0]}
            </p>
          </div>

          {/* Visual (immediately below first paragraph) */}
          <div className="relative w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-linear-to-b from-gray-100 to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl aspect-video flex items-center justify-center overflow-hidden"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-linear-to-r from-yellow-500 to-orange-500">
                  {activeTab === "rastreamento" && <Radar className="w-10 h-10 text-white" />}
                  {activeTab === "paginas" && <LayoutTemplate className="w-10 h-10 text-white" />}
                  {activeTab === "ecossistema" && <Link2 className="w-10 h-10 text-white" />}
                </div>
                <div className="min-h-[56px] flex items-center justify-center px-4">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${activeTab}-highlight-${highlightIndex}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="text-gray-700 font-semibold text-sm md:text-base"
                    >
                      • {activeHighlights[highlightIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10" />
          </div>

          {/* Remaining paragraphs */}
          {contentParts.length > 1 && (
            <div className="w-full max-w-4xl space-y-4">
              {contentParts.slice(1).map((part, index) => (
                <p
                  key={`${activeTab}-remaining-${index}`}
                  className="text-lg text-gray-300 leading-relaxed whitespace-pre-line text-left"
                >
                  {part}
                </p>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
