export default function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-black/[.08] py-8 text-sm text-zinc-500 dark:border-white/[.145]">
      © {new Date().getFullYear()} Optical Studio. All rights reserved.
    </footer>
  );
}
