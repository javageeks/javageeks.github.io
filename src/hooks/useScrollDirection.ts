import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

/**
 * Reports the current vertical scroll direction and position,
 * used to show/hide or style the navigation bar on scroll.
 */
export function useScrollDirection(): { direction: ScrollDirection; scrolled: boolean } {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY > lastY.current ? "down" : "up");
      setScrolled(currentY > 8);
      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { direction, scrolled };
}
