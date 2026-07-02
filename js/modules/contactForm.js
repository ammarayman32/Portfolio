/**
 * contactForm.js
 * Client-side validation and a simulated submit flow for the contact form.
 * No backend is wired up; this provides clear UX feedback only.
 */
import { qs } from '../utils/dom.js';

export function initContactForm() {
  const form = qs('#contact-form');
  const status = qs('.form-status', form || undefined);
  if (!form || !status) return;

  const setStatus = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = qs('#name', form).value.trim();
    const email = qs('#email', form).value.trim();
    const message = qs('#message', form).value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setStatus('Please fill in every field before sending.', 'error');
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus('Please enter a valid email address.', 'error');
      return;
    }

    const submitBtn = qs('button[type="submit"]', form);
    submitBtn.disabled = true;
    setStatus('Sending...', 'pending');

    // Simulated send — replace with a real API/email service later.
    setTimeout(() => {
      setStatus(`Thanks, ${name.split(' ')[0]}! Your message has been noted.`, 'success');
      form.reset();
      submitBtn.disabled = false;
    }, 900);
  });
}
