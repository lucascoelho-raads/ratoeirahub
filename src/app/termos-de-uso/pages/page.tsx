import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Termos de Uso do Pages | Ratoeira Hub",
  description: "Termos e Condições de Uso da plataforma Ratoeira Pages.",
};

export default function TermosDeUsoPagesPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="flex-1 py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl 2xl:max-w-[92%] 4xl:max-w-[90rem] mx-auto w-full">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400/60 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all font-medium text-sm border border-white/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Home
          </Link>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Termos de Uso
          </h1>
          <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">
            Ratoeira Pages
          </p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed text-base md:text-lg">
          {/* Intro */}
          <section className="p-6 md:p-8 bg-[#111111] rounded-3xl border border-white/10">
            <p>
              <strong className="text-white">
                RATOEIRA PAGES DIGITAL MARKETING LTDA
              </strong>
              , pessoa jurídica de direito privado, inscrita no CNPJ sob o nº{" "}
              <strong className="text-white">62.829.447/0001-25</strong>, sediada
              na Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP, CEP:
              06.454-000, doravante denominada{" "}
              <strong className="text-white">
                &ldquo;RATOEIRA PAGES&rdquo;
              </strong>
              , e, de outro lado,{" "}
              <strong className="text-white">&ldquo;VOCÊ&rdquo;</strong> ou{" "}
              <strong className="text-white">&ldquo;Usuário&rdquo;</strong>,
              pessoa jurídica ou pessoa física, qualificados no Cadastro,
              declaram que leram, entenderam, estão de acordo e deram o aceite
              eletrônico, firmando o presente Contrato de Licença de Uso não
              exclusiva da PLATAFORMA RATOEIRA PAGES (&ldquo;Termos de
              Uso/Instrumento&rdquo;), do qual é parte integrante a Política de
              Privacidade.
            </p>
          </section>

          {/* 1. Aceitação */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. DA ACEITAÇÃO DO CONTRATO E DOCUMENTOS INTEGRANTES
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">1.1.</strong> O aceite das
                condições destes Termos de Uso da RATOEIRA PAGES configura
                licença de uso não exclusiva para acesso, uso e navegação.
              </p>
              <p>
                <strong className="text-white">1.2.</strong> Ao preencher
                eletronicamente o Cadastro, após a leitura integral deste
                Instrumento e a marcação da caixa de diálogo &ldquo;Declaro
                estar de acordo com os termos de uso&rdquo;, VOCÊ aderirá e
                concordará automaticamente com todos os termos e condições aqui
                previstos.
              </p>
              <p>
                <strong className="text-white">1.3.</strong> A RATOEIRA PAGES
                poderá alterar as condições deste Instrumento a qualquer tempo,
                sem comunicação prévia. Caso VOCÊ não concorde com a(s)
                modificação(ões), poderá denunciá-lo, sem qualquer ônus ou
                penalidade.
              </p>
              <p>
                <strong className="text-white">1.4.</strong> As ferramentas e
                recursos da PLATAFORMA RATOEIRA PAGES são licenciados no estado
                em que se encontram, podendo ser modificados, substituídos ou
                removidos a qualquer momento, sem aviso prévio.
              </p>
              <p>
                <strong className="text-white">1.5.</strong> O uso da PLATAFORMA
                RATOEIRA PAGES em discordância com estes Termos poderá implicar
                a suspensão do acesso, cancelamento do cadastro, encerramento
                imediato da licença de uso e aplicação das sanções cabíveis.
              </p>
              <p>
                <strong className="text-white">1.6.</strong> A RATOEIRA PAGES
                pode restringir a disponibilidade da Plataforma ou de certas
                áreas/funcionalidades por motivos de capacidade, segurança,
                integridade de servidores, bem como para manutenção ou
                aprimoramentos.
              </p>
              <p>
                <strong className="text-white">1.7.</strong> A RATOEIRA PAGES
                pode, a qualquer tempo, melhorar e alterar a Plataforma para
                modificar, substituir ou remover
                serviços/ferramentas/funcionalidades existentes, ou adicionar
                novas.
              </p>
              <p>
                <strong className="text-white">1.8.</strong> A remoção, alteração
                ou substituição de funcionalidades não gera direito a reembolso,
                crédito, compensação ou indenização de qualquer natureza, desde
                que mantido o objeto essencial do serviço contratado. VOCÊ
                declara estar ciente de que a plataforma está em constante
                evolução e que funcionalidades podem ser descontinuadas a
                qualquer tempo por razões técnicas, estratégicas ou
                operacionais, sem que isso configure inadimplemento contratual
                por parte da RATOEIRA PAGES.
              </p>
              <p>
                <strong className="text-white">1.9.</strong> A RATOEIRA PAGES
                não garante disponibilidade ininterrupta da plataforma.
                Instabilidades, interrupções ou períodos de indisponibilidade,
                seja por manutenção programática ou por fatores alheios ao
                controle da RATOEIRA PAGES, não geram direito a reembolso,
                crédito, compensação ou indenização de qualquer natureza. Esta
                disposição não afasta os direitos do consumidor previstos no
                Código de Defesa do Consumidor em casos de falha reiterada e
                comprovadamente imputável à RATOEIRA PAGES.
              </p>
              <p>
                <strong className="text-white">1.10.</strong> VOCÊ declara estar
                ciente de que é seu dever ler e se informar sobre eventuais
                alterações nestes Termos de Uso e nas demais Políticas e Termos
                da RATOEIRA PAGES.
              </p>
              <p>
                <strong className="text-white">1.11.</strong> Este Instrumento
                deve ser interpretado em conjunto com as condições de eventuais
                anexos. No caso de conflito entre este Termo e anexo específico,
                prevalecerá o anexo por se tratar de regra especial.
              </p>
              <p>
                <strong className="text-white">1.12.</strong> Poderão ser
                celebrados Termos Aditivos com cláusulas específicas para
                determinados serviços, dependentes do preenchimento de
                pré-requisitos próprios, os quais serão apresentados para
                leitura e aceitação por meio eletrônico.
              </p>
            </div>
          </section>

          {/* 2. Objeto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. DO OBJETO</h2>
            <p>
              <strong className="text-white">2.1.</strong> O presente
              Instrumento tem por objeto a contratação e afiliação aos serviços
              da RATOEIRA PAGES, uma plataforma tecnológica especializada na
              construção e hospedagem de páginas digitais (incluindo, mas não se
              limitando a, landing pages, presell, checkout, one-page sites e
              afins), com recursos de inteligência artificial para geração e
              revisão automatizada de páginas, integração com plataformas de
              pagamento, limites de acessos e de domínios conforme o plano
              contratado, podendo, opcionalmente, operar de forma integrada à
              RATOEIRA ADS para funcionalidades adicionais, sem que tal
              integração constitua requisito para uso.
            </p>
          </section>

          {/* 3. Definições */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. DAS DEFINIÇÕES
            </h2>
            <p className="mb-4">
              <strong className="text-white">3.1.</strong> Sempre que as
              expressões abaixo forem usadas nestes Termos de Uso, elas terão o
              seguinte significado:
            </p>
            <ul className="space-y-3">
              {[
                {
                  term: "Chargeback",
                  desc: "Procedimento pelo qual o titular do cartão de crédito não reconhece e/ou contesta, junto ao emissor de seu cartão, uma despesa efetuada. O procedimento é realizado pela bandeira e comunicado à empresa intermediadora de pagamentos.",
                },
                {
                  term: "Código de Acesso",
                  desc: "Senha utilizada por VOCÊ para acessar sua conta virtual.",
                },
                {
                  term: "Cookie Stuffing",
                  desc: "Extensões ou mecanismos maliciosos concebidos para inserir identidade ou dados de identificação de um usuário/afiliado em detrimento de outro.",
                },
                {
                  term: "Comissões",
                  desc: "Percentual pago sobre as vendas realizadas por afiliados, repassado diretamente pela empresa responsável pelo processamento dos pagamentos.",
                },
                {
                  term: "Gateway de Pagamentos",
                  desc: "Empresa responsável pelo processamento de pagamentos das mensalidades dos planos. A RATOEIRA PAGES utiliza a Digital Manager Guru como estrutura de gateway, conectada ao Asaas, plataforma onde as transações financeiras são de fato realizadas.",
                },
                {
                  term: "E-Book de Estratégia",
                  desc: "Livro digital com informações e atualizações a respeito dos serviços da RATOEIRA PAGES, disponível a cada renovação ou nova compra, podendo ser acessado diretamente pelo painel central da RATOEIRA PAGES a qualquer momento.",
                },
                {
                  term: "IP do Computador",
                  desc: "Endereço numérico único atribuído ao dispositivo utilizado para acessar a internet, podendo ser utilizado para identificar a origem de acessos.",
                },
                {
                  term: "GCLID – Google Ads",
                  desc: "Parâmetro de rastreamento gerado pelo Google Ads para identificar e monitorar cliques e conversões de campanhas publicitárias.",
                },
                {
                  term: "MSCLKID – Bing Ads",
                  desc: "Identificador de rastreamento exclusivo gerado pelo Bing Ads para monitoramento de desempenho e atribuição de conversões corretamente.",
                },
                {
                  term: "FBCLID – Meta Ads",
                  desc: "Identificador de rastreamento gerado pelo Meta (Facebook e Instagram) para monitorar o desempenho de anúncios e atribuir conversões corretamente nas campanhas de tráfego pago.",
                },
                {
                  term: "Presell",
                  desc: "Página intermediária utilizada para preparar e direcionar o usuário antes da conversão final, com o objetivo de aumentar a taxa de conversão.",
                },
                {
                  term: "Mensalidade",
                  desc: "Valor cobrado pela RATOEIRA PAGES como remuneração pelo uso da Plataforma.",
                },
                {
                  term: "Tributos",
                  desc: "Todas as espécies tributárias devidas — impostos, taxas, encargos, contribuições — decorrentes das operações realizadas pelo Usuário.",
                },
                {
                  term: "VOCÊ",
                  desc: "Todas as pessoas físicas e/ou jurídicas que utilizam a Plataforma RATOEIRA PAGES.",
                },
                {
                  term: "Domínios",
                  desc: "Endereços de internet (DNS) configurados pelo Usuário via registro externo e apontamento de CNAME para a RATOEIRA PAGES, nos limites do plano.",
                },
                {
                  term: "Acessos",
                  desc: "Total de visitas/consultas às páginas hospedadas (incluídos acessos pagos, orgânicos, diretos ou de bots).",
                },
                {
                  term: "Hospedagem",
                  desc: "Serviço de disponibilização on-line das páginas criadas pelo Usuário na Plataforma, dentro dos limites do plano.",
                },
                {
                  term: "Inteligência Artificial (IA)",
                  desc: "Módulo da Plataforma que gera e revisa páginas automaticamente a partir de dados/briefing fornecidos pelo Usuário.",
                },
                {
                  term: "CDN",
                  desc: "Rede de distribuição de conteúdo utilizada para otimizar desempenho, disponibilidade e segurança das páginas hospedadas.",
                },
                {
                  term: "Regras de Tráfego",
                  desc: "Configurações de segmentação, filtragem ou direcionamento de tráfego aplicadas às páginas hospedadas, dentro dos limites do plano contratado.",
                },
                {
                  term: "Página Review com IA",
                  desc: "Funcionalidade que permite ao Usuário submeter páginas para análise, sugestões e revisão automatizada pelo módulo de inteligência artificial da Plataforma, dentro dos limites do plano.",
                },
              ].map((item) => (
                <li
                  key={item.term}
                  className="bg-[#161616] p-4 rounded-xl border border-white/5"
                >
                  <strong className="text-brand-primary block mb-1">
                    {item.term}
                  </strong>
                  <span className="text-sm md:text-base">{item.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Cadastro */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. DO CADASTRO DO USUÁRIO
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">4.1.</strong> Poderão acessar a
                RATOEIRA PAGES: (a) pessoa física, em pleno gozo da capacidade
                civil; (b) pessoa jurídica, por meio de seu sócio ou
                representante legal com poderes para contratar.
              </p>
              <p>
                <strong className="text-white">4.2.</strong> Para acesso à
                Plataforma, VOCÊ deverá escolher um plano disponível e informar,
                entre outros dados que a RATOEIRA PAGES julgar necessários,
                nome/razão social, e-mail, login, número de celular com DDD,
                forma de pagamento (cartão de crédito ou PIX) e uma senha para
                acesso à ferramenta.
              </p>
              <p>
                <strong className="text-white">4.3.</strong> Após a confirmação
                da compra, VOCÊ receberá e-mail de confirmação para realizar o
                primeiro login no sistema com a senha definida por VOCÊ.
              </p>
              <p>
                <strong className="text-white">4.4.</strong> O Código de Acesso
                é pessoal e intransferível, sendo exclusivamente de sua
                responsabilidade o uso, segurança e sigilo. Qualquer pessoa que
                se identificar com o correto Código de Acesso será reconhecida
                como VOCÊ, sendo válidas as operações praticadas.
              </p>
              <p>
                <strong className="text-white">4.5.</strong> VOCÊ é o único
                responsável pelas atividades realizadas em sua conta, isentando
                a RATOEIRA PAGES de responsabilidade por perdas/danos causados
                por VOCÊ ou terceiros.
              </p>
              <p>
                <strong className="text-white">4.6.</strong> VOCÊ declara, sob
                as penas das leis civis e penais brasileiras, que as informações
                e documentos informados são verdadeiros.
              </p>
              <p>
                <strong className="text-white">4.7.</strong> O uso de domínios
                próprios depende de registro externo pelo Usuário e configuração
                de CNAME para a infraestrutura da RATOEIRA PAGES. Não há
                venda/registro de domínios pela RATOEIRA PAGES.
              </p>
              <p>
                <strong className="text-white">4.8.</strong> O presente
                instrumento produz efeitos a partir da data de 13/04/2026, para
                todos os negócios e operações efetivados entre as partes, de
                forma que declaram as partes que os termos deste instrumento
                refletem precisamente a natureza da relação jurídica havida
                entre estas a partir da aludida data, assim como os respectivos
                direitos e obrigações que a compõem.
              </p>
              <p>
                <strong className="text-white">4.9.</strong> O acesso à
                plataforma é pessoal e intransferível, sendo permitido o uso
                simultâneo em até 2 (dois) dispositivos por categoria: (i)
                computador ou notebook; (ii) tablet; e (iii) smartphone.
                Acessos simultâneos a partir de mais de 2 dispositivos diferentes
                em localizações geográficas distintas, em curto espaço de tempo,
                serão interpretados como indício de compartilhamento indevido de
                credenciais e poderão resultar em suspensão preventiva imediata
                da conta, sem prejuízo das demais sanções previstas neste Termo.
                A RATOEIRA PAGES reserva-se o direito de implementar controles
                técnicos de sessão para monitorar e limitar acessos simultâneos.
              </p>
              <p>
                <strong className="text-white">4.10.</strong> A licença de uso
                concedida por este Termo é individual e intransferível,
                vinculada a um único CPF ou CNPJ cadastrado. Não é permitida a
                utilização de uma única conta para operações de diferentes
                empresas, grupos econômicos ou terceiros, ainda que relacionados
                ao titular da conta. Cada pessoa física ou jurídica deve
                contratar um plano individual. O descumprimento desta cláusula
                será tratado como compartilhamento indevido de acesso,
                sujeitando VOCÊ às sanções previstas na cláusula 9.2.
              </p>
            </div>
          </section>

          {/* 5. Planos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. DOS PLANOS, LIMITES, VALORES E RENOVAÇÃO
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">5.1.</strong> Para se tornar
                usuário da RATOEIRA PAGES, VOCÊ deverá optar por um dos planos
                abaixo:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Plano Camundongo
                  </h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>Domínios Conectados: 1 (um)</li>
                    <li>Acessos Mensais: 5.000 (cinco mil) mensais</li>
                    <li>Páginas Review com IA: 1 (uma)</li>
                    <li>Regras de Tráfego: 5 (cinco)</li>
                    <li>Páginas Criadas: Ilimitadas</li>
                    <li>E-Book de Estratégia: SIM</li>
                  </ul>
                  <p className="text-brand-primary font-semibold">
                    Mensal: R$117,00 por mês, com renovação automática
                  </p>
                </div>

                <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Plano Rato
                  </h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>Domínios Conectados: 5 (cinco)</li>
                    <li>Acessos Mensais: 200.000 (duzentos mil) mensais</li>
                    <li>Páginas Review com IA: 5 (cinco)</li>
                    <li>Regras de Tráfego: 20 (vinte)</li>
                    <li>Páginas Criadas: Ilimitadas</li>
                    <li>E-Book de Estratégia: SIM</li>
                  </ul>
                  <div className="text-brand-primary font-semibold text-sm space-y-1">
                    <p>Mensal: R$177,00/mês (renovação automática)</p>
                    <p>Semestral: R$497,00 à vista (ou 6x de R$93,24)</p>
                    <p>Anual: R$657,00 à vista (ou 12x de R$67,95)</p>
                  </div>
                </div>

                <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Plano Ratazana
                  </h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>Domínios Conectados: 10 (dez)</li>
                    <li>Acessos Mensais: 500.000 (quinhentos mil) mensais</li>
                    <li>Páginas Review com IA: 10 (dez)</li>
                    <li>Regras de Tráfego: 50 (cinquenta)</li>
                    <li>Páginas Criadas: Ilimitadas</li>
                    <li>E-Book de Estratégia: SIM</li>
                  </ul>
                  <div className="text-brand-primary font-semibold text-sm space-y-1">
                    <p>Mensal: R$197,00/mês (renovação automática)</p>
                    <p>Semestral: R$597,00 à vista (ou 6x de R$112,00)</p>
                    <p>Anual: R$877,00 à vista (ou 12x de R$90,70)</p>
                  </div>
                </div>

                <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Plano Ratazana Plus
                  </h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>Domínios Conectados: 20 (vinte)</li>
                    <li>Acessos Mensais: 1.000.000 (um milhão) mensais</li>
                    <li>Páginas Review com IA: 15 (quinze)</li>
                    <li>Regras de Tráfego: 100 (cem)</li>
                    <li>Páginas Criadas: Ilimitadas</li>
                    <li>E-Book de Estratégia: SIM</li>
                  </ul>
                  <div className="text-brand-primary font-semibold text-sm space-y-1">
                    <p>Mensal: R$247,00/mês (renovação automática)</p>
                    <p>Semestral: R$797,00 à vista (ou 6x de R$149,52)</p>
                    <p>Anual: R$1.397,00 à vista (ou 12x de R$144,48)</p>
                  </div>
                </div>
              </div>

              <p>
                <strong className="text-white">5.2.</strong> Planos Vitalícios:
                eventuais planos vitalícios são disponibilizados exclusivamente
                em campanhas promocionais específicas, com preços e condições
                definidos caso a caso, e regidos por Termo de Adesão próprio
                celebrado entre as partes no ato da contratação, o qual
                prevalece sobre os presentes Termos de Uso no que lhe for
                específico.
              </p>
              <p>
                <strong className="text-white">5.3.</strong> O pagamento será
                realizado conforme a forma escolhida no momento da contratação.
                A renovação do plano é automática; caso VOCÊ não deseje
                continuar, deverá cancelar a renovação a qualquer momento, sem
                ônus.
              </p>
              <p>
                <strong className="text-white">5.4.</strong> O cancelamento da
                renovação automática garante apenas a não renovação do plano ao
                final do período já contratado. Não há cancelamento antecipado
                do período em curso, ressalvado o direito de arrependimento de
                7 (sete) dias contados da compra ou da renovação automática,
                nos termos do art. 49 do CDC.
              </p>
              <p>
                <strong className="text-white">5.5.</strong> Planos de prazo
                determinado (semestrais/anuais) não são passíveis de
                cancelamento ou reembolso após o período de 7 (sete) dias.
                Parcelamentos não alteram a natureza do contrato, permanecendo
                devidas as parcelas até o final do período contratado.
              </p>
              <p>
                <strong className="text-white">5.6.</strong> Upgrade: poderá ser
                requerido a qualquer tempo, mediante ajuste proporcional dos
                valores.
              </p>
              <p>
                <strong className="text-white">5.7.</strong> Downgrade: é
                permitido. No primeiro login após a efetivação do downgrade,
                VOCÊ deverá selecionar quais domínios permanecerão ativos para
                se adequar aos limites do novo plano; domínios excedentes
                poderão ser desativados automaticamente.
              </p>
              <p>
                <strong className="text-white">5.8.</strong> Excesso de
                acessos: ao ultrapassar o limite mensal do plano, as páginas
                poderão ser automaticamente suspensas/indisponibilizadas até a
                regularização. A RATOEIRA PAGES poderá enviar lembretes por
                e-mail, porém a responsabilidade pelo monitoramento é
                exclusivamente do USUÁRIO.
              </p>
              <p>
                <strong className="text-white">5.9.</strong> A RATOEIRA PAGES
                poderá ajustar os valores dos planos mediante comunicação
                prévia mínima de 30 (trinta) dias, facultando a VOCÊ a
                continuidade ou cancelamento antes da nova cobrança.
              </p>
              <p>
                <strong className="text-white">5.10.</strong> Chargeback
                abusivo: o registro de chargeback indevido, assim entendido
                aquele realizado por VOCÊ sem justa causa comprovada, configura
                inadimplência contratual e sujeita VOCÊ ao pagamento do valor
                integral contestado, acrescido de multa de 20% (vinte por cento)
                sobre o montante objeto do chargeback, além de suspensão
                imediata do acesso à plataforma até a regularização. A RATOEIRA
                PAGES reserva-se o direito de adotar as medidas judiciais e
                extrajudiciais cabíveis para recuperação dos valores e reparação
                de danos.
              </p>
              <p>
                <strong className="text-white">5.11.</strong> Os planos de prazo
                semestral e anual poderão ser parcelados pela plataforma de
                pagamento (gateway), hipótese em que os juros incidentes serão
                definidos direta e exclusivamente pelo respectivo provedor do
                serviço de pagamento, sem qualquer interferência ou ingerência
                da RATOEIRA PAGES.
              </p>
            </div>
          </section>

          {/* 6. Hospedagem */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. DA HOSPEDAGEM, DOMÍNIOS, CONTEÚDO E INTEGRAÇÕES
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">6.1.</strong> A hospedagem é
                fornecida pela RATOEIRA PAGES dentro dos limites do plano, com
                suporte de CDN e provedores terceiros.
              </p>
              <p>
                <strong className="text-white">6.2.</strong> A configuração de
                domínios é de responsabilidade do Usuário, incluindo renovação,
                DNS e apontamento de CNAME. A RATOEIRA PAGES não se
                responsabiliza por indisponibilidades decorrentes de
                configurações externas incorretas, expiração de domínio, falhas
                de registros ou serviços DNS de terceiros.
              </p>
              <p>
                <strong className="text-white">6.3.</strong> Integrações: a
                Plataforma oferece integração com plataformas de pagamento e
                afiliados e poderá oferecer outras integrações. A ativação,
                manutenção e conformidade com políticas dos terceiros integrados
                são de responsabilidade do Usuário.
              </p>
              <p>
                <strong className="text-white">6.4.</strong> Conteúdo do
                Usuário: VOCÊ é integral e exclusivamente responsável pelo
                conteúdo publicado em suas páginas (textos, imagens, vídeos,
                marcas, dados). É vedado conteúdo ilícito, violador de direitos
                de terceiros, enganoso, discriminatório, abusivo, malicioso
                (incluindo malware) ou que viole políticas de terceiros
                integrados.
              </p>
              <p>
                <strong className="text-white">6.5.</strong> Notice and
                takedown: mediante ordem judicial ou notificação fundamentada de
                violação, a RATOEIRA PAGES poderá remover/suspender conteúdo ou
                páginas, comunicando o Usuário quando cabível.
              </p>
            </div>
          </section>

          {/* 7. Obrigações da Ratoeira Pages */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. DAS OBRIGAÇÕES DA RATOEIRA PAGES
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">7.1.</strong> Sem prejuízo das
                demais obrigações decorrentes deste Termo, a RATOEIRA PAGES
                obriga-se a:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex gap-2">
                  <span className="text-brand-primary">a)</span>
                  <span>
                    Prestar os serviços por meio de conexões seguras e em
                    conformidade com a legislação aplicável.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">b)</span>
                  <span>
                    Empregar esforços comercialmente razoáveis para assegurar
                    disponibilidade e desempenho compatíveis com a natureza da
                    Plataforma.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">c)</span>
                  <span>
                    Oferecer suporte nos canais indicados nestes Termos, dentro
                    das condições do plano contratado.
                  </span>
                </li>
              </ul>

              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5 space-y-3">
                <h3 className="text-white font-bold">
                  7.1.1. Da limitação de responsabilidade
                </h3>
                <p>
                  a) A RATOEIRA PAGES não se responsabiliza por falhas,
                  interrupções ou indisponibilidades do sistema causadas por
                  eventos de força maior, caso fortuito ou fatores alheios ao
                  seu controle, incluindo falhas de infraestrutura de terceiros
                  e interrupções de conectividade.
                </p>
                <p>
                  b) A RATOEIRA PAGES empregará seus melhores esforços para
                  assegurar serviço contínuo e de alto desempenho. Todavia, a
                  disponibilidade e a qualidade dos serviços podem ser afetadas
                  por fatores externos, uma vez que sua operação depende de
                  infraestruturas de terceiros, incluindo, sem limitação:
                  Digital Manager Guru, Asaas, Digital Ocean, Cloudflare,
                  Redis, Mailtrap, GitHub, OpenAI, Hostinger, ClickHouse, Meta,
                  Go High Level, Google, Vturb.
                </p>
                <p>
                  c) A RATOEIRA PAGES não garante disponibilidade ininterrupta
                  dos serviços nem se responsabiliza por falhas, interrupções,
                  instabilidades ou degradações de desempenho resultantes de
                  limitações técnicas ou falhas dessas infraestruturas
                  terceirizadas.
                </p>
                <p>
                  d) Em nenhuma hipótese a RATOEIRA PAGES será responsável por
                  danos indiretos, especiais, incidentais, punitivos ou lucros
                  cessantes, perda de dados, prejuízos financeiros ou quaisquer
                  outros decorrentes de falhas/indisponibilidades dos serviços.
                </p>
                <p>
                  e) A RATOEIRA PAGES não se responsabiliza por quaisquer
                  obrigações tributárias decorrentes da operação e uso de seus
                  serviços, sendo exclusivamente do Usuário a responsabilidade
                  pelo cumprimento das obrigações fiscais aplicáveis às suas
                  atividades.
                </p>
                <p>
                  f) Recursos de IA: a geração e revisão automática de páginas
                  ocorre a partir de dados fornecidos por VOCÊ e de modelos
                  algorítmicos. A RATOEIRA PAGES não garante exatidão,
                  completude, originalidade, ausência de vieses ou conformidade
                  do conteúdo com políticas de terceiros. É dever do Usuário
                  revisar e aprovar o conteúdo antes da publicação.
                </p>
                <p>
                  g) Relatórios e decisões: a RATOEIRA PAGES não será
                  responsável por prejuízos decorrentes de decisões tomadas por
                  VOCÊ com base em relatórios/indicadores, bem como por falhas
                  técnicas, instabilidades ou indisponibilidades causadas por
                  terceiros.
                </p>
                <p>
                  h) Em nenhuma hipótese a responsabilidade total da RATOEIRA
                  PAGES perante VOCÊ, por quaisquer danos decorrentes do uso ou
                  impossibilidade de uso da plataforma, superará o valor total
                  efetivamente pago por VOCÊ à RATOEIRA PAGES nos últimos 3
                  (três) meses anteriores ao evento gerador do dano. Esta
                  limitação aplica-se independentemente da natureza da ação —
                  contratual, extracontratual ou outra — e mesmo que a RATOEIRA
                  PAGES tenha sido avisada da possibilidade de tais danos.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Confidencialidade */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. DA CONFIDENCIALIDADE E PROTEÇÃO DE DADOS
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">8.1.</strong> Todas as
                informações fornecidas por VOCÊ à RATOEIRA PAGES, incluindo
                dados de campanhas, estratégias e relatórios gerados, serão
                tratadas como confidenciais e não poderão ser compartilhadas
                com terceiros sem autorização, salvo por força de lei ou ordem
                de autoridade competente.
              </p>
              <p>
                <strong className="text-white">8.2.</strong> A RATOEIRA PAGES
                adota medidas técnicas e organizacionais razoáveis para
                proteção de dados. Contudo, não se responsabiliza por vazamentos
                decorrentes de ataques cibernéticos, falhas de terceiros ou
                negligência do Usuário na guarda de credenciais/contas.
              </p>
              <p>
                <strong className="text-white">8.3.</strong> Do Tratamento de
                Dados Pessoais — Conformidade com a LGPD
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">8.3.1.</strong> O tratamento de
                dados pessoais realizado pela RATOEIRA PAGES observa
                integralmente a Lei nº 13.709/2018 (Lei Geral de Proteção de
                Dados — LGPD). As bases legais aplicadas são: (i) execução de
                contrato (art. 7º, V); (ii) legítimo interesse (art. 7º, IX); e
                (iii) cumprimento de obrigação legal (art. 7º, II).
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">8.3.2.</strong> A RATOEIRA PAGES
                coleta e trata dados cadastrais, dados de navegação, logs de
                acesso e padrões de uso da plataforma. Esses dados são
                utilizados exclusivamente para: (i) prestação e melhoria dos
                serviços; (ii) segurança e prevenção de fraudes e uso indevido;
                (iii) cumprimento de obrigações legais; e (iv) defesa em
                processos judiciais, administrativos ou arbitrais.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">8.3.3.</strong> Os registros de
                log de sistema serão mantidos por prazo mínimo de 5 (cinco)
                anos, contados a partir do registro, em conformidade com o Marco
                Civil da Internet (Lei nº 12.965/2014) e a LGPD, podendo ser
                utilizados como meio de prova em qualquer procedimento judicial,
                administrativo ou arbitral.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">8.3.4.</strong> A RATOEIRA PAGES
                poderá utilizar dados anonimizados e agregados, que não permitam
                a identificação individual de nenhum usuário, para fins de
                pesquisa, desenvolvimento de produto, estatísticas de mercado e
                melhoria contínua da plataforma. Tais dados anonimizados não se
                sujeitam às restrições da LGPD, nos termos do art. 12 da
                referida Lei.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">8.3.5.</strong> VOCÊ poderá
                exercer os direitos previstos no art. 18 da LGPD — incluindo
                acesso, correção, portabilidade, eliminação e revogação de
                consentimento — mediante solicitação ao canal de atendimento
                indicado na cláusula 13 deste Termo. O prazo de resposta será
                de até 15 (quinze) dias úteis.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">8.3.6.</strong> Em caso de
                solicitação de portabilidade ou exportação de dados pelo
                usuário, nos termos do art. 18, V da LGPD, a RATOEIRA PAGES
                disponibilizará os dados em formato estruturado no prazo de até
                30 (trinta) dias úteis. O custo administrativo da exportação
                poderá ser cobrado do usuário, limitado ao valor equivalente a 1
                (um) mês do plano vigente à época da solicitação, exceto nas
                hipóteses em que a gratuidade seja expressamente exigida pela
                legislação aplicável.
              </p>
            </div>
          </section>

          {/* 9. Suas obrigações */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. DAS SUAS OBRIGAÇÕES
            </h2>
            <p className="mb-4">
              <strong className="text-white">9.1.</strong> Além das demais
              obrigações previstas neste contrato, VOCÊ se obriga a:
            </p>
            <ul className="space-y-3">
              {[
                "Reembolsar integralmente a RATOEIRA PAGES por danos, prejuízos ou custos decorrentes do uso indevido, incluindo despesas administrativas, honorários advocatícios e custas processuais.",
                "Manter a RATOEIRA PAGES indene de responsabilidades decorrentes de sua atuação, assumindo a defesa em demandas judiciais/extrajudiciais/administrativas relacionadas ao seu uso.",
                "Divulgar e utilizar a marca RATOEIRA PAGES em conformidade com as diretrizes e características dos serviços, sem deturpações ou práticas enganosas.",
                "Não associar a RATOEIRA PAGES a produto/serviço/prática/conteúdo ilícito, imoral, ofensivo, enganoso ou que viole direitos de terceiros.",
                "Observar legislação vigente, normas e políticas da RATOEIRA PAGES, zelando por ética, transparência e conformidade em suas interações e transações.",
                "Manter informações cadastrais atualizadas e responder por consequências de dados desatualizados ou inverídicos.",
                "Responder por suas atividades/condutas na Plataforma, isentando a RATOEIRA PAGES por atos praticados por VOCÊ ou terceiros em seu nome, ainda que decorrentes de falha na segurança de seus acessos.",
                "Acompanhar o consumo de acessos e os limites de seu plano, sendo exclusivamente responsável por excedentes e suas consequências (incluindo suspensão automática das páginas).",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-[#161616] p-4 rounded-xl border border-white/5 text-sm md:text-base"
                >
                  <span className="text-brand-primary font-bold mr-2">
                    {String.fromCharCode(97 + i)})
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 10. Prazo e Rescisão */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. DO PRAZO E DA RESCISÃO
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">10.1.</strong> O presente
                contrato terá vigência conforme o plano escolhido por VOCÊ,
                sendo irrevogável e irretratável durante o respectivo período,
                ressalvado o direito de arrependimento nos termos legais.
              </p>
              <p>
                <strong className="text-white">10.2.</strong> A RATOEIRA PAGES
                poderá rescindir o contrato imediatamente, independentemente de
                notificação, se VOCÊ: (a) descumprir obrigações ou declarações;
                (b) utilizar link de afiliado para adquirir a Plataforma para
                uso próprio, recebendo comissão própria; (c) prejudicar a
                imagem pública da RATOEIRA PAGES ou de seus parceiros; (d)
                utilizar a Plataforma de maneira fraudulenta; (e)
                transferir/compartilhar indevidamente acessos; (f) praticar
                atividades ilícitas ou violar políticas; (g) utilizar o acesso
                à plataforma, direta ou indiretamente, para desenvolver,
                subsidiar, inspirar ou viabilizar a criação de produto, serviço
                ou plataforma concorrente à RATOEIRA PAGES, incluindo, mas não
                se limitando a, mapear sistematicamente funcionalidades, fluxos,
                algoritmos, lógicas ou estratégias de operação da plataforma com
                finalidade reprodutiva ou competitiva.
              </p>
              <p>
                <strong className="text-white">10.3.</strong> Suspensão
                Preventiva: sem prejuízo da rescisão imediata prevista na
                cláusula 10.2, a RATOEIRA PAGES poderá, a seu exclusivo
                critério, suspender preventivamente o acesso de VOCÊ à
                plataforma sempre que houver indício razoável de descumprimento
                contratual, uso indevido, uso concorrencial, compartilhamento de
                credenciais ou qualquer conduta que possa causar dano à RATOEIRA
                PAGES ou a terceiros. A suspensão preventiva: (i) poderá ser
                aplicada imediatamente e sem notificação prévia; (ii) não gera
                direito a reembolso do período suspenso; (iii) terá duração
                máxima de 30 (trinta) dias, findo o qual a RATOEIRA PAGES
                deverá confirmar a rescisão ou reativar o acesso; e (iv) não
                implica reconhecimento de qualquer direito em favor de VOCÊ.
              </p>
              <p>
                <strong className="text-white">10.4.</strong> Em caso de
                rescisão por justa causa atribuída ao Usuário, poderá ser
                aplicada multa compensatória equivalente a 50% do valor ainda
                devido com base no plano contratado, sem prejuízo de perdas e
                danos.
              </p>
              <p>
                <strong className="text-white">10.5.</strong> A rescisão por
                justa causa não confere direito a reembolso de valores já
                pagos. Caso a rescisão ocorra por iniciativa imotivada da
                RATOEIRA PAGES, haverá reembolso proporcional ao período não
                utilizado.
              </p>
            </div>
          </section>

          {/* 11. Propriedade Intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              11. DA PROPRIEDADE INTELECTUAL E MONITORAMENTO DE USO
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">11.1.</strong> VOCÊ reconhece
                que, ao aceitar estes Termos de Uso, a RATOEIRA PAGES lhe
                concede uma licença limitada, não exclusiva, intransferível e
                revogável para uso da sua Plataforma, exclusivamente para os
                fins estabelecidos neste contrato.
              </p>
              <p>
                <strong className="text-white">11.2.</strong> Os domínios{" "}
                <span className="text-brand-primary">
                  https://ratoeirapages.com.br
                </span>{" "}
                e{" "}
                <span className="text-brand-primary">
                  https://ratoeirapages.com
                </span>
                , seus logotipos, identidades visuais, código-fonte, algoritmos,
                interfaces, sistemas, bancos de dados, ferramentas,
                documentações e quaisquer criações desenvolvidas ou
                disponibilizadas na Plataforma são de propriedade exclusiva da
                RATOEIRA PAGES, estando estritamente vedado:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex gap-2">
                  <span className="text-brand-primary">a)</span>
                  <span>
                    Reproduzir, modificar, distribuir, vender, ceder,
                    sublicenciar ou explorar comercialmente qualquer parte da
                    Plataforma sem autorização expressa.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">b)</span>
                  <span>
                    Descompilar, realizar engenharia reversa ou tentar extrair
                    o código-fonte, salvo se permitido por lei.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">c)</span>
                  <span>
                    Criar, desenvolver ou disponibilizar produtos ou serviços
                    derivados da Plataforma sem autorização expressa da
                    RATOEIRA PAGES.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">d)</span>
                  <span>
                    Utilizar qualquer tecnologia, software ou prática que possa
                    interferir, danificar ou comprometer o funcionamento da
                    Plataforma.
                  </span>
                </li>
              </ul>
              <p>
                <strong className="text-white">11.3.</strong> Do Monitoramento
                de Uso e Proteção contra Uso Concorrencial: a RATOEIRA PAGES
                mantém registros de log de sistema que documentam as ações
                realizadas pelos usuários dentro da plataforma, incluindo, mas
                não se limitando a: acessos, navegação entre funcionalidades,
                volume e frequência de uso, consultas realizadas, dados
                visualizados e padrões de comportamento. Esses registros
                poderão ser utilizados como meio de prova em procedimentos
                administrativos, arbitrais ou judiciais.
              </p>
              <p>
                <strong className="text-white">11.4.</strong> É expressamente
                vedado ao usuário utilizar o acesso à plataforma, direta ou
                indiretamente, para desenvolver, replicar, inspirar ou
                subsidiar a criação de produto ou serviço concorrente à
                RATOEIRA PAGES. Padrões de uso atípicos, como acesso intensivo
                e sistemático a funcionalidades de forma não condizente com o
                uso operacional normal da plataforma, poderão ser
                identificados pelos registros de sistema e interpretados como
                indício de uso indevido para fins concorrenciais.
              </p>
              <p>
                <strong className="text-white">11.5.</strong> Em caso de
                comprovado uso da plataforma para finalidade concorrencial, o
                usuário infrator estará sujeito, cumulativamente, a: (i)
                rescisão imediata do contrato, nos termos da cláusula 10.2;
                (ii) pagamento de multa de R$500.000,00 (quinhentos mil reais),
                valor este fixado com base no impacto estimado ao negócio da
                RATOEIRA PAGES e representativo do dano mínimo estimado
                decorrente do uso indevido; (iii) indenização por perdas e
                danos adicionais que a RATOEIRA PAGES possa apurar, incluindo
                lucros cessantes, danos emergentes e danos à imagem; e (iv)
                adoção de todas as medidas judiciais e extrajudiciais cabíveis,
                incluindo ações indenizatórias, cautelares e criminais, conforme
                previsto na legislação brasileira vigente, em especial a Lei
                nº 9.279/1996 (Propriedade Industrial) e o Código Civil
                Brasileiro.
              </p>
              <p>
                <strong className="text-white">11.6.</strong> A violação de
                qualquer disposição desta cláusula poderá resultar na rescisão
                imediata do contrato, sem prejuízo da adoção de medidas
                judiciais cabíveis para reparação de danos, incluindo sanções
                civis e criminais conforme a legislação vigente.
              </p>
            </div>
          </section>

          {/* 12. Disposições Gerais */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              12. DAS DISPOSIÇÕES GERAIS
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">12.1.</strong> VOCÊ não poderá
                ceder, transferir ou sublicenciar, total ou parcialmente, os
                direitos e obrigações deste Termo sem autorização expressa da
                RATOEIRA PAGES.
              </p>
              <p>
                <strong className="text-white">12.2.</strong> A RATOEIRA PAGES
                poderá ceder, transferir ou delegar direitos e obrigações a
                terceiros, independentemente de notificação prévia.
              </p>
              <p>
                <strong className="text-white">12.3.</strong> Em caso de
                transferência de controle, aquisição ou qualquer operação
                societária que implique mudança na titularidade da plataforma,
                os contratos de planos regulares (mensais, semestrais e anuais)
                serão automaticamente cedidos ao novo controlador,
                independentemente de notificação ou anuência de VOCÊ,
                garantida a continuidade do serviço pelo período já contratado
                e pago.
              </p>
              <p>
                <strong className="text-white">12.4.</strong> A eventual
                tolerância de qualquer das Partes quanto a descumprimento não
                constituirá renúncia, novação ou alteração contratual.
              </p>
              <p>
                <strong className="text-white">12.5.</strong> Custas e
                Honorários: em caso de litígio judicial ou extrajudicial, a
                Parte vencida arcará com despesas processuais e honorários
                advocatícios da Parte vencedora, fixados em, no mínimo, 10%
                (dez por cento) do valor da causa, salvo determinação judicial
                diversa.
              </p>
              <p>
                <strong className="text-white">12.6.</strong> Não-Solicitação:
                VOCÊ compromete-se a não contratar, aliciar ou solicitar,
                direta ou indiretamente, qualquer funcionário, colaborador,
                prestador de serviço ou consultor da RATOEIRA PAGES com quem
                tenha tido contato em razão deste Contrato, durante a vigência
                do mesmo e pelo prazo de 24 (vinte e quatro) meses após seu
                término, sob pena de pagamento de multa compensatória
                equivalente a 12 (doze) vezes o último salário ou remuneração
                mensal do profissional aliciado, sem prejuízo de perdas e danos
                adicionais apurados.
              </p>
              <p>
                <strong className="text-white">12.7.</strong> Mediação prévia:
                antes do ajuizamento de qualquer ação judicial decorrente deste
                Termo, as Partes comprometem-se a buscar a resolução do
                conflito por meio de mediação extrajudicial, com prazo máximo
                de 30 (trinta) dias a contar da notificação formal de uma Parte
                à outra. Não havendo acordo na mediação, as Partes poderão
                optar, de comum acordo, pela arbitragem, nos termos da Lei nº
                9.307/1996, ou recorrer ao Poder Judiciário, conforme cláusula
                de foro abaixo.
              </p>
              <p>
                <strong className="text-white">12.8.</strong> Foro: as Partes
                elegem o foro da Comarca de São Paulo/SP para dirimir questões
                oriundas deste Termo, com renúncia expressa a qualquer outro,
                por mais privilegiado que seja.
              </p>
              <p>
                <strong className="text-white">12.9.</strong> Jurisdição
                Internacional: usuários localizados fora do território
                brasileiro concordam que este Contrato é regido exclusivamente
                pela legislação brasileira, elegendo o foro da Comarca de São
                Paulo/SP para dirimir quaisquer conflitos, independentemente
                de seu país de residência ou domicílio. A RATOEIRA PAGES não
                se submete a qualquer jurisdição estrangeira, regulamentação
                de proteção ao consumidor de outros países ou normas
                internacionais que conflitem com a legislação brasileira
                aplicável.
              </p>
            </div>
          </section>

          {/* 13. Canais de Atendimento */}
          <section className="bg-brand-primary/10 p-6 md:p-8 rounded-3xl border border-brand-primary/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              13. DOS CANAIS DE ATENDIMENTO
            </h2>
            <p className="mb-4">
              <strong className="text-white">13.1.</strong> Em caso de dúvidas,
              reclamações ou suporte, entre em contato com o Suporte RATOEIRA
              PAGES:
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
