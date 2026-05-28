import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div data-reveal className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#1F9A9A] font-mono">
            {"// "}clientes verificados Google
          </span>
          <h2 className="font-display text-5xl lg:text-6xl mt-4">
            5 <span className="italic text-[#A6A29A]">estrelas</span>, e merecidas.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              data-reveal
              data-reveal-delay={String(i * 150)}
              className="border border-[#2A2A2F] p-8 lg:p-10 rounded-2xl flex flex-col gap-6 hover:border-[#1F9A9A] transition-colors group"
            >
              <div className="flex gap-1 text-[#1F9A9A]">
                {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
              </div>
              <p className="font-display text-2xl leading-snug text-[#F2F0EC]">
                &ldquo;{t.body}&rdquo;
              </p>
              <div className="mt-auto pt-6 border-t border-[#2A2A2F] flex items-center justify-between">
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-[#A6A29A]">{t.place}</div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A6A29A]">Google</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
