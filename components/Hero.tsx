"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);

  // Start loading Spline after a short delay (after LCP is measured)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 800); // Delay to prioritize LCP

    return () => clearTimeout(timer);
  }, []);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsSplineLoaded(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05] pointer-events-none z-0" />
      
      {/* ============================================
          POSTER IMAGE STRATEGY (LCP Target)
          This is the CRITICAL element for LCP!
          ============================================ */}
      
      <AnimatePresence mode="wait">
        {!isSplineLoaded && (
          <motion.div
            key="poster"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-[1]"
          >
            {/* CRITICAL: Static Poster Background (LCP Element) */}
            <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
              
              {/* Tech Grid Pattern (SVG - instant render) */}
              <div className="absolute inset-0 opacity-40">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="2" fill="rgba(34, 211, 238, 0.4)" />
                      <path d="M 0 30 L 60 30 M 30 0 L 30 60" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="0.5"/>
                      <circle cx="15" cy="15" r="1" fill="rgba(34, 211, 238, 0.2)" />
                      <circle cx="45" cy="15" r="1" fill="rgba(34, 211, 238, 0.2)" />
                      <circle cx="15" cy="45" r="1" fill="rgba(34, 211, 238, 0.2)" />
                      <circle cx="45" cy="45" r="1" fill="rgba(34, 211, 238, 0.2)" />
                    </pattern>
                    <radialGradient id="glow-1">
                      <stop offset="0%" stopColor="rgba(34, 211, 238, 0.5)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                    <radialGradient id="glow-2">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>
                  
                  <rect width="100%" height="100%" fill="url(#tech-grid)" />
                  
                  {/* Animated glowing orbs simulating 3D effect */}
                  <motion.circle
                    cx="65%"
                    cy="45%"
                    r="250"
                    fill="url(#glow-1)"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="35%"
                    cy="55%"
                    r="180"
                    fill="url(#glow-2)"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </svg>
              </div>

              {/* Geometric shapes for visual interest */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  className="absolute top-1/4 right-1/4 w-32 h-32 border border-cyan-500/30 rounded-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-blue-500/30 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              
              {/* Gradient overlays for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-transparent to-slate-950/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================
          SPLINE 3D (Lazy Loaded via iframe)
          ============================================ */}
      
      {loadSpline && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSplineLoaded ? 0.70 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-[2] pointer-events-none"
        >
          <iframe 
            src='https://my.spline.design/techinspired3dassets01protection-pnePazPajlQ2jOGOzFYTvmkQ/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            onLoad={handleIframeLoad}
            className="w-full h-full"
            title="Spline 3D Security Model"
          />
        </motion.div>
      )}

      {/* ============================================
          CONTENT (Always Visible - Highest Z-index)
          ============================================ */}
      
      <div className="container relative z-10 mx-auto px-6 pt-20">
        <div className="max-w-3xl space-y-8">
          
          {/* Badge: Instant visibility */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
              System Secure & Monitoring
            </span>
          </motion.div>

          {/* CRITICAL: Headline - LCP Text Element */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="block"
            >
              당신의 시간만큼 소중한
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow"
            >
              데이터 보안
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl"
          >
            예측할 수 없는 디지털 위협, 한발 앞서 차단합니다.
          </motion.p>

          {/* Loading Indicator */}
          <AnimatePresence>
            {!isSplineLoaded && loadSpline && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-cyan-500/60 text-xs font-mono"
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-cyan-500"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span>Initializing 3D security interface...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 z-10"
      >
        <span className="text-[10px] text-cyan-500 uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;