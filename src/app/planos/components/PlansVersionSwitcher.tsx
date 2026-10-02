"use client";

import { useEffect, useState } from "react";
import PlansExperience from "./PlansExperience";
import PricingTabs from "./PricingTabs";

type PlansVersion = "previous" | "new";

const NEW_PLANS_RELEASE_AT = Date.parse("2026-10-03T00:00:00-03:00");
const MAX_TIMEOUT_MS = 2_147_483_647;

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
    let releaseTimer: number | null = null;

    function clearReleaseTimer() {
      if (releaseTimer === null) return;
      window.clearTimeout(releaseTimer);
      releaseTimer = null;
    }

    function syncVersion() {
      clearReleaseTimer();

      const now = Date.now();
      const nextVersion = resolvePlansVersion(search, now);
      setVersion(nextVersion);

      if (forcedVersion || nextVersion === "new") return;

      const timeUntilRelease = Math.max(NEW_PLANS_RELEASE_AT - now, 0);
      releaseTimer = window.setTimeout(
        syncVersion,
        Math.min(timeUntilRelease, MAX_TIMEOUT_MS),
      );
    }

    syncVersion();
    window.addEventListener("focus", syncVersion);
    window.addEventListener("pageshow", syncVersion);
    document.addEventListener("visibilitychange", syncVersion);

    return () => {
      clearReleaseTimer();
      window.removeEventListener("focus", syncVersion);
      window.removeEventListener("pageshow", syncVersion);
      document.removeEventListener("visibilitychange", syncVersion);
    };
  }, []);

  return version === "new" ? <PlansExperience /> : <PricingTabs />;
}

