/* ===================================================
   EduBridge — Shared App Logic
   =================================================== */

"use strict";

// ---------- LocalStorage helpers ----------
const Store = {
  get(key, fallback = null) {
    try { const v = localStorage.getItem('edubridge_' + key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('edubridge_' + key, JSON.stringify(value)); }
    catch { console.warn('LocalStorage unavailable'); }
  },
  update(key, updater, fallback) {
    const current = this.get(key, fallback);
    const updated = updater(current);
    this.set(key, updated);
    return updated;
  }
};

// ---------- Initial demo data ----------
const DEFAULT_PROGRESS = {
  name: "Alex",
  streak: 7,
  totalXP: 1240,
  completedLessons: 18,
  enrolledCourses: [
    { id: 'math', title: 'Mathematics Fundamentals', progress: 65, icon: '📐', color: '#0f2657' },
    { id: 'python', title: 'Python Programming', progress: 42, icon: '🐍', color: '#0d9488' },
    { id: 'science', title: 'Basic Science', progress: 80, icon: '🔬', color: '#7c3aed' },
    { id: 'english', title: 'English Communication', progress: 30, icon: '📚', color: '#d97706' }
  ],
  quizScores: [],
  completedTopics: [],
  badges: ['first_lesson', 'quiz_ace', 'streak_7'],
  studyPlan: [
    { time: '09:00', task: 'Algebra – Quadratic Equations', done: true },
    { time: '10:30', task: 'Python – Functions & Loops', done: false },
    { time: '14:00', task: 'Science – Periodic Table Quiz', done: false },
    { time: '16:00', task: 'English – Reading Comprehension', done: false }
  ]
};

function initProgress() {
  if (!Store.get('progress')) Store.set('progress', DEFAULT_PROGRESS);
}

// ---------- Navigation: active link ----------
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ---------- Mobile hamburger ----------
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('mobileNavClose');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => { nav.classList.toggle('open'); document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : ''; });
  if (closeBtn) closeBtn.addEventListener('click', () => { nav.classList.remove('open'); document.body.style.overflow = ''; });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); document.body.style.overflow = ''; }));
}

// ---------- Animate elements on scroll ----------
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('fade-in-up'); e.target.style.opacity = '1'; observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(el => { el.style.opacity = '0'; observer.observe(el); });
}

// ---------- Animated counters ----------
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ---------- Init on load ----------
document.addEventListener('DOMContentLoaded', () => {
  initProgress();
  setActiveNav();
  initHamburger();
  initScrollReveal();

  // Animate counters only if visible
  const statsSection = document.querySelector('.stats-bar');
  if (statsSection) {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(statsSection);
  }
});
