export const metadata = {
  title: "Brands | Optical Studio",
};

const BRANDS = [
  "Aurel & Co.",
  "Nordic Lens",
  "Meridian Eyewear",
  "Lucent Optics",
  "Fielding & Vale",
  "Solstice Frames",
];

export default function BrandsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Brands We Carry
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        We partner with designers who share our commitment to quality and craft.
      </p>
      <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
        {BRANDS.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center rounded-2xl border border-black/[.08] p-8 text-center text-sm font-medium text-zinc-600 dark:border-white/[.145] dark:text-zinc-400"
          >
            {brand}
          </div>
        ))}
      </div>
    </main>
  );
}
