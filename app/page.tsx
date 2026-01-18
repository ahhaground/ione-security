// app/page.tsx
import dynamic from 'next/dynamic';
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";

// Lazy load heavy components below the fold
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-screen bg-slate-950" />,
});

const Contact = dynamic(() => import("@/components/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-[400px] bg-slate-950" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32 bg-slate-950" />,
});

export default function Home() {
  return (
    <div className="bg-[#0B0F1A] overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
