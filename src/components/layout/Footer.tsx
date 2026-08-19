import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#F2EFE8] dark:bg-[#04060a] border-t border-slate-200 dark:border-white/[0.08] pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-white/[0.08]">
          {/* Brand & Description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-200 border border-slate-200 dark:border-white/10">
                <Image
                  src="/dashen-logo.png"
                  alt="Dashen Bank"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Dashen SuperApp
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Always One Step Ahead
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              The premier digital financial platform licensed and regulated by the National Bank of Ethiopia. Empowering 5.8M+ everyday lives and businesses nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
              Platform
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  href="#features"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Digital Onboarding
                </Link>
              </li>
              <li>
                <Link
                  href="#mini-apps"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  Mini Apps Ecosystem
                  <span className="text-[10px] bg-blue-500/15 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded font-semibold">
                    Popular
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#budgeting"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  AI Smart Budgeting
                </Link>
              </li>
              <li>
                <Link
                  href="#ussd"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Offline USSD (*996#)
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Security Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Lifestyle & Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
              Mini Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Ethiopian Airlines Flights
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Ethio Telecom / Safaricom Airtime
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Digital Eqwub Saving Circles
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Utility Bills & EEU Power
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Cinema & Concert Tickets
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
              24/7 Support
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              <a
                href="tel:+251115158000"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>+251 11 515 8000</span>
              </a>
              <a
                href="mailto:info@dashensuperapp.com"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>info@dashensuperapp.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>Dashen Bank HQ, Sudan Street, Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Dashen Bank S.C. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 dark:hover:text-slate-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-slate-800 dark:hover:text-slate-400 cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-slate-800 dark:hover:text-slate-400 cursor-pointer transition-colors">
              Security Center
            </span>
            <span className="hover:text-slate-800 dark:hover:text-slate-400 cursor-pointer transition-colors">
              Regulatory Disclosures
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
