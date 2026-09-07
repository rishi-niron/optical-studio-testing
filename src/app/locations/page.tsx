export const metadata = {
  title: "Locations | Optical Studio",
};

const LOCATIONS = [
  {
    name: "Downtown Studio",
    address: "142 Market Street, San Francisco, CA",
    hours: "Mon-Sat, 10am - 7pm",
  },
  {
    name: "Riverside Studio",
    address: "88 Riverside Ave, Austin, TX",
    hours: "Mon-Sat, 10am - 6pm",
  },
  {
    name: "Uptown Studio",
    address: "27 Uptown Blvd, Chicago, IL",
    hours: "Tue-Sun, 11am - 7pm",
  },
];

export default function LocationsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Our Locations
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        Visit us in person to try on frames and get your eyes tested.
      </p>
      <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.name}
            className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
              {loc.name}
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {loc.address}
            </p>
            <p className="text-sm text-zinc-500">{loc.hours}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
