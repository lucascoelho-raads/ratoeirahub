"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

export default function FoundersAbout() {
  return (
    <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight hyphens-none">
            <span className="text-brand-primary">Três</span> pessoas. Um{" "}
            <span className="text-brand-primary">problema</span> real. Uma{" "}
            <span className="text-brand-primary">plataforma</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-400 mx-auto text-center px-4 hyphens-none">
            As mentes por trás do ecossistema que está revolucionando o{" "}
            <span className="whitespace-nowrap">tráfego pago</span>.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* Eitor Guimarães */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="w-full md:w-5/12">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/10 group">
                <img
                  src="/fotoeitorbrabo.jpg"
                  alt="Eitor Guimarães"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>

            <div className="w-full md:w-7/12 space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Eitor Guimarães
                </h3>
                <p className="text-brand-primary font-bold tracking-widest uppercase text-sm">
                  Co-Fundador & CEO
                </p>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg text-center md:text-left hyphens-none">
                <p>
                  Formado pela UNICAMP, Eitor construiu sua carreira em
                  analytics e inteligência de mercado — passando por 3M e
                  PepsiCo, onde liderou times de Business Intelligence e Data &
                  Analytics para a América Latina. Em 2022, levou esse
                  repertório para o <span className="whitespace-nowrap">tráfego pago</span> e sistematizou, de forma
                  pioneira no Brasil, o que o mercado de afiliados de{" "}
                  <span className="whitespace-nowrap">Google Ads</span> ainda não tinha: trackeamento server-side para que o{" "}
                  <span className="whitespace-nowrap">Google Ads</span> otimize para compradores reais. O método mudou o
                  patamar do mercado — operações que travavam em até R$100 mil
                  passaram a escalar além de um milhão. Em abril de 2024, junto
                  com Paulo, transformou a descoberta em produto. Hoje lidera a
                  Ratoeira como CEO.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/eitorguimaraes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/eitor.guimaraes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Paulo Furtado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
          >
            <div className="w-full md:w-5/12">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/10 group">
                <img
                  src="/paulo.jpg"
                  alt="Paulo Furtado"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>

            <div className="w-full md:w-7/12 space-y-6 text-center md:text-right">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Paulo Furtado
                </h3>
                <p className="text-brand-primary font-bold tracking-widest uppercase text-sm">
                  Co-Fundador & CTO
                </p>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed text-lg hyphens-none">
                <p>
                  Formado em análise de sistemas em 2012, Paulo passou mais de
                  uma década construindo sistemas robustos — incluindo passagem
                  pela Localiza. Em janeiro de 2024, assistiu ao vídeo de Eitor
                  sobre trackeamento para afiliados de <span className="whitespace-nowrap">Google Ads</span> e enxergou o
                  produto que ainda não existia. Foi direto ao Instagram propor
                  a parceria. Como CTO da Ratoeira, Paulo é responsável pela
                  arquitetura que garante trackeamento ~100%, processamento de
                  eventos em tempo real e as integrações via API com{" "}
                  <span className="whitespace-nowrap">Google Ads</span>, Meta e plataformas de IA.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 justify-center md:justify-end">
                <a
                  href="https://www.linkedin.com/in/paulo-furtado-80798a3a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/paulo.furtado.jr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Brayan Cicarone */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="w-full md:w-5/12">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/10 group">
                <img
                  src="/brayan.jpeg"
                  alt="Brayan Cicarone"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>

            <div className="w-full md:w-7/12 space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Brayan Cicarone
                </h3>
                <p className="text-brand-primary font-bold tracking-widest uppercase text-sm">
                  Co-Fundador e Líder de Desenvolvimento - Ratoeira Pages
                </p>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg text-center md:text-left hyphens-none">
                <p>
                  Especialista em arquitetura de software e MBA em Banco de Dados,
                  Brayan construiu sua trajetória atuando no desenvolvimento de
                  sistemas, arquitetura de software e produtos digitais. Em 2025,
                  passou a colaborar com Paulo e Eitor na evolução da{" "}
                  <span className="whitespace-nowrap">Ratoeira Ads</span>, ajudando a resolver desafios técnicos e a estruturar novas
                  soluções para o mercado.
                </p>
                <p>
                  Ao participar desse processo, enxergou a necessidade de uma
                  plataforma que simplificasse a criação de páginas e integrações
                  para anunciantes. Dessa visão nasceu a{" "}
                  <span className="whitespace-nowrap">Ratoeira Pages</span>. Hoje, é
                  responsável pela arquitetura da plataforma, pelas integrações
                  com inteligência artificial e pela construção das ferramentas
                  que impulsionam a próxima fase do ecossistema Ratoeira.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/brayancicarone?igsh=MTJxZGI4ZnY4cWl6Mw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
