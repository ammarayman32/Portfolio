/**
 * navbar.js
 * Handles the sticky navbar's scrolled state and active-link highlighting
 * based on which section is currently in view.
 */
import { qs, qsa, rafThrottle } from '../utils/dom.js';

export function initNavbar() {
  const navbar = qs('.navbar');
  if (!navbar) return;

  const navLinks = qsa('.navbar__link');
  const sections = navLinks
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  const onScroll = rafThrottle(() => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);
    updateActiveLink();
  });

  function updateActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let currentId = sections[0]?.id;

    for (const section of sections) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    }

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
