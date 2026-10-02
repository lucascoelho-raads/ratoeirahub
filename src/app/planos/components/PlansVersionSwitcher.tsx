"use client";

import { useEffect, useState } from "react";
import PlansExperience from "./PlansExperience";
import PricingTabs from "./PricingTabs";

type PlansVersion = "previous" | "new";

const NEW_PLANS_RELEASE_AT = Date.parse("2026-10-02T11:30:00-03:00");
const MAX_TIMEOUT_DELAY = 2_147_483_647;

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

    const delayUntilRelease = Math.max(0, NEW_PLANS_RELEASE_AT - Date.now());
    const releaseTimer = window.setTimeout(
      syncVersion,
      Math.min(delayUntilRelease, MAX_TIMEOUT_DELAY),
    );

    window.addEventListener("focus", syncVersion);
    document.addEventListener("visibilitychange", syncVersion);

    return () => {
      window.clearTimeout(releaseTimer);
      window.removeEventListener("focus", syncVersion);
      document.removeEventListener("visibilitychange", syncVersion);
    };
  }, []);

  return version === "new" ? <PlansExperience /> : <PricingTabs />;
}
