import React from 'react';
import { COMPANY_NAME, SLOGAN } from '@/constants';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-6 h-6 text-cyan-500" />
              <span className="font-bold text-lg tracking-wide">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              {SLOGAN}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Analysis</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blockchain Security</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Real-time Monitoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600">
            &copy; 2026 {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholder */}
            <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-colors cursor-pointer" />
            <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-colors cursor-pointer" />
            <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};