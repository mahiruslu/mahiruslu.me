import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahiruslu.me"),
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
    "Senior Frontend Developer",
    "React Developer",
    "React Native Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Frontend Engineer Türkiye",
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
    title: "Mahir Uslu | Senior Frontend Developer",
    description:
      "Senior Frontend Developer portfolio: React, React Native, TypeScript, projects, career timeline, articles, and contact.",
    url: "https://mahiruslu.me",
    siteName: "Mahir Uslu",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mahir Uslu Senior Frontend Developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahir Uslu | Senior Frontend Developer",
    description:
      "React, React Native, TypeScript, and Next.js portfolio of Mahir Uslu.",
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
  themeColor: "#0b0f10",
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
    url: "https://mahiruslu.me",
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
      className={`${display.variable} ${body.variable}`}
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
          <div className="grain" aria-hidden="true" />
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
