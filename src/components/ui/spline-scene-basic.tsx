"use client"

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FFB800" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_35%_45%,rgba(255,184,0,0.12)_0%,rgba(0,0,0,0)_70%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] flex-col px-4 py-[clamp(5.5rem,10vh,8.5rem)] sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8 3xl:px-12 4xl:px-20 lg:py-[clamp(6.5rem,10vh,9rem)]">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#FFB800] to-neutral-300  text-center lg:text-left">
            Conexões com IA
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg  text-center lg:text-left">
            Sua operação de anúncios, acessível para o Claude e o ChatGPT. Consulte, decida e execute — sem abrir o painel.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="/planos#pricing-cards"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-button bg-gradient-to-r from-[#FFB800] to-orange-500 text-black font-semibold hover:from-yellow-400 hover:to-orange-400 transition-colors"
            >
              Começar grátis
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          <p className="mt-3 text-sm text-neutral-400 text-center lg:text-left">Plano gratuito disponível. Sem cartão.</p>
        </div>

        <div className="flex-1 relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
