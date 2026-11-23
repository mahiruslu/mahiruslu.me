export default function BlogLoading() {
  return (
    <div
      className="mx-auto w-full max-w-[1320px] px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12"
      aria-busy="true"
      aria-label="Loading articles"
    >
      <div className="h-3 w-20 animate-pulse bg-line" />
      <div className="mt-6 h-24 max-w-3xl animate-pulse bg-line" />
      <div className="mt-16 border-t border-line">
        {[0, 1, 2].map((row) => (
          <div key={row} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-6">
            <div className="h-3 w-24 animate-pulse bg-line md:col-span-2" />
            <div className="space-y-3 md:col-span-9">
              <div className="h-8 w-3/4 animate-pulse bg-line" />
              <div className="h-4 w-full max-w-2xl animate-pulse bg-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
