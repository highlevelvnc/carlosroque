import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ColorSimulator from "@/components/ColorSimulator";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Zones from "@/components/Zones";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsappFAB from "@/components/WhatsappFAB";
import RevealProvider from "@/components/RevealProvider";
import BrandStrip from "@/components/BrandStrip";
import LoadingScreen from "@/components/LoadingScreen";
import { ScrollProgress, BackToTop } from "@/components/ScrollUtils";
import ActivityTicker from "@/components/ActivityTicker";
import CursorTrail from "@/components/CursorTrail";
import PaintDivider from "@/components/PaintDivider";
import AirlessShowcase from "@/components/AirlessShowcase";

export default function Home() {
  return (
    <>
      <LoadingScreen variant="brush" themeKey="v1" sessionKey="cr-v1-loaded" tagline="Paredes que duram." />
      <CursorTrail color="#1F9A9A" />
      <ScrollProgress color="#1F9A9A" />
      <RevealProvider />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ColorSimulator />
        <PaintDivider color="#1F9A9A" />
        <Projects />
        <AirlessShowcase
          src="/portfolio/airless.mp4"
          accent="#1F9A9A"
          bg="#16161A"
          text="#F2F0EC"
          textDim="#A6A29A"
          border="#2A2A2F"
          display={{ fontFamily: "var(--font-fraunces)" }}
        />
        <BrandStrip bg="#0E0E10" text="#A6A29A" accent="#1F9A9A" border="#2A2A2F" display={{ fontFamily: "var(--font-fraunces)" }} />
        <Services />
        <PaintDivider color="#C9A961" flip />
        <BeforeAfter />
        <Process />
        <Zones />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsappFAB />
      <BackToTop bg="#1F9A9A" ink="#0E0E10" />
      <ActivityTicker bg="#0E0E10" text="#F2F0EC" accent="#1F9A9A" border="#2A2A2F" />
    </>
  );
}
