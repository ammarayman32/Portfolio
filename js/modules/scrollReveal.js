/**
 * scrollReveal.js
 * Reveals elements marked with [data-reveal] as they scroll into view,
 * using IntersectionObserver for performance. Supports staggered groups
 * via [data-reveal-group], which auto-assigns incremental delays to children.
 */
import { qsa } from '../utils/dom.js';

export function initScrollReveal() {
  // Auto-stagger children inside any reveal group
  qsa('[data-reveal-group]').forEach((group) => {
    qsa('[data-reveal]', group).forEach((el, i) => {
      el.style.setProperty('--delay', `${i * 90}ms`);
    });
  });

  const targets = qsa('[data-reveal]');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}
