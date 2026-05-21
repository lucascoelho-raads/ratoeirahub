"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, MessageSquare, Layers } from "lucide-react";

const metrics = [
  {
    value: 16000000,
    suffix: "",
    label: "em conversões rastreadas",
    description: "total acumulado",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    value: 65000,
    suffix: "+",
    label: "ratoeiras armadas",
    description: "campanhas monitoradas",
    icon: Layers,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    value: 120000,
    suffix: "+",
    label: "visitas monitoradas",
    description: "por dia",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    value: 2600,
    suffix: "+",
    label: "anunciantes",
    description: "escalando com dado real",
    icon: MessageSquare,
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
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
      // Ease out cubic
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-200 text-sm font-medium">
            📊 Resultados comprovados
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            <span className="block">
              <span style={{ color: "var(--color-brand-primary)" }}>Números</span> Que Falam Mais Alto
            </span>
            <span className="block">Que Qualquer Discurso</span>
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-white/10 hover:bg-white/15 rounded-3xl p-8 border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${metric.bg} flex items-center justify-center mb-6`}>
                <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
              </div>

              {/* Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 tabular-nums text-center sm:text-left">
                {metric.value === 1 ? (
                  <span>
                    1<span className="text-yellow-500">B+</span>
                  </span>
                ) : (
                  <Counter target={metric.value} suffix="" />
                )}
                {metric.value !== 1 && (
                  <span className="text-yellow-500">{metric.suffix}</span>
                )}
              </div>

              {/* Label */}
              <p className="text-white font-bold text-lg leading-tight text-center sm:text-left">{metric.label}</p>
              <p className="text-yellow-200/70 text-sm mt-1 text-center sm:text-left">{metric.description}</p>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes metricsLineMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes metricsCornerLineAnimation {
          0% {
            stroke-dashoffset: 0;
          }
          25% {
            stroke-dashoffset: 100;
          }
          50% {
            stroke-dashoffset: 200;
          }
          75% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 400;
          }
        }
        @keyframes metricsGridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
      `}</style>
    </section>
  );
}
