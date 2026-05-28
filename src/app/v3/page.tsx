import Image from "next/image";
import Link from "next/link";
import {
  COMPANY, NAV_LINKS, PROJECTS, SERVICES, TESTIMONIALS, ZONES,
  WHATSAPP_URL, buildWhatsappUrl,
} from "@/lib/constants";

// V3 palette — navy/azul corporate
// Primary: #0F2433 (deep navy, do logo slate)
// Surface: #16314A (navy raised)
// Accent: #4FB8C9 (teal claro, da logo)
// Ink: #F4F1EB (cream)
// Highlight: #E8B86A (mostarda quente para CTAs)

const DISPLAY = { fontFamily: "var(--font-inter-tight-v3)", letterSpacing: "-0.04em", fontWeight: 800 } as const;

export default function V3Page() {
  return (
    <main>
      <Header />
      <Hero />
      <KPIBand />
      <SignaturePiece />
      <Services />
      <Showcase />
      <Process />
      <ZonesSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-[#0F2433]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/v3" className="flex items-center gap-3">
          <span className="inline-flex items-center bg-white rounded-md px-2.5 py-1.5">
            <Image src="/logocertacr.png" alt={COMPANY.name} width={240} height={120} className="h-9 w-auto object-contain" priority />
          </span>
          <div className="hidden md:inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-[#4FB8C9]/80 border-l border-white/15 pl-3">
            desde {COMPANY.founded}
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[#F4F1EB]/70 hover:text-[#F4F1EB] transition">{l.label}</a>
          ))}
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hidden md:inline-flex items-center gap-2 bg-[#E8B86A] text-[#0F2433] px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#f0c47e] transition">
          Pedir orçamento
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[640px] -z-10">
        <Image src="/portfolio/05-moradia-amarela.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2433]/70 via-[#0F2433]/85 to-[#0F2433]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-24">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-8 border border-[#4FB8C9]/30 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4FB8C9] animate-pulse" />
          Disponível em Alcochete · Montijo · Setúbal · Lisboa
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[8rem] leading-[0.95]" style={DISPLAY}>
          A pintura que a <br />
          sua casa <span className="text-[#4FB8C9]">merece</span>.
        </h1>

        <div className="grid lg:grid-cols-12 gap-8 mt-12 lg:mt-16">
          <p className="lg:col-span-6 text-lg lg:text-xl text-[#F4F1EB]/75 max-w-2xl leading-relaxed">
            Há mais de 15 anos a transformar casas, apartamentos e fachadas no concelho de Alcochete. Trabalho rigoroso, prazos cumpridos, tinta de marca e garantia escrita até 5 anos.
          </p>
          <div className="lg:col-span-6 flex flex-wrap gap-3 items-center lg:justify-end">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#E8B86A] text-[#0F2433] px-7 py-4 rounded font-semibold hover:bg-[#f0c47e] transition">
              Orçamento grátis →
            </a>
            <a href="#obras" className="inline-flex items-center gap-2 border border-[#F4F1EB]/30 text-[#F4F1EB] px-7 py-4 rounded hover:border-[#F4F1EB]/70 transition">
              Ver obras
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function KPIBand() {
  const items = [
    { n: "15+", label: "anos no terreno" },
    { n: "312", label: "obras entregues" },
    { n: "48h", label: "para orçamento" },
    { n: "5★", label: "média Google" },
  ];
  return (
    <section className="bg-[#16314A] border-y border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
        {items.map((it, i) => (
          <div key={it.label} className={`${i === 0 ? "pl-0" : "pl-6 lg:pl-12"} flex flex-col gap-1`}>
            <div className="text-4xl lg:text-6xl text-[#4FB8C9]" style={DISPLAY}>{it.n}</div>
            <div className="text-xs uppercase tracking-widest text-[#F4F1EB]/60">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SignaturePiece() {
  return (
    <section className="py-24 lg:py-32 bg-[#0F2433]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded">
          <Image src="/portfolio/hero-cozinha.jpeg" alt="Cozinha pintada" fill className="object-cover" sizes="(max-width:1024px) 100vw, 60vw" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9]">obra recente · alcochete · 2024</div>
            <div className="text-2xl mt-1" style={DISPLAY}>Cozinha moderna com iluminação LED</div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">por que escolher-nos</div>
          <h2 className="text-4xl lg:text-6xl mb-6 leading-[0.95]" style={DISPLAY}>
            Qualidade e <span className="text-[#4FB8C9]">confiança</span> em cada pincelada.
          </h2>
          <p className="text-[#F4F1EB]/75 leading-relaxed mb-8">
            Não somos os mais baratos — somos os que fazem direito à primeira. Cliente que escolhe a {COMPANY.name} é cliente que escolhe tranquilidade, qualidade e resultado final impecável.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
            {[
              "Profissionalismo e pontualidade",
              "Acabamentos de alta qualidade",
              "Materiais duráveis e certificados",
              "Preços justos e transparentes",
              "Cumprimento rigoroso de prazos",
              "Foco total na satisfação do cliente",
            ].map((it) => (
              <li key={it} className="flex items-start gap-3 text-[#F4F1EB]/85">
                <span className="mt-1 text-[#4FB8C9]">✓</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#16314A]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">serviços</div>
            <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={DISPLAY}>
              Cobrimos tudo o que tem <span className="text-[#4FB8C9]">tinta</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 self-end text-[#F4F1EB]/70">
            Da pequena reparação ao chave-na-mão. Sempre com tinta de marca (CIN, Robbialac, Dyrup) e garantia escrita.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.slice(0, 6).map((s) => (
            <article key={s.n} className="group bg-[#0F2433] p-8 rounded border border-white/5 hover:border-[#4FB8C9]/40 transition">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#4FB8C9]">{s.n}</span>
                <span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#4FB8C9] group-hover:text-[#4FB8C9] flex items-center justify-center text-xs transition">→</span>
              </div>
              <h3 className="text-2xl mb-3" style={DISPLAY}>{s.title}</h3>
              <p className="text-sm text-[#F4F1EB]/65 leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="obras" className="py-24 lg:py-32 bg-[#0F2433]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">portfólio</div>
            <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={DISPLAY}>
              Obras recentes. <span className="text-[#4FB8C9]">Fotos reais.</span>
            </h2>
          </div>
          <p className="text-[#F4F1EB]/65 max-w-md">
            Cada projecto é entregue com fotos antes/depois e relatório por escrito. Nada fica por explicar.
          </p>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {PROJECTS.slice(0, 8).map((p) => (
          <figure key={p.n} className="group relative aspect-[3/4] overflow-hidden rounded">
            <Image src={p.img} alt={p.title} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2433] via-[#0F2433]/30 to-transparent" />
            <figcaption className="absolute bottom-0 inset-x-0 p-5">
              <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9] mb-1">{p.scope}</div>
              <div className="text-xl leading-tight" style={DISPLAY}>{p.title}</div>
              <div className="text-xs text-[#F4F1EB]/70 mt-0.5">{p.place} · {p.year}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Visita à casa", body: "Vamos a sua casa, medimos paredes e ouvimos o que pretende. Sem custo, sem compromisso." },
    { n: "02", title: "Orçamento em 48h", body: "Proposta por escrito com tudo detalhado: m², tintas, prazo e preço fechado." },
    { n: "03", title: "Execução cuidada", body: "Protegemos móveis e pavimentos. Cumprimos o prazo. Limpamos antes de sair." },
    { n: "04", title: "Garantia escrita", body: "2 anos em interior, 5 anos em fachada. Por escrito no orçamento — não na conversa." },
  ];
  return (
    <section id="processo" className="py-24 lg:py-32 bg-[#16314A] border-y border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">como trabalhamos</div>
        <h2 className="text-4xl lg:text-6xl leading-[0.95] mb-16 max-w-3xl" style={DISPLAY}>
          Quatro passos. <span className="text-[#4FB8C9]">Sem surpresas.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#16314A] p-8 min-h-[260px] flex flex-col">
              <div className="text-3xl text-[#4FB8C9] mb-6" style={DISPLAY}>{s.n}</div>
              <h3 className="text-2xl mb-3" style={DISPLAY}>{s.title}</h3>
              <p className="text-sm text-[#F4F1EB]/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZonesSection() {
  return (
    <section className="py-20 bg-[#0F2433]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">cobertura</div>
          <h3 className="text-3xl lg:text-5xl leading-[0.95]" style={DISPLAY}>
            Onde <span className="text-[#4FB8C9]">trabalhamos</span>.
          </h3>
        </div>
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ZONES.map((z) => (
            <div key={z} className="border border-white/10 rounded px-4 py-3 text-sm text-[#F4F1EB]/85 hover:bg-[#16314A] hover:border-[#4FB8C9]/40 transition">
              {z}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0F2433]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">clientes verificados</div>
          <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={DISPLAY}>
            5★ no <span className="text-[#4FB8C9]">Google</span>. E merecidas.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="bg-[#16314A] p-8 rounded border border-white/5">
              <div className="text-[#E8B86A] tracking-widest text-lg mb-4">★★★★★</div>
              <p className="text-[#F4F1EB]/90 leading-relaxed mb-6">&ldquo;{t.body}&rdquo;</p>
              <div className="pt-5 border-t border-white/10 flex items-center justify-between text-sm">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-[#F4F1EB]/60 text-xs">{t.place}</div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9]">Google</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/portfolio/02-edificio-moderno.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2433] via-[#0F2433]/85 to-[#0F2433]/60" />
      </div>
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">vamos a isto?</div>
          <h2 className="text-5xl lg:text-8xl leading-[0.95]" style={DISPLAY}>
            Próximo passo: <span className="text-[#4FB8C9]">uma conversa</span>.
          </h2>
          <p className="text-lg text-[#F4F1EB]/80 mt-8 max-w-xl">
            Envie uma mensagem. Respondemos em menos de 4 horas em dia útil. Visita à sua casa em 48h, orçamento por escrito no mesmo dia.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#E8B86A] text-[#0F2433] px-7 py-4 rounded font-semibold hover:bg-[#f0c47e] transition">
              WhatsApp · {COMPANY.phone}
            </a>
            <a href={`tel:+${COMPANY.phone.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 rounded text-[#F4F1EB] hover:bg-white/5 transition">
              Ligar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0A1A26] py-16 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-10">
        <div>
          <span className="inline-flex items-center bg-white rounded-md px-3 py-2 mb-4">
            <Image src="/logocertacr.png" alt={COMPANY.name} width={280} height={140} className="h-11 w-auto object-contain" />
          </span>
          <div>
            <div className="text-base font-semibold" style={DISPLAY}>{COMPANY.short}</div>
            <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9]/80">desde {COMPANY.founded}</div>
          </div>
          <p className="text-sm text-[#F4F1EB]/60 max-w-xs">
            Pintura interior e exterior em Alcochete, Margem Sul e Lisboa. Garantia escrita em todas as obras.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9] mb-3">Contacto</div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="block text-[#F4F1EB]/85 hover:text-[#4FB8C9]">WhatsApp · {COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`} className="block text-[#F4F1EB]/85 hover:text-[#4FB8C9]">{COMPANY.email}</a>
          <div className="text-[#F4F1EB]/65">{COMPANY.address}</div>
          <div className="text-[#F4F1EB]/65">{COMPANY.hours}</div>
        </div>
        <div className="text-sm">
          <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9] mb-3">Zonas servidas</div>
          <div className="text-[#F4F1EB]/85 mb-6">{ZONES.join(" · ")}</div>
          <a href={buildWhatsappUrl()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#E8B86A] text-[#0F2433] px-5 py-2.5 rounded text-sm font-semibold">
            Pedir orçamento →
          </a>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-10 pt-6 border-t border-white/10 text-xs text-[#F4F1EB]/45 flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} {COMPANY.name}</span>
        <span>Pintura profissional · PT</span>
      </div>
    </footer>
  );
}
