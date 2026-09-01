declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(event: string) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event);
  }
}
