import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroGoogleAds = () => {
  return (
    <div>
      <main>
        {/* Background Animado seguindo o Design System (Laranja/Amarelo) */}
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,184,0,.08)_0,rgba(255,126,74,.02)_50%,rgba(0,0,0,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,184,0,.06)_0,rgba(255,126,74,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,184,0,.04)_0,rgba(255,126,74,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-[#050505] relative min-h-screen flex flex-col justify-center">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24 z-10">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-black md:text-5xl lg:text-7xl text-white tracking-tight mb-6">
                Escale no <span className="text-brand-primary">Google Ads</span> com dados limpos
              </h1>
              <p className="mx-auto my-8 max-w-2xl text-xl text-gray-300">
                A Ratoeira Hub integra nativamente com a API de Conversões do Google, enviando 100% dos eventos reais e bloqueando cliques inválidos antes que eles consumam seu orçamento.
              </p>

              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold">
                <Link href="/planos">
                  Começar a Otimizar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] relative z-10">
            <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
              <div className="[transform:rotateX(20deg);]">
                <div className="lg:h-[44rem] relative skew-x-[.36rad]">
                  {/* Imagens diretamente da raiz public - carregamento garantido */}
                  <div className="relative w-full flex justify-center">
                    <img
                      className="rounded-[24px] relative z-[2] w-full max-w-6xl border border-white/10 shadow-2xl shadow-brand-primary/20 object-cover transform rotate-1 -translate-x-16 translate-y-16"
                      src="/googleadshero.png"
                      alt="Dashboard Campanhas Google Ads"
                    />
                    <img
                      className="rounded-[24px] absolute z-[3] w-full max-w-6xl top-0 -translate-y-8 left-1/2 -translate-x-1/2 border border-white/10 shadow-2xl shadow-black/50 object-cover opacity-95"
                      src="/dashboard.png"
                      alt="Dashboard Financeiro Ratoeira Hub"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners Section adaptada para fundo escuro */}
        <section className="bg-[#050505] relative z-10 py-16 border-t border-white/5">
          <div className="m-auto max-w-5xl px-6">
            <h2 className="text-center text-lg font-medium text-gray-400">Plataformas suportadas nativamente</h2>
            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <img
                className="h-8 w-fit invert brightness-0 hover:brightness-100 transition-all"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="Google"
                height="32"
                width="auto"
              />
              {/* Mais ícones genéricos (Unsplash não provê logos, então usando text placeholders estilizados ou SVGs genéricos) */}
              <div className="text-2xl font-black text-white/50 hover:text-white transition-colors">Meta</div>
              <div className="text-2xl font-black text-white/50 hover:text-white transition-colors">TikTok</div>
              <div className="text-2xl font-black text-white/50 hover:text-white transition-colors">Kwai</div>
              <div className="text-2xl font-black text-white/50 hover:text-white transition-colors">Taboola</div>
              <div className="text-2xl font-black text-white/50 hover:text-white transition-colors">Outbrain</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};