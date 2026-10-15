/* ===================================================
   EduBridge — Career Guidance Logic
   =================================================== */
"use strict";

const CAREERS = [
  {
    id: 'software', title: 'Software Developer', icon: '💻', color: '#0d9488',
    desc: 'Build apps, websites, and software systems used by millions.',
    skills: ['Python / JavaScript', 'Data Structures', 'Problem Solving', 'Git & Version Control', 'Algorithms'],
    roadmap: ['Learn Python or JavaScript basics', 'Study Data Structures & Algorithms', 'Build 2–3 personal projects', 'Contribute to open source', 'Apply for internships'],
    projects: ['To-Do App', 'Portfolio Website', 'Calculator', 'Quiz App', 'Weather App'],
    courses: ['Python Programming (EduBridge)', 'Web Dev with HTML & CSS', 'JavaScript Hands-On'],
    avgSalary: '₹4–20 LPA (entry to senior)',
    keywords: ['tech', 'coding', 'logical', 'build']
  },
  {
    id: 'datascience', title: 'Data Scientist', icon: '📊', color: '#0f2657',
    desc: 'Analyze data to find patterns and make data-driven decisions.',
    skills: ['Python / R', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization'],
    roadmap: ['Master Python basics', 'Learn Statistics & Probability', 'Study Machine Learning concepts', 'Practice with real datasets (Kaggle)', 'Build a data portfolio'],
    projects: ['Sales Analysis Dashboard', 'Student Performance Predictor', 'Movie Recommendation System'],
    courses: ['Python Programming', 'Statistics Tutorial', 'Data Science Fundamentals'],
    avgSalary: '₹5–25 LPA (entry to senior)',
    keywords: ['data', 'math', 'analytical', 'patterns']
  },
  {
    id: 'teaching', title: 'Educator / Teacher', icon: '🎓', color: '#7c3aed',
    desc: 'Inspire the next generation by making education accessible and engaging.',
    skills: ['Subject Expertise', 'Communication', 'Lesson Planning', 'Empathy', 'Technology Tools'],
    roadmap: ['Complete subject specialization (B.Sc/B.A)', 'Earn B.Ed degree', 'Practice teaching / internship', 'Get trained in EdTech tools', 'Build your teaching portfolio'],
    projects: ['Create a YouTube teaching channel', 'Develop a lesson plan template', 'Design a quiz for your subject'],
    courses: ['English Communication', 'Algebra Complete Notes', 'Essay Writing Masterclass'],
    avgSalary: '₹2–10 LPA (varies by sector)',
    keywords: ['helping', 'communication', 'social', 'teach']
  },
  {
    id: 'design', title: 'UI/UX Designer', icon: '🎨', color: '#d97706',
    desc: 'Create beautiful, user-friendly digital interfaces and experiences.',
    skills: ['Figma / Adobe XD', 'Visual Design', 'User Research', 'Prototyping', 'CSS/HTML basics'],
    roadmap: ['Learn design principles (color, typography, layout)', 'Master Figma (free tool)', 'Study UX research methods', 'Build a portfolio with 3+ case studies', 'Seek freelance or internship work'],
    projects: ['Redesign a popular app\'s homepage', 'Design a mobile banking app wireframe', 'Create a portfolio website UI'],
    courses: ['Web Dev with HTML & CSS', 'English Grammar (for copy writing)'],
    avgSalary: '₹3–15 LPA (entry to senior)',
    keywords: ['creative', 'visual', 'art', 'design']
  },
  {
    id: 'electronics', title: 'Electronics Engineer', icon: '⚡', color: '#dc2626',
    desc: 'Design and develop electronic circuits, devices, and embedded systems.',
    skills: ['Circuit Design', 'Microcontrollers', 'C/C++', 'PCB Design', 'Signal Processing'],
    roadmap: ['Master Physics & Math fundamentals', 'Learn circuit theory', 'Study microcontrollers (Arduino/Raspberry Pi)', 'Build embedded projects', 'Pursue B.Tech in Electronics'],
    projects: ['Temperature Monitor with Arduino', 'LED Traffic Light Simulation', 'Digital Clock'],
    courses: ['Algebra Notes', 'Physics — Newton\'s Laws', 'Python Programming'],
    avgSalary: '₹3–12 LPA (entry to senior)',
    keywords: ['circuits', 'hardware', 'logical', 'build']
  },
  {
    id: 'healthcare', title: 'Healthcare Professional', icon: '🏥', color: '#16a34a',
    desc: 'Work in medicine, nursing, or public health to improve lives.',
    skills: ['Biology & Chemistry', 'Patient Care', 'Communication', 'Critical Thinking', 'Medical Knowledge'],
    roadmap: ['Excel in Biology and Chemistry', 'Prepare for NEET (India)', 'Pursue MBBS / Nursing / Pharmacy', 'Complete internship', 'Specialize or practice'],
    projects: ['Health awareness campaign', 'First Aid manual', 'Nutrition tracking app'],
    courses: ['Cell Biology Notes', 'Chemistry: Acids & Bases', 'Human Body Systems'],
    avgSalary: '₹3–30 LPA (varies widely)',
    keywords: ['helping', 'biology', 'science', 'social']
  }
];

// ---- Career Questionnaire ----
const QUESTIONS = [
  {
    q: 'Which activity do you enjoy most?',
    options: ['Building apps or websites', 'Analyzing data and finding patterns', 'Helping and explaining things to others', 'Creating art, visuals, or designs'],
    weights: [['software', 'datascience'], ['datascience', 'software'], ['teaching', 'healthcare'], ['design']]
  },
  {
    q: 'What subject do you like most in school?',
    options: ['Mathematics & Computer Science', 'Science (Biology/Chemistry)', 'Languages & Communication', 'Arts & Craft / Drawing'],
    weights: [['software', 'datascience', 'electronics'], ['healthcare', 'electronics'], ['teaching', 'design'], ['design', 'teaching']]
  },
  {
    q: 'What kind of work environment do you prefer?',
    options: ['Office / Work-from-home (tech)', 'Hospital or lab setting', 'Classroom or community', 'Studio or creative agency'],
    weights: [['software', 'datascience'], ['healthcare', 'electronics'], ['teaching'], ['design']]
  },
  {
    q: 'Which describes you best?',
    options: ['I love solving logical puzzles', 'I enjoy working with people and helping them', 'I am creative and visual', 'I like fixing and building things with my hands'],
    weights: [['software', 'datascience', 'electronics'], ['teaching', 'healthcare'], ['design'], ['electronics', 'software']]
  },
  {
    q: 'What matters most in your future career?',
    options: ['High salary and growth', 'Making a positive social impact', 'Creative freedom', 'Stability and job security'],
    weights: [['software', 'datascience'], ['teaching', 'healthcare'], ['design'], ['electronics', 'teaching']]
  },
  {
    q: 'What kind of projects would you like to work on?',
    options: ['Building apps and websites', 'Designing beautiful user interfaces', 'Teaching or training others', 'Working with data and charts'],
    weights: [['software', 'electronics'], ['design'], ['teaching', 'healthcare'], ['datascience', 'software']]
  }
];

let answers = {};
let currentQ = 0;

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderCareerGrid();
  renderQuestion();

  // Check URL hash
  if (location.hash === '#questionnaire') showTab('quiz');
});

function renderCareerGrid() {
  const grid = document.getElementById('careerGrid');
  if (!grid) return;
  grid.innerHTML = CAREERS.map(c => `
    <div class="career-path-card">
      <div class="career-header">
        <div class="career-icon">${c.icon}</div>
        <h3>${c.title}</h3>
        <p style="font-size:.87rem;color:var(--gray-600)">${c.desc}</p>
        <div style="margin-top:.75rem;font-size:.82rem;color:var(--success);font-weight:600">💼 ${c.avgSalary}</div>
      </div>
      <div class="skill-list">
        ${c.skills.slice(0, 4).map(s => `<span class="tag tag-teal">${s}</span>`).join('')}
      </div>
      <div style="padding:1rem 1.5rem;border-top:1px solid var(--gray-100)">
        <button class="btn btn-primary btn-sm btn-block" onclick="showCareerDetail('${c.id}')">View Roadmap →</button>
      </div>
    </div>
  `).join('');
}

function showCareerDetail(id) {
  const c = CAREERS.find(x => x.id === id);
  if (!c) return;
  document.getElementById('detailTitle').textContent = `${c.icon} ${c.title}`;
  document.getElementById('detailContent').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
      <div>
        <h4 style="color:var(--navy);margin-bottom:.75rem">🗺️ Learning Roadmap</h4>
        <ol style="padding-left:1.25rem;display:flex;flex-direction:column;gap:.5rem">
          ${c.roadmap.map(step => `<li style="color:var(--gray-600);font-size:.9rem">${step}</li>`).join('')}
        </ol>
      </div>
      <div>
        <h4 style="color:var(--navy);margin-bottom:.75rem">🔑 Key Skills</h4>
        <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem">
          ${c.skills.map(s => `<span class="tag tag-navy">${s}</span>`).join('')}
        </div>
        <h4 style="color:var(--navy);margin-bottom:.75rem;margin-top:1rem">💡 Project Ideas</h4>
        <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:.4rem">
          ${c.projects.map(p => `<li style="color:var(--gray-600);font-size:.9rem">${p}</li>`).join('')}
        </ul>
      </div>
    </div>
    <hr class="divider">
    <h4 style="color:var(--navy);margin-bottom:.75rem">📚 Recommended EduBridge Courses</h4>
    <div style="display:flex;flex-wrap:wrap;gap:.5rem">
      ${c.courses.map(course => `<a href="resources.html" class="tag tag-teal" style="text-decoration:none">→ ${course}</a>`).join('')}
    </div>
    <div class="alert alert-warning mt-3">
      ⚠️ <strong>Note:</strong> These are educational recommendations to help you explore this field. Actual job outcomes depend on your qualifications, effort, and market conditions.
    </div>
  `;
  document.getElementById('careerDetail').classList.remove('hidden');
  document.getElementById('careerDetail').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeDetail() { document.getElementById('careerDetail').classList.add('hidden'); }

// ---- Questionnaire ----
function renderQuestion() {
  const container = document.getElementById('questionContainer');
  if (!container) return;
  const q = QUESTIONS[currentQ];
  const total = QUESTIONS.length;
  const fill = document.getElementById('careerQuizFill');
  if (fill) fill.style.width = ((currentQ / total) * 100) + '%';
  const step = document.getElementById('quizStep');
  if (step) step.textContent = `Question ${currentQ + 1} / ${total}`;

  container.innerHTML = `
    <div class="q-step">
      <div class="quiz-question">${q.q}</div>
      <div class="q-options">
        ${q.options.map((opt, i) => `
          <div class="q-opt ${answers[currentQ] === i ? 'selected' : ''}" onclick="selectCareerAnswer(${i})">
            ${opt}
          </div>
        `).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:1.5rem">
        <button class="btn btn-secondary btn-sm" onclick="prevQuestion()" ${currentQ === 0 ? 'disabled' : ''}>← Previous</button>
        <button class="btn btn-primary btn-sm" id="nextCareerBtn" onclick="nextCareerQuestion()" ${answers[currentQ] === undefined ? 'disabled style="opacity:.5"' : ''}>
          ${currentQ < total - 1 ? 'Next →' : 'See My Results 🎯'}
        </button>
      </div>
    </div>
  `;
}

function selectCareerAnswer(idx) {
  answers[currentQ] = idx;
  document.querySelectorAll('.q-opt').forEach((el, i) => el.classList.toggle('selected', i === idx));
  const btn = document.getElementById('nextCareerBtn');
  if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
}

function nextCareerQuestion() {
  if (answers[currentQ] === undefined) return;
  if (currentQ < QUESTIONS.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    calculateResults();
  }
}

function prevQuestion() {
  if (currentQ > 0) { currentQ--; renderQuestion(); }
}

function calculateResults() {
  const scores = {};
  CAREERS.forEach(c => scores[c.id] = 0);

  Object.entries(answers).forEach(([qIdx, aIdx]) => {
    const weights = QUESTIONS[qIdx].weights[aIdx];
    weights.forEach(career => { scores[career] = (scores[career] || 0) + 1; });
  });

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const top = CAREERS.find(c => c.id === ranked[0][0]);

  // Save result
  Store.update('progress', p => { p.careerResult = ranked[0][0]; return p; }, {});

  // Show results tab
  const resultBtn = document.getElementById('tabResult');
  if (resultBtn) resultBtn.style.display = 'inline-flex';
  showTab('result');

  const container = document.getElementById('resultContainer');
  container.innerHTML = `
    <div class="card mb-4" style="border:2px solid var(--teal)">
      <div class="card-body text-center" style="padding:2.5rem">
        <div style="font-size:4rem;margin-bottom:.75rem">${top.icon}</div>
        <h2 style="margin-bottom:.5rem">Your Top Match: ${top.title}</h2>
        <p style="max-width:500px;margin:0 auto 1.5rem">${top.desc}</p>
        <div style="display:inline-flex;gap:.5rem;flex-wrap:wrap;justify-content:center">
          ${top.skills.map(s => `<span class="tag tag-teal">${s}</span>`).join('')}
        </div>
      </div>
    </div>
    <h3 style="margin-bottom:1rem">All Your Matches</h3>
    <div class="grid-3">
      ${ranked.map(([id, score]) => {
        const c = CAREERS.find(x => x.id === id);
        const pct = Math.round((score / QUESTIONS.length) * 100);
        return `
          <div class="card card-body">
            <div style="font-size:2rem;margin-bottom:.5rem">${c.icon}</div>
            <div style="font-weight:700;color:var(--navy);margin-bottom:.4rem">${c.title}</div>
            <div class="progress-wrap mb-2"><div class="progress-fill" style="width:${pct}%"></div></div>
            <div class="small text-muted">${pct}% match</div>
            <button class="btn btn-outline-teal btn-sm mt-2 btn-block" onclick="showCareerDetail('${id}');showTab('paths')">View Roadmap →</button>
          </div>`;
      }).join('')}
    </div>
    <div class="alert alert-info mt-4">
      ℹ️ These results are based on your questionnaire answers and are meant for exploration and guidance only — not a definitive career assessment.
    </div>
    <div class="text-center mt-3">
      <button class="btn btn-secondary" onclick="retakeQuiz()">🔄 Retake Quiz</button>
    </div>
  `;
}

function retakeQuiz() {
  answers = {};
  currentQ = 0;
  showTab('quiz');
  renderQuestion();
}

function showTab(tab) {
  ['paths', 'quiz', 'result'].forEach(t => {
    const btn = document.getElementById('tabContent' + t.charAt(0).toUpperCase() + t.slice(1));
    const tabBtn = document.getElementById('tab' + t.charAt(0).toUpperCase() + t.slice(1));
    if (btn) btn.classList.toggle('hidden', t !== tab);
    if (tabBtn) {
      tabBtn.className = t === tab ? 'btn btn-primary' : 'btn btn-secondary';
      tabBtn.style.borderRadius = '8px 8px 0 0';
    }
  });
}
