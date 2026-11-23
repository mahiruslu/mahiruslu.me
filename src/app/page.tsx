import Link from "next/link";
import portrait from "@/assets/images/profile.png";
import { ArrowUpRight } from "@/components/ExternalLink";
import { HeroPortrait, HeroTitle } from "@/components/HeroTitle";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
      <section className="grid min-h-[calc(100svh-var(--header-height))] content-between gap-12 pb-12 pt-10 sm:pt-14">
        <Reveal className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.12em] text-muted">
          <span>
            {profile.role} — {profile.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.availability}
          </span>
        </Reveal>

        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <HeroTitle lines={[{ text: "Mahir" }, { text: "Uslu", italic: true }]} />
          </div>
          <div className="w-full max-w-[300px] sm:max-w-[340px] lg:col-span-3 lg:col-start-10 lg:max-w-none">
            <HeroPortrait src={portrait} alt="Portrait of Mahir Uslu" />
          </div>
        </div>

        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
          <Reveal delay={0.45} className="lg:col-span-7">
            <p className="text-[clamp(1.25rem,2.2vw,1.625rem)] leading-snug text-ink text-pretty">
              Senior Software Developer at Innovance. I build React Native and
              web products for banking and wallets, and ship my own apps on the
              side — Nimbo, Bulgu, Kadraj.
            </p>
          </Reveal>
          <Reveal
            delay={0.55}
            className="flex flex-wrap items-start gap-x-8 gap-y-2 lg:col-span-4 lg:col-start-9 lg:justify-end"
          >
            <Link href="/projects" className="group inline-flex min-h-11 items-center gap-1.5 font-medium">
              <span className="link-underline">See projects</span>
              <ArrowUpRight className="rotate-45 text-muted transition-[translate,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
            <Link href="/contact" className="group inline-flex min-h-11 items-center gap-1.5 font-medium">
              <span className="link-underline">Get in touch</span>
              <ArrowUpRight className="rotate-45 text-muted transition-[translate,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pt-16" aria-labelledby="selected-work">
        <Reveal className="flex items-baseline justify-between gap-4">
          <h2 id="selected-work" className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            Selected work
          </h2>
          <Link href="/projects" className="text-sm text-ink-soft transition-colors duration-150 hover:text-ink">
            <span className="link-underline">All projects</span>
          </Link>
        </Reveal>

        <RevealGroup as="ol" className="mt-6 border-t border-line" stagger={0.07}>
          {featuredProjects.map((project, index) => (
            <RevealItem as="li" key={project.slug} className="border-b border-line">
              <Link
                href={`/projects/${project.slug}`}
                className="group grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="font-mono text-xs text-muted md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-0.02em] transition-colors duration-200 group-hover:text-accent md:col-span-5">
                  {project.name}
                </span>
                <span className="max-w-md text-ink-soft text-pretty md:col-span-5">
                  {project.caseStudy.summary}
                </span>
                <span className="hidden justify-self-end md:col-span-1 md:block">
                  <ArrowUpRight className="h-5 w-5 rotate-45 text-muted transition-[translate,color] duration-200 ease-out group-hover:translate-x-1 group-hover:text-accent" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <Reveal as="section" className="pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Contact</p>
        <Link
          href="/contact"
          className="group mt-5 inline-flex items-baseline gap-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em]"
        >
          <span>
            Have something in mind?{" "}
            <span className="italic text-accent">Let&rsquo;s talk.</span>
          </span>
        </Link>
      </Reveal>
    </div>
  );
}
