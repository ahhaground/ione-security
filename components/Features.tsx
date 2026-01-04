"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Clock, Zap, User, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const count = useMotionValue(98.2);
  const rounded = useTransform(count, (latest) => `${latest.toFixed(1)}%`);

  useEffect(() => {
    const updateNumber = () => {
      const target = 95.0 + Math.random() * (99.9 - 95.0); // 95.0 ~ 99.9 사이 랜덤
      const duration = 1 + Math.random() * 1; // 1~2초
      animate(count, target, {
        duration: duration,
        ease: "easeInOut",
      });
    };

    // 초기 실행
    updateNumber();

    // 2~3초마다 반복
    const interval = setInterval(() => {
      updateNumber();
    }, 2000 + Math.random() * 1000);

    return () => clearInterval(interval);
  }, [count]);

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 각 막대마다 다른 애니메이션 패턴 생성 (높이 값: 0.2 = 20%, 0.8 = 80% 등)
  const barAnimations = [
    { heights: [0.25, 0.60, 0.35, 0.75, 0.45, 0.25], duration: 2.5, delay: 0 },
    { heights: [0.40, 0.70, 0.50, 0.85, 0.60, 0.40], duration: 3, delay: 0.2 },
    { heights: [0.30, 0.55, 0.40, 0.70, 0.50, 0.30], duration: 2.8, delay: 0.4 },
    { heights: [0.50, 0.80, 0.60, 0.90, 0.70, 0.50], duration: 3.2, delay: 0.1 },
    { heights: [0.35, 0.65, 0.45, 0.75, 0.55, 0.35], duration: 2.7, delay: 0.3 },
    { heights: [0.45, 0.75, 0.55, 0.85, 0.65, 0.45], duration: 3.1, delay: 0.5 },
    { heights: [0.28, 0.58, 0.38, 0.68, 0.48, 0.28], duration: 2.9, delay: 0.15 },
    { heights: [0.38, 0.68, 0.48, 0.78, 0.58, 0.38], duration: 3.3, delay: 0.25 },
  ];
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-cyan-500 font-semibold tracking-wider mb-2 block uppercase"
            >
              FEATURES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white whitespace-pre-line"
            >
              고객의 모든 시간{'\n'}방해받지 않도록
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
              가장 완벽한 보안은 존재감조차 느껴지지 않아요.
            </motion.p>

            <motion.div 
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 pt-4"
            >
              <motion.div variants={listItemVariants} className="flex items-start gap-4">
                <div className="mt-1 p-1 rounded bg-slate-800 text-cyan-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">365일 24시간</h4>
                  <p className="text-sm text-slate-400">불편함을 느끼지 못하도록 언제, 어떤 상황에서도 해결할 준비가 되어 있어요.</p>
                </div>
              </motion.div>
              <motion.div variants={listItemVariants} className="flex items-start gap-4">
                <div className="mt-1 p-1 rounded bg-slate-800 text-cyan-400">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">민첩하게 반응하는</h4>
                  <p className="text-sm text-slate-400">문제를 즉시 진단하고 최적의 해결방법으로 민첩하게 대응해요.</p>
                </div>
              </motion.div>
              <motion.div variants={listItemVariants} className="flex items-start gap-4">
                <div className="mt-1 p-1 rounded bg-slate-800 text-cyan-400">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">섬세한 고객 경험</h4>
                  <p className="text-sm text-slate-400">보안은 딱딱하고 어려워도 고객과의 관계는 긴밀하고 시선은 다양하게 제공해요.</p>
                </div>
              </motion.div>
            </motion.div>
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
                         <motion.div className="text-3xl font-bold text-white">{rounded}</motion.div>
                         <div className="text-xs text-slate-500">Risk Mitigation</div>
                      </div>
                    </div>
                    {/* Chart Mockup */}
                    <div className="h-32 flex items-end justify-between gap-2 pt-4 border-t border-slate-800/50">
                       {barAnimations.map((bar, i) => (
                         <motion.div
                           key={i}
                           animate={{
                             scaleY: bar.heights,
                           }}
                           transition={{
                             repeat: Infinity,
                             repeatType: "reverse",
                             duration: bar.duration,
                             ease: "easeInOut",
                             delay: bar.delay,
                           }}
                           className="w-full bg-slate-800 hover:bg-cyan-500 transition-colors rounded-t-sm relative group"
                           style={{ 
                             transformOrigin: "bottom",
                             height: "100%"
                           }}
                         />
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

export default Features;