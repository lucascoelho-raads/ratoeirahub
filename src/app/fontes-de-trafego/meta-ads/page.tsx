import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMetaAds } from "./components/HeroMetaAds";

export const metadata = {
  title: "Meta Ads | Fonte de Tráfego | Ratoeira Hub",
  description:
    "Otimize criativos e escale no Facebook e Instagram com dados limpos, proteção contra fraude e visão total de performance.",
};

const pillars = [
  {
    title: "Atribuição mais confiável para escalar",
    description:
      "Tome decisões com base em sinais mais consistentes e reduza a perda de conversões por bloqueios e limitações comuns.",
    icon: TrendingUp,
    image: "/metaadshero1.png",
  },
  {
    title: "Proteção contra tráfego inválido",
    description:
      "Diminua desperdício com bots e cliques suspeitos e mantenha estabilidade na performance dos conjuntos.",
    icon: ShieldCheck,
    image: "/metaadshero2.png",
  },
  {
    title: "Criativos com leitura operacional",
    description:
      "Enxergue o que realmente move seu ROI e ajuste seus criativos com mais velocidade e clareza.",
    icon: Sparkles,
    image: "/dashboard.png",
  },
];

export default function MetaAdsTrafficSourcePage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroMetaAds />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              O que muda quando a fonte é o{" "}
              <span className="text-brand-primary">Meta Ads</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl">
              Em Meta, o jogo é criativo + sinal. Quando seu dado é consistente, você consegue iterar rápido, escalar e proteger o ROI.
            </p>
          </div>

          <div className="space-y-16">
            {pillars.map((p, index) => {
              const Icon = p.icon;
              const isReversed = index % 2 === 1;

              return (
                <div key={p.title} className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className={isReversed ? "space-y-6 max-w-2xl lg:order-2" : "space-y-6 max-w-2xl lg:order-1"}>
                    <div className="flex items-center gap-3">
                      <span className="flex w-12 h-12 items-center justify-center rounded-2xl bg-brand-primary/10 border border-white/10 text-brand-primary">
                        <Icon className="w-6 h-6" />
                      </span>
                      <div className="text-xl font-black text-white tracking-tight">{p.title}</div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{p.description}</p>
                  </div>

                  <div className={isReversed ? "w-full lg:order-1" : "w-full lg:order-2"}>
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/35">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                      <div className="relative z-10 p-6 sm:p-8">
                        <div className="relative h-[clamp(240px,28vh,420px)] overflow-hidden rounded-2xl border border-white/10">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 ring-1 ring-white/10" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Pronto para escalar{" "}
                <span className="text-brand-primary">Meta Ads</span>{" "}
                com dados limpos?
              </h3>
              <p className="mt-3 text-gray-300 max-w-2xl">
                Veja os planos e escolha a melhor configuração para seu volume de tráfego.
              </p>
            </div>
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/planos">
                Ver Planos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
