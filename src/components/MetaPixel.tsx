"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * SPA route-change PageView only.
 * Base pixel (stub + fbevents.js + init) lives in app/layout.tsx so it loads
 * from a Server Component via next/script — same pattern as GA.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Initial PageView is fired by the base script in layout; only track SPA navigations here.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
