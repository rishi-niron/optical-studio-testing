export const metadata = {
  title: "Careers | Optical Studio",
};

const OPENINGS = [
  {
    role: "Optometrist",
    location: "In-store",
    type: "Full-time",
  },
  {
    role: "Frame Designer",
    location: "Studio",
    type: "Full-time",
  },
  {
    role: "Customer Experience Associate",
    location: "In-store",
    type: "Part-time",
  },
];

export default function CareersPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Careers
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        Join a team dedicated to craft, care, and clarity.
      </p>
      <div className="mt-16 flex w-full max-w-2xl flex-col gap-4">
        {OPENINGS.map((job) => (
          <div
            key={job.role}
            className="flex flex-col gap-1 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145] sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
                {job.role}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {job.location}
              </p>
            </div>
            <span className="text-sm font-medium text-zinc-500">
              {job.type}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
