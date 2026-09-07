export const metadata = {
  title: "Pricing | Optical Studio",
};

const PLANS = [
  {
    name: "Essential",
    price: "$99",
    desc: "Single-vision lenses with a standard acetate frame.",
  },
  {
    name: "Signature",
    price: "$249",
    desc: "Premium frames with anti-glare, blue-light lenses.",
  },
  {
    name: "Bespoke",
    price: "$499",
    desc: "Fully custom frame fitting with progressive lenses.",
  },
];

export default function PricingPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Pricing
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        Simple, transparent pricing for every stage of your eyewear journey.
      </p>
      <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col gap-3 rounded-2xl border border-black/[.08] p-8 dark:border-white/[.145]"
          >
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
              {plan.name}
            </h2>
            <p className="text-3xl font-semibold text-black dark:text-zinc-50">
              {plan.price}
            </p>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {plan.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
