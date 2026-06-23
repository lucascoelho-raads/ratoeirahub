import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroNativeAds = () => {
  return (
    <div className="relative overflow-hidden bg-[#050505]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,184,0,.08)_0,rgba(255,126,74,.02)_50%,rgba(0,0,0,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,184,0,.06)_0,rgba(255,126,74,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,184,0,.04)_0,rgba(255,126,74,.02)_80%,transparent_100%)]" />
      </div>

      <section className="relative">
        <div className="relative mx-auto max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] px-6 pt-[clamp(7rem,12vh,10rem)] pb-10">
          <div className="relative z-10 mx-auto max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] text-center">
            <h1 className="text-[clamp(1.15rem,3.6vw,4.5rem)] lg:text-[clamp(1.15rem,3.2vw,5rem)] font-black text-white tracking-tight leading-[1.04] mb-6 max-w-3xl lg:max-w-4xl mx-auto">
              Escale <span className="text-brand-primary">Taboola</span> e{" "}
              <span className="text-brand-primary">NewsBreak</span>
              <br />
              sabendo exatamente o que vende.
            </h1>
            <p className="mx-auto my-8 max-w-5xl 2xl:max-w-[80rem] 4xl:max-w-[100rem] text-center text-[clamp(1rem,1.15vw,1.3rem)] lg:text-[clamp(1.1rem,1.25vw,1.4rem)] text-gray-300 leading-relaxed">
              Anúncios nativos escondem parte do funil. A Ratoeira conecta
              visitas, leads e vendas
              <br className="hidden md:block" />
              {" "}
              aos seus criativos na Taboola e no NewsBreak, para você escalar o
              que lucra e cortar o que só gasta.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 2xl:h-16 2xl:px-10 2xl:text-xl font-bold text-black whitespace-nowrap"
              >
                <Link href="/planos#pricing-cards">
                  Assinar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 lg:mt-12 max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
          <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
            <div className="[transform:rotateX(20deg);]">
              <div className="h-[clamp(16rem,34vw,52rem)] relative skew-x-[.36rad]">
                <div className="absolute inset-0 z-[2] translate-x-[-6%] translate-y-[18%] scale-[0.96] opacity-70">
                  <Image
                    className="rounded-[--radius] border border-white/10 object-cover object-top shadow-2xl shadow-black/60"
                    src="/dashboard_resumo.png"
                    alt="Visão consolidada de performance em Native Ads"
                    fill
                    priority
                    sizes="(min-width: 1024px) 80vw, 100vw"
                  />
                </div>
                <div className="absolute inset-0 z-[3] translate-x-[6%] translate-y-[2%]">
                  <Image
                    className="rounded-[--radius] border border-white/10 object-cover object-top shadow-2xl shadow-brand-primary/20"
                    src="/dashboard.png"
                    alt="Painel de campanhas de Native Ads"
                    fill
                    priority
                    sizes="(min-width: 1024px) 80vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
