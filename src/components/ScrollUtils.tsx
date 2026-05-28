"use client";
import { useEffect, useState } from "react";

export function ScrollProgress({ color = "#1F9A9A" }: { color?: string }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none">
      <div
        className="h-full origin-left"
        style={{ width: `${pct}%`, background: color, boxShadow: `0 0 12px ${color}` }}
      />
    </div>
  );
}

export function BackToTop({
  bg = "#1F9A9A",
  ink = "#0E0E10",
  threshold = 600,
}: {
  bg?: string;
  ink?: string;
  threshold?: number;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      style={{ background: bg, color: ink }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
