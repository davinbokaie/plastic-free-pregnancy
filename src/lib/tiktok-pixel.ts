declare global {
  interface Window {
    ttq?: {
      track: (...args: unknown[]) => void;
      page: (...args: unknown[]) => void;
      load: (...args: unknown[]) => void;
    };
    TiktokAnalyticsObject?: string;
  }
}

/** Fire immediately if ttq is already available. */
export function trackTikTokEvent(event: string): boolean {
  if (typeof window !== "undefined" && window.ttq) {
    window.ttq.track(event);
    return true;
  }
  return false;
}

/**
 * Fire once ttq is available (events.js may load after first paint).
 * Returns a cleanup function to cancel pending retries (e.g. from useEffect).
 */
export function trackTikTokEventWhenReady(
  event: string,
  maxAttempts = 50,
  intervalMs = 100
): () => void {
  if (typeof window === "undefined") return () => {};

  if (trackTikTokEvent(event)) return () => {};

  let attempts = 0;
  const id = window.setInterval(() => {
    attempts += 1;
    if (trackTikTokEvent(event) || attempts >= maxAttempts) {
      window.clearInterval(id);
    }
  }, intervalMs);

  return () => window.clearInterval(id);
}
