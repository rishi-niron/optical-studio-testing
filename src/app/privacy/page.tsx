export const metadata = {
  title: "Privacy Policy | Optical Studio",
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-24 sm:px-16">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Privacy Policy
        </h1>
        <p className="text-sm text-zinc-500">Last updated: September 4, 2026</p>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Optical Studio collects only the information needed to provide our
          services, such as appointment details and prescription records. We
          never sell your personal data to third parties.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          Information We Collect
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Name, contact details, prescription history, and appointment
          preferences submitted through our website or in-store.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          How We Use It
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          To schedule appointments, fulfill orders, and communicate updates
          about your eyewear.
        </p>
        <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
          Contact Us
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Questions about this policy can be sent to hello@opticalstudio.com.
        </p>
      </div>
    </main>
  );
}
