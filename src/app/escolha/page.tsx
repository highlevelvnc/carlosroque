import type { Metadata } from "next";
import Image from "next/image";
import { COMPANY, buildWhatsappUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Escolha a sua versão · Carlos Roque Pinturas",
  description: "Três propostas de site. Escolha a que mais lhe fala.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
};

const V1_URL = "/";
const V2_URL = "/v2";
const V3_URL = "/v3";

const VERSIONS = [
  {
    tag: "Versão 01",
    name: "Atelier Showroom",
    subtitle: "Dark · editorial · interactivo",
    description:
      "Site premium em dark mode com tipografia serif e um simulador onde escolhe a cor da parede e vê o resultado em tempo real. O WhatsApp envia já a cor formatada. Único no nicho de pintura em Portugal.",
    bullets: [
      "Simulador de cor interactivo",
      "WhatsApp com a cor escolhida",
      "Antes/depois com slider",
      "Scroll horizontal nas obras",
    ],
    palette: ["#0E0E10", "#1F9A9A", "#C9A961", "#F2F0EC"],
    paletteNames: ["Off-black", "Teal", "Brass", "Marfim"],
    iframeUrl: V1_URL,
    liveUrl: V1_URL,
    waMessage: `Olá Carlos, gostei da versão 01 (Atelier Showroom) — a do simulador de cor em dark mode. Queria avançar com esta. Quando podemos falar?`,
    accent: "#1F9A9A",
    badge: "interactivo",
  },
  {
    tag: "Versão 02",
    name: "Galeria Light",
    subtitle: "Light · photo-heavy · clean",
    description:
      "Site arejado, fundo marfim quente, fotos das obras gigantes em grid editorial assimétrico. Tom calmo e profissional, perfeito para clientes que confiam no trabalho mais do que em truques visuais.",
    bullets: [
      "Hero full-screen com foto real",
      "Grid editorial de obras",
      "Tom calmo e profissional",
      "Apelo a clientes 35-60",
    ],
    palette: ["#F5F2EC", "#0E0E10", "#156B6B", "#1F9A9A"],
    paletteNames: ["Marfim", "Off-black", "Teal profundo", "Teal claro"],
    iframeUrl: V2_URL,
    liveUrl: V2_URL,
    waMessage: `Olá Carlos, gostei da versão 02 (Galeria Light) — a clara com fotos em destaque. Queria avançar com esta. Quando podemos falar?`,
    accent: "#156B6B",
    badge: "fotográfico",
  },
  {
    tag: "Versão 03",
    name: "Navy Corporate",
    subtitle: "Azul profundo · sans pesada · confiança",
    description:
      "Site em navy profundo (cor da logo) com sans condensada Inter Tight e grid arquitectónico. Posiciona-o como empresa de pintura sólida — perfeito para apelar a B2B (escritórios, condomínios) sem perder os particulares.",
    bullets: [
      "Navy profundo + accent teal",
      "Sans pesada de confiança",
      "Banda KPI com números chave",
      "CTAs em mostarda quente",
    ],
    palette: ["#0F2433", "#16314A", "#4FB8C9", "#E8B86A"],
    paletteNames: ["Navy", "Navy raised", "Teal", "Mostarda"],
    iframeUrl: V3_URL,
    liveUrl: V3_URL,
    waMessage: `Olá Carlos, gostei da versão 03 (Navy Corporate) — a do azul profundo. Queria avançar com esta. Quando podemos falar?`,
    accent: "#4FB8C9",
    badge: "corporate",
  },
];

export default function EscolhaPage() {
  return (
    <main className="min-h-screen bg-[#0E0E10] text-[#F2F0EC]">
      {/* Hero */}
      <section className="relative pt-16 sm:pt-24 lg:pt-32 pb-12 lg:pb-20 px-5 sm:px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #1F9A9A 0%, transparent 60%)" }}
        />
        <div className="max-w-[1600px] mx-auto relative">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Image src="/carlosroque.png" alt={COMPANY.name} width={320} height={160} className="h-12 sm:h-14 w-auto object-contain" style={{ filter: "brightness(1.35) contrast(1.05) drop-shadow(0 2px 12px rgba(79,184,201,0.4))" }} priority />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A6A29A] border-l border-[#2A2A2F] pl-3">
              apresentação · privado
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#1F9A9A] font-mono">
                {"// "}três propostas · uma decisão
              </span>
              <h1
                className="font-display mt-3 leading-[0.92]"
                style={{ fontSize: "clamp(2.5rem, 11vw, 8rem)" }}
              >
                Carlos, <span className="italic text-[#A6A29A]">qual</span> levas?
              </h1>
            </div>
            <p className="lg:col-span-4 text-[#A6A29A] text-base sm:text-lg leading-relaxed">
              Três direcções <span className="text-[#1F9A9A]">novas</span>, todas com as suas fotos reais. Veja-as em baixo e toque em{" "}
              <span className="text-[#F2F0EC] font-medium">&ldquo;Escolho esta&rdquo;</span> para enviar a sua escolha pelo WhatsApp.
            </p>
          </div>

          <div className="hairline mt-10 sm:mt-14 pt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] font-mono text-[#A6A29A]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F9A9A] animate-pulse" />
              previews ao vivo
            </span>
            <span className="hidden sm:inline">·</span>
            <span>toque para abrir</span>
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="px-4 sm:px-6 lg:px-12 pb-20 lg:pb-32">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
          {VERSIONS.map((v, i) => (
            <article
              key={v.name}
              className="rounded-2xl border border-[#2A2A2F] overflow-hidden bg-[#16161A] flex flex-col"
            >
              {/* card header */}
              <div className="p-5 sm:p-6 lg:p-8 border-b border-[#2A2A2F]">
                <div className="flex items-start justify-between gap-3 mb-4 lg:mb-6">
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A6A29A]">{v.tag}</div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-1.5">{v.name}</h2>
                    <div className="text-xs sm:text-sm text-[#A6A29A] mt-1.5">{v.subtitle}</div>
                  </div>
                  <span
                    className="flex-shrink-0 text-[9px] uppercase tracking-[0.18em] font-mono px-2.5 py-1 rounded-full border whitespace-nowrap"
                    style={{ borderColor: v.accent, color: v.accent }}
                  >
                    {v.badge}
                  </span>
                </div>
                <p className="text-sm text-[#A6A29A] leading-relaxed">{v.description}</p>
              </div>

              {/* iframe preview */}
              <div className="relative bg-[#0E0E10] border-b border-[#2A2A2F]">
                <div className="px-3 py-2 flex items-center gap-1.5 border-b border-[#2A2A2F]">
                  <span className="w-2 h-2 rounded-full bg-[#3A3A3F]" />
                  <span className="w-2 h-2 rounded-full bg-[#3A3A3F]" />
                  <span className="w-2 h-2 rounded-full bg-[#3A3A3F]" />
                  <span className="ml-2 font-mono text-[9px] sm:text-[10px] text-[#A6A29A] truncate">
                    carlosroquepinturas.pt{v.iframeUrl === "/" ? "" : v.iframeUrl}
                  </span>
                </div>
                <div className="relative w-full h-[520px] lg:h-[440px] overflow-hidden">
                  <iframe
                    src={v.iframeUrl}
                    title={v.name}
                    className="block w-full h-full border-0 lg:absolute lg:top-0 lg:left-0 lg:w-[200%] lg:h-[200%] lg:origin-top-left lg:scale-50"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>

              {/* features + palette + CTAs */}
              <div className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A29A] font-mono mb-3">o que tem</div>
                  <ul className="space-y-2.5">
                    {v.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: v.accent }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A29A] font-mono mb-3">paleta</div>
                  <div className="flex flex-wrap gap-2">
                    {v.palette.map((c, idx) => (
                      <div
                        key={c}
                        className="flex items-center gap-2 bg-[#0E0E10] border border-[#2A2A2F] rounded-full pl-1 pr-3 py-1"
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-black/30 flex-shrink-0"
                          style={{ background: c }}
                        />
                        <span className="text-[10px] text-[#A6A29A] font-mono">{v.paletteNames[idx]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs — mobile primary full-width */}
                <div className="mt-auto flex flex-col gap-2.5">
                  <a
                    href={buildWhatsappUrl(v.waMessage)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full font-semibold text-sm transition-transform active:scale-[0.98] hover:-translate-y-0.5"
                    style={{ background: v.accent, color: "#0E0E10" }}
                  >
                    Escolho esta →
                  </a>
                  <a
                    href={v.liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm border border-[#2A2A2F] text-[#A6A29A] hover:text-[#F2F0EC] hover:border-[#A6A29A] transition"
                  >
                    Abrir em ecrã cheio ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* footer note */}
        <div className="max-w-[1600px] mx-auto mt-12 lg:mt-20 pt-8 lg:pt-10 border-t border-[#2A2A2F] grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-[#A6A29A]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#1F9A9A] font-mono mb-2">decidiu?</div>
            <p>Toque no botão verde da versão escolhida. Abre o WhatsApp directamente com a mensagem certa — basta enviar.</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#1F9A9A] font-mono mb-2">não tem a certeza?</div>
            <p>
              Sem stress.{" "}
              <a
                href={buildWhatsappUrl("Olá, vi as três versões mas tenho dúvidas. Podemos falar?")}
                target="_blank"
                rel="noopener"
                className="text-[#F2F0EC] underline underline-offset-4"
              >
                Fale connosco
              </a>{" "}
              e tiramos qualquer dúvida.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#1F9A9A] font-mono mb-2">e depois?</div>
            <p>48h após a sua escolha: domínio próprio, email profissional, e site online.</p>
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-4 left-4 right-4 lg:hidden z-30">
        <a
          href={buildWhatsappUrl("Olá, vi as três propostas de site. Podemos falar?")}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-semibold py-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Falar com o Carlos
        </a>
      </div>
    </main>
  );
}
