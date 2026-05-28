import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY.name} — Pintura premium em Alcochete`,
  description:
    "Pintura interior e exterior de excelência. Mais de 15 anos a transformar casas no concelho de Alcochete, Montijo e Setúbal.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#F5F2EC] text-[#0E0E10] min-h-screen">{children}</div>;
}
