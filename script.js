/* ========================================================================
   MEWM SA de CV — X-Perts Group
   Main JavaScript — No dependencies
   ======================================================================== */

(function () {
  'use strict';

  /* ============================
     THEME TOGGLE
     ============================ */
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('mewm-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('mewm-theme', next);
    });
  }

  /* ============================
     HEADER SCROLL EFFECT
     ============================ */
  const header = document.getElementById('site-header');
  let lastScrollY = 0;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  /* ============================
     ACTIVE NAV LINK
     ============================ */
  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = [];

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) {
        sections.push({ el: section, link: link, id: href });
      }
    }
  });

  function updateActiveNav() {
    const scrollY = window.scrollY + window.innerHeight * 0.3;

    let current = null;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollY >= sections[i].el.offsetTop) {
        current = sections[i];
        break;
      }
    }

    navLinks.forEach(function (l) { l.classList.remove('active'); });
    if (current) {
      current.link.classList.add('active');
    }
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(updateActiveNav);
  }, { passive: true });

  /* ============================
     MOBILE MENU
     ============================ */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('[data-mobile-nav]');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = mobileNav.classList.contains('open');

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });
  }

  function openMobileMenu() {
    mobileNav.classList.add('open');
    mobileMenuBtn.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNav.classList.remove('open');
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ============================
     SMOOTH SCROLL
     ============================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ============================
     SCROLL REVEAL ANIMATIONS
     ============================ */
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    reveals.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ============================
     COUNTER ANIMATION (Hero stats)
     ============================ */
  const heroStats = document.querySelectorAll('.hero__stat-value');

  function animateValue(el, start, end, duration, suffix) {
    suffix = suffix || '';
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * (end - start) + start);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  /* ============================
     PROCESS ITEMS HOVER EFFECT
     ============================ */
  const processItems = document.querySelectorAll('.process-item');
  processItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      this.style.borderColor = 'var(--brand-gold)';
    });
    item.addEventListener('mouseleave', function () {
      this.style.borderColor = '';
    });
  });

  /* ============================
     FORM HANDLING
     ============================ */
  window.handleFormSubmit = function (e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('#contact-submit');
    const originalText = submitBtn.innerHTML;

    // Simulate submission
    submitBtn.innerHTML = '<svg style="width:18px;height:18px;animation:spin 1s linear infinite" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Enviando...';
    submitBtn.disabled = true;

    setTimeout(function () {
      submitBtn.innerHTML = '✓ Mensaje Enviado';
      submitBtn.style.backgroundColor = '#22C55E';
      submitBtn.style.borderColor = '#22C55E';

      setTimeout(function () {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.borderColor = '';
        form.reset();
      }, 3000);
    }, 1500);
  };

  /* ============================
     IMAGE LAZY LOADING FALLBACK
     ============================ */
  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src;
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function (img) {
      imageObserver.observe(img);
    });
  }

  /* ============================
     ADD SPIN ANIMATION
     ============================ */
  const style = document.createElement('style');
  style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
  document.head.appendChild(style);

})();
