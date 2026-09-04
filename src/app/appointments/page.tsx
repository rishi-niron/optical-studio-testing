export const metadata = {
  title: "Appointments | Optical Studio",
};

const STEPS = [
  {
    step: "1. Choose a Service",
    desc: "Eye exam, frame fitting, or a repair consultation.",
  },
  {
    step: "2. Pick a Location & Time",
    desc: "Select the studio nearest you and a time that works.",
  },
  {
    step: "3. Confirm Your Details",
    desc: "We'll send a confirmation and reminder by email.",
  },
];

export default function AppointmentsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Book an Appointment
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
        Booking is quick and easy. Here's how it works.
      </p>
      <div className="mt-16 flex w-full max-w-2xl flex-col gap-6">
        {STEPS.map((s) => (
          <div
            key={s.step}
            className="flex flex-col gap-1 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
              {s.step}
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
      <a
        href="mailto:hello@opticalstudio.com"
        className="mt-12 flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Request an Appointment
      </a>
    </main>
  );
}
