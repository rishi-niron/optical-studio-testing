export const metadata = {
  title: "Terms of Service | Optical Studio",
};

export default function TermsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Terms of Service
        </h1>
        <p className="text-sm text-zinc-500">Last updated: September 4, 2026</p>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          By using Optical Studio&apos;s website and services, you agree to
          the following terms.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          Appointments
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Appointments may be rescheduled or cancelled up to 24 hours in
          advance without charge.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          Orders & Returns
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Custom-fitted eyewear is non-refundable once lenses have been cut.
          Frame-only exchanges are accepted within 14 days.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          Limitation of Liability
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Optical Studio is not liable for indirect damages arising from
          product misuse or delayed appointments.
        </p>
      </div>
    </main>
  );
}
