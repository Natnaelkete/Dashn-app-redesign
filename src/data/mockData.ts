import { FeatureItem, MetricItem, MiniAppItem, FaqItem, TestimonialItem, BlogPost } from "@/types";
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "budgeting-tips",
    title: "SMART COST SMART GROW",
    category: "Budgeting",
    readTime: "7 min",
    date: "May 20, 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80",
    featured: true,
    excerpt: "Discover how AI-driven predictive expense analytics and automated Eqwub saving pots can help you take complete control of your monthly finances.",
    author: {
      name: "Tigist Haile",
      role: "Head of Product Strategy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    tags: ["Financial Literacy", "AI Analytics", "Smart Savings"],
    content: [
      "Managing personal and household expenses in an evolving economy requires more than simple spreadsheets. With the launch of the latest intelligent budgeting engine on Dashen SuperApp, users gain real-time insight into cash outflows across merchants, utilities, and daily transfers.",
      "By leveraging automated machine learning models running locally on your device, every transaction is categorized into essentials, entertainment, savings, and investments. When your spending approaches custom-configured thresholds, predictive nudges advise you on cash conservation strategies.",
      "Furthermore, the integration of Digital Eqwub allows groups of family members, colleagues, and community members to pool funds with cryptographic certainty and automated escrow settlement, eliminating traditional ledger disputes."
    ],
  },
  {
    id: "agency-banking",
    title: "Cardless Banking & Agency Banking",
    category: "Innovation",
    readTime: "10 minutes",
    date: "Nov 27, 2025",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80",
    excerpt: "How Dashen Bank's nationwide network of verified agents and OTP-powered cardless withdrawals is closing the urban-rural financial divide.",
    author: {
      name: "Abebe Kebede",
      role: "VP of Retail Banking",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    tags: ["Agency Banking", "Financial Inclusion", "USSD"],
    content: [
      "Access to physical branches should never be a prerequisite for secure modern banking. Through Dashen's expanding agent network and cardless withdrawal mechanisms, customers in remote areas can deposit and withdraw cash instantly using single-use secure OTP codes.",
      "Even when internet infrastructure is degraded, transactions fallback to the encrypted *996# USSD gateway. Agents verify biometric tokens and national Fayda IDs to disburse funds safely, driving true financial inclusion from Merkato stalls to rural farming collectives.",
      "Cardless technology also protects users from physical card skim fraud while allowing friends and family without bank accounts to receive remittances at any authorized Dashen agent booth."
    ],
  },
  {
    id: "qr-payments",
    title: "QR Payments in Ethiopia: How Dashen Bank Is Driving Digital Adoption",
    category: "Technology",
    readTime: "5 minutes",
    date: "Nov 27, 2025",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Interoperable QR codes and instant merchant checkout are replacing physical cash across Ethiopian retail, supermarkets, and restaurants.",
    author: {
      name: "Daniel Solomon",
      role: "Lead Fintech Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    tags: ["QR Pay", "EthSwitch", "Cashless Economy"],
    content: [
      "The rapid shift from paper currency to digital point-of-sale has achieved a major milestone with Dashen Bank's unified interoperable QR payment standard. Compatible with national EthSwitch and Telebirr standards, merchants can now display a single static or dynamic QR code at the checkout counter.",
      "Customers simply aim their SuperApp camera, confirm biometric FaceID authorization, and settle transactions in sub-second speed with zero merchant processing delays.",
      "With instant SMS and push payment confirmations, merchants receive immediate settlement into their high-yield business accounts, reducing cash handling risks and reconciliation overhead."
    ],
  },
];
