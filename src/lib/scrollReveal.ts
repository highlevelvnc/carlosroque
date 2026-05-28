"use client";
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => {
      if (!el.hasAttribute("data-revealed")) el.setAttribute("data-revealed", "false");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay || 0);
            window.setTimeout(() => el.setAttribute("data-revealed", "true"), delay);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    els.forEach((el) => io.observe(el));

    const fallback = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('[data-revealed="false"]')
        .forEach((el) => el.setAttribute("data-revealed", "true"));
    }, 3500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}
