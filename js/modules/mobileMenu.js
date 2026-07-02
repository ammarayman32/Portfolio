/**
 * mobileMenu.js
 * Toggles the mobile navigation overlay and locks body scroll while open.
 */
import { qs, qsa } from '../utils/dom.js';

export function initMobileMenu() {
  const toggle = qs('.navbar__toggle');
  const links = qs('.navbar__links');
  if (!toggle || !links) return;

  const closeMenu = () => {
    toggle.classList.remove('is-open');
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    toggle.classList.add('is-open');
    links.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu whenever a nav link is tapped
  qsa('.navbar__link', links).forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}
