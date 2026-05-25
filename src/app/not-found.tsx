import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] w-full max-w-[1000px] flex-col justify-center px-5 py-16 sm:px-8">
      <p className="font-black uppercase tracking-[0.2em] text-signal">404</p>
      <h1 className="mt-4 font-display text-6xl font-black leading-none sm:text-8xl">
        This route is off the map.
      </h1>
      <p className="mt-5 max-w-2xl text-xl leading-8 text-ink-soft">
        The page may have moved during the rebuild. Start from the homepage or
        jump into the project index.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          className="border-2 border-ink bg-ink px-5 py-3 font-bold text-paper transition hover:-translate-y-1 hover:bg-signal hover:text-[var(--on-signal)]"
          href="/"
        >
          Home
        </Link>
        <Link
          className="border-2 border-ink bg-paper px-5 py-3 font-bold transition hover:-translate-y-1 hover:bg-acid hover:text-[var(--on-acid)]"
          href="/projects"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
