import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Ratoeira Ads",
  description: "Política de Privacidade da plataforma Ratoeira Ads.",
};

export default function PrivacidadeAdsPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="flex-1 py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all font-medium text-sm border border-white/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Política de Privacidade</h1>
          <p className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4">Ratoeira Ads</p>
          <p className="text-gray-400 text-lg">Sua segurança e privacidade são nossa prioridade.</p>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-base md:text-lg">
          
          <section className="p-6 md:p-8 bg-[#111111] rounded-3xl border border-white/10">
            <p>
              Esta Política de Privacidade (“Política”) se aplica a todos os serviços prestados pela <strong className="text-white">RATOEIRA ADS DIGITAL MARKETING LTDA.</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº CNPJ: 55.824.986/0001-06, sediada na Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP, CEP: 06.454-000, doravante denominada (“<strong className="text-white">RATOEIRA ADS</strong>”).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">1</span>
              Do Objeto
            </h2>
            <div className="space-y-4">
              <p>Visando proteger a sua privacidade, além de garantir a liberdade e o exercício de direitos ao titular de dados, a RATOEIRA ADS apresenta a presente Política de Privacidade.</p>
              <p>Este documento tem o objetivo de informar, de forma clara e objetiva, sobre como é realizada a coleta, tratamento e armazenamento de dados pessoais essenciais para a prestação de seus serviços.</p>
              <p>O titular dos dados pessoais declara-se ciente com esta Política e dá expresso consentimento para o Tratamento de suas Informações Pessoais pela RATOEIRA ADS.</p>
              <p>Caso não concorde com o Tratamento de suas Informações Pessoais, na forma prevista nesta Política, deverá se abster de utilizar os serviços da RATOEIRA ADS.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">2</span>
              Conceitos Importantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5">
                <strong className="text-brand-primary block mb-2 text-xl">LGPD</strong>
                <p className="text-sm md:text-base">Lei Geral de Proteção de Dados (13.709/2018), que regula o tratamento, proteção e privacidade de Dados Pessoais no Brasil.</p>
              </div>
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5">
                <strong className="text-brand-primary block mb-2 text-xl">Dados Pessoais</strong>
                <p className="text-sm md:text-base">Informações que podem ser associadas a uma pessoa física identificada ou identificável (nome, CPF, e-mail, etc).</p>
              </div>
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5">
                <strong className="text-brand-primary block mb-2 text-xl">Tratamento</strong>
                <p className="text-sm md:text-base">Toda operação realizada com dados pessoais, desde a coleta até a eliminação.</p>
              </div>
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5">
                <strong className="text-brand-primary block mb-2 text-xl">Titular de Dados</strong>
                <p className="text-sm md:text-base">Toda pessoa natural a quem se referem os dados que são objeto de tratamento.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">3</span>
              Dados Tratados e Finalidade
            </h2>
            <p className="mb-4">A RATOEIRA ADS coleta dados pessoais para garantir a execução dos serviços, segurança e melhoria da experiência:</p>
            <ul className="space-y-3 pl-0 list-none">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                <span><strong className="text-white">Credenciamento:</strong> Nome, CPF, Telefone, Endereço e E-mail.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                <span><strong className="text-white">Financeiro:</strong> Dados bancários para repasse de comissões.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                <span><strong className="text-white">Suporte:</strong> Informações relacionadas à dúvida ou demanda.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                <span><strong className="text-white">Técnico:</strong> Endereço IP, cookies e registros de acesso.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">4</span>
              Compartilhamento de Dados
            </h2>
            <p>Os dados podem ser compartilhados com parceiros e fornecedores para garantir as medidas contratadas, autoridades competentes quando requisitado, e em operações societárias, sempre exigindo as mesmas diretrizes de segurança.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">5</span>
              Armazenamento e Segurança
            </h2>
            <div className="space-y-4">
              <p>As informações são armazenadas em servidores seguros com criptografia e firewalls. A RATOEIRA ADS adota medidas rigorosas contra perda, roubo ou acesso não autorizado.</p>
              <p>Os dados de cadastro são mantidos enquanto o usuário estiver ativo, podendo ser guardados por até 10 anos após o encerramento para cumprimento de obrigações legais (Banco Central).</p>
            </div>
          </section>

          <section className="bg-[#111111] p-6 md:p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary text-black text-sm">6</span>
              Seus Direitos (Art. 18 LGPD)
            </h2>
            <p className="mb-4">Você tem o direito de solicitar a qualquer momento:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Confirmação de tratamento",
                "Acesso e correção de dados",
                "Anonimização ou bloqueio",
                "Eliminação de dados",
                "Portabilidade",
                "Revogação do consentimento"
              ].map((direito) => (
                <li key={direito} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span className="text-sm">{direito}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="mb-2 text-white font-bold">Para exercer seus direitos, contate nosso DPO:</p>
              <a href="mailto:suporte@ratoeiraads.com" className="text-brand-primary hover:underline font-medium text-lg">
                suporte@ratoeiraads.com
              </a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}