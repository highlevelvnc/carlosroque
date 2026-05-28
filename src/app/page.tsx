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

export default function Home() {
  return (
    <>
      <RevealProvider />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ColorSimulator />
        <Projects />
        <Services />
        <BeforeAfter />
        <Process />
        <Zones />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsappFAB />
    </>
  );
}
