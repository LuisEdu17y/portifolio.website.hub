/**
 * Portfólio — Luís Eduardo Carvalho Ferreira
 * Main JavaScript
 */

(function () {
  'use strict';

  /* ── AOS Init ─────────────────────────────────────────────── */
  AOS.init({
    duration: 650,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  });

  /* ── Typed.js ─────────────────────────────────────────────── */
  const typedEl = document.getElementById('typed');
  if (typedEl && typeof Typed !== 'undefined') {
    new Typed('#typed', {
      strings: [
        'Full Stack',
        'Back-End Python',
        'FastAPI',
        'JavaScript',
        'em Crescimento',
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1800,
      startDelay: 400,
      loop: true,
      smartBackspace: true,
    });
  }

  /* ── Navbar: scroll state ────────────────────────────────── */
  const header = document.getElementById('header');

  function updateNavbar() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ── Active nav link on scroll ───────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function setActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) a.classList.add('active');
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  /* ── Mobile hamburger menu ───────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinksEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger && navLinksEl) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinksEl.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinksEl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', e => {
      if (!header.contains(e.target)) closeMobileMenu();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  /* ── Scroll top button ───────────────────────────────────── */
  const scrollTopBtn = document.getElementById('scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Smooth scroll for all anchor links ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href   = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
        10
      ) || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Code window 3D tilt ─────────────────────────────────── */
  const codeWindow = document.querySelector('.code-window');
  if (codeWindow) {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', e => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left)  / rect.width  - 0.5;
        const y = (e.clientY - rect.top)   / rect.height - 0.5;
        codeWindow.style.transform =
          'rotateY(' + (-x * 10) + 'deg) rotateX(' + (y * 6) + 'deg)';
      });
      heroSection.addEventListener('mouseleave', () => {
        codeWindow.style.transform = 'rotateY(-5deg) rotateX(3deg)';
      });
    }
  }

  /* ── Skill items staggered entrance ─────────────────────── */
  if ('IntersectionObserver' in window) {
    const skillItems = document.querySelectorAll('.skill-item');
    const skillObs   = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 55);
          skillObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-40px' });

    skillItems.forEach(item => {
      item.style.opacity    = '0';
      item.style.transform  = 'translateY(14px)';
      item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      skillObs.observe(item);
    });
  }

})();
