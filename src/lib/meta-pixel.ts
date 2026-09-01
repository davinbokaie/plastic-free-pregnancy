declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

/** Fire immediately if fbq is already available. */
export function trackMetaEvent(event: string): boolean {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event);
    return true;
  }
  return false;
}

/**
 * Fire once fbq is available (Meta Pixel script may load after first paint).
 * Returns a cleanup function to cancel pending retries (e.g. from useEffect).
 */
export function trackMetaEventWhenReady(
  event: string,
  maxAttempts = 50,
  intervalMs = 100
): () => void {
  if (typeof window === "undefined") return () => {};

  if (trackMetaEvent(event)) return () => {};

  let attempts = 0;
  const id = window.setInterval(() => {
    attempts += 1;
    if (trackMetaEvent(event) || attempts >= maxAttempts) {
      window.clearInterval(id);
    }
  }, intervalMs);

  return () => window.clearInterval(id);
}
