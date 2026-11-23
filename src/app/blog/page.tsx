import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink } from "@/components/ExternalLink";
import { PageIntro } from "@/components/PageIntro";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { profile } from "@/data/profile";
import { getMediumPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles by Mahir Uslu on React Native, frontend engineering, and shipping software products.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Writing | Mahir Uslu",
    description:
      "Articles by Mahir Uslu on React Native, frontend engineering, and shipping software products.",
    url: "/blog",
  },
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default async function BlogPage() {
  const { posts, error } = await getMediumPosts();

  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
      <PageIntro
        eyebrow="Writing"
        title="Articles I’ve published on Medium."
      />

      {posts.length === 0 ? (
        <div className="mt-16 max-w-xl border-t border-line pt-8">
          <p className="text-lg">
            {error
              ? "Medium isn’t responding right now, so the list can't load."
              : "No articles to show yet."}
          </p>
          <ExternalLink href={profile.medium.url} className="mt-2">
            Read on Medium
          </ExternalLink>
        </div>
      ) : (
        <RevealGroup as="ol" className="mt-16 border-t border-line" stagger={0.06}>
          {posts.map((post) => (
            <RevealItem as="li" key={post.link} className="border-b border-line">
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="group relative grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-[scale] duration-300 ease-out group-hover:scale-x-100"
                />
                <time
                  dateTime={post.publishedAt}
                  className="font-mono text-xs uppercase tracking-[0.08em] text-muted md:col-span-2"
                >
                  {dateFormatter.format(new Date(post.publishedAt))}
                </time>
                <span className="md:col-span-9">
                  <span className="block font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.08] tracking-[-0.01em] transition-colors duration-200 group-hover:text-accent text-balance">
                    {post.title}
                  </span>
                  <span className="mt-3 line-clamp-2 block max-w-2xl leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </span>
                </span>
                <span className="hidden justify-self-end md:col-span-1 md:block">
                  <ArrowUpRight className="h-5 w-5 text-muted transition-[translate,color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </div>
  );
}
