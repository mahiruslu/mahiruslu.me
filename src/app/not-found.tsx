import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] w-full max-w-[1320px] flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">404</p>
      <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.92] tracking-[-0.03em] text-balance">
        This page <span className="italic text-accent">doesn&rsquo;t exist.</span>
      </h1>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
        <Link href="/" className="inline-flex min-h-11 items-center font-medium">
          <span className="link-underline">Home</span>
        </Link>
        <Link href="/projects" className="inline-flex min-h-11 items-center font-medium">
          <span className="link-underline">Projects</span>
        </Link>
      </div>
    </div>
  );
}
