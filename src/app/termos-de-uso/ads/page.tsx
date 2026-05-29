import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Termos de Uso do Ads | Ratoeira Hub",
  description: "Termos e Condições de Uso da plataforma Ratoeira Ads.",
};

export default function TermosDeUsoAdsPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="flex-1 py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl 3xl:max-w-[70rem] 4xl:max-w-[90rem] mx-auto w-full">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400/60 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all font-medium text-sm border border-white/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Termos de Uso
          </h1>
          <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">
            Ratoeira Ads
          </p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed text-base md:text-lg">
          {/* Intro */}
          <section className="p-6 md:p-8 bg-[#111111] rounded-3xl border border-white/10">
            <p>
              <strong className="text-white">
                RATOEIRA ADS DIGITAL MARKETING LTDA.
              </strong>
              , pessoa jurídica de direito privado, inscrita no CNPJ sob o nº{" "}
              <strong className="text-white">55.824.986/0001-06</strong>, sediada
              na Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP, CEP:
              06.454-000, doravante denominada{" "}
              <strong className="text-white">&ldquo;RATOEIRA ADS&rdquo;</strong>
              , e, de outro lado,{" "}
              <strong className="text-white">&ldquo;VOCÊ&rdquo;</strong>, pessoa
              jurídica ou pessoa física, qualificados no Cadastro, doravante
              denominado apenas &ldquo;VOCÊ&rdquo;, declara que leu, entendeu,
              está de acordo e deu o aceite eletrônico, firmam o presente
              Contrato de Licença de Uso não exclusiva da PLATAFORMA RATOEIRA
              ADS (&ldquo;Termos de Uso/Instrumento&rdquo;), do qual é parte
              integrante a política de privacidade.
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
                condições dos Termos de Uso da RATOEIRA ADS configura uma
                licença de uso não exclusiva para acesso, uso e navegação.
              </p>
              <p>
                <strong className="text-white">1.2.</strong> Ao preencher
                eletronicamente o Cadastro, após a leitura integral deste
                Contrato e a marcação da caixa de diálogo &ldquo;Declaro estar
                de acordo com os termos de uso.&rdquo;, VOCÊ estará
                automaticamente aderindo e concordando com os termos e
                condições deste Contrato.
              </p>
              <p>
                <strong className="text-white">1.3.</strong> A RATOEIRA ADS
                poderá alterar as condições deste Contrato a qualquer tempo,
                sem comunicação prévia, caso VOCÊ não concorde com a(s)
                modificação(ões), poderá denunciá-lo, sem qualquer ônus ou
                penalidade.
              </p>
              <p>
                <strong className="text-white">1.4.</strong> Os recursos da
                PLATAFORMA RATOEIRA ADS são licenciados no estado em que se
                encontram, podendo ser modificados, substituídos ou removidos a
                qualquer momento, sem aviso prévio.
              </p>
              <p>
                <strong className="text-white">1.5.</strong> O uso da PLATAFORMA
                RATOEIRA ADS em discordância com os termos a seguir poderá
                implicar na suspensão do acesso à conta, cancelamento do seu
                cadastro, e consequente e imediato encerramento da licença de
                uso previamente existente e eventuais outras sanções, conforme
                adiante detalhado.
              </p>
              <p>
                <strong className="text-white">1.6.</strong> A RATOEIRA ADS
                pode restringir a disponibilidade da Plataforma ou de certas
                áreas ou recursos a ela relacionados, se necessário,
                considerando os limites de capacidade, a segurança, a forma de
                atuação ou a integridade de seus servidores, bem como para
                realizar medidas de manutenção ou aprimoramento dos seus
                serviços.
              </p>
              <p>
                <strong className="text-white">1.7.</strong> A RATOEIRA ADS pode
                melhorar e alterar a Plataforma a qualquer tempo, seja para
                modificar, substituir ou remover
                serviços/ferramentas/funcionalidades existentes, ou para
                adicionar serviços/ferramentas/funcionalidades novos.
              </p>
              <p>
                <strong className="text-white">1.8.</strong> A remoção, alteração
                ou substituição de funcionalidades não gera direito a
                reembolso, crédito, compensação ou indenização de qualquer
                natureza, desde que mantido o objeto essencial do serviço
                contratado. VOCÊ declara estar ciente de que a plataforma está
                em constante evolução e que funcionalidades podem ser
                descontinuadas a qualquer tempo por razões técnicas,
                estratégicas ou operacionais, sem que isso configure
                inadimplemento contratual por parte da RATOEIRA ADS.
              </p>
              <p>
                <strong className="text-white">1.9.</strong> A RATOEIRA ADS não
                garante disponibilidade ininterrupta da plataforma.
                Instabilidades, interrupções ou períodos de indisponibilidade,
                seja por manutenção programática ou por fatores alheios ao
                controle da RATOEIRA ADS, não geram direito a reembolso,
                crédito, compensação ou indenização de qualquer natureza. Esta
                disposição não afasta os direitos do consumidor previstos no
                Código de Defesa do Consumidor em casos de falha reiterada e
                comprovada exclusivamente imputável à RATOEIRA ADS.
              </p>
              <p>
                <strong className="text-white">1.10.</strong> VOCÊ declara estar
                ciente e concorda, expressamente, que é seu dever ler e se
                informar sobre eventuais alterações nestes Termos de Uso e nas
                demais Políticas e Termos da RATOEIRA ADS.
              </p>
              <p>
                <strong className="text-white">1.11.</strong> O presente
                instrumento deve ser interpretado em conjunto com as condições
                de eventuais ANEXOS, sendo que sempre que houver algum conflito
                entre o disposto neste CONTRATO, e em ANEXO específico,
                prevalecerá o disposto no ANEXO, por ser regra especial.
              </p>
              <p>
                <strong className="text-white">1.12.</strong> VOCÊ declara
                ciência de que poderão ser celebrados Termos Aditivos, com
                cláusulas específicas em relação a alguns dos serviços
                prestados pela RATOEIRA ADS, que dependerão do preenchimento de
                pré-requisitos específicos, os quais serão apresentados conforme
                o interesse, para leitura e aceitação também por meio
                eletrônico.
              </p>
            </div>
          </section>

          {/* 2. Objeto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. DO OBJETO
            </h2>
            <p>
              <strong className="text-white">2.1.</strong> O presente contrato
              tem por objeto a contratação e afiliação aos serviços da RATOEIRA
              ADS, uma plataforma tecnológica especializada em rastreamento de
              tráfego pago, otimização de campanhas de tráfego, detecção e
              bloqueio de cliques fraudulentos e afiliados mal-intencionados,
              garantindo a proteção e otimização do orçamento de tráfego.
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
                  desc: "Procedimento pelo qual o titular do cartão de crédito não reconhece e/ou contesta, junto ao emissor de seu cartão de crédito, uma despesa efetuada com o cartão de que é titular. Este procedimento será realizado diretamente pela bandeira do cartão e comunicado à empresa que fará a intermediação dos pagamentos.",
                },
                {
                  term: "Código de Acesso",
                  desc: "É a senha utilizada por VOCÊ para acessar sua conta virtual.",
                },
                {
                  term: "Cookie Stuffing",
                  desc: "Extensões de navegador maliciosas, concebidas para inserir a identidade ou dados de identificação de um Usuário Afiliado em detrimento de outro.",
                },
                {
                  term: "Comissões",
                  desc: "Percentual pago sobre as vendas realizadas pelos afiliados. Os valores serão repassados diretamente pela empresa responsável pelo processamento dos pagamentos.",
                },
                {
                  term: "Gateway de pagamentos",
                  desc: "Empresa responsável pelo processamento dos pagamentos das mensalidades dos planos devidos à RATOEIRA ADS. A RATOEIRA ADS utiliza a Digital Manager Guru como estrutura de gateway, conectada ao Asaas, plataforma onde as transações financeiras são de fato realizadas.",
                },
                {
                  term: "E-BOOK",
                  desc: "Livro digital com informações e atualizações a respeito dos serviços da RATOEIRA ADS, disponível a cada renovação ou nova compra, podendo ser acessado diretamente pelo painel central da RATOEIRA ADS a qualquer momento.",
                },
                {
                  term: "IP do Computador",
                  desc: "Endereço numérico único atribuído ao dispositivo utilizado para acessar a internet, podendo ser utilizado para identificar a origem de acessos à plataforma da RATOEIRA ADS.",
                },
                {
                  term: "GCLID – Google Ads",
                  desc: "Parâmetro de rastreamento gerado pelo Google Ads para identificar e monitorar cliques e conversões de campanhas publicitárias.",
                },
                {
                  term: "MSCLKID – Bing Ads",
                  desc: "Identificador de rastreamento exclusivo gerado pelo Bing Ads para monitorar o desempenho de anúncios e atribuir conversões corretamente.",
                },
                {
                  term: "FBCLID – Meta Ads",
                  desc: "Identificador de rastreamento gerado pelo Meta (Facebook e Instagram) para monitorar o desempenho de anúncios e atribuir conversões corretamente nas campanhas de tráfego pago.",
                },
                {
                  term: "Presell",
                  desc: "Página intermediária utilizada para preparar e direcionar o usuário antes da conversão final, com o objetivo de aumentar a taxa de conversão de anúncios e campanhas de marketing.",
                },
                {
                  term: "VOCÊ",
                  desc: "São todas as pessoas físicas e/ou jurídicas que utilizam a plataforma RATOEIRA ADS.",
                },
                {
                  term: "Mensalidade",
                  desc: "É o valor cobrado pela RATOEIRA ADS como remuneração pelo serviço pelo uso da plataforma.",
                },
                {
                  term: "Tributos",
                  desc: "São todas as espécies tributárias devidas – impostos, taxas, encargos, contribuições, decorrentes das operações realizadas pelo Usuário.",
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
                <strong className="text-white">4.1.</strong> Poderão acessar à
                RATOEIRA ADS: a) Pessoa Física, em pleno gozo da capacidade
                civil e sem impedimento legal; b) Pessoa jurídica, por meio de
                seu sócio ou representante legal, com capacidade jurídica para
                contratar.
              </p>
              <p>
                <strong className="text-white">4.2.</strong> Para acessar a
                plataforma, VOCÊ deverá escolher o plano disponível, e informar,
                entre outros documentos e informações que a RATOEIRA ADS julgar
                necessários, seu nome completo ou razão social, e-mail, login,
                número de celular com DDD, e escolher a forma de pagamento, por
                cartão de crédito, neste caso, fornecendo os dados do cartão
                (número do cartão, nome do titular, mês e ano de vencimento,
                bem como o CVV), ou por pix.
              </p>
              <p>
                <strong className="text-white">4.3.</strong> Após a confirmação
                da compra, VOCÊ receberá um e-mail de confirmação da RATOEIRA
                ADS, e com um código provisório de acesso que poderá ser
                alterado após o primeiro acesso à plataforma. Além disso, você
                receberá um e-mail da empresa que processará os pagamentos e
                será responsável pela transação de distribuição dos valores.
              </p>
              <p>
                <strong className="text-white">4.4.</strong> O Código de Acesso
                somente poderá ser modificado por VOCÊ. O Código de Acesso não
                poderá ser divulgado a terceiros, sendo, exclusivamente, de sua
                responsabilidade, o uso, a segurança e o conhecimento do seu
                Código de Acesso. VOCÊ expressamente aceita e reconhece que
                qualquer pessoa, que se identificar com o correto Código de
                Acesso, será reconhecida pela plataforma como VOCÊ, e qualquer
                operação ou transação feita com o mencionado Código de Acesso
                será tida como válida.
              </p>
              <p>
                <strong className="text-white">4.5.</strong> VOCÊ é o único
                responsável pelas atividades realizadas em sua conta, sendo a
                RATOEIRA ADS isenta de qualquer responsabilidade por perdas
                e/ou danos causados por VOCÊ ou terceiros.
              </p>
              <p>
                <strong className="text-white">4.6.</strong> VOCÊ declara, sob
                as penas das leis civis e penais brasileiras, que as
                informações, dados e documentos por ele informados são
                verdadeiros.
              </p>
              <p>
                <strong className="text-white">4.7.</strong> O presente
                instrumento produz efeitos, a partir da data de 13/04/2026, para
                todos os negócios e operações efetivados entre as partes, de
                forma que declaram as partes que os termos de instrumento
                refletem precisamente a natureza da relação jurídica havida
                entre estas a partir da aludida data, assim como os respectivos
                direitos e obrigações que a compõe.
              </p>
              <p>
                <strong className="text-white">4.8.</strong> O acesso à
                plataforma é pessoal e intransferível, sendo permitido o uso
                simultâneo em até 2 (dois) dispositivos por categoria: (i)
                computador ou notebook; (ii) tablet; e (iii) smartphone.
                Acessos simultâneos a partir de mais de 2 dispositivos diferentes
                em localizações geográficas distintas, em curto espaço de tempo,
                serão interpretados como indício de compartilhamento indevido de
                credenciais e poderão resultar em suspensão preventiva imediata
                da conta, sem prejuízo das demais sanções previstas neste
                Termo. A RATOEIRA ADS reserva-se o direito de implementar
                controles técnicos de sessão para monitorar e limitar acessos
                simultâneos.
              </p>
              <p>
                <strong className="text-white">4.9.</strong> A licença de uso
                concedida por este Termo é individual e intransferível,
                vinculada a um único CPF ou CNPJ cadastrado. Não é permitida a
                utilização de uma única conta para operações de diferentes
                empresas, grupos econômicos ou terceiros, ainda que
                relacionados ao titular da conta. Cada pessoa física ou
                jurídica deve contratar um plano individual. O descumprimento
                desta cláusula será tratado como compartilhamento indevido de
                acesso, sujeitando VOCÊ às sanções previstas na cláusula 9.2.
              </p>
            </div>
          </section>

          {/* 5. Planos e Valores */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. DOS PLANOS E VALORES
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">5.1.</strong> Para se tornar
                afiliado da RATOEIRA ADS, VOCÊ deverá optar por um dos planos
                abaixo:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Plano Camundongo
                  </h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>Criação de Ratoeiras: 3</li>
                    <li>Links de Checkouts: 3</li>
                    <li>Plataformas Conectadas: 2</li>
                    <li>Ratoeiras Automáticas: 0</li>
                    <li>Perfis do Google: 0</li>
                    <li>E-Book de Estratégia: SIM</li>
                  </ul>
                  <p className="text-brand-primary font-semibold">
                    R$77,00 por mês, com renovação automática
                  </p>
                </div>

                <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Plano Rato
                  </h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>Criação de Ratoeiras: 50</li>
                    <li>Links de Checkouts: 50</li>
                    <li>Plataformas Conectadas: Ilimitada</li>
                    <li>Ratoeiras Automáticas: 5</li>
                    <li>Perfis do Google: 3</li>
                    <li>E-Book de Estratégia: SIM</li>
                  </ul>
                  <div className="text-brand-primary font-semibold text-sm space-y-1">
                    <p>Mensal: R$167,00/mês (renovação automática)</p>
                    <p>
                      Semestral: R$797,00 à vista (ou 6x de R$149,52)
                    </p>
                    <p>
                      Anual: R$1.347,00 à vista (ou 12x de R$139,31)
                    </p>
                  </div>
                </div>

                <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Plano Ratazana
                  </h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>Criação de Ratoeiras: 100</li>
                    <li>Links de Checkouts: 100</li>
                    <li>Plataformas Conectadas: Ilimitada</li>
                    <li>Ratoeiras Automáticas: 50</li>
                    <li>Perfis do Google: 10</li>
                    <li>E-Book de Estratégia: SIM</li>
                  </ul>
                  <div className="text-brand-primary font-semibold text-sm space-y-1">
                    <p>Mensal: R$247,00/mês (renovação automática)</p>
                    <p>
                      Semestral: R$1.097,00 à vista (ou 6x de R$205,80)
                    </p>
                    <p>
                      Anual: R$1.797,00 à vista (ou 12x de R$185,85)
                    </p>
                  </div>
                </div>

                <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Plano Ratazana Plus
                  </h3>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>Projetos/Ratoeiras Automáticas: 150</li>
                    <li>Integrações/Plataformas Conectadas: Ilimitadas</li>
                    <li>Perfis do Google Ads Conectados: 30</li>
                    <li>Contas de Anúncio: Ilimitadas</li>
                    <li>Links de Produtor Automáticos: 50</li>
                    <li>E-Book de Estratégia: SIM</li>
                  </ul>
                  <div className="text-brand-primary font-semibold text-sm space-y-1">
                    <p>Mensal: R$397,00/mês (renovação automática)</p>
                    <p>
                      Semestral: R$2.097,00 à vista (ou 6x de R$393,41)
                    </p>
                    <p>
                      Anual: R$3.997,00 à vista (ou 12x de R$413,37)
                    </p>
                  </div>
                </div>
              </div>

              <p>
                <strong className="text-white">5.2.</strong> O pagamento será
                realizado observando a(s) forma(s) escolhida(s) no momento da
                contratação.
              </p>
              <p>
                <strong className="text-white">5.3.</strong> A renovação do
                plano será automática. Caso VOCÊ não deseje continuar utilizando
                os serviços deverá cancelar a renovação automática a qualquer
                momento, sem qualquer ônus.
              </p>
              <p className="pl-4 border-l-2 border-white/10 text-sm">
                <strong className="text-white">5.3.1.</strong> O cancelamento
                da renovação automática apenas garante o direito a não renovação
                do plano contratado. Exemplo: se VOCÊ efetuou a contratação de
                um plano semestral, pode cancelar a renovação para que esse
                plano não seja renovado ao final dos seis meses, mas não pode
                cancelar o plano antes do encerramento do período.
              </p>
              <p>
                <strong className="text-white">5.4.</strong> Não haverá
                reembolso de valores pagos em caso de cancelamento antecipado
                do plano, salvo se o cancelamento ocorrer no prazo de 7 (sete)
                dias da data da compra, ou da renovação automática, nos termos
                do art. 49 do CDC.
              </p>
              <p className="pl-4 border-l-2 border-white/10 text-sm">
                <strong className="text-white">5.4.1.</strong> O registro de
                chargeback indevido, assim entendido aquele realizado por VOCÊ
                sem justa causa comprovada, configura inadimplência contratual
                e sujeita VOCÊ ao pagamento do valor integral contestado,
                acrescido de multa de 20% (vinte por cento) sobre o montante
                objeto do chargeback, além de suspensão imediata do acesso à
                plataforma até a regularização. A RATOEIRA ADS reserva-se o
                direito de adotar as medidas judiciais e extrajudiciais
                cabíveis para recuperação dos valores e reparação de danos.
              </p>
              <p>
                <strong className="text-white">5.5.</strong> Os planos
                semestrais e anuais possuem prazo determinado, não sendo
                passíveis de cancelamento ou reembolso após o período de 7
                (sete) dias da data da compra. Os valores desses planos
                poderão ser pagos à vista ou parcelados em até 6 (seis) ou 12
                (doze) vezes, respectivamente, sendo essa sua opção
                exclusivamente. O parcelamento não altera a natureza do
                contrato, que permanecerá vigente até o final do período
                contratado. Assim, ainda que ocorra o cancelamento da renovação
                automática, as parcelas remanescentes continuarão devidas, sem
                possibilidade de reembolso ou isenção de pagamento.
              </p>
              <p>
                <strong className="text-white">5.6.</strong> Após a
                contratação, não será permitida a redução do plano escolhido.
                Caso VOCÊ tenha optado por um plano anual, não será possível
                convertê-lo para um plano semestral ou mensal, mantendo-se a
                obrigação de pagamento integral pelo período contratado. No
                entanto, será facultado o upgrade para um plano superior,
                mediante ajuste proporcional dos valores.
              </p>
              <p>
                <strong className="text-white">5.7.</strong> A RATOEIRA ADS se
                reserva o direito de ajustar os valores dos planos, mediante
                comunicação prévia de, no mínimo, 30 (trinta) dias, sendo
                facultado a VOCÊ a continuidade ou cancelamento do serviço
                antes da efetivação da nova cobrança.
              </p>
            </div>
          </section>

          {/* 6. Obrigações da Ratoeira */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. DAS OBRIGAÇÕES DA RATOEIRA ADS
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">6.1.</strong> Sem prejuízo das
                demais obrigações decorrentes deste Termo, a RATOEIRA ADS
                obriga-se a: a) Prestar os Serviços por meio de conexões
                seguras; b) Seguir a legislação e regulamentos pertinentes à
                prestação dos serviços;
              </p>

              <div className="bg-[#161616] p-6 rounded-2xl border border-white/5 space-y-3">
                <h3 className="text-white font-bold">
                  6.1.1. Da limitação de responsabilidade
                </h3>
                <p>
                  a) A RATOEIRA ADS não se responsabiliza por falhas,
                  interrupções ou indisponibilidades do sistema causadas por
                  eventos de força maior, caso fortuito ou fatores alheios ao
                  seu controle, incluindo falhas de infraestrutura de terceiros
                  e interrupções de conectividade.
                </p>
                <p>
                  b) A RATOEIRA ADS empregará seus melhores esforços para
                  assegurar um serviço contínuo e de alto desempenho. No
                  entanto, a disponibilidade e a qualidade dos serviços poderão
                  ser afetadas por fatores externos, uma vez que sua operação
                  depende da infraestrutura de terceiros, incluindo, mas não se
                  limitando a: Google Cloud Platform, Digital Ocean, Redis,
                  MailTrap, Brevo, GoDaddy, Firebase, Neutrino, Digital Manager
                  Guru, Asaas, ClickHouse, Meta, Go High Level, GitHub,
                  Cloudflare, Google, Vturb.
                </p>
                <p>
                  c) A RATOEIRA ADS não garante a disponibilidade ininterrupta
                  dos serviços nem se responsabiliza por falhas, interrupções,
                  instabilidades ou degradações de desempenho resultantes de
                  limitações técnicas ou falhas dessas infraestruturas
                  terceirizadas.
                </p>
                <p>
                  d) Em nenhuma hipótese a RATOEIRA ADS será responsável por
                  danos diretos ou indiretos, incluindo, mas não se limitando
                  a, lucros cessantes, perdas de dados, prejuízos financeiros
                  ou qualquer outro tipo de dano decorrente de falhas ou
                  indisponibilidades dos serviços mencionados.
                </p>
                <p>
                  e) A RATOEIRA ADS não se responsabiliza por quaisquer
                  obrigações tributárias decorrentes da operação e uso dos
                  seus serviços, sendo exclusivamente do afiliado a
                  responsabilidade pelo cumprimento das obrigações fiscais
                  aplicáveis às suas atividades.
                </p>
                <p>
                  f) A RATOEIRA ADS emprega tecnologia avançada para detecção
                  e bloqueio de cliques fraudulentos, mas não garante a
                  eliminação total de fraudes e atividades mal-intencionadas.
                </p>
                <p>
                  g) A RATOEIRA ADS não será responsável por prejuízos
                  decorrentes de decisões tomadas por VOCÊ com base nos
                  relatórios gerados pela plataforma, bem como por falhas
                  técnicas, instabilidades ou indisponibilidades causadas por
                  terceiros, incluindo, mas não se limitando a: g.1) Problemas
                  nos servidores ou na conexão com a internet; g.2) Mudanças
                  nas políticas de anúncios de plataformas de tráfego pago;
                  g.3) Ações fraudulentas que não possam ser detectadas devido
                  a técnicas avançadas utilizadas por terceiros.
                </p>
                <p>
                  h) Em nenhuma hipótese a responsabilidade total da RATOEIRA
                  ADS perante VOCÊ, por quaisquer danos decorrentes do uso ou
                  impossibilidade de uso da plataforma, superará o valor total
                  efetivamente pago por VOCÊ à RATOEIRA ADS nos últimos 3
                  (três) meses anteriores ao evento gerador do dano. Esta
                  limitação aplica-se independentemente da natureza da ação —
                  contratual, extracontratual ou outra — e mesmo que a
                  RATOEIRA ADS tenha sido avisada da possibilidade de tais
                  danos.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Confidencialidade */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. DA CONFIDENCIALIDADE E PROTEÇÃO DE DADOS
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">7.1.</strong> Todas as
                informações fornecidas por VOCÊ à RATOEIRA ADS, incluindo
                dados de campanhas, estratégias e relatórios gerados pela
                plataforma, serão tratadas como confidenciais e não poderão
                ser compartilhadas com terceiros sem autorização expressa.
              </p>
              <p>
                <strong className="text-white">7.2.</strong> A RATOEIRA ADS
                adota medidas de segurança para proteger os dados dos
                usuários, mas não se responsabiliza por vazamentos de
                informações decorrentes de ataques cibernéticos, falhas de
                terceiros ou negligência do próprio usuário na proteção de
                seus acessos.
              </p>
              <p>
                <strong className="text-white">7.3.</strong> DO TRATAMENTO DE
                DADOS PESSOAIS — CONFORMIDADE COM A LGPD
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">7.3.1.</strong> O tratamento de
                dados pessoais realizado pela RATOEIRA ADS observa
                integralmente a Lei nº 13.709/2018 (Lei Geral de Proteção de
                Dados — LGPD). As bases legais aplicadas são: (i) execução de
                contrato (art. 7º, V), para dados necessários à prestação do
                serviço; (ii) legítimo interesse (art. 7º, IX), para segurança,
                monitoramento de uso e proteção da plataforma; e (iii)
                cumprimento de obrigação legal (art. 7º, II), quando exigido
                por legislação aplicável.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">7.3.2.</strong> A RATOEIRA ADS
                coleta e trata dados cadastrais, dados de navegação, logs de
                acesso e padrões de uso da plataforma. Esses dados são
                utilizados exclusivamente para: (i) prestação e melhoria dos
                serviços; (ii) segurança e prevenção de fraudes e uso indevido;
                (iii) cumprimento de obrigações legais; e (iv) defesa em
                processos judiciais, administrativos ou arbitrais.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">7.3.3.</strong> Os registros de
                log de sistema, incluindo ações dos usuários e padrões de
                comportamento na plataforma, serão mantidos por prazo mínimo
                de 5 (cinco) anos, contados a partir do registro, em
                conformidade com o Marco Civil da Internet (Lei nº
                12.965/2014) e a LGPD, podendo ser utilizados como meio de
                prova em qualquer procedimento judicial, administrativo ou
                arbitral.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">7.3.4.</strong> A RATOEIRA ADS
                poderá utilizar dados anonimizados e agregados, que não
                permitam a identificação individual de nenhum usuário, para
                fins de pesquisa, desenvolvimento de produto, estatísticas de
                mercado e melhoria contínua da plataforma. Tais dados
                anonimizados não se sujeitam às restrições da LGPD, nos
                termos do art. 12 da referida Lei.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">7.3.5.</strong> VOCÊ, na
                qualidade de titular de dados, poderá exercer os direitos
                previstos no art. 18 da LGPD — incluindo acesso, correção,
                portabilidade, eliminação e revogação de consentimento —
                mediante solicitação ao canal de atendimento indicado na
                cláusula 12 deste Termo. O prazo de resposta será de até 15
                (quinze) dias úteis.
              </p>
              <p className="pl-4 border-l-2 border-white/10">
                <strong className="text-white">7.3.6.</strong> Em caso de
                solicitação de portabilidade ou exportação de dados pelo
                usuário, nos termos do art. 18, V da LGPD, a RATOEIRA ADS
                disponibilizará os dados em formato estruturado no prazo de
                até 30 (trinta) dias úteis. O custo administrativo da
                exportação poderá ser cobrado do usuário, limitado ao valor
                equivalente a 1 (um) mês do plano vigente à época da
                solicitação, exceto nas hipóteses em que a gratuidade seja
                expressamente exigida pela legislação aplicável.
              </p>
            </div>
          </section>

          {/* 8. Suas obrigações */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. DAS SUAS OBRIGAÇÕES
            </h2>
            <p className="mb-4">
              <strong className="text-white">8.1.</strong> Além das demais
              obrigações previstas neste contrato, VOCÊ se obriga:
            </p>
            <ul className="space-y-3">
              {[
                "Reembolsar integralmente a RATOEIRA ADS por qualquer dano, prejuízo ou custo adicional incorrido em razão da presente contratação, incluindo, mas não se limitando, a despesas administrativas, honorários advocatícios e custas processuais;",
                "Isentar e manter indene a RATOEIRA ADS de qualquer responsabilidade decorrente de sua atuação, assumindo a defesa e o polo processual em eventuais demandas judiciais, extrajudiciais ou administrativas em que a RATOEIRA ADS seja envolvida em decorrência dos serviços prestados por VOCÊ. Caso não seja possível excluir a RATOEIRA ADS do litígio, VOCÊ se compromete a garantir a isenção de qualquer condenação ou ônus que lhe seja atribuído, assumindo integralmente os custos e consequências legais;",
                "Divulgar e utilizar a marca da RATOEIRA ADS exclusivamente em conformidade com as diretrizes e características dos serviços oferecidos na plataforma, sem qualquer deturpação, omissão ou prática que possa induzir terceiros a erro quanto à sua natureza e funcionalidades;",
                "Abster-se de associar a RATOEIRA ADS a qualquer produto, serviço, prática ou conteúdo ilícito, imoral, ofensivo, enganoso ou que viole direitos de terceiros, incluindo, mas não se limitando, a direitos autorais, de propriedade industrial e de personalidade;",
                "Observar integralmente a legislação vigente, bem como as normas e políticas da RATOEIRA ADS, zelando pela ética, transparência e conformidade em todas as suas interações e transações na plataforma;",
                "Manter suas informações cadastrais atualizadas, incluindo dados de contato, endereço e demais informações relevantes para a continuidade dos serviços prestados pela RATOEIRA ADS, responsabilizando-se por qualquer consequência advinda de informações desatualizadas ou inverídicas;",
                "Responder exclusivamente por suas atividades e condutas na plataforma, isentando a RATOEIRA ADS de qualquer responsabilidade por atos praticados por VOCÊ ou por terceiros em seu nome, ainda que decorrentes de falha na segurança de seus acessos.",
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

          {/* 9. Prazo e Rescisão */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. DO PRAZO E DA RESCISÃO
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">9.1.</strong> O presente
                contrato terá vigência conforme o plano escolhido por VOCÊ,
                sendo irrevogável e irretratável durante o respectivo período,
                não podendo ser rescindido antecipadamente sem justa causa.
              </p>
              <p>
                <strong className="text-white">9.2.</strong> A RATOEIRA ADS
                poderá rescindir o presente contrato imediatamente,
                independentemente de notificação ou interpelação, judicial ou
                extrajudicial, e sem necessidade de cumprimento do prazo de
                vigência, caso VOCÊ:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex gap-2">
                  <span className="text-brand-primary">•</span>
                  <span>
                    Descumpra qualquer obrigação ou declaração assumida neste
                    contrato;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">•</span>
                  <span>
                    Utilize seu link de afiliado para adquirir a plataforma
                    para uso próprio, recebendo comissão sobre sua própria
                    venda;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">•</span>
                  <span>
                    Prejudique a imagem pública da RATOEIRA ADS ou de seus
                    parceiros, seja por declarações, ações ou qualquer outro
                    meio;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">•</span>
                  <span>
                    Utilize a plataforma de maneira fraudulenta, incluindo, mas
                    não se limitando a, manipular detecções, fraudar cliques ou
                    buscar vantagem indevida sobre seus próprios anúncios;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">•</span>
                  <span>
                    Transfira ou compartilhe indevidamente seu acesso à
                    plataforma com terceiros, sem a expressa autorização da
                    RATOEIRA ADS;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">•</span>
                  <span>
                    Engaje-se em práticas que violem leis, regulamentos ou
                    políticas da RATOEIRA ADS, incluindo fraudes, lavagem de
                    dinheiro ou outras atividades ilícitas.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">•</span>
                  <span>
                    Utilize o acesso à plataforma, direta ou indiretamente,
                    para desenvolver, subsidiar, inspirar ou viabilizar a
                    criação de produto, serviço ou plataforma concorrente à
                    RATOEIRA ADS, incluindo, mas não se limitando a, mapear
                    sistematicamente funcionalidades, fluxos, algoritmos,
                    lógicas de detecção ou estratégias de operação da
                    plataforma com finalidade reprodutiva ou competitiva.
                  </span>
                </li>
              </ul>
              <p>
                <strong className="text-white">9.3.</strong> SUSPENSÃO
                PREVENTIVA: Sem prejuízo da rescisão imediata prevista na
                cláusula 9.2, a RATOEIRA ADS poderá, a seu exclusivo critério,
                suspender preventivamente o acesso de VOCÊ à plataforma sempre
                que houver indício razoável de descumprimento contratual, uso
                indevido, uso concorrencial, compartilhamento de credenciais ou
                qualquer conduta que possa causar dano à RATOEIRA ADS ou a
                terceiros. A suspensão preventiva: (i) poderá ser aplicada
                imediatamente e sem notificação prévia; (ii) não gera direito a
                reembolso do período suspenso; (iii) terá duração máxima de 30
                (trinta) dias, findo o qual a RATOEIRA ADS deverá confirmar a
                rescisão ou reativar o acesso; e (iv) não implica
                reconhecimento de qualquer direito em favor de VOCÊ.
              </p>
              <p>
                <strong className="text-white">9.4.</strong> Em caso de
                rescisão por qualquer dos motivos elencados no item 9.2, VOCÊ
                será responsável pelo pagamento de uma multa compensatória
                equivalente a 50% do valor ainda devido com base no plano
                contratado, sem prejuízo de eventuais perdas e danos que a
                RATOEIRA ADS possa apurar.
              </p>
              <p>
                <strong className="text-white">9.5.</strong> A rescisão do
                contrato não dará direito a reembolso de valores já pagos,
                independentemente do tempo restante de vigência do plano
                contratado.
              </p>
              <p>
                <strong className="text-white">9.6.</strong> Caso a rescisão
                ocorra por iniciativa da RATOEIRA ADS sem justa causa, VOCÊ
                terá direito ao reembolso proporcional ao período não utilizado
                do plano contratado.
              </p>
            </div>
          </section>

          {/* 10. Propriedade Intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. DA PROPRIEDADE INTELECTUAL
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">10.1.</strong> VOCÊ reconhece
                que, ao aceitar estes Termos de Uso, a RATOEIRA ADS lhe concede
                uma licença limitada, não exclusiva, intransferível e revogável
                para uso da sua Plataforma, exclusivamente para os fins
                estabelecidos neste contrato.
              </p>
              <p>
                <strong className="text-white">10.2.</strong> O domínio{" "}
                <span className="text-brand-primary">
                  https://ratoeiraads.com.br/
                </span>
                ,{" "}
                <span className="text-brand-primary">
                  https://ratoeiraadsoficial.com.br
                </span>
                ,{" "}
                <span className="text-brand-primary">
                  https://ratoeiraads.com
                </span>
                , seus logotipos, identidades visuais, código-fonte,
                algoritmos, interface, sistemas, banco de dados, ferramentas,
                documentações, relatórios analíticos e quaisquer outras criações
                desenvolvidas ou disponibilizadas na Plataforma são de
                propriedade exclusiva da RATOEIRA ADS, estando estritamente
                vedado:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex gap-2">
                  <span className="text-brand-primary">a)</span>
                  <span>
                    Reproduzir, modificar, distribuir, vender, ceder,
                    sublicenciar ou explorar comercialmente qualquer parte da
                    Plataforma, total ou parcialmente, sem a autorização
                    expressa da RATOEIRA ADS;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">b)</span>
                  <span>
                    Descompilar, realizar engenharia reversa ou tentar extrair
                    o código-fonte da Plataforma, salvo na medida permitida
                    pela legislação aplicável;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">c)</span>
                  <span>
                    Criar, desenvolver ou disponibilizar produtos ou serviços
                    derivados da Plataforma sem autorização expressa da
                    RATOEIRA ADS;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">d)</span>
                  <span>
                    Utilizar qualquer tecnologia, software ou prática que
                    possa interferir, danificar ou comprometer o funcionamento
                    da Plataforma.
                  </span>
                </li>
              </ul>
              <p>
                <strong className="text-white">10.3.</strong> Caso a RATOEIRA
                ADS venha a conceder direitos de uso adicionais por meio de
                contrato ou licença especial, estes serão concedidos por prazo
                determinado e poderão ser revogados a qualquer tempo em caso de
                descumprimento de seus termos.
              </p>
              <p>
                <strong className="text-white">10.4.</strong> A violação de
                qualquer disposição desta cláusula poderá resultar na rescisão
                imediata do contrato, sem prejuízo da adoção de medidas
                judiciais cabíveis para reparação de danos, incluindo sanções
                civis e criminais conforme a legislação vigente.
              </p>
            </div>
          </section>

          {/* 10.5 Monitoramento */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10.5. DO MONITORAMENTO DE USO E PROTEÇÃO CONTRA USO CONCORRENCIAL
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">10.5.1.</strong> A RATOEIRA ADS
                mantém registros de log de sistema que documentam as ações
                realizadas pelos usuários dentro da plataforma, incluindo, mas
                não se limitando a: acessos, navegação entre funcionalidades,
                volume e frequência de uso, consultas realizadas, dados
                visualizados e padrões de comportamento. Esses registros
                poderão ser utilizados como meio de prova em procedimentos
                administrativos, arbitrais ou judiciais.
              </p>
              <p>
                <strong className="text-white">10.5.2.</strong> É expressamente
                vedado ao usuário utilizar o acesso à plataforma, direta ou
                indiretamente, para desenvolver, replicar, inspirar ou
                subsidiar a criação de produto ou serviço concorrente à
                RATOEIRA ADS. Padrões de uso atípicos, como acesso intensivo e
                sistemático a funcionalidades de forma não condizente com o uso
                operacional normal da plataforma, poderão ser identificados
                pelos registros de sistema e interpretados como indício de uso
                indevido para fins concorrenciais.
              </p>
              <p>
                <strong className="text-white">10.5.3.</strong> Em caso de
                comprovado uso da plataforma para finalidade concorrencial, o
                usuário infrator estará sujeito, cumulativamente, a: (i)
                rescisão imediata do contrato, nos termos da cláusula 9.2; (ii)
                pagamento de multa de R$3.000.000,00 (três milhões de reais),
                valor este fixado com base na receita anual da RATOEIRA ADS e
                representativo do dano mínimo estimado decorrente do uso
                indevido; (iii) indenização por perdas e danos adicionais que a
                RATOEIRA ADS possa apurar, incluindo lucros cessantes, danos
                emergentes e danos à imagem; e (iv) adoção de todas as medidas
                judiciais e extrajudiciais cabíveis, incluindo ações
                indenizatórias, cautelares e criminais, conforme previsto na
                legislação brasileira vigente, em especial a Lei nº 9.279/1996
                (Propriedade Industrial) e o Código Civil Brasileiro.
              </p>
            </div>
          </section>

          {/* 10.6 Planos Vitalícios */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10.6. PLANOS VITALÍCIOS E TRANSFERÊNCIA DE CONTROLE
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">10.6.1.</strong> O acesso a
                planos vitalícios adquiridos em períodos promocionais é regido
                por Termo de Adesão específico, firmado entre as partes no ato
                da contratação, o qual prevalece sobre os presentes Termos de
                Uso no que lhe for específico, nos termos da cláusula 1.12
                deste instrumento.
              </p>
              <p>
                <strong className="text-white">10.6.2.</strong> A continuidade
                do acesso ao plano vitalício está condicionada,
                cumulativamente, a: (i) permanência do CNPJ
                55.824.986/0001-06 ativo e regular perante a Receita Federal;
                (ii) manutenção da RATOEIRA ADS sob propriedade do referido
                CNPJ, sendo que qualquer transferência de titularidade,
                aquisição, fusão ou incorporação da plataforma ou de seu
                controle societário torna o plano vitalício automaticamente
                insubsistente, sem gerar direito a reembolso ou indenização; e
                (iii) situação econômico-financeira regular da empresa.
              </p>
              <p>
                <strong className="text-white">10.6.3.</strong> Em caso de
                transferência de controle, aquisição ou qualquer operação
                societária que implique mudança na titularidade da plataforma,
                os contratos de planos regulares (mensais, semestrais e
                anuais) serão automaticamente cedidos ao novo controlador,
                independentemente de notificação ou anuência de VOCÊ,
                garantida a continuidade do serviço pelo período já contratado
                e pago. Os planos vitalícios não serão transferidos ao novo
                controlador, encerrando-se automaticamente na data da
                transferência.
              </p>
            </div>
          </section>

          {/* 11. Disposições Gerais */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              11. DAS DISPOSIÇÕES GERAIS
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">11.1.</strong> VOCÊ não poderá
                ceder, transferir ou sublicenciar, total ou parcialmente, os
                direitos e obrigações decorrentes deste Termo a terceiros, salvo
                mediante autorização expressa e por escrito da RATOEIRA ADS.
              </p>
              <p>
                <strong className="text-white">11.2.</strong> A RATOEIRA ADS
                reserva-se o direito de ceder, transferir ou delegar os
                direitos e obrigações deste Termo, total ou parcialmente, a
                terceiros, independentemente de notificação ou consentimento
                prévio dos Usuários.
              </p>
              <p>
                <strong className="text-white">11.3.</strong> A eventual
                tolerância de qualquer das Partes quanto ao descumprimento de
                qualquer cláusula ou condição deste Termo não constituirá
                renúncia, novação ou alteração contratual, podendo a Parte
                exigir o seu cumprimento a qualquer momento.
              </p>
              <p>
                <strong className="text-white">11.4.</strong> Custas e
                Honorários: Em caso de litígio judicial ou extrajudicial
                decorrente deste Termo, a Parte vencida arcará com todas as
                despesas processuais e honorários advocatícios da Parte
                vencedora, fixados em, no mínimo, 10% (dez por cento) do valor
                da causa, salvo determinação judicial diversa.
              </p>
              <p>
                <strong className="text-white">11.5.</strong> Antes do
                ajuizamento de qualquer ação judicial decorrente deste Termo,
                as Partes comprometem-se a buscar a resolução do conflito por
                meio de mediação extrajudicial, com prazo máximo de 30 (trinta)
                dias a contar da notificação formal de uma Parte à outra. Não
                havendo acordo na mediação, as Partes poderão optar, de comum
                acordo, pela arbitragem, nos termos da Lei nº 9.307/1996, ou
                recorrer ao Poder Judiciário, conforme cláusula de foro abaixo.
              </p>
              <p>
                <strong className="text-white">11.6.</strong> NÃO-SOLICITAÇÃO:
                VOCÊ compromete-se a não contratar, aliciar ou solicitar,
                direta ou indiretamente, qualquer funcionário, colaborador,
                prestador de serviço ou consultor da RATOEIRA ADS com quem
                tenha tido contato em razão deste Contrato, durante a vigência
                do mesmo e pelo prazo de 24 (vinte e quatro) meses após seu
                término, sob pena de pagamento de multa compensatória
                equivalente a 12 (doze) vezes o último salário ou remuneração
                mensal do profissional aliciado, sem prejuízo de perdas e danos
                adicionais apurados.
              </p>
              <p>
                <strong className="text-white">11.7.</strong> As Partes elegem
                o foro da Comarca de São Paulo/SP para dirimir quaisquer
                questões oriundas deste Termo, renunciando a qualquer outro
                foro, por mais privilegiado que seja.
              </p>
              <p>
                <strong className="text-white">11.8.</strong> JURISDIÇÃO
                INTERNACIONAL: Usuários localizados fora do território
                brasileiro concordam que este Contrato é regido exclusivamente
                pela legislação brasileira, elegendo o foro da Comarca de São
                Paulo/SP para dirimir quaisquer conflitos, independentemente
                de seu país de residência ou domicílio. A RATOEIRA ADS não se
                submete a qualquer jurisdição estrangeira, regulamentação de
                proteção ao consumidor de outros países ou normas internacionais
                que conflitem com a legislação brasileira aplicável.
              </p>
            </div>
          </section>

          {/* 12. Canais de Atendimento */}
          <section className="bg-brand-primary/10 p-6 md:p-8 rounded-3xl border border-brand-primary/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              12. DOS CANAIS DE ATENDIMENTO
            </h2>
            <p className="mb-4">
              <strong className="text-white">12.1.</strong> Em caso de dúvidas,
              reclamações, sugestões, VOCÊ poderá entrar em contato com o
              Suporte RATOEIRA ADS, através dos contatos abaixo:
            </p>
            <div className="space-y-2">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:suporte@ratoeiraads.com"
                  className="text-brand-primary hover:underline"
                >
                  suporte@ratoeiraads.com
                </a>
              </p>
              <p>
                <strong className="text-white">WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5519997278153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline"
                >
                  (19) 99727-8153
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
