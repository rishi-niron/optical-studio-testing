export const metadata = {
  title: "Team | Optical Studio",
};

const TEAM = [
  { name: "Ava Chen", role: "Founder & Optician" },
  { name: "Marcus Reid", role: "Lead Frame Designer" },
  { name: "Priya Sharma", role: "Optometrist" },
  { name: "Leo Martins", role: "Studio Manager" },
];

export default function TeamPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Our Team
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        The people behind every pair of glasses we craft.
      </p>
      <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="flex flex-col gap-1 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
              {member.name}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
