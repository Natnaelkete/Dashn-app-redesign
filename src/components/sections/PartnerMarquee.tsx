"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  Plane,
  Smartphone,
  CreditCard,
  Building2,
  Lock,
  Globe2,
} from "lucide-react";

export const PartnerMarquee = () => {
  const partners = [
    { name: "Ethiopian Airlines", role: "Flight Booking In-App", icon: Plane, color: "text-emerald-400" },
    { name: "Ethio Telecom", role: "Airtime & Utility Network", icon: Smartphone, color: "text-cyan-400" },
    { name: "Safaricom Ethiopia", role: "Data & M-Pesa Interop", icon: Zap, color: "text-green-400" },
    { name: "Fayda National ID", role: "Biometric e-KYC", icon: ShieldCheck, color: "text-blue-400" },
    { name: "EthSwitch", role: "National Interoperability", icon: Globe2, color: "text-indigo-400" },
    { name: "Visa & Mastercard", role: "Global Digital Debit", icon: CreditCard, color: "text-amber-400" },
    { name: "EEU Electric Utility", role: "Automated Power Pay", icon: Zap, color: "text-yellow-400" },
    { name: "National Bank of Ethiopia", role: "Regulated & Licensed", icon: Building2, color: "text-slate-300" },
  ];

  const fullList = [...partners, ...partners];

  return (
    <div className="relative py-8 bg-[#04060c] border-y border-white/[0.06] overflow-hidden">
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#04060c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#04060c] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Trusted National & Global Financial Ecosystem
        </span>
        <span className="text-[11px] text-slate-500 font-mono hidden sm:inline-block">
          PCI-DSS Level 1 • ISO 27001 Certified
        </span>
      </div>

      <div className="flex animate-marquee gap-6 items-center">
        {fullList.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all shrink-0 hover:bg-white/[0.05]"
            >
              <div className={`p-2 rounded-xl bg-white/[0.04] ${p.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-wide">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {p.role}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
