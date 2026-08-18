/**
 * main.js — JavaScript principal
 * Vanilla JS, sem dependências externas.
 * Carregado com defer — não bloqueia renderização.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
});

/* ── Menu mobile ──────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const navList = document.querySelector('[data-nav-list]');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('nav__list--open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
}

/* ── Scroll suave para âncoras ────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
