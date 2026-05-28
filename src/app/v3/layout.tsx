import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { COMPANY } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-v3", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight-v3", display: "swap", weight: ["500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: `${COMPANY.name} — Pintura profissional em Alcochete`,
  description:
    "Especialistas em pintura interior e exterior. Mais de 15 anos a entregar acabamentos com garantia. Alcochete, Montijo, Setúbal e Lisboa.",
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${interTight.variable} bg-[#0F2433] text-[#F4F1EB] min-h-screen`}
      style={{ fontFamily: "var(--font-inter-v3), system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}
