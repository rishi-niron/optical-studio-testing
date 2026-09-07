export const metadata = {
  title: "Services | Optical Studio",
};

const SERVICES = [
  {
    title: "Eye Examinations",
    desc: "Comprehensive eye tests using the latest diagnostic technology.",
  },
  {
    title: "Frame Styling",
    desc: "One-on-one styling sessions to match frames to your face shape.",
  },
  {
    title: "Lens Fitting",
    desc: "Precision lens grinding and fitting for optimal comfort and clarity.",
  },
  {
    title: "Repairs & Adjustments",
    desc: "Quick repairs and adjustments to keep your glasses fitting perfectly.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Services
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        Everything you need for great eyewear, under one roof.
      </p>
      <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
              {s.title}
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
