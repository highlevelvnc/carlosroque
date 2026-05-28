import Image from "next/image";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E10] border-t border-[#2A2A2F] pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center bg-white rounded-full px-4 py-2.5 mb-8 shadow-lg">
              <Image src="/logocertacr.png" alt={COMPANY.name} width={320} height={160} className="h-10 sm:h-12 w-auto object-contain" />
            </span>
            <div className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.85] text-[#F2F0EC]">
              Carlos
              <span className="block italic text-[#A6A29A]">Roque</span>
              <span className="block text-[#1F9A9A]">Pinturas.</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3 text-sm">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A29A] mb-1 font-mono">Navegação</div>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[#F2F0EC] hover:text-[#1F9A9A] transition-colors w-fit link-underline">
                {l.label}
              </a>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 text-sm">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A29A] mb-1 font-mono">Contacto</div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-[#F2F0EC] hover:text-[#1F9A9A] transition">
              WhatsApp · {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="text-[#F2F0EC] hover:text-[#1F9A9A] transition">{COMPANY.email}</a>
            <div className="text-[#A6A29A]">{COMPANY.address}</div>
            <div className="text-[#A6A29A]">{COMPANY.hours}</div>
          </div>
        </div>

        <div className="hairline pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#A6A29A] font-mono">
          <span>© {new Date().getFullYear()} {COMPANY.name} · Todos os direitos reservados</span>
          <span>{COMPANY.region}</span>
          <span>Feito em Portugal · PT-PT</span>
        </div>
      </div>
    </footer>
  );
}
