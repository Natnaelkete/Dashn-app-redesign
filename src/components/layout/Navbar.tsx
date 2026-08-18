"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Mini Apps", href: "#mini-apps", badge: "50+" },
    { label: "AI Insights", href: "#budgeting" },
    { label: "Offline USSD", href: "#ussd" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06090e]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  D
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Dashen
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30 uppercase tracking-wider">
                  SuperApp
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider font-mono">
                ALWAYS ONE STEP AHEAD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-4 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="glow"
              size="sm"
              className="gap-2 group shadow-blue-500/20"
              onClick={() => {
                const el = document.getElementById("download-cta");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Smartphone className="w-4 h-4" />
              <span>Get App</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#06090e]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Quick Navigation
                </span>
                <Badge variant="cyan">v3.4 Live</Badge>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <span>{link.label}</span>
                  {link.badge ? (
                    <Badge variant="cyan">{link.badge}</Badge>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                  )}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm">
                  <span className="text-slate-400">Offline USSD Dial:</span>
                  <span className="font-mono font-bold text-amber-400">*996#</span>
                </div>
                <Button
                  variant="glow"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById("download-cta");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download Dashen SuperApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
