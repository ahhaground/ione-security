import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05] pointer-events-none" />
      
      {/* 3D Spline Background Layer */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/techinspired3dassets01protection-pnePazPajlQ2jOGOzFYTvmkQ/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-100 md:scale-100 object-cover opacity-80"
          title="Spline 3D Model"
        />
        {/* Overlay to fade bottom and sides slightly for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
              System Secure & Monitoring
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
            Unleashing the Power of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">
              Security Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            단순한 방어가 아닌, 데이터의 가치를 지킵니다. 
            <br className="hidden md:block" />
            블록체인 기술과 AI 기반 실시간 위협 탐지로 기업의 자산을 보호하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Solutions
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] text-cyan-500 uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </div>
    </section>
  );
};