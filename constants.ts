import { Handshake, Activity, BrainCircuit } from 'lucide-react';
import { NavItem, ServiceItem, ContactInfo } from '@/types';

export const COMPANY_NAME = "I-ONE Security";
export const SLOGAN = "데이터의 가치를 지키는 기업";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'FEATURES', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'finecall@ionesecurity.co.kr',
  phone: '02-1234-5678',
  address: '서울특별시 강남구 테헤란로 123, I-ONE 타워 10층',
};

export const SERVICES: ServiceItem[] = [
  {
    title: "AhnLab PARTNER",
    description: "깊은 신뢰가 바탕이 된 관계와 높은 제품 이해도로 차별화된 기술을 제공해요",
    icon: Handshake,
  },
  {
    title: "MANAGED SERVICE",
    description: "안정적인 운영과 빠른 해결을 위해 365일 고객의 리스크를 빈틈없이 시스템을 모니터링해요",
    icon: Activity,
  },
  {
    title: "CONSULTING SERVICE",
    description: "최적의 시스템 설계, 구현을 위한 보안전문가의 컨설턴트로 시스템 도입이 더 쉬워져요",
    icon: BrainCircuit,
  }
];

