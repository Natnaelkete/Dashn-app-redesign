import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUpRight,
  Sparkles,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const Footer = () => {
  return (
    <footer className="relative bg-[#04060a] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                  <span className="text-xl font-black text-blue-400">D</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">
                  Dashen SuperApp
                </span>
                <span className="text-xs text-slate-400">
                  Always One Step Ahead
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering everyday banking with innovation, reliability, and trust.
              Dashen Bank delivers secure, lightning-fast digital lifestyle and
              financial solutions across Ethiopia.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <Badge variant="emerald" className="gap-1.5 py-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                PCI-DSS Level 1 Certified
              </Badge>
              <Badge variant="outline" className="gap-1.5 py-1">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                256-Bit Encrypted
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Platform
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link href="#features" className="hover:text-blue-400 transition-colors">
                  Digital Onboarding
                </Link>
              </li>
              <li>
                <Link href="#mini-apps" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  Mini Apps Ecosystem
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">
                    Popular
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#budgeting" className="hover:text-blue-400 transition-colors">
                  AI Smart Budgeting
                </Link>
              </li>
              <li>
                <Link href="#ussd" className="hover:text-blue-400 transition-colors">
                  Offline USSD (*996#)
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-blue-400 transition-colors">
                  Security Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Lifestyle & Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Mini Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">
                  Ethiopian Airlines Flights
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">
                  Ethio Telecom / Safaricom Airtime
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">
                  Digital Eqwub Saving Circles
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">
                  Utility Bills & EEU Power
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">
                  Cinema & Concert Tickets
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              24/7 Support
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="tel:+251115158000"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+251 11 515 8000</span>
              </a>
              <a
                href="mailto:info@dashensuperapp.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@dashensuperapp.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Dashen Bank HQ, Sudan Street, Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dashen Bank S.C. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Center</span>
            <span className="hover:text-slate-400 cursor-pointer">Regulatory Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
