import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function HelpDeskPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#050811] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <SectionWrapper id="help-hero" glow="cyan" className="py-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
              Help Desk
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Find answers, browse guides, or get in touch with our support team 24/7.
            </p>
          </div>
        </SectionWrapper>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="p-10 rounded-[32px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">How can we help you today?</h2>
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for articles, guides, or questions..." 
                className="w-full px-6 py-4 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Getting Started", icon: "🚀" },
                { title: "Account & Security", icon: "🔒" },
                { title: "Payments & Transfers", icon: "💸" },
                { title: "Mini Apps", icon: "📱" },
                { title: "Fayda ID", icon: "🆔" },
                { title: "Troubleshooting", icon: "🛠️" },
              ].map(topic => (
                <div key={topic.title} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.05] hover:border-blue-500/30 transition-colors cursor-pointer group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{topic.icon}</div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">{topic.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
