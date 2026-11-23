export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  type: "Mobile App" | "Desktop App" | "Web app" | "Website" | "Web";
  year: string;
  description: string;
  tags: string[];
  technologies: string[];
  links: ProjectLink[];
  source?: "github" | "portfolio" | "private" | "professional";
};

export const projects: Project[] = [
  {
    slug: "nimbo",
    name: "Nimbo World",
    type: "Mobile App",
    year: "2026",
    description:
      "A Turkish/English learning app for 3-6 year olds: activity packs of mini-games wrapped in an overworld, a gated parent area, and a one-time unlock. Fully on-device with no account, analytics, or ads, plus a Next.js content-authoring studio.",
    tags: ["kids", "education", "expo", "private repo"],
    technologies: ["React Native", "Expo", "TypeScript", "RevenueCat"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/nimbo-world-kids-learning/id6794716737",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.nimbo.kids",
      },
      { label: "Website", href: "https://nimboapp.vercel.app" },
    ],
    source: "private",
  },
  {
    slug: "bulgu",
    name: "Bulgu",
    type: "Mobile App",
    year: "2026",
    description:
      "An IBS app that measures food triggers through protocol-driven personal experiments instead of passive journaling. Encrypted on-device SQLite, an offline catalog of 14,000+ foods, Apple Health / Health Connect sync, clinician PDF reports, and a Plus subscription.",
    tags: ["health", "privacy", "expo", "private repo"],
    technologies: ["React Native", "Expo", "TypeScript", "SQLCipher", "RevenueCat"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6825457645" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.bulgu.app",
      },
      { label: "Website", href: "https://bulguapp.vercel.app" },
    ],
    source: "private",
  },
  {
    slug: "kadraj",
    name: "Kadraj",
    type: "Desktop App",
    year: "2026",
    description:
      "An open-source macOS screenshot tool: select, annotate in place, copy. Scrolling capture, offline OCR and QR, screen recording to MP4/GIF with mixed system and mic audio, pin to screen, and a color picker. Signed, notarized, and installable via Homebrew.",
    tags: ["macos", "open source", "productivity"],
    technologies: ["Swift", "SwiftUI", "AppKit", "ScreenCaptureKit"],
    links: [
      { label: "GitHub", href: "https://github.com/mahiruslu/kadraj" },
      {
        label: "Download",
        href: "https://github.com/mahiruslu/kadraj/releases/latest",
      },
    ],
    source: "github",
  },
  {
    slug: "swallet-samsung",
    name: "S Wallet",
    type: "Mobile App",
    year: "2025",
    description:
      "A Samsung wallet product built at Innovance, integrating payment systems, third-party SDKs, Kotlin native modules, and React Native bridge layers with a strong focus on mobile lifecycle reliability.",
    tags: ["wallet", "payments", "react native", "professional"],
    technologies: ["React Native", "TypeScript", "Kotlin", "Native Modules"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.pazarama.spay.prod&hl=tr&pli=1",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/s-wallet/id6743120875?l=tr",
      },
    ],
    source: "professional",
  },
  {
    slug: "besiktas-jk-mobile",
    name: "Besiktas JK Mobile",
    type: "Mobile App",
    year: "2024",
    description:
      "Production mobile application work for Besiktas JK, including reliable In-App Purchase flows, debugging, edge-case handling, and delivery of user-facing enhancements.",
    tags: ["sports tech", "iap", "mobile", "professional"],
    technologies: ["React Native", "TypeScript", "In-App Purchase", "Jest"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.besiktasjk&pcampaignid=web_share",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/de/app/bjk-superapp/id6737188199",
      },
    ],
    source: "professional",
  },
  {
    slug: "kyc-sdk-android",
    name: "KYC SDK",
    type: "Mobile App",
    year: "2026",
    description:
      "Internal native Android KYC SDK work built with Kotlin, focused on identity verification flows, secure document capture, lifecycle-safe integration, and reliable host-app embedding.",
    tags: ["kyc", "android", "kotlin", "internal"],
    technologies: ["Kotlin", "Android SDK", "Native Android", "KYC"],
    links: [],
    source: "professional",
  },
  {
    slug: "samsung-firsatlari",
    name: "Samsung Firsatlari",
    type: "Mobile App",
    year: "2025",
    description:
      "React Native work on Samsung Firsatlari, focused on production mobile user experiences, stable feature delivery, and integration quality.",
    tags: ["samsung", "react native", "mobile", "professional"],
    technologies: ["React Native", "TypeScript", "Mobile UX"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.samsung.sfirsat&hl=tr",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/samsung-f%C4%B1rsatlar%C4%B1/id6739693775",
      },
    ],
    source: "professional",
  },
  {
    slug: "akbank-atm",
    name: "Akbank ATM Interface",
    type: "Web app",
    year: "2022",
    description:
      "User-friendly ATM service interfaces developed and maintained with React as part of Innovance's banking product delivery.",
    tags: ["banking", "atm", "frontend", "professional"],
    technologies: ["React", "TypeScript", "Frontend Architecture"],
    links: [],
    source: "professional",
  },
  {
    slug: "tes-san",
    name: "TES-SAN",
    type: "Website",
    year: "2026",
    description:
      "Corporate website for a foundry equipment manufacturer: a Bun-managed Next.js App Router site with TypeScript, Tailwind CSS, native locale routing in Turkish, English, and Russian, and light/dark theming.",
    tags: ["website", "i18n", "private repo", "vercel"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: [{ label: "Visit", href: "https://www.tes-san.com.tr" }],
    source: "private",
  },
  {
    slug: "yuva-psikolojisi",
    name: "Yuva Psikolojisi",
    type: "Website",
    year: "2026",
    description:
      "Website for a psychology practice: a Next.js App Router site with a content-driven blog, structured data and OG images for SEO, RSS, light/dark theming, and a toggleable appointment system.",
    tags: ["website", "seo", "private repo", "vercel"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle"],
    links: [{ label: "Visit", href: "https://www.yuvapsikolojisi.com" }],
    source: "private",
  },
  {
    slug: "mustafa-besler-cnc",
    name: "Mustafa Besler CNC",
    type: "Website",
    year: "2026",
    description:
      "Website for a laser cutting and press brake bending workshop in OSTIM, Ankara: Next.js App Router with Cache Components, Tailwind CSS, and scroll-driven GSAP animations.",
    tags: ["website", "manufacturing", "private repo"],
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Lenis"],
    links: [{ label: "Visit", href: "https://mustafabeslercnc.com" }],
    source: "private",
  },
  {
    slug: "enn-mimarlik",
    name: "ENN Mimarlik",
    type: "Website",
    year: "2026",
    description:
      "a Bun-managed Next.js App Router site with TypeScript, Tailwind CSS",
    tags: ["website", "architecture", "private repo"],
    technologies: ["React", "Vercel"],
    links: [{ label: "Visit", href: "https://enn-mimarlik.vercel.app" }],
    source: "private",
  },
  {
    slug: "ekrem-tuncer",
    name: "Ekrem Tuncer",
    type: "Website",
    year: "2026",
    description:
      "a Bun-managed Next.js App Router site with TypeScript, Tailwind CSS",
    tags: ["website", "private repo", "vercel"],
    technologies: ["React", "Vercel"],
    links: [{ label: "Visit", href: "https://ekremtuncer.vercel.app" }],
    source: "private",
  },
  {
    slug: "mahiruslu-me",
    name: "mahiruslu.me",
    type: "Website",
    year: "2026",
    description:
      "The current portfolio rebuild: a Bun-managed Next.js App Router site with TypeScript, Tailwind CSS, static portfolio data, server-rendered Medium posts, and Vercel deployment.",
    tags: ["portfolio", "web", "nextjs"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Bun"],
    links: [
      { label: "GitHub", href: "https://github.com/mahiruslu/mahiruslu.me" },
      { label: "Website", href: "https://www.mahiruslu.com" },
    ],
    source: "github",
  },
  {
    slug: "voting-hardhat",
    name: "Voting Hardhat",
    type: "Web",
    year: "2025",
    description:
      "A TypeScript blockchain voting project using the Hardhat development workflow.",
    tags: ["web3", "typescript", "smart contracts"],
    technologies: ["TypeScript", "Hardhat"],
    links: [
      { label: "GitHub", href: "https://github.com/mahiruslu/voting-hardhat" },
    ],
    source: "github",
  },
  {
    slug: "boilerplate",
    name: "Boilerplate",
    type: "Web",
    year: "2024",
    description:
      "A TypeScript starter repository for repeatable web application setup and fast project initialization.",
    tags: ["starter", "typescript", "tooling"],
    technologies: ["TypeScript"],
    links: [
      { label: "GitHub", href: "https://github.com/mahiruslu/boilerplate" },
    ],
    source: "github",
  },
  {
    slug: "quizler",
    name: "Quizler",
    type: "Mobile App",
    year: "2022",
    description:
      "A cross-platform quiz and exam preparation app shipped to iOS and Android, with offline-ready local data and Firebase-backed services.",
    tags: ["android", "ios", "cross platform"],
    technologies: ["React Native", "Realm", "Firebase"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mahiruslu/qritic",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/ee/app/vip-ata-a%C3%B6f/id1613061900",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.app.examm&hl=tr&gl=US",
      },
    ],
    source: "portfolio",
  },
  {
    slug: "targreen",
    name: "targreen",
    type: "Web",
    year: "2022",
    description:
      "A promotional web presence for an international marketing business, built as a fast React experience with animated product storytelling.",
    tags: ["web"],
    technologies: ["React", "Firebase", "Framer Motion"],
    links: [
      { label: "GitHub", href: "https://github.com/mahiruslu/targreen" },
      { label: "Visit", href: "https://targreen.vercel.app" },
    ],
    source: "github",
  },
  {
    slug: "flex",
    name: "Flex",
    type: "Web app",
    year: "2021",
    description:
      "An employee operations platform covering time off, holidays, personal information, organization charts, access control integrations, reporting, and monthly work-hour calculations.",
    tags: ["web"],
    technologies: [".NET", "jQuery", "MSSQL"],
    links: [],
    source: "portfolio",
  },
  {
    slug: "sistem-makina",
    name: "Sistem Makina",
    type: "Website",
    year: "2021",
    description:
      "A promotional website for a local manufacturing business, focused on clear service presentation and direct customer discovery.",
    tags: ["web"],
    technologies: ["React"],
    links: [
      { label: "GitHub", href: "https://github.com/mahiruslu/sistem" },
      { label: "Visit", href: "https://www.sistemmakinakalip.com" },
    ],
    source: "github",
  },
  {
    slug: "takbak-optik",
    name: "Takbak Optik",
    type: "Website",
    year: "2021",
    description:
      "An e-commerce website for sunglasses, built with a commerce-ready content system and product catalog workflow.",
    tags: ["website", "wordpress"],
    technologies: ["WordPress", "WooCommerce"],
    links: [{ label: "Visit", href: "https://www.takbakoptik.com" }],
    source: "portfolio",
  },
  {
    slug: "investor",
    name: "Investor",
    type: "Mobile App",
    year: "2020",
    description:
      "An iOS investment tracking app that helps users consolidate assets, monitor total portfolio value, and understand profit over time.",
    tags: ["mobile", "ios"],
    technologies: ["Swift"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/investor-investment-tracking/id1514092400?ls=1",
      },
    ],
    source: "portfolio",
  },
];
