import { describe, expect, it } from "bun:test";
import { getMediumPosts } from "./blog.ts";

describe("getMediumPosts", () => {
  it("normalizes Medium proxy responses", async () => {
    const result = await getMediumPosts(async () => {
      return new Response(
        JSON.stringify({
          status: "ok",
          items: [
            {
              title: "A post",
              link: "https://medium.com/p/a-post",
              pubDate: "2024-01-02 00:00:00",
              description: "<p>Hello&nbsp;reader</p>",
            },
          ],
        }),
        { status: 200 },
      );
    });

    expect(result.error).toBeNull();
    expect(result.posts).toHaveLength(1);
    expect(result.posts[0].excerpt).toBe("Hello reader");
  });

  it("returns an empty fallback when the proxy fails", async () => {
    const result = await getMediumPosts(async () => {
      return new Response("Nope", { status: 503 });
    });

    expect(result.posts).toEqual([]);
    expect(result.error ?? "").toMatch(/503/);
  });
});
