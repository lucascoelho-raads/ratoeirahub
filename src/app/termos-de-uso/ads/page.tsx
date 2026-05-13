import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Termos de Uso do Ads | Ratoeira Hub",
  description: "Termos e Condições de Uso da plataforma Ratoeira Ads.",
};

export default function TermosDeUsoAdsPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="flex-1 py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Termos de Uso</h1>
          <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">Ratoeira Ads</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed text-base md:text-lg">
          
          <section className="p-6 md:p-8 bg-[#111111] rounded-3xl border border-white/10">
            <p>
              <strong className="text-white">RATOEIRA ADS DIGITAL MARKETING LTDA.</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº CNPJ: 55.824.986/0001-06, sediada na Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP, CEP: 06.454-000, doravante denominada “<strong className="text-white">RATOEIRA ADS</strong>”, e, de outro lado, “<strong className="text-white">VOCÊ</strong>”, pessoa jurídica ou pessoa física, qualificados no Cadastro, doravante denominado apenas “VOCÊ”, declara que leu, entendeu, está de acordo e deu o aceite eletrônico, firmam o presente Contrato de Licença de Uso não exclusiva da PLATAFORMA RATOEIRA ADS (“Termos de Uso/Instrumento”), do qual é parte integrante a política de privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DA ACEITAÇÃO DO CONTRATO E DOCUMENTOS INTEGRANTES</h2>
            <div className="space-y-4">
              <p>O aceite das condições dos Termos de Uso da RATOEIRA ADS configura uma licença de uso não exclusiva para acesso, uso e navegação.</p>
              <p>Ao preencher eletronicamente o Cadastro, após a leitura integral deste Contrato e a marcação da caixa de diálogo “Li e aceito os Termos e Condições de Uso”, VOCÊ estará automaticamente aderindo e concordando com os termos e condições deste Contrato.</p>
              <p>A RATOEIRA ADS poderá alterar as condições deste Contrato a qualquer tempo, sem comunicação prévia, caso VOCÊ não concorde com a(s) modificação(ões), poderá denunciá-lo, sem qualquer ônus ou penalidade.</p>
              <p>Os recursos da PLATAFORMA RATOEIRA ADS são licenciados no estado em que se encontram, podendo ser modificados, substituídos ou removidos a qualquer momento, sem aviso prévio.</p>
              <p>O uso da PLATAFORMA RATOEIRA ADS em discordância com os termos a seguir poderá implicar na suspensão do acesso à conta, cancelamento do seu cadastro, e consequente e imediato encerramento da licença de uso previamente existente e eventuais outras sanções, conforme adiante detalhado.</p>
              <p>A RATOEIRA ADS pode restringir a disponibilidade da Plataforma ou de certas áreas ou recursos a ela relacionados, se necessário, considerando os limites de capacidade, a segurança, a forma de atuação ou a integridade de seus servidores, bem como para realizar medidas de manutenção ou aprimoramento dos seus serviços.</p>
              <p>A RATOEIRA ADS pode melhorar e alterar a Plataforma a qualquer tempo, seja para modificar, substituir ou remover serviços/ferramentas/funcionalidades existentes, ou para adicionar serviços/ferramentas/funcionalidades novos.</p>
              <p>VOCÊ declara estar ciente e concorda, expressamente, que é seu dever ler e se informar sobre eventuais alterações nestes Termos de Uso e nas demais Políticas e Termos da RATOEIRA ADS.</p>
              <p>O presente instrumento deve ser interpretado em conjunto com as condições de eventuais ANEXOS, sendo que sempre que houver algum conflito entre o disposto neste CONTRATO, e em ANEXO específico, prevalecerá o disposto no ANEXO, por ser regra especial.</p>
              <p>VOCÊ declara ciência de que poderão ser celebrados Termos Aditivos, com cláusulas específicas em relação a alguns dos serviços prestados pela RATOEIRA ADS, que dependerão do preenchimento de pré-requisitos específicos, os quais serão apresentados conforme o interesse, para leitura e aceitação também por meio eletrônico.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DO OBJETO</h2>
            <p>O presente contrato tem por objeto a contratação e afiliação aos serviços da RATOEIRA ADS, uma plataforma tecnológica especializada na detecção e bloqueio de cliques fraudulentos e afiliados mal-intencionados, garantindo a proteção e otimização do orçamento de tráfego.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DAS DEFINIÇÕES</h2>
            <p className="mb-4">Sempre que as expressões abaixo forem usadas nestes Termos de Uso, elas terão o seguinte significado:</p>
            <ul className="space-y-3">
              {[
                { term: "Chargeback", desc: "Procedimento pelo qual o titular do cartão de crédito não reconhece e/ou contesta, junto ao emissor de seu cartão de crédito, uma despesa efetuada com o cartão de que é titular." },
                { term: "Código de Acesso", desc: "É a senha utilizada por VOCÊ para acessar sua conta virtual;" },
                { term: "Cookie Stuffing", desc: "Extensões de navegador maliciosas, concebidas para inserir a identidade ou dados de identificação de um Usuário Afiliado em detrimento de outro." },
                { term: "Comissões", desc: "Percentual pago sobre as vendas realizadas pelos afiliados. Os valores serão repassados diretamente pela empresa responsável pelo processamento dos pagamentos." },
                { term: "Gateway de pagamentos", desc: "Empresa responsável pelo processamento dos pagamentos das mensalidades dos planos devidos à RATOEIRA ADS, e também pela distribuição das comissões sobre as vendas." },
                { term: "E-BOOK", desc: "Livro digital com informações e atualizações a respeito dos serviços da RATOEIRA ADS que será enviado mensalmente a VOCÊ." },
                { term: "IP do Computador", desc: "Endereço numérico único atribuído ao dispositivo utilizado para acessar a internet." },
                { term: "GCLID – Google Ads", desc: "Parâmetro de rastreamento gerado pelo Google Ads para identificar e monitorar cliques e conversões." },
                { term: "MSCLKID – Bing Ads", desc: "Identificador de rastreamento exclusivo gerado pelo Bing Ads para monitorar o desempenho de anúncios." },
                { term: "Presell", desc: "Página intermediária utilizada para preparar e direcionar o usuário antes da conversão final." },
                { term: "VOCÊ", desc: "São todas as pessoas físicas e/ou jurídicas que utilizam a plataforma ROTEIRA ADS." },
                { term: "Mensalidade", desc: "É o valor cobrado pela RATOEIRA ADS como remuneração pelo serviço pelo uso da plataforma." },
                { term: "Tributos", desc: "São todas as espécies tributárias devidas – impostos, taxas, encargos, contribuições." },
              ].map((item) => (
                <li key={item.term} className="bg-[#161616] p-4 rounded-xl border border-white/5">
                  <strong className="text-brand-primary block mb-1">{item.term}</strong>
                  <span className="text-sm md:text-base">{item.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DO CADASTRO DO USUÁRIO</h2>
            <p className="mb-4">Poderão acessar à RATOEIRA ADS:</p>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span><strong className="text-white">a)</strong> Pessoa Física, em pleno gozo da capacidade civil e sem impedimento legal;</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span><strong className="text-white">b)</strong> Pessoa jurídica, por meio de seu sócio ou representante legal, com capacidade jurídica para contratar.</span>
              </li>
            </ul>
            <div className="space-y-4">
              <p>Para acessar a plataforma, VOCÊ deverá escolher o plano disponível, e informar seu nome completo ou razão social, e-mail, login, número de celular com DDD, e escolher a forma de pagamento.</p>
              <p>Após a confirmação da compra, VOCÊ receberá um e-mail de confirmação da RATOEIRA ADS com um código provisório de acesso. VOCÊ é o único responsável pelas atividades realizadas em sua conta.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DOS PLANOS E VALORES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { name: "Plano Camundongo", price: "R$67,00 por mês", features: "Inclui 3 Ratoeiras, 3 Links de Checkout, 2 Plataformas Conectadas e Ebook Mensal." },
                { name: "Plano Stuart Little", price: "Mensal: R$139,00 | Semestral: R$654,00 | Anual: R$1.188,00", features: "Inclui 50 Ratoeiras, Plataformas Ilimitadas e Ebook Mensal." },
                { name: "Plano Rato", price: "Mensal: R$187,00 | Anual: R$1.597,00", features: "Inclui 50 Ratoeiras, Plataformas Ilimitadas, 5 Ratoeiras Automáticas e 3 Perfis do Google." },
                { name: "Plano Ratazana", price: "Mensal: R$297,00 | Anual: R$2.597,00", features: "Inclui 150 Ratoeiras, Plataformas Ilimitadas, 50 Ratoeiras Automáticas e 10 Perfis do Google." },
              ].map((plan) => (
                <div key={plan.name} className="bg-[#111111] p-6 rounded-2xl border border-white/10 hover:border-brand-primary/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-brand-primary font-semibold mb-3">{plan.price}</p>
                  <p className="text-sm">{plan.features}</p>
                </div>
              ))}
            </div>
            <p className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm">
              A renovação é automática. O cancelamento pode ser feito a qualquer momento, mas não haverá reembolso após 14 dias da compra, conforme o CDC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DAS OBRIGAÇÕES E LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <div className="space-y-4">
              <p>A RATOEIRA ADS não se responsabiliza por falhas ou interrupções causadas por terceiros ou força maior. O serviço depende de infraestruturas como Google Cloud, Digital Ocean, Redis, entre outros.</p>
              <p>A RATOEIRA ADS não garante a eliminação total de fraudes, embora utilize tecnologia avançada para detecção e bloqueio.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DO PRAZO E DA RESCISÃO</h2>
            <p>O contrato vigora conforme o plano escolhido. A RATOEIRA ADS reserva-se o direito de rescindir o contrato em caso de descumprimento das cláusulas, uso indevido de links de afiliado ou práticas fraudulentas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DA PROPRIEDADE INTELECTUAL</h2>
            <p>O domínio, logotipo, código-fonte e algoritmos são de propriedade exclusiva da RATOEIRA ADS. É vedado qualquer tipo de reprodução ou engenharia reversa sem autorização expressa.</p>
          </section>

          <section className="bg-brand-primary/10 p-6 md:p-8 rounded-3xl border border-brand-primary/20">
            <h2 className="text-2xl font-bold text-white mb-4">CANAIS DE ATENDIMENTO</h2>
            <p className="mb-4">Em caso de dúvidas, entre em contato:</p>
            <div className="space-y-2">
              <p><strong className="text-white">Email:</strong> <a href="mailto:suporte@ratoeiraads.com" className="text-brand-primary hover:underline">suporte@ratoeiraads.com</a></p>
              <p><strong className="text-white">WhatsApp:</strong> <a href="https://wa.me/5532998313738" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">(32) 99831-3738</a></p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
