"use client";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  suffix = "",
  duration = 1600,
  className = "",
  style,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return;
        fired.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setV(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
          else setV(to);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {v}{suffix}
    </span>
  );
}
