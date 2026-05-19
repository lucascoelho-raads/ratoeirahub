"use client";

import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

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

function BentoGridDemo() {
  return <BentoGrid items={itemsSample} />;
}

export { BentoGridDemo };
