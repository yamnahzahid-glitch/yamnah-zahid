"use client";

import { useEffect } from "react";

export default function PortfolioEnhancements() {
  useEffect(() => {
    const body = document.body;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clock = document.getElementById("clock");
    const menu = document.getElementById("mmenu");
    const burger = document.getElementById("burger") as HTMLButtonElement | null;
    const nav = document.getElementById("nav");
    const timelineList = document.querySelector<HTMLElement>(".xtl-list");
    const timelineProgress = document.querySelector<HTMLElement>(".xtl-progress");
    const animationFrames = new Set<number>();
    const timers = new Set<number>();
    let menuOpen = false;
    let lastScrollY = window.scrollY;
    let scrollFrame = 0;

    body.classList.add("js-enabled");

    const updateClock = () => {
      if (clock) {
        clock.textContent = new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Karachi",
        }).format(new Date());
      }
    };
    updateClock();
    const clockTimer = window.setInterval(updateClock, 30_000);

    const closeMenu = () => {
      menuOpen = false;
      menu?.classList.remove("open");
      menu?.setAttribute("aria-hidden", "true");
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Open menu");
    };

    const sectionByPath: Record<string, string> = {
      "/expertise": "capabilities",
    };
    const scrollToPath = (pathname: string, behavior: ScrollBehavior) => {
      const targetId = sectionByPath[pathname];
      if (!targetId) {
        if (pathname === "/") window.scrollTo({ top: 0, behavior });
        return;
      }
      document.getElementById(targetId)?.scrollIntoView({ behavior, block: "start" });
    };

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("#mmenu a")) closeMenu();

      // "Back to top" scrolls the current page rather than routing home.
      if (target.closest(".footer-toplink")) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
        return;
      }
      const anchor = target.closest<HTMLAnchorElement>("a[data-scroll]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !sectionByPath[href]) return;
      const section = document.getElementById(sectionByPath[href]);
      if (!section) return;
      event.preventDefault();
      closeMenu();
      if (window.location.pathname !== href) window.history.pushState({}, "", href);
      section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    };
    document.addEventListener("click", onDocumentClick);

    const onPopState = () => scrollToPath(window.location.pathname, reducedMotion ? "auto" : "smooth");
    window.addEventListener("popstate", onPopState);
    const initialSectionPath = sectionByPath[window.location.pathname];
    if (initialSectionPath) {
      window.requestAnimationFrame(() => {
        document.getElementById(initialSectionPath)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    }

    const onBurgerClick = () => {
      menuOpen = !menuOpen;
      menu?.classList.toggle("open", menuOpen);
      menu?.setAttribute("aria-hidden", String(!menuOpen));
      burger?.setAttribute("aria-expanded", String(menuOpen));
      burger?.setAttribute("aria-label", menuOpen ? "Close menu" : "Open menu");
      if (menuOpen) {
        menu?.querySelectorAll(".mm-link").forEach((link, index) => {
          const element = link as HTMLElement;
          element.style.opacity = "0";
          element.style.transform = "translateY(20px)";
          const timer = window.setTimeout(() => {
            element.style.transition = `opacity .45s ease ${index * 65}ms, transform .45s cubic-bezier(.16,1,.3,1) ${index * 65}ms`;
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }, 40);
          timers.add(timer);
        });
      }
    };
    burger?.addEventListener("click", onBurgerClick);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    const updateOnScroll = () => {
      scrollFrame = 0;
      const scrollY = window.scrollY;
      nav?.classList.toggle("hidden-nav", scrollY > 140 && scrollY > lastScrollY && !menuOpen);
      lastScrollY = scrollY;

      if (timelineList && timelineProgress) {
        if (reducedMotion) {
          timelineProgress.style.transform = "scaleY(1)";
        } else {
          const bounds = timelineList.getBoundingClientRect();
          const start = window.innerHeight * 0.72;
          const end = window.innerHeight * 0.6;
          const distance = Math.max(1, start - bounds.top + bounds.bottom - end);
          const progress = Math.min(1, Math.max(0, (start - bounds.top) / distance));
          timelineProgress.style.transform = `scaleY(${progress})`;
        }
      }
    };
    // Coalesce scroll work into one frame: the handler reads layout, so running
    // it per event forces a reflow on every wheel tick.
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateOnScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateOnScroll();

    const revealElements = document.querySelectorAll<HTMLElement>(".fade-up, .rl > span");
    let observer: IntersectionObserver | null = null;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            element.classList.add("is-visible");
            observer?.unobserve(element);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      revealElements.forEach((element) => observer?.observe(element));
    }

    const revealHero = () => {
      document.querySelectorAll<HTMLElement>("#top .rl > span, #top .hero-img-wrap").forEach((element) => {
        element.classList.add("is-visible");
      });
      document.querySelectorAll<HTMLElement>("#top .hero-el").forEach((element) => {
        element.classList.add("is-visible");
      });
    };

    revealHero();

    const contactForm = document.getElementById("contact-form") as HTMLFormElement | null;
    const onContactSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      if (!contactForm?.reportValidity()) return;
      const values = new FormData(contactForm);
      const fullName = `${values.get("firstName")} ${values.get("lastName")}`.trim();
      const subject = String(values.get("subject") ?? "");
      const message = String(values.get("message") ?? "");
      const email = String(values.get("email") ?? "");
      const bodyText = `Name: ${fullName}\nEmail: ${email}\n\n${message}`;
      window.location.href = `mailto:yumnahz2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    };
    contactForm?.addEventListener("submit", onContactSubmit);

    return () => {
      body.classList.remove("js-enabled");
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("keydown", onKeyDown);
      burger?.removeEventListener("click", onBurgerClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      contactForm?.removeEventListener("submit", onContactSubmit);
      window.clearInterval(clockTimer);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      timers.forEach(window.clearTimeout);
      animationFrames.forEach(window.cancelAnimationFrame);
      observer?.disconnect();
    };
  }, []);

  return null;
}
