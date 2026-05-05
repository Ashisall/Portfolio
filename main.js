// ── Hamburger menu ──────────────────────────
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.classList.toggle('nav__hamburger--open', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
      hamburger.setAttribute('aria-expanded', false);
      hamburger.classList.remove('nav__hamburger--open');
    });
  });
}

// Tab filtering
const tabs = document.querySelectorAll('.work__tab');
const cards = document.querySelectorAll('.card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('work__tab--active'));
    tab.classList.add('work__tab--active');

    const filter = tab.dataset.filter;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('card--hidden', !match);
    });
  });
});

// Smooth nav link highlight on scroll
const sections       = document.querySelectorAll('section[id]');
const navAnchorLinks = document.querySelectorAll('.nav__links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchorLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--purple)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));
