import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Ratoeira Pages",
  description: "Política de Privacidade da plataforma Ratoeira Pages.",
};

export default function PrivacidadePagesPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="flex-1 py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl 3xl:max-w-[70rem] 4xl:max-w-[90rem] mx-auto w-full">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all font-medium text-sm border border-white/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4">
            Ratoeira Pages
          </p>
          <p className="text-gray-400 text-lg">
            Sua segurança e privacidade são nossa prioridade.
          </p>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-base md:text-lg">
          <section className="p-6 md:p-8 bg-[#111111] rounded-3xl border border-white/10">
            <p>
              Esta Política de Privacidade (&ldquo;Política&rdquo;) se aplica a
              todos os serviços prestados pela{" "}
              <strong className="text-white">
                RATOEIRA PAGES DIGITAL MARKETING LTDA
              </strong>
              , pessoa jurídica de direito privado, inscrita no CNPJ sob o nº{" "}
              <strong className="text-white">62.829.447/0001-25</strong>, sediada
              na Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP, CEP:
              06.454-000, doravante denominada (
              <strong className="text-white">&ldquo;RATOEIRA PAGES&rdquo;</strong>
              ).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                1
              </span>
              Do Objeto
            </h2>
            <div className="space-y-4">
              <p>
                Visando proteger a sua privacidade, além de garantir a liberdade
                e o exercício de direitos ao titular de dados, a RATOEIRA PAGES
                apresenta a presente Política de Privacidade.
              </p>
              <p>
                Este documento tem o objetivo de informar, de forma clara e
                objetiva, sobre como é realizada a coleta, tratamento e
                armazenamento de dados pessoais essenciais para a prestação de
                seus serviços.
              </p>
              <p>
                O titular dos dados pessoais declara-se ciente com esta Política
                e dá expresso consentimento para o Tratamento de suas
                Informações Pessoais pela RATOEIRA PAGES.
              </p>
              <p>
                Caso não concorde com o Tratamento de suas Informações Pessoais,
                na forma prevista nesta Política, deverá se abster de utilizar
                os serviços da RATOEIRA PAGES.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                2
              </span>
              Conceitos Importantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5">
                <strong className="text-brand-primary block mb-2 text-xl">
                  LGPD
                </strong>
                <p className="text-sm md:text-base">
                  Lei Geral de Proteção de Dados (13.709/2018), que regula o
                  tratamento, proteção e privacidade de Dados Pessoais no
                  Brasil.
                </p>
              </div>
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5">
                <strong className="text-brand-primary block mb-2 text-xl">
                  Dados Pessoais
                </strong>
                <p className="text-sm md:text-base">
                  Informações que podem ser associadas a uma pessoa física
                  identificada ou identificável (nome, CPF, e-mail, etc).
                </p>
              </div>
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5">
                <strong className="text-brand-primary block mb-2 text-xl">
                  Tratamento
                </strong>
                <p className="text-sm md:text-base">
                  Toda operação realizada com dados pessoais, desde a coleta até
                  a eliminação.
                </p>
              </div>
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5">
                <strong className="text-brand-primary block mb-2 text-xl">
                  Titular de Dados
                </strong>
                <p className="text-sm md:text-base">
                  Toda pessoa natural a quem se referem os dados que são objeto
                  de tratamento.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                3
              </span>
              Dados Tratados e Finalidade
            </h2>
            <p className="mb-4">
              A RATOEIRA PAGES coleta e trata dados pessoais para garantir a
              execução dos serviços, segurança, prevenção de fraudes e melhoria
              da experiência:
            </p>
            <ul className="space-y-3 pl-0 list-none">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                <span>
                  <strong className="text-white">Cadastrais:</strong> Nome
                  completo, CPF/CNPJ, e-mail, telefone, endereço e dados de
                  pagamento.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                <span>
                  <strong className="text-white">Navegação e Uso:</strong>{" "}
                  Dados de navegação, logs de acesso, padrões de uso da
                  plataforma, endereço IP e cookies.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                <span>
                  <strong className="text-white">Conteúdo do Usuário:</strong>{" "}
                  Textos, imagens, vídeos, marcas e demais dados publicados nas
                  páginas criadas pelo Usuário.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                <span>
                  <strong className="text-white">Suporte:</strong>{" "}
                  Informações relacionadas à dúvida, demanda ou comunicação com
                  nosso time de atendimento.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                4
              </span>
              Bases Legais (LGPD)
            </h2>
            <div className="space-y-4">
              <p>
                O tratamento de dados pessoais realizado pela RATOEIRA PAGES
                observa integralmente a Lei nº 13.709/2018 (LGPD). As bases
                legais aplicadas são:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    base: "Execução de contrato (art. 7º, V)",
                    desc: "Para dados necessários à prestação do serviço, criação de páginas, hospedagem e processamento de pagamentos.",
                  },
                  {
                    base: "Legítimo interesse (art. 7º, IX)",
                    desc: "Para segurança, monitoramento de uso, prevenção de fraudes e proteção da plataforma contra uso indevido ou concorrencial.",
                  },
                  {
                    base: "Cumprimento de obrigação legal (art. 7º, II)",
                    desc: "Quando exigido por legislação aplicável, incluindo o Marco Civil da Internet (Lei nº 12.965/2014).",
                  },
                  {
                    base: "Consentimento (art. 7º, I)",
                    desc: "Quando aplicável, para envio de comunicações de marketing e novidades sobre a plataforma.",
                  },
                ].map((item) => (
                  <li
                    key={item.base}
                    className="bg-[#161616] p-4 rounded-xl border border-white/5"
                  >
                    <strong className="text-brand-primary block mb-1">
                      {item.base}
                    </strong>
                    <span className="text-sm md:text-base">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                5
              </span>
              Compartilhamento de Dados
            </h2>
            <div className="space-y-4">
              <p>
                A RATOEIRA PAGES não comercializa dados pessoais. Os dados
                podem ser compartilhados nas seguintes hipóteses:
              </p>
              <ul className="space-y-3 pl-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Parceiros e Fornecedores:</strong>{" "}
                    Para garantir a prestação dos serviços contratados
                    (processamento de pagamentos, hospedagem, CDN, serviços de
                    e-mail), sempre exigindo as mesmas diretrizes de segurança.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Autoridades Competentes:</strong>{" "}
                    Quando requisitado por ordem judicial ou determinação de
                    autoridade competente.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Operações Societárias:</strong>{" "}
                    Em caso de transferência de controle, aquisição ou fusão,
                    garantida a continuidade das obrigações de privacidade.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Dados Anonimizados:</strong>{" "}
                    A RATOEIRA PAGES poderá utilizar dados anonimizados e
                    agregados para fins de pesquisa, desenvolvimento de produto
                    e estatísticas de mercado. Tais dados não se sujeitam às
                    restrições da LGPD, nos termos do art. 12 da referida Lei.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                6
              </span>
              Armazenamento, Segurança e Prazos
            </h2>
            <div className="space-y-4">
              <p>
                As informações são armazenadas em servidores seguros com
                criptografia, firewalls e medidas técnicas e organizacionais
                razoáveis de proteção. A RATOEIRA PAGES adota medidas rigorosas
                contra perda, roubo ou acesso não autorizado.
              </p>
              <p>
                Contudo, não se responsabiliza por vazamentos de informações
                decorrentes de ataques cibernéticos sofisticados, falhas de
                terceiros ou negligência do próprio usuário na proteção de seus
                acessos.
              </p>
              <p>
                Os registros de log de sistema, incluindo ações dos usuários e
                padrões de comportamento na plataforma, serão mantidos por prazo
                mínimo de 5 (cinco) anos, contados a partir do registro, em
                conformidade com o Marco Civil da Internet (Lei nº 12.965/2014)
                e a LGPD, podendo ser utilizados como meio de prova em qualquer
                procedimento judicial, administrativo ou arbitral.
              </p>
              <p>
                Os dados de cadastro são mantidos enquanto o usuário estiver
                ativo na plataforma, podendo ser guardados por período adicional
                para cumprimento de obrigações legais.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                7
              </span>
              Uso de Inteligência Artificial
            </h2>
            <div className="space-y-4">
              <p>
                A Plataforma RATOEIRA PAGES utiliza recursos de Inteligência
                Artificial (IA) para geração e revisão automatizada de páginas.
                Esses recursos operam a partir de dados e briefing fornecidos
                pelo Usuário e de modelos algorítmicos de terceiros (incluindo
                OpenAI).
              </p>
              <p>
                A RATOEIRA PAGES <strong className="text-white">não garante</strong>{" "}
                exatidão, completude, originalidade, ausência de vieses ou
                conformidade do conteúdo gerado por IA com políticas de
                terceiros. É dever exclusivo do Usuário revisar, aprovar e
                assumir responsabilidade pelo conteúdo antes de sua publicação.
              </p>
              <p>
                Os dados fornecidos para geração de conteúdo por IA são
                processados de acordo com esta Política e com os termos dos
                provedores de serviços de IA utilizados.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                8
              </span>
              Cookies e Tecnologias de Rastreamento
            </h2>
            <div className="space-y-4">
              <p>
                A RATOEIRA PAGES utiliza cookies e tecnologias similares para
                melhorar a experiência do usuário, analisar tráfego, lembrar
                preferências e personalizar conteúdo. Os tipos de cookies
                utilizados incluem:
              </p>
              <ul className="space-y-2 pl-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Essenciais:</strong>{" "}
                    Necessários para o funcionamento básico da plataforma.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Analíticos:</strong>{" "}
                    Utilizados para entender como os usuários interagem com a
                    plataforma e melhorar nossos serviços.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Funcionais:</strong>{" "}
                    Permitem lembrar preferências e configurações do usuário.
                  </span>
                </li>
              </ul>
              <p>
                O usuário pode gerenciar as preferências de cookies diretamente
                nas configurações do navegador.
              </p>
            </div>
          </section>

          <section className="bg-[#111111] p-6 md:p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary text-black text-sm">
                9
              </span>
              Seus Direitos (Art. 18 LGPD)
            </h2>
            <p className="mb-4">
              VOCÊ, na qualidade de titular de dados, tem o direito de
              solicitar a qualquer momento:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Confirmação de tratamento",
                "Acesso aos dados",
                "Correção de dados incompletos ou desatualizados",
                "Anonimização ou bloqueio de dados desnecessários",
                "Eliminação de dados (quando aplicável)",
                "Portabilidade dos dados",
                "Revogação do consentimento",
                "Informação sobre compartilhamento",
              ].map((direito) => (
                <li key={direito} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span className="text-sm">{direito}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="mb-2 text-white font-bold">
                Para exercer seus direitos, contate nosso DPO/Encarregado:
              </p>
              <a
                href="mailto:suporte@ratoeirapages.com"
                className="text-brand-primary hover:underline font-medium text-lg"
              >
                suporte@ratoeirapages.com
              </a>
              <p className="mt-2 text-sm text-gray-400">
                O prazo de resposta será de até 15 (quinze) dias úteis.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                10
              </span>
              Portabilidade de Dados
            </h2>
            <p>
              Em caso de solicitação de portabilidade ou exportação de dados,
              nos termos do art. 18, V da LGPD, a RATOEIRA PAGES
              disponibilizará os dados em formato estruturado no prazo de até
              30 (trinta) dias úteis. O custo administrativo da exportação
              poderá ser cobrado do usuário, limitado ao valor equivalente a 1
              (um) mês do plano vigente à época da solicitação, exceto nas
              hipóteses em que a gratuidade seja expressamente exigida pela
              legislação aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                11
              </span>
              Alterações nesta Política
            </h2>
            <p>
              A RATOEIRA PAGES poderá alterar esta Política a qualquer tempo,
              sendo que a versão mais recente estará sempre disponível nesta
              página. Recomendamos que o usuário a consulte periodicamente.
              Alterações substanciais serão comunicadas por e-mail ou por meio
              de aviso na plataforma.
            </p>
          </section>

          <section className="bg-brand-primary/10 p-6 md:p-8 rounded-3xl border border-brand-primary/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary text-black text-sm">
                12
              </span>
              Contato
            </h2>
            <p className="mb-4">
              Em caso de dúvidas sobre esta Política de Privacidade, entre em
              contato:
            </p>
            <div className="space-y-2">
              <p>
                <strong className="text-white">E-mail:</strong>{" "}
                <a
                  href="mailto:suporte@ratoeirapages.com"
                  className="text-brand-primary hover:underline"
                >
                  suporte@ratoeirapages.com
                </a>
              </p>
              <p>
                <strong className="text-white">Telefone:</strong>{" "}
                <a
                  href="https://wa.me/5519997278153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline"
                >
                  +55 (19) 99727-8153
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
