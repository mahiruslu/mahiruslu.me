export type MediumPost = {
  title: string;
  link: string;
  publishedAt: string;
  excerpt: string;
};

type RssToJsonItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  content?: string;
};

type RssToJsonResponse = {
  status?: string;
  items?: RssToJsonItem[];
};

type BlogFetchResult = {
  posts: MediumPost[];
  error: string | null;
};

const mediumFeedUrl = "https://medium.com/feed/@mahir.uslu";
const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  mediumFeedUrl,
)}`;

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function normalizePost(item: RssToJsonItem): MediumPost | null {
  if (!item.title || !item.link || !item.pubDate) {
    return null;
  }

  const rawExcerpt = item.description || item.content || "";

  return {
    title: stripHtml(item.title),
    link: item.link,
    publishedAt: item.pubDate,
    excerpt: stripHtml(rawExcerpt).slice(0, 220),
  };
}

export async function getMediumPosts(
  fetcher: typeof fetch = fetch,
): Promise<BlogFetchResult> {
  try {
    const response = await fetcher(rssToJsonUrl, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`Medium proxy returned ${response.status}`);
    }

    const payload = (await response.json()) as RssToJsonResponse;

    if (payload.status && payload.status !== "ok") {
      throw new Error(`Medium proxy status: ${payload.status}`);
    }

    const posts = (payload.items ?? [])
      .map(normalizePost)
      .filter((post): post is MediumPost => Boolean(post));

    return { posts, error: null };
  } catch (error) {
    return {
      posts: [],
      error: error instanceof Error ? error.message : "Unable to load posts",
    };
  }
}
