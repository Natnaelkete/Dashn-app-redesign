import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  themeColor: "#050811",
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} dark antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#050811] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
