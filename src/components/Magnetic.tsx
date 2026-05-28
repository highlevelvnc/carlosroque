"use client";
import { useEffect, useRef } from "react";

/**
 * Magnetic wrapper — child element gently follows the cursor when nearby.
 * Use for primary CTAs. Disabled on touch and reduced-motion.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(hover: none)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let active = false;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(rect.width, rect.height) * 1.3;
      if (dist < radius) {
        active = true;
        const k = (1 - dist / radius) * strength;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${dx * k}px, ${dy * k}px, 0)`;
        });
      } else if (active) {
        active = false;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = "translate3d(0, 0, 0)";
        });
      }
    };

    el.style.transition = "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)";
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <span ref={ref} className={className} style={{ display: "inline-block", willChange: "transform" }}>
      {children}
    </span>
  );
}
