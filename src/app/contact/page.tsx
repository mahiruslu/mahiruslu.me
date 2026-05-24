import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ExternalLink } from "@/components/ExternalLink";
import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mahir Uslu for React, React Native, frontend, web, and mobile product work.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Mahir Uslu",
    description:
      "Contact Mahir Uslu for React, React Native, frontend, web, and mobile product work.",
    url: "/contact",
  },
};

const channels = [
  {
    label: "LinkedIn",
    href: profile.linkedin.url,
  },
  {
    label: "GitHub",
    href: profile.github.url,
  },
  {
    label: "Medium",
    href: "https://www.medium.com/@mahir.uslu/",
  },
  {
    label: "Email",
    href: "mailto:mhrsl07@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
      <div>
        <PageIntro
          eyebrow="Contact"
          title="Tell me what you are building."
          description={`${profile.linkedin.publicSummary}. The form validates locally and opens a prepared WhatsApp message.`}
        />
        <div className="mt-10 grid gap-3 border-t-2 border-ink pt-6">
          {channels.map((channel) => (
            <ExternalLink key={channel.href} href={channel.href}>
              {channel.label}
            </ExternalLink>
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
