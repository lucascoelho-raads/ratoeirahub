"use client"

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full bg-black/[0.96] relative overflow-hidden border-white/10">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FFB800" />

      <div className="flex flex-col lg:flex-row min-h-[560px]">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#FFB800] to-neutral-300">
            Conexões com IA
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Integre dados com ferramentas de inteligência artificial para automatizar análises e dar mais velocidade à
            sua operação.
          </p>
        </div>

        <div className="flex-1 relative min-h-[360px] lg:min-h-0">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>
  )
}
