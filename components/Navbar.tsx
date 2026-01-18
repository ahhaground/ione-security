"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';

// 경로 확인: public/img/logo.png 파일이 존재하는지 확인하세요 (대소문자 구분)

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] w-full transition-all duration-300 ${isScrolled ? 'py-4 glass-panel border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer relative h-10 w-32" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
          <Image 
            src="/img/logo.png" 
            alt="아이원시큐리티" 
            fill
            priority
            sizes="(max-width: 768px) 100px, 128px"
            className="object-contain transition-transform group-hover:scale-105" 
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.filter(item => item.label !== 'Contact' && item.label !== 'CONTACT' && item.label !== '문의하기').map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 text-sm font-bold text-slate-950 bg-white hover:bg-cyan-400 transition-colors rounded-sm">
            문의하기
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass-panel border-b border-white/10 md:hidden p-6 flex flex-col space-y-4 animate-fadeIn">
          {NAV_ITEMS.filter(item => item.label !== 'Contact' && item.label !== 'CONTACT' && item.label !== '문의하기').map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg text-slate-200 hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};