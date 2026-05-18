import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { SplineSceneBasic } from "@/components/ui/spline-scene-basic"

export const metadata = {
  title: "Conexões com IA | Ratoeira Hub",
  description: "Integre dados com ferramentas de inteligência artificial para acelerar análises e decisões.",
}

export default function ConexoesComIAPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SplineSceneBasic />
        </div>
      </section>

      <Footer />
    </main>
  )
}
