import React from 'react';
import { Cpu, Fingerprint, Globe } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase">
              System of Record
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The single source <br />
              <span className="text-slate-500">of truth.</span>
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              아이원 시큐리티의 통합 대시보드는 흩어진 보안 로그를 수집하여 하나의 인텔리전스로 통합합니다. 
              블록체인 기반의 불변 기록 장치는 내부 감사 및 컴플라이언스 대응에 최적화된 환경을 제공합니다.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 rounded bg-slate-800 text-cyan-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">AI-Powered Analysis</h4>
                  <p className="text-sm text-slate-400">머신러닝 알고리즘이 정상 패턴을 학습하고 비정상 행위를 즉시 격리합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 rounded bg-slate-800 text-cyan-400">
                  <Fingerprint size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Decentralized Identity</h4>
                  <p className="text-sm text-slate-400">사용자 신원 인증에 DID 기술을 적용하여 개인정보 유출 위험을 최소화합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Abstract visual representation of dashboard/data */}
            <div className="relative z-10 glass-panel p-1 rounded-xl border border-white/10 shadow-2xl bg-slate-900/80">
               {/* Mock UI Structure */}
               <div className="bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
                 {/* Header */}
                 <div className="h-10 border-b border-slate-800 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   </div>
                   <div className="ml-4 h-4 w-40 bg-slate-800 rounded-full" />
                 </div>
                 {/* Content Body */}
                 <div className="p-6 space-y-4">
                    <div className="flex justify-between items-end">
                      <div className="space-y-2">
                        <div className="h-4 w-24 bg-slate-800 rounded" />
                        <div className="h-8 w-48 bg-cyan-900/30 border border-cyan-800/50 rounded flex items-center px-3 text-cyan-400 font-mono text-sm">
                          Threat detected
                        </div>
                      </div>
                      <div className="text-right">
                         <div className="text-3xl font-bold text-white">98.2%</div>
                         <div className="text-xs text-slate-500">Risk Mitigation</div>
                      </div>
                    </div>
                    {/* Chart Mockup */}
                    <div className="h-32 flex items-end justify-between gap-2 pt-4 border-t border-slate-800/50">
                       {[40, 65, 34, 78, 95, 50, 80, 40, 60].map((h, i) => (
                         <div key={i} style={{ height: `${h}%`}} className="w-full bg-slate-800 hover:bg-cyan-500 transition-colors rounded-t-sm relative group">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-950 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                              {h}%
                            </div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                       <div className="p-3 bg-slate-900 rounded border border-slate-800">
                          <div className="text-xs text-slate-500 mb-1">Network Status</div>
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                             <span className="text-sm text-white font-medium">Secure</span>
                          </div>
                       </div>
                       <div className="p-3 bg-slate-900 rounded border border-slate-800">
                          <div className="text-xs text-slate-500 mb-1">Active Nodes</div>
                          <div className="flex items-center gap-2">
                             <Globe size={12} className="text-cyan-500"/>
                             <span className="text-sm text-white font-medium">1,024</span>
                          </div>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Decorative background element behind the card */}
            <div className="absolute -inset-4 border border-dashed border-slate-700/50 rounded-xl z-0" />
            <div className="absolute top-10 -right-10 w-24 h-24 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-3xl" />
            <div className="absolute -bottom-5 -left-5 w-24 h-24 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};