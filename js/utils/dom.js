/**
 * dom.js
 * Small, dependency-free DOM helper utilities shared across modules.
 */

/** Shorthand querySelector */
export const qs = (selector, scope = document) => scope.querySelector(selector);

/** Shorthand querySelectorAll -> real array */
export const qsa = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));

/** Throttle a function using requestAnimationFrame (good for scroll handlers) */
export function rafThrottle(fn) {
  let ticking = false;
  return (...args) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      fn(...args);
      ticking = false;
    });
  };
}
