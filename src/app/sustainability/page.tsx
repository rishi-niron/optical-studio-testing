export const metadata = {
  title: "Sustainability | Optical Studio",
};

const PILLARS = [
  {
    title: "Recycled Materials",
    desc: "Many of our frames use recycled acetate and post-consumer plastics.",
  },
  {
    title: "Repair, Not Replace",
    desc: "Our in-studio repair service extends the life of every pair we sell.",
  },
  {
    title: "Local Sourcing",
    desc: "We partner with regional workshops to reduce shipping emissions.",
  },
];

export default function SustainabilityPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Sustainability
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        Small studio, big responsibility. Here's how we try to do better.
      </p>
      <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
              {p.title}
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
