import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  isBadge?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
  description: string;
  growth?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  category: "Core" | "Lifestyle" | "Smart Finance" | "Offline & Security";
  highlights: string[];
  stats?: { label: string; value: string };
  badge?: string;
}

export interface MiniAppItem {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: string;
  color: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  excerpt?: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
  content?: string[];
  tags?: string[];
}

