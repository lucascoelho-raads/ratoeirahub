"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  CheckCircle,
  Globe,
  ListChecks,
  MessageSquareText,
  Smartphone,
  TrendingUp,
  Video,
} from "lucide-react";

export type BentoIconKey =
  | "analytics"
  | "decision"
  | "execute"
  | "actions"
  | "trendingUp"
  | "checkCircle"
  | "video"
  | "globe";

export interface BentoItem {
  title: string;
  description: string;
  icon?: ReactNode;
  iconKey?: BentoIconKey;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items?: BentoItem[];
  className?: string;
  hideStatus?: boolean;
  hideCta?: boolean;
}

function BentoItemIcon({ item }: { item: BentoItem }) {
  if (item.icon) return item.icon;

  const className = "h-4 w-4 text-brand-primary";

  switch (item.iconKey) {
    case "analytics":
      return <BarChart3 className={className} />;
    case "decision":
      return <Smartphone className={className} />;
    case "execute":
      return <MessageSquareText className={className} />;
    case "actions":
      return <ListChecks className={className} />;
    case "trendingUp":
      return <TrendingUp className={className} />;
    case "checkCircle":
      return <CheckCircle className={className} />;
    case "video":
      return <Video className={className} />;
    case "globe":
      return <Globe className={className} />;
    default:
      return null;
  }
}

const itemsSample: BentoItem[] = [
  {
    title: "Analytics Dashboard",
    meta: "v2.4.1",
    description: "Real-time metrics with AI-powered insights and predictive analytics",
    iconKey: "trendingUp",
    status: "Live",
    tags: ["Statistics", "Reports", "AI"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Task Manager",
    meta: "84 completed",
    description: "Automated workflow management with priority scheduling",
    iconKey: "checkCircle",
    status: "Updated",
    tags: ["Productivity", "Automation"],
  },
  {
    title: "Media Library",
    meta: "12GB used",
    description: "Cloud storage with intelligent content processing",
    iconKey: "video",
    tags: ["Storage", "CDN"],
    colSpan: 2,
  },
  {
    title: "Global Network",
    meta: "6 regions",
    description: "Multi-region deployment with edge computing",
    iconKey: "globe",
    status: "Beta",
    tags: ["Infrastructure", "Edge"],
  },
];

function BentoGrid({ items = itemsSample, className, hideStatus = false, hideCta = false }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative rounded-2xl overflow-hidden transition-all duration-300",
            "border border-white/10 bg-[#0f0f0f]",
            "hover:border-brand-primary/30 hover:shadow-[0_18px_48px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 will-change-transform",
            item.colSpan === 2 ? "sm:col-span-2" : "col-span-1",
            {
              "border-brand-primary/30 shadow-[0_18px_48px_rgba(0,0,0,0.45)] -translate-y-0.5":
                item.hasPersistentHover,
            }
          )}
        >
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 100% at 50% 100%, color-mix(in srgb, var(--color-brand-primary) 12%, transparent), rgba(0,0,0,0))",
              }}
            />
          </div>

          <div className="relative flex flex-col justify-end h-full p-8 sm:p-10 min-h-[260px]">
            <div className="space-y-4 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/90">
                {item.title}
                {item.meta ? (
                  <span className="ml-2 text-xs text-white/50 font-semibold">{item.meta}</span>
                ) : null}
              </h3>
              <p className="text-sm sm:text-base text-white/40 leading-relaxed max-w-lg">{item.description}</p>
            </div>
          </div>

          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };
