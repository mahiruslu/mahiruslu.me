export default function BlogLoading() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-12">
      <div className="h-5 w-36 animate-pulse bg-steel/30" />
      <div className="mt-5 h-20 max-w-3xl animate-pulse bg-steel/20" />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="h-56 animate-pulse border-2 border-ink bg-paper-muted" />
        <div className="h-56 animate-pulse border-2 border-ink bg-paper-muted" />
      </div>
    </div>
  );
}
