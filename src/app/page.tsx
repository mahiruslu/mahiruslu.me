import Image from "next/image";
import Link from "next/link";
import profile from "@/assets/images/profile.png";
import { MotionReveal } from "@/components/MotionReveal";
import { profile as profileData } from "@/data/profile";
import { projects } from "@/data/projects";
import { timeline } from "@/data/timeline";

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  const currentRole = timeline[0];

  return (
    <div className="mx-auto flex w-full max-w-[1560px] flex-col px-5 pb-20 pt-8 sm:px-8 lg:px-12">
      <section className="grid min-h-[calc(100svh-var(--header-height)-32px)] grid-rows-[1fr_auto] gap-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <MotionReveal className="space-y-8">
            <div className="inline-flex border-2 border-ink bg-acid px-3 py-2 text-sm font-black uppercase tracking-[0.18em] shadow-[6px_6px_0_#0b0f10]">
              {profileData.role}
            </div>
            <div className="space-y-5">
              <h1 className="max-w-5xl font-display text-[clamp(4rem,16vw,15rem)] font-black leading-[0.78] text-ink text-balance">
                Mahir Uslu
              </h1>
              <p className="max-w-3xl text-xl font-medium leading-8 text-ink-soft sm:text-2xl sm:leading-9">
                I build production web and mobile products from{" "}
                {profileData.location}, currently aligned with{" "}
                {profileData.currentCompany}. My work spans React, React
                Native, TypeScript, Node.js, product interfaces, and reliable
                delivery.
              </p>
            </div>
            <dl className="grid max-w-2xl grid-cols-3 border-2 border-ink bg-paper shadow-[7px_7px_0_#0b0f10]">
              <div className="border-r-2 border-ink p-4">
                <dt className="text-xs font-black uppercase tracking-[0.14em] text-steel">
                  GitHub
                </dt>
                <dd className="mt-1 font-display text-4xl font-black">
                  {profileData.github.publicRepos}
                </dd>
                <dd className="text-sm font-bold text-ink-soft">public repos</dd>
              </div>
              <div className="border-r-2 border-ink p-4">
                <dt className="text-xs font-black uppercase tracking-[0.14em] text-steel">
                  Followers
                </dt>
                <dd className="mt-1 font-display text-4xl font-black">
                  {profileData.github.followers}
                </dd>
                <dd className="text-sm font-bold text-ink-soft">developers</dd>
              </div>
              <div className="p-4">
                <dt className="text-xs font-black uppercase tracking-[0.14em] text-steel">
                  Status
                </dt>
                <dd className="mt-2 text-lg font-black">Hireable</dd>
                <dd className="text-sm font-bold text-ink-soft">GitHub signal</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3">
              <Link
                className="border-2 border-ink bg-ink px-5 py-3 font-bold text-paper transition hover:-translate-y-1 hover:bg-signal focus-visible:bg-signal"
                href="/projects"
              >
                View projects
              </Link>
              <Link
                className="border-2 border-ink bg-paper px-5 py-3 font-bold text-ink transition hover:-translate-y-1 hover:bg-acid"
                href="/contact"
              >
                Start a conversation
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12} className="relative">
            <div className="absolute -left-4 top-8 hidden h-24 w-24 border-2 border-ink bg-signal shadow-[6px_6px_0_#0b0f10] lg:block" />
            <div className="relative ml-auto max-w-[520px] border-2 border-ink bg-paper p-3 shadow-[12px_12px_0_#0b0f10]">
              <Image
                src={profile}
                alt="Portrait of Mahir Uslu"
                priority
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="aspect-square w-full object-cover"
              />
              <div className="grid grid-cols-2 border-x-2 border-b-2 border-ink bg-ink text-paper">
                <div className="border-r-2 border-paper/20 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-paper/70">
                    Current
                  </p>
                  <p className="mt-1 font-bold">{currentRole.name}</p>
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-paper/70">
                    Focus
                  </p>
                  <p className="mt-1 font-bold">{profileData.location}</p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        <div className="grid gap-3 border-y-2 border-ink py-4 md:grid-cols-[auto_1fr] md:items-center">
          <p className="font-black uppercase tracking-[0.2em] text-steel">
            Selected work
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                href="/projects"
                key={project.slug}
                className="group flex items-center justify-between gap-4 border-2 border-ink bg-paper px-4 py-3 transition hover:-translate-y-1 hover:bg-acid"
              >
                <span className="font-bold">{project.name}</span>
                <span className="text-sm font-semibold text-steel group-hover:text-ink">
                  {project.year}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
