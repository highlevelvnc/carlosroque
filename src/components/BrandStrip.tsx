const BRANDS = ["CIN", "Robbialac", "Sotinco", "Cinco Tintas", "Sikkens", "Bondex", "CIN", "Robbialac", "Sotinco", "Cinco Tintas", "Sikkens", "Bondex"];

export default function BrandStrip({
  bg = "#0E0E10",
  text = "#A6A29A",
  accent = "#1F9A9A",
  border = "#2A2A2F",
  display,
  label = "tintas que usamos",
}: {
  bg?: string;
  text?: string;
  accent?: string;
  border?: string;
  display?: React.CSSProperties;
  label?: string;
}) {
  return (
    <section className="overflow-hidden border-y" style={{ background: bg, borderColor: border }}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
        <div className="lg:col-span-1">
          <div className="text-[10px] uppercase tracking-[0.25em] font-mono" style={{ color: accent }}>
            {"// "}{label}
          </div>
          <div className="text-sm mt-1" style={{ color: text }}>Marcas premium · garantia escrita</div>
        </div>

        <div className="lg:col-span-3 overflow-hidden relative">
          <div
            className="flex marquee-track items-center gap-12 whitespace-nowrap"
            style={{ animationDuration: "30s" }}
          >
            {BRANDS.map((b, i) => (
              <span key={`${b}-${i}`} className="flex items-center gap-12 flex-shrink-0">
                <span
                  className="text-2xl lg:text-4xl tracking-tight"
                  style={{ ...display, color: text, fontFamily: display?.fontFamily || undefined }}
                >
                  {b}
                </span>
                <span className="text-xl" style={{ color: accent }}>✦</span>
              </span>
            ))}
          </div>
          {/* fade edges */}
          <div className="absolute inset-y-0 left-0 w-12 lg:w-20 pointer-events-none" style={{ background: `linear-gradient(to right, ${bg}, transparent)` }} />
          <div className="absolute inset-y-0 right-0 w-12 lg:w-20 pointer-events-none" style={{ background: `linear-gradient(to left, ${bg}, transparent)` }} />
        </div>
      </div>
    </section>
  );
}
