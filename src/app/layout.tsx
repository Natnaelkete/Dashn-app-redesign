import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050811" },
    { media: "(prefers-color-scheme: light)", color: "#F8F6F0" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Dashen SuperApp | Revolutionizing Ethiopian Banking & Digital Lifestyle",
  description:
    "Experience the ultimate Ethiopian fintech platform. Instant 60s Fayda ID onboarding, offline USSD *996# payments, AI budget insights, 50+ mini apps, and bank-grade security.",
  keywords: [
    "Dashen Bank",
    "Dashen SuperApp",
    "Ethiopia Fintech",
    "Mobile Banking Ethiopia",
    "Fayda National ID",
    "USSD 996",
    "EthSwitch",
    "Digital Wallet Ethiopia",
  ],
  openGraph: {
    title: "Dashen SuperApp | Next-Gen Banking & Lifestyle Ecosystem",
    description:
      "All-in-one financial superapp: instant transfers, 50+ mini apps, AI budgeting, and offline payments.",
    url: "https://www.dashensuperapp.com/",
    siteName: "Dashen SuperApp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('dashen-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F8F6F0] dark:bg-[#050811] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans overflow-x-hidden transition-colors duration-300"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
