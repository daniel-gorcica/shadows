const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");
const heroPhoto = document.querySelector(".hero-photo");
const sections = document.querySelectorAll("main section[id]");
const sectionLinks = document.querySelectorAll(".nav-links a[href^='#']");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealItems = document.querySelectorAll(
  ".section-kicker, h2, .intro-copy, .character-card, .world-art, .location-panel, .timeline-grid article, .cta"
);
revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (heroPhoto && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  window.addEventListener("scroll", () => {
    const offset = Math.min(window.scrollY * 0.08, 36);
    heroPhoto.style.transform = `scale(1.04) translateY(${offset}px)`;
  }, { passive: true });
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      sectionLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach((section) => sectionObserver.observe(section));
}
