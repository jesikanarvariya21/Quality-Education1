/* ===================================================
   EduBridge — Resources Page Logic
   =================================================== */
"use strict";

const RESOURCES_EN = [
  { id: 1, title: 'Algebra — Complete Notes', subject: 'math', type: 'notes', level: 'beginner', icon: '📐', iconBg: 'rgba(15,38,87,.1)', lang: 'en', desc: 'Comprehensive notes covering variables, equations, inequalities, and word problems.', tags: ['Class 9', 'Free', 'Download'] },
  { id: 2, title: 'Fractions & Decimals Practice Set', subject: 'math', type: 'practice', level: 'beginner', icon: '🔢', iconBg: 'rgba(15,38,87,.1)', lang: 'en', desc: '50 practice questions with step-by-step solutions. Great for exam preparation.', tags: ['Class 6–8', 'Free'] },
  { id: 3, title: 'Geometry — Shapes, Areas & Volumes', subject: 'math', type: 'notes', level: 'intermediate', icon: '📏', iconBg: 'rgba(15,38,87,.1)', lang: 'en', desc: 'Covers 2D and 3D shapes, formulas for area and volume, with diagrams.', tags: ['Class 9–10', 'Free'] },
  { id: 4, title: 'Quadratic Equations — Video Series', subject: 'math', type: 'video', level: 'intermediate', icon: '🎥', iconBg: 'rgba(15,38,87,.1)', lang: 'en', desc: '12-part video series explaining factoring, completing the square, and the quadratic formula.', tags: ['Class 10', 'Video'] },
  { id: 5, title: 'Statistics & Probability Tutorial', subject: 'math', type: 'tutorial', level: 'advanced', icon: '📊', iconBg: 'rgba(15,38,87,.1)', lang: 'en', desc: 'Learn mean, median, mode, and basic probability with real-world examples.', tags: ['Class 11–12', 'Free'] },

  { id: 6, title: 'Cell Biology — Complete Notes', subject: 'science', type: 'notes', level: 'beginner', icon: '🔬', iconBg: 'rgba(124,58,237,.1)', lang: 'en', desc: 'Detailed notes on cell structure, organelles, cell division, and functions.', tags: ['Class 9', 'Free'] },
  { id: 7, title: 'Periodic Table — Visual Guide', subject: 'science', type: 'notes', level: 'beginner', icon: '⚗️', iconBg: 'rgba(124,58,237,.1)', lang: 'en', desc: 'Colorful visual guide to the periodic table with element properties and memory tips.', tags: ['Class 9–10', 'Free'] },
  { id: 8, title: 'Newton\'s Laws of Motion — Tutorial', subject: 'science', type: 'tutorial', level: 'intermediate', icon: '🍎', iconBg: 'rgba(124,58,237,.1)', lang: 'en', desc: 'Interactive tutorial covering all three laws with animations and problem sets.', tags: ['Class 9', 'Physics'] },
  { id: 9, title: 'Chemistry: Acids, Bases & Salts', subject: 'science', type: 'practice', level: 'intermediate', icon: '🧪', iconBg: 'rgba(124,58,237,.1)', lang: 'en', desc: '60 practice MCQs with explanations on pH, indicators, and common reactions.', tags: ['Class 10', 'Free'] },
  { id: 10, title: 'Human Body Systems — Video Lessons', subject: 'science', type: 'video', level: 'beginner', icon: '🫀', iconBg: 'rgba(124,58,237,.1)', lang: 'en', desc: 'Animated video lessons on digestive, circulatory, and respiratory systems.', tags: ['Class 8–10', 'Video'] },

  { id: 11, title: 'Python Programming — Beginner Guide', subject: 'programming', type: 'notes', level: 'beginner', icon: '🐍', iconBg: 'rgba(13,148,136,.1)', lang: 'en', desc: 'Introduction to Python: variables, data types, loops, functions, and basic projects.', tags: ['Class 11+', 'Free'] },
  { id: 12, title: 'Web Development with HTML & CSS', subject: 'programming', type: 'tutorial', level: 'beginner', icon: '🌐', iconBg: 'rgba(13,148,136,.1)', lang: 'en', desc: 'Build your first website from scratch. Covers HTML5, CSS3, and basic JavaScript.', tags: ['Class 11+', 'Project-based'] },
  { id: 13, title: 'Data Science Fundamentals', subject: 'programming', type: 'notes', level: 'advanced', icon: '📈', iconBg: 'rgba(13,148,136,.1)', lang: 'en', desc: 'Introduction to data analysis, visualization, and machine learning concepts.', tags: ['Class 12+', 'Advanced'] },
  { id: 14, title: 'JavaScript — Hands-On Practice', subject: 'programming', type: 'practice', level: 'intermediate', icon: '🟨', iconBg: 'rgba(13,148,136,.1)', lang: 'en', desc: '40 coding exercises covering DOM manipulation, events, and async programming.', tags: ['Class 11+', 'Practice'] },

  { id: 15, title: 'English Grammar — Complete Guide', subject: 'english', type: 'notes', level: 'beginner', icon: '📝', iconBg: 'rgba(217,119,6,.1)', lang: 'en', desc: 'Covers tenses, parts of speech, sentence construction, and common errors.', tags: ['Class 6–10', 'Free'] },
  { id: 16, title: 'Reading Comprehension Practice', subject: 'english', type: 'practice', level: 'intermediate', icon: '📖', iconBg: 'rgba(217,119,6,.1)', lang: 'en', desc: '25 passages with questions and answer keys. Builds vocabulary and inference skills.', tags: ['Class 8–12', 'Free'] },
  { id: 17, title: 'Essay Writing Masterclass', subject: 'english', type: 'tutorial', level: 'intermediate', icon: '✍️', iconBg: 'rgba(217,119,6,.1)', lang: 'en', desc: 'Learn to structure essays, write strong introductions, and express arguments clearly.', tags: ['Class 10–12', 'Exam Prep'] },
  { id: 18, title: 'Vocabulary Building — Word Lists', subject: 'english', type: 'notes', level: 'beginner', icon: '🔤', iconBg: 'rgba(217,119,6,.1)', lang: 'en', desc: '500 most common English words with meanings, usage, and mnemonics.', tags: ['All Levels', 'Free'] },

  { id: 19, title: 'Indian History — Ancient to Modern', subject: 'social', type: 'notes', level: 'intermediate', icon: '🏛️', iconBg: 'rgba(220,38,38,.1)', lang: 'en', desc: 'Comprehensive notes covering Indus Valley to Independence Movement.', tags: ['Class 9–10', 'Free'] },
  { id: 20, title: 'Geography of India — Visual Notes', subject: 'social', type: 'notes', level: 'beginner', icon: '🗺️', iconBg: 'rgba(220,38,38,.1)', lang: 'en', desc: 'Maps, diagrams, and notes on Indian geography: rivers, mountains, climate zones.', tags: ['Class 9', 'With Maps'] },
  { id: 21, title: 'Civics — Indian Constitution Basics', subject: 'social', type: 'tutorial', level: 'beginner', icon: '⚖️', iconBg: 'rgba(220,38,38,.1)', lang: 'en', desc: 'Introduction to the Indian Constitution, fundamental rights, and democracy.', tags: ['Class 9–10', 'Free'] }
];

const RESOURCES_HI = [
  { id: 101, title: 'बीजगणित — पूर्ण नोट्स', subject: 'math', type: 'notes', level: 'beginner', icon: '📐', iconBg: 'rgba(15,38,87,.1)', lang: 'hi', desc: 'चर, समीकरण और असमानताओं को सरल भाषा में समझाने वाले विस्तृत नोट्स।', tags: ['कक्षा 9', 'निःशुल्क'] },
  { id: 102, title: 'विज्ञान — कोशिका संरचना', subject: 'science', type: 'notes', level: 'beginner', icon: '🔬', iconBg: 'rgba(124,58,237,.1)', lang: 'hi', desc: 'कोशिका के भागों और उनके कार्यों की सरल व्याख्या हिंदी में।', tags: ['कक्षा 9', 'निःशुल्क'] },
  { id: 103, title: 'Python प्रोग्रामिंग — परिचय', subject: 'programming', type: 'notes', level: 'beginner', icon: '🐍', iconBg: 'rgba(13,148,136,.1)', lang: 'hi', desc: 'Python की मूल बातें: वेरिएबल, लूप, और फ़ंक्शन — हिंदी में।', tags: ['कक्षा 11+', 'निःशुल्क'] },
  { id: 104, title: 'अंग्रेज़ी व्याकरण — आसान गाइड', subject: 'english', type: 'notes', level: 'beginner', icon: '📝', iconBg: 'rgba(217,119,6,.1)', lang: 'hi', desc: 'काल, विराम चिह्न, और वाक्य निर्माण — हिंदी में।', tags: ['कक्षा 6–10', 'निःशुल्क'] },
  { id: 105, title: 'भारत का इतिहास — सारांश', subject: 'social', type: 'notes', level: 'intermediate', icon: '🏛️', iconBg: 'rgba(220,38,38,.1)', lang: 'hi', desc: 'प्राचीन से आधुनिक भारत तक का इतिहास — सरल हिंदी में।', tags: ['कक्षा 9–10', 'निःशुल्क'] },
  { id: 106, title: 'गणित अभ्यास प्रश्न — भिन्न', subject: 'math', type: 'practice', level: 'beginner', icon: '🔢', iconBg: 'rgba(15,38,87,.1)', lang: 'hi', desc: '50 अभ्यास प्रश्न हल सहित — हिंदी में।', tags: ['कक्षा 6–8', 'निःशुल्क'] }
];

let currentLang    = 'en';
let activeSubject  = 'all';
let activeLevel    = 'all';
let activeType     = 'all';
let searchQuery    = '';

document.addEventListener('DOMContentLoaded', () => {
  // Pre-select subject from URL query param
  const params = new URLSearchParams(location.search);
  const subParam = params.get('subject');
  if (subParam) { activeSubject = subParam; updateChips('subjectFilter', subParam); }
  renderResources();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => { searchQuery = e.target.value.toLowerCase(); renderResources(); });
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') applyFilters(); });
  }
});

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('langEn').classList.toggle('active', lang === 'en');
  document.getElementById('langHi').classList.toggle('active', lang === 'hi');
  renderResources();
}

function filterBySubject(val) { activeSubject = val; updateChips('subjectFilter', val); renderResources(); }
function filterByLevel(val)   { activeLevel   = val; updateChips('levelFilter', val);   renderResources(); }
function filterByType(val)    { activeType    = val; updateChips('typeFilter', val);     renderResources(); }
function applyFilters()       { searchQuery = (document.getElementById('searchInput')?.value || '').toLowerCase(); renderResources(); }

function resetFilters() {
  activeSubject = 'all'; activeLevel = 'all'; activeType = 'all'; searchQuery = '';
  if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
  updateChips('subjectFilter', 'all'); updateChips('levelFilter', 'all'); updateChips('typeFilter', 'all');
  renderResources();
}

function updateChips(containerId, activeVal) {
  document.querySelectorAll(`#${containerId} .chip`).forEach(chip => {
    chip.classList.toggle('active', chip.dataset[containerId.replace('Filter', '')] === activeVal || chip.dataset.subject === activeVal || chip.dataset.level === activeVal || chip.dataset.type === activeVal);
  });
}

function renderResources() {
  const pool = currentLang === 'hi' ? [...RESOURCES_EN, ...RESOURCES_HI] : RESOURCES_EN;
  let results = pool.filter(r => {
    if (currentLang === 'hi') { /* show all but prioritize hi */ }
    if (activeSubject !== 'all' && r.subject !== activeSubject) return false;
    if (activeLevel   !== 'all' && r.level   !== activeLevel)   return false;
    if (activeType    !== 'all' && r.type    !== activeType)     return false;
    if (searchQuery && !r.title.toLowerCase().includes(searchQuery) && !r.desc.toLowerCase().includes(searchQuery)) return false;
    return true;
  });

  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.textContent = `Showing ${results.length} resource${results.length !== 1 ? 's' : ''}${searchQuery ? ` for "${searchQuery}"` : ''}`;

  const grid = document.getElementById('resourcesGrid');
  const noRes = document.getElementById('noResults');

  if (!results.length) {
    grid.innerHTML = '';
    noRes?.classList.remove('hidden');
    return;
  }
  noRes?.classList.add('hidden');

  const levelColors = { beginner: 'tag-success', intermediate: 'tag-amber', advanced: 'tag-navy' };
  const typeLabels  = { notes: '📝 Notes', video: '🎥 Video', practice: '✏️ Practice', tutorial: '🎓 Tutorial' };

  grid.innerHTML = results.map(r => `
    <div class="resource-card">
      <div class="resource-icon" style="background:${r.iconBg}">${r.icon}</div>
      <div class="resource-body">
        <div class="resource-title">${r.title} ${r.lang === 'hi' ? '<span class="tag tag-teal" style="font-size:.7rem">हिंदी</span>' : ''}</div>
        <div style="color:var(--gray-600);font-size:.85rem;margin:.25rem 0 .5rem">${r.desc}</div>
        <div class="resource-meta">
          <span class="tag ${levelColors[r.level] || 'tag-teal'}">${r.level.charAt(0).toUpperCase() + r.level.slice(1)}</span>
          <span class="tag tag-navy" style="background:var(--gray-100);color:var(--gray-600)">${typeLabels[r.type] || r.type}</span>
          ${r.tags.map(t => `<span style="color:var(--gray-400);font-size:.78rem">• ${t}</span>`).join('')}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.5rem;flex-shrink:0;align-self:center">
        <a href="learning.html" class="btn btn-primary btn-sm">Study →</a>
        <button class="btn btn-outline-teal btn-sm" onclick="saveResource(${r.id}, '${r.title.replace(/'/g, "\\'")}')">+ Save</button>
      </div>
    </div>
  `).join('');
}

function saveResource(id, title) {
  Store.update('progress', p => {
    p.savedResources = p.savedResources || [];
    if (!p.savedResources.find(r => r.id === id)) {
      p.savedResources.push({ id, title, savedAt: new Date().toLocaleDateString() });
      showToast(`✅ "${title}" saved to your library!`);
    } else {
      showToast(`ℹ️ Already saved.`);
    }
    return p;
  }, {});
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'alert alert-success';
  t.style.cssText = 'position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;box-shadow:var(--shadow-lg);animation:fadeInUp .3s ease';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
