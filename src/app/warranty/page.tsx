export const metadata = {
  title: "Warranty | Optical Studio",
};

export default function WarrantyPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Warranty
        </h1>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Every pair of glasses from Optical Studio is covered by our
          1-year manufacturing warranty, giving you peace of mind with
          every purchase.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          What's Covered
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Frame defects, hinge failures, and lens coating issues caused by
          manufacturing faults.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          What's Not Covered
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Accidental damage, loss, or normal wear and tear from daily use.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          Making a Claim
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Bring your glasses and proof of purchase to any studio location,
          or contact hello@opticalstudio.com.
        </p>
      </div>
    </main>
  );
}
