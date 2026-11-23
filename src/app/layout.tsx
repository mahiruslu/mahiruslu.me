import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";

const display = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  applicationName: "Mahir Uslu Portfolio",
  title: {
    default: "Mahir Uslu | Senior Software Developer",
    template: "%s | Mahir Uslu",
  },
  description:
    "Portfolio of Mahir Uslu, a Senior Software Developer building React, React Native, TypeScript, Next.js, and mobile product experiences.",
  keywords: [
    "Mahir Uslu",
    "Senior Software Developer",
    "React Developer",
    "React Native Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Software Developer Türkiye",
    "Innovance Consultancy",
  ],
  authors: [{ name: profile.name, url: profile.linkedin.url }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/site-icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "portfolio",
  openGraph: {
    title: "Mahir Uslu | Senior Software Developer",
    description:
      "Senior Software Developer building React Native, web, and macOS products. Projects, experience, writing, and contact.",
    url: profile.siteUrl,
    siteName: "Mahir Uslu",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mahir Uslu, Senior Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahir Uslu | Senior Software Developer",
    description:
      "React Native, web, and macOS products by Mahir Uslu.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: profile.siteUrl,
    sameAs: [profile.linkedin.url, profile.github.url],
    worksFor: {
      "@type": "Organization",
      name: profile.currentCompany,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Selcuk University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Karabuk University",
      },
    ],
    knowsAbout: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Frontend Engineering",
      "Mobile Application Architecture",
    ],
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.getItem("mahir-theme");var m=t==="dark"||t==="light"?t:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=m;document.documentElement.style.colorScheme=m;}catch(e){document.documentElement.dataset.theme="light";document.documentElement.style.colorScheme="light";}',
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
