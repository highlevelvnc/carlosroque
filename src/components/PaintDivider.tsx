export default function PaintDivider({
  color = "#1F9A9A",
  bg = "transparent",
  flip = false,
}: {
  color?: string;
  bg?: string;
  flip?: boolean;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: bg, height: "100px", transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1600 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="pdGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="20%" stopColor={color} stopOpacity="0.8" />
            <stop offset="80%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <filter id="pdBlur"><feGaussianBlur stdDeviation="0.4" /></filter>
        </defs>

        {/* Main brush stroke */}
        <path
          d="M -10 55 Q 200 30 400 50 T 800 52 T 1200 48 T 1620 56"
          stroke="url(#pdGrad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          filter="url(#pdBlur)"
        />
        {/* Softer parallel stroke */}
        <path
          d="M -10 62 Q 250 48 450 60 T 900 64 T 1300 58 T 1620 62"
          stroke={color}
          strokeOpacity="0.25"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Subtle paint droplets */}
        <circle cx="180" cy="68" r="1.5" fill={color} opacity="0.5" />
        <circle cx="640" cy="42" r="1" fill={color} opacity="0.4" />
        <circle cx="980" cy="70" r="1.2" fill={color} opacity="0.45" />
        <circle cx="1380" cy="48" r="1" fill={color} opacity="0.35" />
      </svg>
    </div>
  );
}
