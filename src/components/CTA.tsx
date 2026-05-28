import { WHATSAPP_URL, COMPANY } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contacto" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5B2E] via-[#C8623E] to-[#1B2A41]" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #000 0%, transparent 60%), radial-gradient(circle at 80% 70%, #fff 0%, transparent 60%)",
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <span data-reveal className="text-[10px] uppercase tracking-[0.3em] text-[#0E0E10] font-mono">
          {"// "}próximo passo
        </span>
        <h2 data-reveal data-reveal-delay="100" className="font-display text-[clamp(3rem,9vw,9rem)] mt-6 text-[#0E0E10] leading-[0.9]">
          Pronto para
          <span className="italic block">pintar a tua casa?</span>
        </h2>
        <p data-reveal data-reveal-delay="250" className="text-[#0E0E10]/80 text-lg lg:text-xl mt-8 max-w-xl mx-auto">
          Envia uma mensagem agora. Respondemos em menos de 4 horas em dia útil. Visita à tua casa em 48h, orçamento por escrito no mesmo dia.
        </p>
        <div data-reveal data-reveal-delay="400" className="mt-12 flex flex-wrap gap-4 justify-center items-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-3 bg-[#0E0E10] text-[#F2F0EC] px-8 py-5 rounded-full font-medium hover:bg-[#16161A] transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp · {COMPANY.phone}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="text-[#0E0E10] underline underline-offset-4">
            ou {COMPANY.email}
          </a>
        </div>
      </div>
    </section>
  );
}
