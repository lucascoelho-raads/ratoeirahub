import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://ratoeirapages.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/design-system/",
          "/_next/",
          "/admin/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}