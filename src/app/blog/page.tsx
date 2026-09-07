export const metadata = {
  title: "Blog | Optical Studio",
};

const POSTS = [
  {
    title: "How to Choose the Right Frame for Your Face Shape",
    date: "2026-08-12",
    excerpt: "A quick guide to matching frame silhouettes with common face shapes.",
  },
  {
    title: "Understanding Blue-Light Lenses",
    date: "2026-07-28",
    excerpt: "What blue-light filtering actually does, and who benefits most.",
  },
  {
    title: "Caring for Your Glasses: A Simple Routine",
    date: "2026-06-15",
    excerpt: "Five habits that keep your lenses scratch-free and frames aligned.",
  },
];

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Blog
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        Tips, insights, and stories from the Optical Studio team.
      </p>
      <div className="mt-16 flex w-full max-w-2xl flex-col gap-6">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              {post.date}
            </span>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
              {post.title}
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
