"use client";

import React from "react";
import {
  ShieldCheck, Zap, Plane, Smartphone, CreditCard, Building2, Globe2,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const PARTNERS = [
  { name: "Ethiopian Airlines",    role: "Flight Booking In-App",      icon: Plane },
  { name: "Ethio Telecom",         role: "Airtime & Utility Network",  icon: Smartphone },
  { name: "Safaricom Ethiopia",    role: "Data & M-Pesa Interop",      icon: Zap },
  { name: "Fayda National ID",     role: "Biometric e-KYC",            icon: ShieldCheck },
  { name: "EthSwitch",             role: "National Interoperability",   icon: Globe2 },
  { name: "Visa & Mastercard",     role: "Global Digital Debit",       icon: CreditCard },
  { name: "EEU Electric Utility",  role: "Automated Power Pay",        icon: Zap },
  { name: "National Bank of ET",   role: "Regulated & Licensed",       icon: Building2 },
];

const fullList = [...PARTNERS, ...PARTNERS];

export const PartnerMarquee = () => {
  return (
    <SectionWrapper glow="muted" className="py-8">
      {/* Side fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#03050b] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#03050b] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Trusted Ecosystem
        </span>
        <span className="text-[10px] text-slate-700 font-mono hidden sm:inline-block">
          PCI-DSS L1 · ISO 27001
        </span>
      </div>

      <div className="flex animate-marquee gap-5 items-center">
        {fullList.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl
                         bg-white/[0.02] border border-white/[0.06]
                         hover:border-blue-500/25 hover:bg-white/[0.04]
                         transition-all shrink-0 cursor-default"
            >
              <div className="p-2 rounded-xl bg-blue-500/[0.08] border border-blue-500/[0.12]">
                <Icon className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">{p.name}</div>
                <div className="text-[10px] text-slate-600 font-mono">{p.role}</div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
