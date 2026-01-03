import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex md:justify-between md:items-end border-b border-slate-800 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-cyan-500 mb-4 tracking-widest uppercase">Core Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From noise to knowledge
            </h3>
            <p className="text-slate-400">
              수많은 데이터 속에서 진짜 위협을 찾아내고, 비즈니스 인사이트로 전환합니다.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <button className="text-sm text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-colors">
               See all capabilities
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative p-6 glass-panel rounded-sm hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                  <service.icon className="w-6 h-6 text-slate-300 group-hover:text-cyan-400" />
                </div>
                {service.badge && (
                  <span className="text-[10px] font-bold px-2 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 rounded">
                    {service.badge}
                  </span>
                )}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
                {service.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-cyan-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};