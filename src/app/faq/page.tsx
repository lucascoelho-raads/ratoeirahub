import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "./components/FAQAccordion";

export const metadata = {
  title: "Perguntas Frequentes | Ratoeira Hub",
  description: "Tire suas dúvidas sobre o Ratoeira Hub, Ratoeira Ads e Ratoeira Pages.",
};

export default function FAQPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 max-w-4xl 2xl:max-w-4xl 4xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            Central de Ajuda
          </div>
          
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight text-balance">
            Como podemos <span className="text-brand-primary">ajudar?</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto leading-relaxed text-balance">
            Encontre respostas rápidas para as dúvidas mais comuns sobre o ecossistema Ratoeira Hub, nossos planos e integrações.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="relative z-10 pb-16 md:pb-32 px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
        
        {/* CTA Support */}
        <div className="mt-12 md:mt-20 max-w-3xl 2xl:max-w-3xl 4xl:max-w-[80rem] mx-auto text-center bg-[#111111] border border-white/10 rounded-[32px] p-6 sm:p-10 md:p-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Nossa equipe de especialistas está pronta para ajudar você a escalar suas operações com segurança.
          </p>
          <a 
            href="/fale-conosco" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-button font-bold text-black bg-brand-primary hover:bg-brand-primary-hover transition-colors shadow-lg shadow-brand-primary/20"
          >
            Falar com Suporte
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
