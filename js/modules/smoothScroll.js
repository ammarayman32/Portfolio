/**
 * smoothScroll.js
 * Smoothly scrolls to in-page anchor targets, offsetting for the fixed navbar.
 */
import { qsa } from '../utils/dom.js';

const NAVBAR_OFFSET = 76;

export function initSmoothScroll() {
  qsa('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}
