import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PageIntro } from "@/components/PageIntro";
import { getMediumPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Medium articles by Mahir Uslu about React Native, frontend engineering, and software product delivery.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Mahir Uslu",
    description:
      "Articles by Mahir Uslu about React Native, frontend engineering, and software product delivery.",
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
    <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Writing"
        title="Notes from building software, teams, and product interfaces."
        description="Articles are fetched from Medium on the server and cached so the page remains fast."
      />

      {error ? (
        <div className="mt-10 border-2 border-ink bg-signal px-5 py-4 font-bold text-paper shadow-[8px_8px_0_#0b0f10]">
          Medium is not responding right now. Direct profile links are still
          available below.
        </div>
      ) : null}

      {posts.length === 0 ? (
        <div className="mt-10 border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_#0b0f10]">
          <p className="text-lg font-bold">No articles are available.</p>
          <p className="mt-2 text-ink-soft">
            Medium may be temporarily unavailable.
          </p>
          <div className="mt-5">
            <ExternalLink href="https://www.medium.com/@mahir.uslu/">
              Open Medium profile
            </ExternalLink>
          </div>
        </div>
      ) : (
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.link}
              className="group border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_#0b0f10] transition hover:-translate-y-1 hover:bg-acid"
            >
              <p className="text-sm font-black uppercase tracking-[0.16em] text-steel group-hover:text-ink">
                {dateFormatter.format(new Date(post.publishedAt))}
              </p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight">
                <a href={post.link} target="_blank" rel="noreferrer">
                  {post.title}
                </a>
              </h2>
              <p className="mt-4 line-clamp-3 text-base leading-7 text-ink-soft">
                {post.excerpt}
              </p>
              <div className="mt-6">
                <ExternalLink href={post.link}>Read on Medium</ExternalLink>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
