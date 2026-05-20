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

function BentoGrid({ items = itemsSample, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative rounded-2xl overflow-hidden transition-all duration-300",
            "border border-white/10 bg-black/30",
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:4px_4px]" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 0%, color-mix(in srgb, var(--color-brand-primary) 16%, transparent), rgba(0,0,0,0))",
              }}
            />
          </div>

          <div className="relative flex flex-col gap-3 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center bg-white/5 transition-colors duration-300 group-hover:bg-brand-primary/15">
                <BentoItemIcon item={item} />
              </div>
              <span
                className={cn(
                  "text-[11px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm",
                  "bg-white/10 text-white/70 transition-colors duration-300",
                  "group-hover:bg-brand-primary/15 group-hover:text-brand-primary"
                )}
              >
                {item.status ?? "Ativo"}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-black tracking-tight text-[15px] text-white">
                {item.title}
                {item.meta ? (
                  <span className="ml-2 text-xs text-white/50 font-semibold">{item.meta}</span>
                ) : null}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-medium">{item.description}</p>
            </div>

            <div className="flex items-end justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-brand-primary/90 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.cta ?? "Ver →"}
              </span>
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
