import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ExternalLink } from "@/components/ExternalLink";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { profile, socials } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mahir Uslu about React Native, web, and mobile product work.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Mahir Uslu",
    description:
      "Get in touch with Mahir Uslu about React Native, web, and mobile product work.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-[1320px] gap-16 px-5 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-5">
        <PageIntro
          eyebrow="Contact"
          title="Let’s talk."
          description="Have a product or a role in mind? The form opens a prepared WhatsApp message — or email me directly."
        />
        <Reveal delay={0.15} className="mt-12 border-t border-line pt-6">
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-tight"
          >
            <span className="link-underline">{profile.email}</span>
          </a>
          <ul className="mt-4 flex flex-wrap gap-x-6 text-sm">
            {socials.map((social) => (
              <li key={social.href}>
                <ExternalLink href={social.href}>{social.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7 lg:pt-10">
        <ContactForm />
      </Reveal>
    </div>
  );
}
