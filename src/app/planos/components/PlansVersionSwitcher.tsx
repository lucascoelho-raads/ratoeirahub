"use client";

import { useEffect, useState } from "react";
import PlansExperience from "./PlansExperience";
import PricingTabs from "./PricingTabs";

type PlansVersion = "previous" | "new";

const NEW_PLANS_RELEASE_AT = Date.parse("2026-10-02T11:30:00-03:00");
const VERSION_CHECK_INTERVAL_MS = 1_000;

function getForcedVersion(search: string): PlansVersion | null {
  const requestedVersion = new URLSearchParams(search).get("versao");

  if (requestedVersion === "anterior") return "previous";
  if (requestedVersion === "nova") return "new";

  return null;
}

function resolvePlansVersion(search: string, now: number): PlansVersion {
  return getForcedVersion(search) ?? (now >= NEW_PLANS_RELEASE_AT ? "new" : "previous");
}

export default function PlansVersionSwitcher() {
  const [version, setVersion] = useState<PlansVersion>("previous");

  useEffect(() => {
    const search = window.location.search;
    const forcedVersion = getForcedVersion(search);

    function syncVersion() {
      setVersion(resolvePlansVersion(search, Date.now()));
    }

    syncVersion();

    if (forcedVersion) return;

    const versionCheckTimer = window.setInterval(syncVersion, VERSION_CHECK_INTERVAL_MS);

    window.addEventListener("focus", syncVersion);
    window.addEventListener("pageshow", syncVersion);
    document.addEventListener("visibilitychange", syncVersion);

    return () => {
      window.clearInterval(versionCheckTimer);
      window.removeEventListener("focus", syncVersion);
      window.removeEventListener("pageshow", syncVersion);
      document.removeEventListener("visibilitychange", syncVersion);
    };
  }, []);

  return version === "new" ? <PlansExperience /> : <PricingTabs />;
}
