/**
 * backToTop.js
 * Shows the back-to-top button after scrolling and scrolls smoothly to top on click.
 */
import { qs, rafThrottle } from '../utils/dom.js';

export function initBackToTop() {
  const btn = qs('.back-to-top');
  if (!btn) return;

  const onScroll = rafThrottle(() => {
    btn.classList.toggle('is-visible', window.scrollY > 480);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
