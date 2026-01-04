// app/page.tsx
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import About from "@/components/About";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";

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
