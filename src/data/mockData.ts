import { FeatureItem, MetricItem, MiniAppItem, FaqItem, TestimonialItem } from "@/types";

export const APP_METRICS: MetricItem[] = [
  {
    label: "Active App Users",
    value: "5.8M+",
    description: "Everyday Ethiopians banking seamlessly on iOS & Android",
    growth: "+48% YoY",
  },
  {
    label: "Annual Volume Processed",
    value: "140B+",
    prefix: "ETB ",
    description: "Secure, reliable, instant transactions across all channels",
    growth: "99.98% Uptime",
  },
  {
    label: "Merchant & Mini Apps",
    value: "1,200+",
    description: "Integrated ecosystem from utilities to entertainment",
    growth: "50+ Categories",
  },
  {
    label: "Instant Transfer Speed",
    value: "< 1.2s",
    description: "Real-time settlements via EthSwitch & Telebirr interop",
    growth: "Sub-second sync",
  },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: "digital-onboarding",
    title: "1-Minute Digital Onboarding",
    tagline: "Instant Account Opening with National ID (Fayda)",
    description:
      "Open a tier-verified bank account in under 60 seconds using facial biometrics and Fayda National ID verification without visiting any branch.",
    iconName: "UserCheck",
    category: "Core",
    badge: "AI Biometric Verified",
    highlights: [
      "Instant Fayda ID validation & e-KYC",
      "Immediate virtual debit card generation",
      "Zero paperwork or physical branch queue",
      "Multi-currency account creation",
    ],
    stats: { label: "Average Setup Time", value: "48 Seconds" },
  },
  {
    id: "smart-budgeting",
    title: "AI Financial Insights & Budgeting",
    tagline: "Total Control Over Every Birr",
    description:
      "Intelligent categorization of your daily expenses, predictive bill reminders, and automated goal-based savings (Eqwub / Saving Pots) with dynamic interest yields.",
    iconName: "PieChart",
    category: "Smart Finance",
    badge: "Smart Analytics",
    highlights: [
      "Automated expense categorization with deep analytics",
      "Digital Eqwub (social rotational savings circles)",
      "Targeted saving pots with locked interest yields",
      "Smart monthly budget threshold alerts",
    ],
    stats: { label: "Average Savings Increase", value: "+23%" },
  },
  {
    id: "mini-apps-ecosystem",
    title: "All-in-One Mini Apps Ecosystem",
    tagline: "Your Daily Life, Inside One SuperApp",
    description:
      "Book flights with Ethiopian Airlines, buy concert tickets, pay utility bills (Ethio Telecom, Water, Electricity), order food, and shop all without leaving the app.",
    iconName: "LayoutGrid",
    category: "Lifestyle",
    badge: "50+ In-App Services",
    highlights: [
      "Ethio Telecom & Safaricom airtime & data packages",
      "Ethiopian Airlines seamless flight booking & check-in",
      "Government utility bill clearance in 1-tap",
      "Event ticketing & movie seat reservation",
    ],
    stats: { label: "Daily Transactions", value: "850K+" },
  },
  {
    id: "social-transfers",
    title: "Chat & Social Money Transfers",
    tagline: "Send Money as Effortlessly as a Text",
    description:
      "Transfer money directly within end-to-end encrypted chats, split restaurant bills with friends, send digital gift envelopes, and chat with merchants.",
    iconName: "MessageSquare",
    category: "Lifestyle",
    badge: "Social Pay",
    highlights: [
      "In-chat instant transfer & voice note memos",
      "Group bill splitting with automated request links",
      "Personalized digital gift cards & holiday envelopes",
      "Direct chat with registered merchants and customer care",
    ],
    stats: { label: "Social Transfers", value: "2.4M/mo" },
  },
  {
    id: "ussd-offline-mode",
    title: "Hybrid Offline & USSD Banking (*996#)",
    tagline: "Always Connected, Even Without Internet",
    description:
      "When cellular data drops, Dashen SuperApp seamlessly switches to automated USSD (*996#) background sync so your transfers and payments never fail.",
    iconName: "WifiOff",
    category: "Offline & Security",
    badge: "100% Reliable",
    highlights: [
      "Automatic fallback when mobile data or Wi-Fi is lost",
      "Full access to balance checks, P2P transfers & airtime",
      "Zero internet required for mission-critical banking",
      "End-to-end SIM-level encrypted session handling",
    ],
    stats: { label: "Network Coverage", value: "100% Ethiopia" },
  },
  {
    id: "enterprise-security",
    title: "Fortress-Grade Security & Privacy",
    tagline: "Defense in Depth with Military Encryption",
    description:
      "Bank with supreme confidence backed by hardware-level biometric locks, dynamic tokenization, instant card freeze, and AI anti-fraud monitoring.",
    iconName: "ShieldCheck",
    category: "Offline & Security",
    badge: "PCI-DSS Level 1",
    highlights: [
      "Hardware Secure Enclave & Face ID / Fingerprint Auth",
      "Real-time AI behavioral anomaly fraud detection",
      "1-tap instant virtual/physical card lock & PIN change",
      "Continuous session monitoring & location verification",
    ],
    stats: { label: "Fraud Rate", value: "< 0.001%" },
  },
];

export const MINI_APPS: MiniAppItem[] = [
  {
    id: "airtime",
    name: "Airtime & Data",
    category: "Utilities",
    description: "Instant top-ups for Ethio Telecom & Safaricom with cashback",
    iconName: "PhoneCall",
    color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30",
    popular: true,
  },
  {
    id: "airlines",
    name: "Ethiopian Airlines",
    category: "Travel",
    description: "Book domestic & international flights directly in birr",
    iconName: "Plane",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    popular: true,
  },
  {
    id: "utilities",
    name: "Utility Bills",
    category: "Government & Utilities",
    description: "Electricity (EEU), Water & Sewerage, Traffic penalty pay",
    iconName: "Zap",
    color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    popular: true,
  },
  {
    id: "events",
    name: "Tickets & Cinema",
    category: "Entertainment",
    description: "Buy concert, theatre & Century Cinema movie tickets",
    iconName: "Ticket",
    color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
  },
  {
    id: "ecommerce",
    name: "Merchant Market",
    category: "Shopping",
    description: "Shop from hundreds of verified local brands with escrow pay",
    iconName: "ShoppingBag",
    color: "from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30",
  },
  {
    id: "eqwub",
    name: "Digital Eqwub",
    category: "Community Finance",
    description: "Join verified traditional rotating savings clubs securely",
    iconName: "Users",
    color: "from-rose-500/20 to-amber-500/20 text-rose-400 border-rose-500/30",
    popular: true,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Almaz Kebede",
    role: "E-commerce Entrepreneur, Addis Ababa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment:
      "Dashen SuperApp transformed my business payments. With zero downtime and integrated mini apps, my store handles thousands of daily transactions effortlessly.",
    verified: true,
  },
  {
    id: "2",
    name: "Dawit Haile",
    role: "Tech Consultant & Investor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment:
      "The USSD offline fallback feature is a true game changer when travelling outside major cities. You are never stranded without your money.",
    verified: true,
  },
  {
    id: "3",
    name: "Selamawit Tadesse",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    comment:
      "The dark mode UI, smooth animations, and in-chat transfer features feel like using a Silicon Valley fintech app tailored perfectly for Ethiopia.",
    verified: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What makes Dashen SuperApp different from traditional mobile banking?",
    answer:
      "Dashen SuperApp isn't just a balance checker; it is a full lifestyle financial ecosystem. It unifies banking, merchant shopping, flight booking, utility bills, digital Eqwub, chat transfers, and intelligent AI budgeting in a single high-speed dark mode app.",
  },
  {
    id: "faq-2",
    category: "Onboarding",
    question: "Do I need to visit a Dashen Bank branch to open an account?",
    answer:
      "No! With our AI-powered digital onboarding and Fayda National ID integration, you can open a fully verified tier-1 bank account in less than 60 seconds from anywhere in the world.",
  },
  {
    id: "faq-3",
    category: "Connectivity",
    question: "How does the offline / USSD mode work when I have no internet?",
    answer:
      "When your 4G/Wi-Fi connection drops, the app automatically switches to secure USSD (*996#) background transport. You can still send money, purchase airtime, and check your balances with 100% uptime across Ethiopia.",
  },
  {
    id: "faq-4",
    category: "Security",
    question: "Is my money and personal data secure on Dashen SuperApp?",
    answer:
      "Yes. Dashen SuperApp is built to PCI-DSS Level 1 compliance with end-to-end cryptographic encryption, biometric FaceID/Fingerprint authentication, hardware Secure Enclave isolation, and 24/7 AI fraud anomaly shields.",
  },
  {
    id: "faq-5",
    category: "Fees",
    question: "Are there fees for transferring money to other banks or telebirr?",
    answer:
      "Transfers between Dashen SuperApp accounts are completely free and instantaneous. Interoperable transfers via EthSwitch or telebirr follow official standard regulatory rates with full transparency before you confirm.",
  },
];
