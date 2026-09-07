export const metadata = {
  title: "FAQ | Optical Studio",
};

const FAQS = [
  {
    q: "Do I need an appointment for an eye test?",
    a: "Walk-ins are welcome, but booking ahead guarantees your preferred time.",
  },
  {
    q: "How long does frame fitting take?",
    a: "Most fittings take 20-30 minutes, depending on customization.",
  },
  {
    q: "Do you offer prescription sunglasses?",
    a: "Yes, all our frames can be fitted with prescription sun lenses.",
  },
  {
    q: "What is your warranty policy?",
    a: "All frames come with a 1-year warranty against manufacturing defects.",
  },
];

export default function FaqPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Frequently Asked Questions
      </h1>
      <div className="mt-16 flex w-full max-w-2xl flex-col gap-6">
        {FAQS.map((item) => (
          <div
            key={item.q}
            className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <h2 className="text-base font-semibold text-black dark:text-zinc-50">
              {item.q}
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
