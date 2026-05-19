"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { motion, useInView } from "framer-motion";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

const avatarFromInitial = (initial: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><rect width="100%" height="100%" rx="28" fill="#EA580C"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" font-weight="700" fill="#FFFFFF">${initial}</text></svg>`,
  )}`;

const testimonials: Testimonial[] = [
  {
    img: avatarFromInitial("R"),
    quote:
      "Nas primeiras semanas já vi 30% a mais de conversões subindo pro Google. Consegui otimizar a campanha que estava parada há semanas.",
    name: "Roberto Santiago",
    role: "Mentor de Tráfego",
  },
  {
    img: avatarFromInitial("C"),
    quote:
      "Economizei mais de R$X no primeiro mês só com o bloqueio. Isso já pagou a ferramenta.",
    name: "Carla Mendes",
    role: "Anunciante Top",
  },
  {
    img: avatarFromInitial("T"),
    quote:
      "Gerencio X clientes num único painel. O que levava horas agora vejo em minutos.",
    name: "Thiago Ferreira",
    role: "Gestor de Tráfego",
  },
  {
    img: avatarFromInitial("J"),
    quote:
      "O Meta parou de jogar verba em público errado. O CPL caiu e o ROAS subiu em menos de 30 dias.",
    name: "Juliana Costa",
    role: "Criadora de Cursos",
  },
  {
    img: avatarFromInitial("M"),
    quote:
      "Pela primeira vez eu sabia exatamente de onde vinha cada venda. Dobrei o investimento com confiança — e o resultado acompanhou.",
    name: "Marcos Vinícius",
    role: "Investidor em Tráfego",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((current) => (current + 1 === testimonials.length ? 0 : current + 1));
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [autorotate]);

  const heightFix = () => {
    if (testimonialsRef.current?.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-[#050505]" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-badge bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold">
            💬 Depoimentos Reais
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Quem{" "}
            <span className="text-orange-600">domina o tráfego</span>, confia na Ratoeira
          </h2>
          <p className="text-white/70 text-xl max-w-xl mx-auto">
            Veja o que anunciantes de Google Ads, Meta Ads e gestores de tráfego dizem sobre operar com dado real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-3xl text-center"
        >
          <div className="relative h-32">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-orange-600/25 before:via-orange-600/5 before:via-25% before:to-orange-600/0 before:to-75%">
              <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                {testimonials.map((testimonial, index) => (
                  <Transition
                    as="div"
                    key={index}
                    show={active === index}
                    className="absolute inset-0 -z-10 h-full"
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -rotate-[60deg]"
                    enterTo="opacity-100 rotate-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 rotate-0"
                    leaveTo="opacity-0 rotate-[60deg]"
                    beforeEnter={heightFix}
                  >
                    <Image
                      className="relative left-1/2 top-11 -translate-x-1/2 rounded-full border-2 border-orange-200"
                      src={testimonial.img}
                      width={56}
                      height={56}
                      alt={testimonial.name}
                    />
                  </Transition>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
            <div className="relative flex flex-col" ref={testimonialsRef}>
              {testimonials.map((testimonial, index) => (
                <Transition
                  key={index}
                  show={active === index}
                  enter="transition ease-in-out duration-500 delay-200 order-first"
                  enterFrom="opacity-0 -translate-x-4"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-out duration-300 delay-300 absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-4"
                  beforeEnter={heightFix}
                >
                  <div className="text-2xl font-bold text-orange-600 before:content-['\201C'] after:content-['\201D']">
                    {testimonial.quote}
                  </div>
                </Transition>
              ))}
            </div>
          </div>

          <div className="-m-1.5 flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-badge px-3 py-1.5 text-xs shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-orange-300 ${
                  active === index
                    ? "bg-orange-600 text-white shadow-orange-950/10"
                    : "bg-white text-orange-600 hover:bg-orange-100"
                }`}
                onClick={() => {
                  setActive(index);
                  setAutorotate(false);
                }}
              >
                <span>{testimonial.name}</span>{" "}
                <span className={active === index ? "text-orange-200" : "text-orange-300"}>-</span>{" "}
                <span>{testimonial.role}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
