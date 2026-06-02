"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, MessageSquare, Layers, BarChart3 } from "lucide-react";

const metrics = [
  {
    value: 16000000,
    suffix: "",
    label: "em conversões rastreadas",
    description: "total acumulado no ecossistema Ratoeira",
    icon: TrendingUp,
    iconColor: "text-yellow-500",
  },
  {
    value: 65000,
    suffix: "+",
    label: "ratoeiras armadas",
    description: "campanhas monitoradas ativamente",
    icon: Layers,
    iconColor: "text-emerald-400",
  },
  {
    value: 76,
    suffix: "%",
    label: "atendimentos em até 10 minutos",
    description: "*no horário de atendimento",
    icon: Users,
    iconColor: "text-blue-400",
  },
  {
    value: 2600,
    suffix: "+",
    label: "anunciantes",
    description: "escalando com dado real",
    icon: MessageSquare,
    iconColor: "text-rose-400",
  },
];

const lineWrapperTops = ["top-[10%]", "top-[30%]", "top-[50%]", "top-[70%]", "top-[90%]"];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  const display =
    target >= 1000
      ? count >= 1000
        ? `${Math.floor(count / 1000)}${count % 1000 === 0 ? "" : "." + Math.floor((count % 1000) / 100)}K`
        : count.toString()
      : count.toString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const featured = metrics[0];
  const secondary = metrics.slice(1);

  return (
    <section
      ref={sectionRef}
      id="empresa"
      className="relative py-16 md:py-24 overflow-hidden bg-black text-white"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,149,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,149,0,0.07) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "metricsGridMove 20s linear infinite",
        }}
      />
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[1] pointer-events-none">
        {lineWrapperTops.map((topClass, index) => (
          <div key={topClass} className={`absolute w-full h-[100px] ${topClass}`}>
            <div className="w-full h-0.5 relative overflow-hidden">
              <div
                className={`absolute top-0 w-full h-full ${
                  index % 2 !== 0
                    ? "animate-[metricsLineMove_4s_linear_infinite] [animation-direction:reverse] [animation-delay:2s]"
                    : "animate-[metricsLineMove_4s_linear_infinite]"
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #ff9500 20%, #ffd700 50%, #ff9500 80%, transparent 100%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] z-[5] pointer-events-none">
        <svg
          className="absolute top-1/2 -translate-y-1/2 left-[-150px] w-[120px] h-[60px] animate-[metricsCornerLineAnimation_6s_linear_infinite]"
          viewBox="0 0 120 60"
          stroke="#ff9500"
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
        >
          <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
        </svg>
        <svg
          className="absolute top-1/2 -translate-y-1/2 right-[-150px] w-[120px] h-[60px] transform scale-x-[-1] animate-[metricsCornerLineAnimation_6s_linear_infinite] [animation-delay:3s]"
          viewBox="0 0 120 60"
          stroke="#ff9500"
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
        >
          <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-200 text-sm font-medium">
            <BarChart3 className="w-4 h-4" /> Resultados comprovados
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white leading-tight text-balance max-w-4xl mx-auto">
            <span className="block">
              <span style={{ color: "var(--color-brand-primary)" }}>Números</span> que falam mais alto
            </span>
            <span className="block">que qualquer discurso</span>
          </h2>
        </motion.div>

        {/* Featured metric — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 relative bg-white/10 hover:bg-white/15 rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/25 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 5xl:gap-12 6xl:gap-16">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/15 flex items-center justify-center shrink-0">
                <featured.icon className="w-7 h-7 text-yellow-500" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">{featured.label}</p>
                <p className="text-yellow-200/70 text-sm mt-0.5">{featured.description}</p>
              </div>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white tabular-nums md:text-right">
              <Counter target={featured.value} suffix="" />
              <span className="text-yellow-500">{featured.suffix}</span>
            </div>
          </div>
        </motion.div>

        {/* Secondary metrics — 3 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 5xl:grid-cols-4 6xl:grid-cols-5 gap-6 5xl:gap-8 6xl:gap-10">
          {secondary.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <metric.icon className={`w-5 h-5 ${metric.iconColor}`} />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                  <Counter target={metric.value} suffix="" />
                  <span className="text-yellow-500">{metric.suffix}</span>
                </div>
              </div>
              <p className="text-white font-semibold text-base leading-tight">{metric.label}</p>
              <p className="text-gray-400 text-sm mt-1">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
