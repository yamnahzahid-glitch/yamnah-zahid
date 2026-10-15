import Link from "next/link";
const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <>
      <header id="nav" className="fixed left-0 top-0 z-[70] flex w-full items-center justify-between px-6 text-ink md:px-12">
        <Link href="/" className="nav-logo leading-none" aria-label="Yumnah Zahid, home">
          Yumnah <span>Zahid</span>
        </Link>
        <nav className="hidden gap-5 text-[10px] uppercase tracking-[.25em] lg:flex lg:gap-6 xl:gap-8 2xl:gap-10" aria-label="Main navigation">
          {navigation.map((item) =>
            item.href === "/expertise"
              ? <a key={item.href} data-scroll href={item.href} className="u-link">{item.label}</a>
              : <Link key={item.href} href={item.href} className="u-link">{item.label}</Link>,
          )}
        </nav>
        <div className="hidden items-center gap-7 xl:flex">
          <span className="nav-meta">Karachi, PK <span className="mx-2 text-ink/25">—</span><span id="clock" /></span>
          <Link href="/contact" className="nav-cta">Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>
        <button
          id="burger"
          className="flex flex-col gap-1.25 p-2 lg:hidden"
          type="button"
          aria-label="Open menu"
          aria-controls="mmenu"
          aria-expanded="false"
        >
          <span className="block h-px w-7" />
          <span className="block h-px w-7" />
          <span className="block h-px w-7" />
        </button>
      </header>
      <div id="mmenu" className="fixed z-[65] flex flex-col text-paper" aria-label="Mobile navigation" aria-hidden="true">
        <nav className="flex flex-col" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            item.href === "/expertise" ? (
              <a
                key={item.href}
                data-scroll
                href={item.href}
                className={`mm-link display ${index < navigation.length - 1 ? "border-b border-paper/10" : ""}`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`mm-link display ${index < navigation.length - 1 ? "border-b border-paper/10" : ""}`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
        <p className="eyebrow mt-12">© 2026 Yumnah Zahid</p>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="contact-footer py-6">
      <div className="mx-auto max-w-375 px-6 md:px-12">
        <div className="flex flex-col gap-7 py-6 md:flex-row md:items-center md:justify-between md:py-9">
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-paper">Yumnah <span className="text-bronze">Zahid.</span></Link>
          <nav className="footer-nav flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer navigation">
            {navigation.map((item) =>
              item.href === "/expertise"
                ? <a key={item.href} data-scroll href={item.href}>{item.label}</a>
                : <Link key={item.href} href={item.href}>{item.label}</Link>,
            )}
          </nav>
          <a className="footer-toplink w-fit" href="#top">Back to top <span className="arrow" aria-hidden="true">↑</span></a>
        </div>
        <div className="flex flex-col gap-2 border-t border-paper/15 py-5 text-[11px] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Yumnah Zahid. All rights reserved.</span>
          <span>Marketing strategy &amp; creative direction <span className="mx-2 text-bronze">●</span> Karachi, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
