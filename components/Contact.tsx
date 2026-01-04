"use client";

import React from 'react';
import { CONTACT_INFO } from '@/constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">보안은 아이원 시큐리티와 함께</h2>
                <p className="text-slate-400">
                  보안에 관한 고민, 아이원 시큐리티와 상담하세요.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <span>finecall@ionesecurity.co.kr</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <span>02-465-3352</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span>서울특별시 성동구 아차산로17길 48, 608호</span>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name</label>
                <input type="text" className="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:border-cyan-500 focus:outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:border-cyan-500 focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:border-cyan-500 focus:outline-none transition-colors resize-none" placeholder="How can we help you?" />
              </div>
              <Button className="w-full">
                문의하기 <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};