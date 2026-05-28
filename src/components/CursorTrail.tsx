"use client";
import { useEffect } from "react";

export default function CursorTrail({ color = "#1F9A9A" }: { color?: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Disable on touch devices and reduced motion
    const isTouch = matchMedia("(hover: none)").matches;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reducedMotion) return;

    const layer = document.createElement("div");
    layer.style.cssText =
      "position:fixed;inset:0;pointer-events:none;z-index:55;overflow:hidden;mix-blend-mode:screen";
    document.body.appendChild(layer);

    let raf = 0;
    let lastX = 0,
      lastY = 0,
      lastT = 0;

    const spawn = (x: number, y: number, size: number) => {
      const dot = document.createElement("span");
      dot.style.cssText = `position:absolute;left:${x - size / 2}px;top:${y - size / 2}px;width:${size}px;height:${size}px;border-radius:50%;background:${color};opacity:0.45;transition:opacity 900ms ease-out, transform 900ms ease-out;will-change:transform,opacity;filter:blur(2px)`;
      layer.appendChild(dot);
      requestAnimationFrame(() => {
        dot.style.opacity = "0";
        dot.style.transform = `translate(${(Math.random() - 0.5) * 14}px, ${(Math.random() - 0.5) * 14}px) scale(0.4)`;
      });
      setTimeout(() => dot.remove(), 950);
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = now - lastT;
      if (dt < 22) return; // throttle
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);
      if (dist < 4) return;
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const size = Math.min(18, 6 + dist / 6);
        spawn(e.clientX, e.clientY, size);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      layer.remove();
    };
  }, [color]);

  return null;
}
