import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}