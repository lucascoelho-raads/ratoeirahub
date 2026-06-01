import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Fale Conosco | Ratoeira Hub",
  description:
    "Entre em contato com a equipe da Ratoeira Hub. Confira nossos horários de atendimento.",
};

export default function FaleConoscoPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white">
      <Navbar />

      {/* Hero pequeno para dar contexto */}
      <section className="pt-28 pb-8 bg-[#050505]">
        <div className="max-w-6xl 3xl:max-w-[90rem] 4xl:max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight text-balance">
            Fale com a <span className="text-brand-primary">gente</span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl 2xl:max-w-[36rem] 3xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto text-balance">
            Confira nossos horários de atendimento e fale com a gente no momento que for melhor para você.
          </p>
        </div>
      </section>

      {/* Horários de Funcionamento */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl 3xl:max-w-[70rem] 4xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Clock className="w-8 h-8 text-brand-primary" />
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Horários de Funcionamento</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ratoeira Ads */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-black text-gray-900 mb-6">Ratoeira Ads</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Segunda a Sexta</span>
                  <span className="text-gray-900 font-bold whitespace-nowrap">08:00 — 20:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600 font-medium">Sábado, Domingo e Feriados</span>
                  <span className="text-gray-900 font-bold whitespace-nowrap">08:00 — 16:00</span>
                </div>
              </div>
            </div>

            {/* Ratoeira Pages */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-black text-gray-900 mb-6">Ratoeira Pages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Segunda a Sexta</span>
                  <span className="text-gray-900 font-bold whitespace-nowrap">08:00 — 17:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600 font-medium">Sábado</span>
                  <span className="text-gray-900 font-bold whitespace-nowrap">08:00 — 12:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
