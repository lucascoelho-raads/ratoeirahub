"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Radar, LayoutTemplate, Link2 } from "lucide-react";

const tabs = [
  { id: "rastreamento", label: "Rastreamento Inteligente", icon: Radar },
  { id: "paginas", label: "Páginas de Alta Conversão", icon: LayoutTemplate },
  { id: "ecossistema", label: "Ecossistema Integrado", icon: Link2 },
];

const contents = {
  rastreamento: {
    title: "Rastreie Cada Venda. Bloqueie Cada Bot. Saiba Tudo.",
    description:
      "O pixel padrão do Google captura entre 60% e 75% das conversões reais de afiliados. O Ratoeira Ads utiliza tracking server-side com validação cruzada, chegando a ~100% de conversões rastreadas. Cada venda confirmada na plataforma aparece no Google Ads — sem gaps, sem dados perdidos, sem “o pixel não pegou essa.”\n\nAlém disso, o sistema identifica e bloqueia automaticamente cliques de bots, concorrentes e IPs fraudulentos na lista de exclusão do Google Ads. Usuários reportam bloqueio médio de R$4.000 a R$5.000 por mês em tráfego fraudulento. Cada real do seu orçamento vai para quem realmente compra.\n\n• Tracking server-side com ~100% de conversões rastreadas\n• Bloqueio automático de bots e IPs fraudulentos\n• Dashboard consolidado: Google Ads + Plataformas + Anti-Fraude\n• +60 plataformas de vendas conectadas\n• Notificações em tempo real via app e Telegram",
  },
  paginas: {
    title: "Construa Páginas Que Vendem Em Minutos. Sem Código.",
    description:
      "A Ratoeira Pages é o construtor de landing pages integrado ao Hub. Templates profissionais testados para conversão, editor visual drag-and-drop, Flash Pages (páginas ultra-rápidas) e geração por IA. O diferencial? Cada página já nasce com o script de tracking do Ratoeira Ads embutido nativamente — zero configuração, zero gaps de rastreamento.\n\n• Templates prontos e testados para conversão\n• Editor visual drag-and-drop (sem código)\n• Flash Pages: páginas prontas em segundos\n• Geração de páginas por IA\n• Hospedagem gratuita com SSL e domínios customizados\n• Integração nativa com o Ratoeira Ads",
  },
  ecossistema: {
    title: "Ads + Pages Juntos. Seus Dados Conversam Entre Si.",
    description:
      "O verdadeiro poder do Ratoeira Hub está na integração nativa entre tracking e páginas. Enquanto outros afiliados usam três ou mais ferramentas separadas que não conversam entre si, você tem tudo consolidado em um único dashboard. O Google Ads recebe dados corretos, o algoritmo otimiza para compradores reais, e você escala sabendo exatamente o que está multiplicando.\n\n• Integração nativa Ads + Pages (sem configuração manual)\n• Dashboard único com +50 métricas consolidadas\n• ROAS real calculado com vendas confirmadas\n• Dados de tráfego + páginas + vendas em uma tela",
  },
};

export default function ProblemSolution() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("rastreamento");

  const activeContent = contents[activeTab as keyof typeof contents];

  return (
    <section ref={ref} className="py-24 bg-white" id="solucoes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Tudo o Que Você Precisa Para Operar Tráfego Pago — Em Um Só Lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
          <p className="text-lg text-orange-600 font-semibold">
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
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-button font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/30"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-yellow-300"
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                {activeContent.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {activeContent.description}
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
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
                <p className="text-gray-500">Visualização do módulo {activeContent.title}</p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
