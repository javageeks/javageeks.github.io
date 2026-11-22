import { useEffect, useState } from "react";

/**
 * Returns `false` on the server and during the first client render (so the
 * client's first commit matches the SSR output and React's hydration doesn't
 * warn), then `true` after mount.
 *
 * Used to defer entrance animations until after hydration so the pre-rendered
 * HTML is visible to crawlers, screenshot tools, and no-JS visitors instead
 * of being hidden behind `opacity: 0`.
 */
export function useIsHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}
