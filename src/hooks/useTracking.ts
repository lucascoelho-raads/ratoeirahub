"use client";

import { useEffect, useRef } from "react";

interface TrackingParams {
  src?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

function getTrackingParams(): TrackingParams {
  if (typeof window === "undefined") return {};
  
  const params = new URLSearchParams(window.location.search);
  const src = params.get("src") || params.get("sck");
  
  return {
    src: src || undefined,
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_term: params.get("utm_term") || undefined,
    utm_content: params.get("utm_content") || undefined,
  };
}

function buildTrackingUrl(href: string, trackingParams: TrackingParams): string {
  if (!href || href === "#") return href;
  
  try {
    const url = new URL(href, window.location.origin);
    
    // Don't add tracking to external URLs or URLs that already have src param
    if (!url.pathname.startsWith("/") || url.searchParams.has("src")) {
      return href;
    }
    
    // Add tracking params
    Object.entries(trackingParams).forEach(([key, value]) => {
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });
    
    return url.toString();
  } catch {
    return href;
  }
}

export function useTracking() {
  const trackingParamsRef = useRef<TrackingParams>({});
  
  useEffect(() => {
    // Get tracking params on mount (client-side only)
    trackingParamsRef.current = getTrackingParams();
    
    // If no src/sck params exist, don't do anything
    if (!trackingParamsRef.current.src && !trackingParamsRef.current.utm_source) {
      return;
    }
    
    // Intercept link clicks to add tracking params
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }
      
      const newHref = buildTrackingUrl(href, trackingParamsRef.current);
      
      if (newHref !== href) {
        event.preventDefault();
        window.location.href = newHref;
      }
    };
    
    document.addEventListener("click", handleClick, true);
    
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);
}
