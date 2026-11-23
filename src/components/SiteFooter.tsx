import { ExternalLink } from "@/components/ExternalLink";
import { profile, socials } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
        <div className="space-y-1 text-sm text-ink-soft">
          <p className="font-display text-2xl text-ink">{profile.name}</p>
          <p>
            {profile.role} · {profile.location}
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <ul className="flex flex-wrap gap-x-5 text-sm">
            {socials.map((social) => (
              <li key={social.href}>
                <ExternalLink href={social.href}>{social.label}</ExternalLink>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
