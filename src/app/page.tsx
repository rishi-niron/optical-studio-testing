export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <nav className="flex items-center justify-between px-8 py-6 sm:px-16">
        <span className="text-lg font-semibold tracking-tight text-black dark:text-zinc-50">
          Optical Studio
        </span>
        <div className="hidden gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:flex">
          <a href="#features" className="hover:text-black dark:hover:text-zinc-50">
            Features
          </a>
          <a href="#about" className="hover:text-black dark:hover:text-zinc-50">
            About
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-zinc-50">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Get in Touch
        </a>
      </nav>

      <main className="flex flex-1 flex-col items-center px-8 sm:px-16">
        <section className="flex max-w-3xl flex-col items-center gap-6 py-24 text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            See the world in perfect clarity
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Optical Studio designs and crafts precision eyewear, blending
            timeless style with modern lens technology.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Book an Eye Test
            </a>
            <a
              href="#features"
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 text-base font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              Learn More
            </a>
          </div>
        </section>

        <section
          id="features"
          className="grid w-full max-w-5xl grid-cols-1 gap-8 py-16 sm:grid-cols-3"
        >
          {[
            {
              title: "Handcrafted Frames",
              desc: "Each frame is shaped from premium acetate and titanium by skilled artisans.",
            },
            {
              title: "Precision Lenses",
              desc: "Custom-ground lenses tailored to your prescription and lifestyle.",
            },
            {
              title: "Personal Fitting",
              desc: "One-on-one consultations to find frames that fit your face and style.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
            >
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                {f.title}
              </h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {f.desc}
              </p>
            </div>
          ))}
        </section>

        <section
          id="about"
          className="flex w-full max-w-3xl flex-col items-center gap-4 py-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            About Optical Studio
          </h2>
          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Founded by a team of opticians and designers, Optical Studio
            brings decades of craft to every pair of glasses we make. We
            believe eyewear should be as unique as the person wearing it.
          </p>
        </section>

        <section
          id="contact"
          className="flex w-full max-w-2xl flex-col items-center gap-6 py-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Ready to see clearly?
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Book an appointment at our studio and let us help you find your
            perfect pair.
          </p>
          <a
            href="mailto:hello@opticalstudio.com"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            hello@opticalstudio.com
          </a>
        </section>
      </main>

      <footer className="flex items-center justify-center border-t border-black/[.08] py-8 text-sm text-zinc-500 dark:border-white/[.145]">
        © {new Date().getFullYear()} Optical Studio. All rights reserved.
      </footer>
    </div>
  );
}
