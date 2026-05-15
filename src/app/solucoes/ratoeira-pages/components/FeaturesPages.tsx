"use client";

import { motion } from "framer-motion";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { LayoutTemplate, Paintbrush, Zap, Settings, Eye, LineChart } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Flash Pages: Criação e Validação em Tempo Recorde",
    titleSegments: [
      { text: "Flash Pages:", className: "text-white italic mr-2" },
      { text: "Criação e Validação em Tempo Recorde", className: "text-[#FF7E4A] italic" }
    ],
    description: "Ideal para afiliados construindo presell. Modelos pré-configurados para conversão que vão ao ar em minutos. Textos, cores e imagens editáveis sem uma linha de código — para validar qualquer oferta enquanto a janela de oportunidade ainda está aberta. Crie páginas de Cookie, Idade, Gênero, País e Captcha.",
    icon: LayoutTemplate,
  },
  {
    title: "Templates Prontos: Design Profissional ao Seu Alcance",
    titleSegments: [
      { text: "Templates Prontos:", className: "text-white italic mr-2" },
      { text: "Design Profissional ao Seu Alcance", className: "text-[#FF7E4A] italic" }
    ],
    description: "adaptáveis à identidade da sua marca em minutos.",
    icon: Paintbrush,
  },
  {
    title: "Construtor Drag-and-Drop: Liberdade Total de Edição",
    titleSegments: [
      { text: "Construtor Drag-and-Drop:", className: "text-white italic mr-2" },
      { text: "Liberdade Total de Edição", className: "text-[#FF7E4A] italic" }
    ],
    description: "Controle total sobre o layout, pixel a pixel. Comece do zero ou personalize qualquer template com uma interface fluida — sem nenhuma barreira técnica entre você e a página que vai converter.",
    icon: Zap,
  },
  {
    title: "Presell Review com IA",
    titleSegments: [
      { text: "Presell Review com", className: "text-white italic mr-2" },
      { text: "IA", className: "text-[#FF7E4A] italic" }
    ],
    description: "uma URL que nossa IA irá analisar a página e criar uma página review 100% editável em minutos.",
    icon: Settings,
  },
  {
    title: "Integração Ratoeira Ads: Rastreamento e Otimização Avançados",
    titleSegments: [
      { text: "Integração Ratoeira Ads:", className: "text-white italic mr-2" },
      { text: "Rastreamento e Otimização Avançados", className: "text-[#FF7E4A] italic" }
    ],
    description: "Um token. Rastreamento cirúrgico de cada interação nas suas páginas. Combine Pages e Ads para identificar gargalos, escalar o que converte e cortar o que drena seu ROI — em tempo real.",
    icon: Eye,
  },
  {
    title: "Clonador de Páginas: Sua Estrutura Própria em Segundos",
    titleSegments: [
      { text: "Clonador de Páginas:", className: "text-white italic mr-2" },
      { text: "Sua Estrutura Própria em Segundos", className: "text-[#FF7E4A] italic" }
    ],
    description: "Importe qualquer estrutura vencedora do mercado com um clique. Layout e velocidade preservados — adapte à sua oferta e lance sem começar do zero.",
    icon: LineChart,
  },
];

export default function FeaturesPages() {
  return (
    <section id="como-funciona" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            <span className="text-[#FF7E4A]">Liberdade</span> para criar.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Uma plataforma completa para construir, hospedar e otimizar as páginas da sua operação de tráfego pago.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const isFlashPages = index === 0;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-12 items-stretch"
              >
              <div className="space-y-6 max-w-2xl">
                <div className="w-16 h-16 rounded-2xl bg-[#FF7E4A]/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#FF7E4A]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black leading-tight">
                  {feature.titleSegments ? (
                    feature.titleSegments.map((seg, i) => (
                      <BlurTextEffect key={i} className={seg.className}>
                        {seg.text}
                      </BlurTextEffect>
                    ))
                  ) : (
                    <BlurTextEffect className="text-white" key={feature.title}>
                      {feature.title}
                    </BlurTextEffect>
                  )}
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  <BlurTextEffect key={`${feature.title}-desc`}>{feature.description}</BlurTextEffect>
                </p>
              </div>
              
              <div className="w-full">
                <div className="relative h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] rounded-2xl border border-white/10 bg-[#111111] overflow-hidden group">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF7E4A]/20 blur-[80px] rounded-full group-hover:bg-[#FF7E4A]/30 transition-colors duration-500" />
                  
                  {isFlashPages ? (
                    <div className="absolute inset-0">
                      <Image
                        src="/flashpages.png"
                        alt="Flash Pages"
                        fill
                        sizes="(min-width: 768px) 100vw, 100vw"
                        className="object-cover object-top"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <feature.icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="font-semibold uppercase tracking-wider text-sm">Espaço para Imagem/Mockup</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
