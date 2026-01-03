import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        {/* Trust/Stats Banner */}
        <div className="border-y border-slate-900 bg-slate-950/50 py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               <div>
                 <div className="text-4xl font-bold text-white mb-1">99.9%</div>
                 <div className="text-xs uppercase tracking-widest text-slate-500">Uptime Guaranteed</div>
               </div>
               <div>
                 <div className="text-4xl font-bold text-white mb-1">24/7</div>
                 <div className="text-xs uppercase tracking-widest text-slate-500">Expert Support</div>
               </div>
               <div>
                 <div className="text-4xl font-bold text-white mb-1">0ms</div>
                 <div className="text-xs uppercase tracking-widest text-slate-500">Threat Latency</div>
               </div>
               <div>
                 <div className="text-4xl font-bold text-white mb-1">150+</div>
                 <div className="text-xs uppercase tracking-widest text-slate-500">Enterprise Clients</div>
               </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;