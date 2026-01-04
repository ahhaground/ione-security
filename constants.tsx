import { ShieldCheck, Cpu, Database, Activity, Lock, Globe } from 'lucide-react';
import { NavItem, ServiceItem, ContactInfo, StatItem } from './types';

export const COMPANY_NAME = "i-ONE Security";
export const SLOGAN = "데이터의 가치를 지키는 기업";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'FEATURES', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'ahhaground@gmail.com',
  phone: '02-1234-5678',
  address: '서울특별시 강남구 테헤란로 123, 아이원타워 15층',
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Security Intelligence",
    description: "데이터 기반의 지능형 보안 분석을 통해 잠재적 위협을 사전에 식별하고 대응합니다.",
    icon: ShieldCheck,
    badge: "CORE"
  },
  {
    title: "Blockchain Security",
    description: "분산 원장 기술을 활용하여 데이터의 무결성을 보장하고 위변조를 원천 차단합니다.",
    icon: Database,
  },
  {
    title: "Real-time Threat Detection",
    description: "AI 기반 엔진이 24/365 실시간으로 네트워크와 시스템의 이상 징후를 감시합니다.",
    icon: Activity,
    badge: "AI POWERED"
  },
  {
    title: "Zero Trust Architecture",
    description: "모든 접근을 의심하고 검증하는 제로 트러스트 모델을 통해 강력한 내부 보안을 구축합니다.",
    icon: Lock,
  }
];

export const STATS: StatItem[] = [
  { value: "99.99%", label: "System Uptime" },
  { value: "0ms", label: "Detection Latency Goal" },
  { value: "24/7", label: "Monitoring Service" },
];