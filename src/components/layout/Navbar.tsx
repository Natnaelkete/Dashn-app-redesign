"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

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
          ? "bg-[#F8F6F0]/85 dark:bg-[#06090e]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-md shadow-slate-900/5 dark:shadow-2xl dark:shadow-black/50 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Image */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-11 w-11 rounded-xl overflow-hidden shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform duration-200 border border-blue-900/20 dark:border-white/10">
              <Image
                src="/dashen-logo.png"
                alt="Dashen Bank"
                width={44}
                height={44}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.03] border border-slate-300/60 dark:border-white/[0.08] backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-semibold border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

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

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/[0.05] dark:bg-white/[0.05] border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none cursor-pointer"
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
            className="lg:hidden bg-[#F8F6F0]/95 dark:bg-[#06090e]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                  Quick Navigation
                </span>
                <Badge variant="cyan">v3.4 Live</Badge>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>{link.label}</span>
                  {link.badge ? (
                    <Badge variant="cyan">{link.badge}</Badge>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                  )}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    Offline USSD Dial:
                  </span>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                    *996#
                  </span>
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
