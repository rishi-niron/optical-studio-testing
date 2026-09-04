export const metadata = {
  title: "Gallery | Optical Studio",
};

const ITEMS = Array.from({ length: 6 }, (_, i) => i + 1);

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Gallery
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        A look at some of our favorite frames and finishes.
      </p>
      <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3">
        {ITEMS.map((n) => (
          <div
            key={n}
            className="flex aspect-square items-center justify-center rounded-2xl border border-black/[.08] bg-zinc-50 text-zinc-400 dark:border-white/[.145] dark:bg-zinc-900"
          >
            Frame {n}
          </div>
        ))}
      </div>
    </main>
  );
}
