import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Link2, Radar, LayoutTemplate, MousePointerClick, Server, LineChart, ShieldCheck } from "lucide-react";
import { BeamsBackground } from "@/components/ui/ethereal-beams-hero";
import { AuroraBackground } from "@/components/ui/animated-background";

export const metadata = {
  title: "Ratoeira Hub | Ads + Pages em um único dashboard",
  description:
    "Integre Ratoeira Ads e Ratoeira Pages em um único fluxo: dados consistentes, operação simples e visão total para escalar.",
};

const features = [
  {
    title: "Integração nativa",
    description: "Ads + Pages no mesmo fluxo, sem ferramentas soltas e sem configurações manuais complexas.",
    icon: Link2,
  },
  {
    title: "Dashboard operacional",
    description: "Uma visão única para enxergar o que funciona e tomar decisão com mais confiança.",
    icon: Radar,
  },
  {
    title: "Páginas prontas para escalar",
    description: "Crie e valide rápido com páginas otimizadas, hospedagem e domínios conectados no mesmo ecossistema.",
    icon: LayoutTemplate,
  },
  {
    title: "Tracking server-side",
    description: "Dados mais consistentes para otimizar campanhas e reduzir perdas comuns do pixel tradicional.",
    icon: Server,
  },
  {
    title: "Proteção contra fraude",
    description: "Mais estabilidade na operação com proteção contra tráfego inválido e sinais mais limpos.",
    icon: ShieldCheck,
  },
  {
    title: "Velocidade para iterar",
    description: "Teste mais rápido, ajuste melhor e escale o que converte com uma operação mais enxuta.",
    icon: LineChart,
  },
];

export default function RatoeiraHubPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#050505]">
        <BeamsBackground
          className="min-h-screen"
          beamsProps={{
            beamWidth: 3,
            beamHeight: 20,
            beamNumber: 15,
            lightColor: "#FFB800",
            speed: 1.5,
            noiseIntensity: 2,
            scale: 0.15,
            rotation: 0,
          }}
        >
          <div aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-br from-yellow-500/15 via-orange-500/10 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-[clamp(4.5rem,10vh,8.5rem)]">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Link2 className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-neutral-300 uppercase tracking-wider font-semibold">
                  Ratoeira Hub
                </span>
              </div>
            </div>

            <div className="max-w-6xl text-center">
              <h1 className="text-[clamp(2.75rem,4.2vw,6rem)] font-black text-white tracking-tight leading-[1.04] mb-8">
                Ads + Pages em um{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  único dashboard
                </span>{" "}
                operacional.
              </h1>

              <p className="text-[clamp(1.05rem,1.25vw,1.35rem)] text-neutral-400 mb-12 max-w-3xl mx-auto">
                Unifique tracking, páginas e dados em um fluxo simples. Menos ferramentas soltas, mais clareza para escalar.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/planos"
                  className="inline-flex items-center gap-2 px-8 py-4 2xl:px-10 2xl:py-5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold hover:from-yellow-400 hover:to-orange-400 transition-colors"
                >
                  Começar agora
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 px-8 py-4 2xl:px-10 2xl:py-5 rounded-full bg-white/5 text-orange-400 font-semibold border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <MousePointerClick className="w-5 h-5" />
                  Como Funciona
                </a>
              </div>
            </div>
          </div>
        </BeamsBackground>
      </section>

      <section id="como-funciona" className="py-24 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Operação <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">integrada</span>.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Uma base única para executar, medir e escalar — com Ads e Pages trabalhando juntos.
            </p>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/15 to-orange-500/15 flex items-center justify-center mb-6 border border-white/10">
                      <Icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black leading-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative aspect-video rounded-2xl border border-white/10 bg-[#111111] overflow-hidden group">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-yellow-500/25 to-orange-500/25 blur-[90px] rounded-full group-hover:from-yellow-500/35 group-hover:to-orange-500/35 transition-colors duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <Icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="font-semibold uppercase tracking-wider text-sm">Espaço para Mockup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AuroraBackground className="flex items-center justify-center min-h-[clamp(600px,70vh,900px)] py-24">
        <div className="max-w-6xl mx-auto px-4 relative z-20 text-center w-full">
          <h2 className="text-[clamp(2.25rem,3.2vw,4.5rem)] font-black text-white mb-6 tracking-tight drop-shadow-xl">
            Unifique e <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">escale</span>.
          </h2>
          <p className="text-[clamp(1.1rem,1.25vw,1.5rem)] text-gray-300 max-w-3xl mx-auto drop-shadow-md mb-10 leading-relaxed">
            Ative o ecossistema completo no{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold">
              Ratoeira Hub
            </span>
            .
          </p>

          <div className="relative mx-auto mb-10 w-full max-w-6xl">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden lg:block">
              <Image
                src="/logoraads.png"
                alt="Logo Ratoeira Ads"
                width={252}
                height={252}
                className="drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
              />
            </div>
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:block">
              <Image
                src="/logopages.png"
                alt="Logo Ratoeira Pages"
                width={252}
                height={252}
                className="drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
              />
            </div>
            <div className="relative mx-auto w-full max-w-[620px] overflow-visible">
              <div aria-hidden className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-[135px] w-[calc(100%+520px)] max-w-none overflow-visible"
                  viewBox="0 0 1000 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <style>{`
                    @keyframes energyL {
                      from { stroke-dashoffset: 0; }
                      to { stroke-dashoffset: -260; }
                    }
                    @keyframes energyR {
                      from { stroke-dashoffset: 0; }
                      to { stroke-dashoffset: 260; }
                    }
                  `}</style>
                  <defs>
                    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.2" />
                    </filter>
                    <linearGradient id="line-gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#facc15" />
                      <stop offset="1" stopColor="#f97316" />
                    </linearGradient>
                    <mask id="logo-cutout">
                      <rect x="0" y="0" width="1000" height="200" fill="white" />
                      <rect x="310" y="-20" width="380" height="240" rx="70" fill="black" />
                    </mask>
                    <mask id="energy-left">
                      <rect x="0" y="0" width="500" height="200" fill="white" />
                      <rect x="500" y="0" width="500" height="200" fill="black" />
                      <rect x="310" y="-20" width="380" height="240" rx="70" fill="black" />
                    </mask>
                    <mask id="energy-right">
                      <rect x="0" y="0" width="500" height="200" fill="black" />
                      <rect x="500" y="0" width="500" height="200" fill="white" />
                      <rect x="310" y="-20" width="380" height="240" rx="70" fill="black" />
                    </mask>
                  </defs>

                  <g filter="url(#blur)" opacity="0.55" mask="url(#energy-left)">
                    <path d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeDasharray="18 52" style={{ animation: "energyL 1.5s linear infinite" }} />
                    <path d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeDasharray="16 56" style={{ animation: "energyL 1.7s linear infinite" }} />
                    <path d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105" stroke="url(#line-gradient)" strokeWidth="6" strokeLinecap="round" strokeDasharray="20 60" style={{ animation: "energyL 1.9s linear infinite" }} />
                    <path d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" strokeDasharray="18 54" style={{ animation: "energyL 1.6s linear infinite" }} />
                    <path d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" strokeDasharray="16 58" style={{ animation: "energyL 1.8s linear infinite" }} />
                  </g>

                  <g filter="url(#blur)" opacity="0.55" mask="url(#energy-right)">
                    <path d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeDasharray="18 52" style={{ animation: "energyR 1.5s linear infinite" }} />
                    <path d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeDasharray="16 56" style={{ animation: "energyR 1.7s linear infinite" }} />
                    <path d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105" stroke="url(#line-gradient)" strokeWidth="6" strokeLinecap="round" strokeDasharray="20 60" style={{ animation: "energyR 1.9s linear infinite" }} />
                    <path d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" strokeDasharray="18 54" style={{ animation: "energyR 1.6s linear infinite" }} />
                    <path d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" strokeDasharray="16 58" style={{ animation: "energyR 1.8s linear infinite" }} />
                  </g>

                  <g opacity="0.9" mask="url(#energy-left)">
                    <path d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95" stroke="#fde047" strokeWidth="3" strokeLinecap="round" strokeDasharray="14 44" style={{ animation: "energyL 1.5s linear infinite" }} />
                    <path d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100" stroke="#fde047" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 48" style={{ animation: "energyL 1.7s linear infinite" }} />
                    <path d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105" stroke="url(#line-gradient)" strokeWidth="3" strokeLinecap="round" strokeDasharray="16 52" style={{ animation: "energyL 1.9s linear infinite" }} />
                    <path d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" strokeDasharray="14 46" style={{ animation: "energyL 1.6s linear infinite" }} />
                    <path d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 50" style={{ animation: "energyL 1.8s linear infinite" }} />
                  </g>

                  <g opacity="0.9" mask="url(#energy-right)">
                    <path d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95" stroke="#fde047" strokeWidth="3" strokeLinecap="round" strokeDasharray="14 44" style={{ animation: "energyR 1.5s linear infinite" }} />
                    <path d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100" stroke="#fde047" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 48" style={{ animation: "energyR 1.7s linear infinite" }} />
                    <path d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105" stroke="url(#line-gradient)" strokeWidth="3" strokeLinecap="round" strokeDasharray="16 52" style={{ animation: "energyR 1.9s linear infinite" }} />
                    <path d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" strokeDasharray="14 46" style={{ animation: "energyR 1.6s linear infinite" }} />
                    <path d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 50" style={{ animation: "energyR 1.8s linear infinite" }} />
                  </g>

                  <g filter="url(#blur)" opacity="0.45" mask="url(#logo-cutout)">
                    <path d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />
                    <path d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />
                    <path d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105" stroke="url(#line-gradient)" strokeWidth="4" strokeLinecap="round" />
                    <path d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                    <path d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  <g opacity="0.9" mask="url(#logo-cutout)">
                    <path d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95" stroke="#facc15" strokeWidth="2.25" strokeLinecap="round" />
                    <path d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100" stroke="#facc15" strokeWidth="2.25" strokeLinecap="round" />
                    <path d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105" stroke="url(#line-gradient)" strokeWidth="2.25" strokeLinecap="round" />
                    <path d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110" stroke="#f97316" strokeWidth="2.25" strokeLinecap="round" />
                    <path d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115" stroke="#f97316" strokeWidth="2.25" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              <div className="relative mx-auto w-fit">
                <Image
                  src="/logo_ads_pages.png"
                  alt="Ads + Pages"
                  width={252}
                  height={252}
                  className="drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>
          </div>

          <Link
            href="/planos"
            className="inline-flex items-center gap-2 px-10 py-5 mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full hover:from-yellow-400 hover:to-orange-400 transition-all text-xl shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95"
          >
            Ver Planos
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </AuroraBackground>

      <Footer />
    </main>
  );
}
