"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Single-element scroll reveal — visible-by-default with IO + 3s fallback.
 * Use anywhere; safe in headless browsers (always reveals).
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          window.setTimeout(() => setShown(true), delay);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 3000);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  const from = {
    up: "translate3d(0, 28px, 0)",
    left: "translate3d(-40px, 0, 0)",
    right: "translate3d(40px, 0, 0)",
    scale: "scale(0.96)",
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0, 0, 0) scale(1)" : from,
        transition:
          "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
