import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#050811] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <SectionWrapper id="contact-hero" glow="cyan" className="py-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
              Contact Us
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We are here to help. Reach out to Dashen Bank for support, inquiries, or feedback.
            </p>
          </div>
        </SectionWrapper>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black mb-4">Get in Touch</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Our support team is available 24/7 to assist you with any questions or concerns.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-1">24/7 Toll-Free Support</p>
                  <p className="font-mono text-blue-600 dark:text-blue-400 font-bold">8989</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-1">For general inquiries</p>
                  <p className="font-mono font-bold">support@dashenbanksc.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Headquarters</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Dashen Bank Headquarters<br />
                    Sudan Street, In front of National Bank<br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
              </div>
              <button type="button" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-lg shadow-blue-600/25">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
