const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const rtl = () => document.documentElement.dir === 'rtl';

// ── Smooth scroll (Lenis, optional) ─────────────────────────
let lenis = null;
if (window.Lenis && !reduce) {
  lenis = new Lenis({ lerp: 0.11 });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', (e) => {
  const target = document.querySelector(a.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  closeDock();
  if (lenis) lenis.scrollTo(target, { offset: target.id === 'top' ? 0 : -20 });
  else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}));

// ── Reveal on scroll ────────────────────────────────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
document.querySelectorAll('.rise').forEach(el => io.observe(el));

// ── Hero fan of project cards ───────────────────────────────
const fan = document.querySelector('.fan');
const cards = fan ? [...fan.querySelectorAll('.fan__card')] : [];
let active = Math.floor(cards.length / 2), timer = null, dragged = false;
function layoutFan() {
  const n = cards.length;
  cards.forEach((c, i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    c.style.setProperty('--d', rtl() ? -d : d);
    c.style.setProperty('--a', Math.abs(d));
    c.classList.toggle('is-active', d === 0);
    c.classList.toggle('is-off', Math.abs(d) > 2);
    c.tabIndex = d === 0 ? 0 : -1;
  });
}
function go(step) { active = (active + step + cards.length) % cards.length; layoutFan(); }
function play() { if (reduce || !cards.length) return; stop(); timer = setInterval(() => go(1), 3400); }
function stop() { clearInterval(timer); }
if (fan) {
  layoutFan(); play();
  fan.addEventListener('mouseenter', stop);
  fan.addEventListener('mouseleave', play);
  let x0 = null;
  fan.addEventListener('pointerdown', e => { x0 = e.clientX; dragged = false; });
  fan.addEventListener('pointerup', e => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 36) { dragged = true; go((dx < 0 ? 1 : -1) * (rtl() ? -1 : 1)); }
  });
  cards.forEach((c, i) => c.addEventListener('click', e => {
    if (dragged) { e.preventDefault(); dragged = false; return; }
    if (i !== active) { e.preventDefault(); active = i; layoutFan(); }
  }));
  fan.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') go(rtl() ? -1 : 1);
    if (e.key === 'ArrowLeft') go(rtl() ? 1 : -1);
  });
}

// ── Statement: words light up as you scroll ─────────────────
const statement = document.querySelector('[data-reveal]');
let words = [];
function splitStatement() {
  if (!statement) return;
  statement.innerHTML = statement.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
  words = [...statement.querySelectorAll('.w')];
}

// ── Dock: where you are in the page ─────────────────────────
const dock = document.getElementById('dock');
const menuBtn = document.getElementById('dock-menu');
const sections = [...document.querySelectorAll('[data-section]')];
const steps = [...document.querySelectorAll('.step')];
const ring = document.querySelector('.dock__ring');
const whereName = document.getElementById('where-name');
const wherePct = document.getElementById('where-pct');
const cases = [...document.querySelectorAll('.case')];

function closeDock() { if (!dock) return; dock.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
if (menuBtn) {
  menuBtn.addEventListener('click', () => { const o = dock.classList.toggle('is-open'); menuBtn.setAttribute('aria-expanded', o); });
  document.addEventListener('click', e => { if (!dock.contains(e.target)) closeDock(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDock(); });
}

function track() {
  const vh = window.innerHeight, y = window.scrollY;
  const max = document.documentElement.scrollHeight - vh;
  const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
  const finished = p > 0.995;
  const line = y + vh * 0.45;
  let current = 0;
  sections.forEach((s, i) => { if (s.offsetTop <= line) current = i; });
  if (finished) current = sections.length - 1;

  steps.forEach((s, i) => {
    s.classList.toggle('is-done', i < current || (finished && i === current));
    s.classList.toggle('is-current', i === current && !finished);
  });
  if (ring) ring.style.setProperty('--p', p);
  if (dock) dock.classList.toggle('is-finished', finished);
  if (wherePct) wherePct.textContent = Math.round(p * 100) + '%';
  if (whereName) {
    const key = finished ? 'finished' : 'step-' + (current + 1);
    whereName.dataset.i18n = key;
    const tr = window.translations || (typeof translations !== 'undefined' ? translations : null);
    const lang = document.documentElement.lang;
    if (tr && tr[lang] && tr[lang][key]) whereName.textContent = tr[lang][key];
  }

  if (statement && words.length && !reduce) {
    const r = statement.getBoundingClientRect();
    const prog = (vh * 0.82 - r.top) / (r.height + vh * 0.3);
    const lit = Math.round(Math.min(1, Math.max(0, prog)) * words.length);
    words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
  }

  // stacked cards ease back a little as the next one covers them
  if (window.innerWidth > 860 && !reduce) {
    cases.forEach((c, i) => {
      const next = cases[i + 1];
      if (!next) return;
      const gap = next.getBoundingClientRect().top - c.getBoundingClientRect().top;
      const k = Math.min(1, Math.max(0, 1 - gap / c.offsetHeight));
      c.style.transform = `scale(${1 - k * 0.05})`;
      c.style.filter = `brightness(${1 - k * 0.06})`;
    });
  }
}
let ticking = false;
const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { track(); ticking = false; }); };
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', track);
window.addEventListener('load', track);
document.addEventListener('langchange', () => { splitStatement(); layoutFan(); track(); });
splitStatement();
track();
