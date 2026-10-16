import type { ReactNode } from "react";

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

function ContactIcon({ children }: { children: ReactNode }) {
  return <span className="contact-detail-icon" aria-hidden="true">{children}</span>;
}

function SocialLinks() {
  return (
    <div className="contact-socials" aria-label="Social media links">
      <span className="contact-socials-label">Connect:</span>
      <a className="contact-social-link social-linkedin" href="https://www.linkedin.com/in/yumnah-zahid-741429285/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.337 7.433a2.062 2.062 0 1 0 0-4.124 2.062 2.062 0 0 0 0 4.124ZM3.555 9h3.564v11.452H3.555zM9.35 9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35z" /></svg>
      </a>
      <a className="contact-social-link social-mail" href="mailto:yumnahz2001@gmail.com" aria-label="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
      </a>
      <a className="contact-social-link social-whatsapp" href="https://wa.me/923361273335" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.94 9.94 0 0 0-8.53 15.04L2 22l5.12-1.34A9.94 9.94 0 1 0 12.04 2Zm0 18.05a8.08 8.08 0 0 1-4.12-1.13l-.3-.18-3.04.8.81-2.96-.2-.31A8.1 8.1 0 1 1 12.04 20.05Zm4.45-6.06c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>
      </a>
    </div>
  );
}

export default function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="contact" className={`contact-section py-20 md:py-28${standalone ? " contact-page-section" : ""}`}>
      <div className="mx-auto grid max-w-375 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
        <form id="contact-form" className="contact-form space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="contact-field"><label htmlFor="contact-first-name">First name</label><input id="contact-first-name" name="firstName" autoComplete="given-name" required /></div>
            <div className="contact-field"><label htmlFor="contact-last-name">Last name</label><input id="contact-last-name" name="lastName" autoComplete="family-name" required /></div>
          </div>
          <div className="contact-field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" required /></div>
          <div className="contact-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div>
          <div className="contact-field"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" required /></div>
          <button className="contact-submit" type="submit">Send message <span aria-hidden="true">↗</span></button>
          <p className="text-xs leading-relaxed">Your email app will open with your message ready to send.</p>
        </form>
        <div className="contact-copy lg:pl-2">
          <Eyebrow className="mb-5 text-bronze">Contact</Eyebrow>
          <h2 className="display">Let’s make<br /><em>something matter.</em></h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed">Open to communications, campaign strategy and content-systems roles, particularly in development and climate work. Share a few details about your campaign or brief and I’ll be glad to talk it through.</p>
          <div className="mt-9 space-y-5">
            <a href="mailto:yumnahz2001@gmail.com" className="group flex items-center gap-4">
              <ContactIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></ContactIcon>
              <span><span className="block text-sm text-ink/55">Email</span><span className="mt-1 block font-medium text-ink transition-colors group-hover:text-bronze">yumnahz2001@gmail.com</span></span>
            </a>
            <div className="flex items-center gap-4">
              <ContactIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></ContactIcon>
              <span><span className="block text-sm text-ink/55">Based in</span><span className="mt-1 block font-medium text-ink">Islamabad, Pakistan</span></span>
            </div>
            <a href="https://wa.me/923361273335" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
              <ContactIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.8a8.2 8.2 0 1 1 16-3.5Z" /></svg></ContactIcon>
              <span><span className="block text-sm text-ink/55">WhatsApp</span><span className="mt-1 block font-medium text-ink transition-colors group-hover:text-bronze">+92 336 1273335</span></span>
            </a>
            <a href="/resume.pdf" className="group flex items-center gap-4">
              <ContactIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5" /><path d="M12 11v6m0 0-2.2-2.2M12 17l2.2-2.2" /></svg></ContactIcon>
              <span><span className="block text-sm text-ink/55">Resume</span><span className="mt-1 block font-medium text-ink transition-colors group-hover:text-bronze">Download PDF</span></span>
            </a>
          </div>
          <div className="contact-rule my-8" />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

