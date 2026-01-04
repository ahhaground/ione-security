"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05] pointer-events-none" />
      
      {/* 3D Spline Background Layer */}
      {/* 참고: Spline 모델에 마우스 오버(Hover) 효과가 필요하다면, 
          pointer-events-none 대신 Spline 툴 설정(Export Settings)에서 
          'Zoom'과 'Pan' 기능을 끄는 것을 권장합니다. 
          하지만 현재는 위치 고정이 우선이므로 pointer-events-none을 적용합니다. */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
              System Secure & Monitoring
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight"
          >
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 30, damping: 20, delay: 0.8 }}
              className="block"
            >
              당신의 시간만큼 소중한
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 30, damping: 20, delay: 1.3 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow"
            >
              데이터 보안
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1.5, ease: "easeInOut" }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl"
          >
            예측할 수 없는 디지털 위협, 한발 앞서 차단합니다.
          </motion.p>
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

export default Hero;