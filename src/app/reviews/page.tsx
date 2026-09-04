export const metadata = {
  title: "Reviews | Optical Studio",
};

const REVIEWS = [
  {
    name: "Sofia Reyes",
    rating: 5,
    comment: "The staff helped me find frames that actually suit my face. Couldn't be happier.",
  },
  {
    name: "James Whitfield",
    rating: 5,
    comment: "Fast eye test and beautiful frame selection. My new go-to optician.",
  },
  {
    name: "Nina Patel",
    rating: 4,
    comment: "Great quality lenses, though the wait for pickup was a bit longer than expected.",
  },
  {
    name: "Tomasz Kowalski",
    rating: 5,
    comment: "Bespoke fitting was worth every penny. Glasses feel like they were made for me.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? "text-black dark:text-zinc-50"
              : "text-zinc-300 dark:text-zinc-700"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Customer Reviews
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        What our customers say about their Optical Studio experience.
      </p>
      <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <Stars rating={r.rating} />
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              &ldquo;{r.comment}&rdquo;
            </p>
            <span className="text-sm font-medium text-black dark:text-zinc-50">
              {r.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
