/**
 * main.js
 * Application entry point. Imports and initializes every feature module.
 * Loaded via <script type="module"> so ES module imports work natively.
 */
import { initNavbar } from './modules/navbar.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initScrollReveal } from './modules/scrollReveal.js';
import { initBackToTop } from './modules/backToTop.js';
import { initContactForm } from './modules/contactForm.js';

function init() {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initBackToTop();
  initContactForm();

  // Reveal hero content immediately (above the fold, no need to wait to scroll)
  document.body.classList.add('is-loaded');
}

document.addEventListener('DOMContentLoaded', init);
