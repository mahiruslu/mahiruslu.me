import { ViewTransition } from "react";

/**
 * A project's name, tagged so it morphs between the list it was clicked in
 * and the case-study heading. The inline-block keeps the snapshot hugging the
 * text so the morph scales uniformly instead of stretching.
 */
export function ProjectName({ slug, name }: { slug: string; name: string }) {
  return (
    <ViewTransition name={`project-${slug}`} share="morph" default="none">
      <span className="inline-block">{name}</span>
    </ViewTransition>
  );
}
