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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 9v9M6.5 6.5v.1M10.5 18v-9m0 4a4 4 0 0 1 8 0v5" /><circle cx="6.5" cy="6.5" r="1" /></svg>
      </a>
      <a className="contact-social-link social-mail" href="mailto:yumnahzahid2001@gmail.com" aria-label="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
      </a>
      <a className="contact-social-link social-whatsapp" href="https://wa.me/923361273335" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.8a8.2 8.2 0 1 1 16-3.5Z" /><path d="M9 8.5c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.8 1.2 1.4 2 1.9.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.1-.6 1.4-.5.5-1.2.7-2 .6-1.1-.2-2.4-.8-3.7-2-1.5-1.4-2.3-2.9-2.5-4-.1-.8.1-1.3.7-1.6Z" /></svg>
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
          <p className="mt-6 max-w-xl text-base leading-relaxed">Have a project, campaign, or story in mind? Share a few details and I’ll be glad to talk through how we can bring it to life.</p>
          <div className="mt-9 space-y-5">
            <a href="mailto:yumnahzahid2001@gmail.com" className="group flex items-center gap-4">
              <ContactIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></ContactIcon>
              <span><span className="block text-sm text-ink/55">Email</span><span className="mt-1 block font-medium text-ink transition-colors group-hover:text-bronze">yumnahzahid2001@gmail.com</span></span>
            </a>
            <div className="flex items-center gap-4">
              <ContactIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></ContactIcon>
              <span><span className="block text-sm text-ink/55">Based in</span><span className="mt-1 block font-medium text-ink">Karachi, Pakistan</span></span>
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

