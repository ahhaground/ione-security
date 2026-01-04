"use client";

import React from 'react';
import { motion, Variants  } from 'framer-motion';
import { ArrowUpRight, Handshake, MonitorCheck, Lightbulb } from 'lucide-react';

// ServiceItem 타입 정의 (icon은 복잡하니 any로 처리, badge는 ?를 붙여 선택사항으로)
interface ServiceItem {
  title: string;
  description: string;
  icon: any; 
  badge?: string;
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "AhnLab PARTNER",
      description: "깊은 신뢰가 바탕이 된 관계와 높은 제품 이해도로 차별화된 기술을 제공해요",
      icon: Handshake, // 파트너십 아이콘
    },
    {
      title: "MANAGED SERVICE",
      description: "안정적인 운영과 빠른 해결을 위해 365일 고객의 리스크를 빈틈없이 시스템을 모니터링해요",
      icon: MonitorCheck, // 모니터링 아이콘
    },
    {
      title: "CONSULTING SERVICE",
      description: "최적의 시스템 설계, 구현을 위한 보안전문가의 컨설턴트로 시스템 도입이 더 쉬워져요",
      icon: Lightbulb, // 컨설팅 아이콘
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.5,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 border-b border-slate-800 pb-8">
          <div className="max-w-2xl text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-cyan-500 font-semibold tracking-wider mb-3 uppercase"
            >
              CORE SERVICES
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              복잡한 보안은 우리에게
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
              시스템 설계부터 365일 운영까지. 최적의 보안 솔루션으로 완벽한 보안 생태계를 구축해요.
            </motion.p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="relative p-6 glass-panel rounded-sm bg-slate-900/50"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-100" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-900/50 rounded-lg border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                {service.badge && (
                  <span className="text-[10px] font-bold px-2 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 rounded">
                    {service.badge}
                  </span>
                )}
              </div>
              
              <h4 className="text-xl font-bold text-cyan-50 mb-3">
                {service.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="absolute bottom-6 right-6 opacity-100 transform translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-cyan-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;