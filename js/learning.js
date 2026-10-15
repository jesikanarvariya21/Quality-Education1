/* ===================================================
   EduBridge — Personalized Learning & Quiz Engine
   =================================================== */
"use strict";

// ---- Curriculum Data ----
const CURRICULUM = {
  math: {
    label: 'Mathematics', icon: '📐', color: '#0f2657',
    topics: [
      {
        id: 'algebra', title: 'Algebra Basics', difficulty: 'Easy',
        content: `
          <h3>Algebra Basics</h3>
          <p>Algebra is the branch of mathematics that uses letters and symbols to represent numbers and quantities in formulas and equations.</p>
          <h4 style="margin-top:1.25rem;color:var(--navy)">Key Concepts</h4>
          <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem">
            <li><strong>Variable:</strong> A symbol (usually a letter like x, y) representing an unknown value.</li>
            <li><strong>Expression:</strong> A combination of variables, numbers, and operations. E.g., 3x + 5.</li>
            <li><strong>Equation:</strong> A statement that two expressions are equal. E.g., 3x + 5 = 14.</li>
            <li><strong>Solving:</strong> Finding the value of the variable that makes the equation true.</li>
          </ul>
          <div style="background:var(--gray-50);border-left:4px solid var(--teal);padding:1rem;border-radius:0 8px 8px 0;margin-top:1.25rem">
            <strong>📝 Example:</strong> Solve 2x + 4 = 10<br>
            Step 1: Subtract 4 from both sides: 2x = 6<br>
            Step 2: Divide by 2: x = 3 ✓
          </div>`,
        quiz: [
          { q: 'What is the value of x in 3x = 12?', options: ['2', '3', '4', '5'], answer: 2 },
          { q: 'Which of these is an algebraic expression?', options: ['12 + 8', '3x − 7', '100', '55 × 2'], answer: 1 },
          { q: 'Solve: x + 9 = 15', options: ['x = 5', 'x = 6', 'x = 7', 'x = 8'], answer: 1 },
          { q: 'What does a variable represent?', options: ['A fixed number', 'An unknown value', 'An operation', 'A fraction'], answer: 1 }
        ]
      },
      {
        id: 'fractions', title: 'Fractions & Decimals', difficulty: 'Easy',
        content: `
          <h3>Fractions & Decimals</h3>
          <p>A fraction represents a part of a whole. Decimals are another way to express the same quantity.</p>
          <h4 style="margin-top:1.25rem;color:var(--navy)">Key Rules</h4>
          <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem">
            <li><strong>Adding fractions:</strong> Make denominators equal first.</li>
            <li><strong>Multiplying fractions:</strong> Multiply numerators, then denominators.</li>
            <li><strong>Converting to decimal:</strong> Divide numerator by denominator.</li>
          </ul>
          <div style="background:var(--gray-50);border-left:4px solid var(--teal);padding:1rem;border-radius:0 8px 8px 0;margin-top:1.25rem">
            <strong>📝 Example:</strong> 1/2 + 1/4 = 2/4 + 1/4 = 3/4 = 0.75
          </div>`,
        quiz: [
          { q: 'What is 1/2 + 1/4?', options: ['2/6', '3/4', '1/4', '3/6'], answer: 1 },
          { q: 'Convert 3/4 to decimal:', options: ['0.34', '0.75', '0.43', '0.50'], answer: 1 },
          { q: 'What is 2/3 × 3/4?', options: ['6/12', '1/2', '5/7', '2/4'], answer: 1 },
          { q: 'Which fraction is largest?', options: ['1/3', '1/4', '1/2', '1/5'], answer: 2 }
        ]
      },
      {
        id: 'geometry', title: 'Geometry Basics', difficulty: 'Medium',
        content: `
          <h3>Geometry Basics</h3>
          <p>Geometry is the study of shapes, sizes, and properties of figures and spaces.</p>
          <h4 style="margin-top:1.25rem;color:var(--navy)">Important Formulas</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.75rem">
            <div style="background:var(--gray-50);padding:1rem;border-radius:8px">📐 <strong>Triangle Area</strong><br>½ × base × height</div>
            <div style="background:var(--gray-50);padding:1rem;border-radius:8px">⬜ <strong>Rectangle Area</strong><br>length × width</div>
            <div style="background:var(--gray-50);padding:1rem;border-radius:8px">⭕ <strong>Circle Area</strong><br>π × r²</div>
            <div style="background:var(--gray-50);padding:1rem;border-radius:8px">🔷 <strong>Pythagoras</strong><br>a² + b² = c²</div>
          </div>`,
        quiz: [
          { q: 'Area of a rectangle with length 8 and width 5?', options: ['13', '26', '40', '45'], answer: 2 },
          { q: 'How many sides does a hexagon have?', options: ['5', '6', '7', '8'], answer: 1 },
          { q: 'What is π (pi) approximately equal to?', options: ['2.14', '3.14', '4.14', '1.41'], answer: 1 },
          { q: 'If a = 3, b = 4, what is c in Pythagoras theorem?', options: ['5', '6', '7', '12'], answer: 0 }
        ]
      }
    ]
  },
  python: {
    label: 'Python Programming', icon: '🐍', color: '#0d9488',
    topics: [
      {
        id: 'variables', title: 'Variables & Data Types', difficulty: 'Easy',
        content: `
          <h3>Variables & Data Types</h3>
          <p>Variables store data values. Python has no command for declaring — a variable is created when you assign a value to it.</p>
          <h4 style="margin-top:1.25rem;color:var(--navy)">Core Data Types</h4>
          <div style="background:#1e293b;color:#e2e8f0;padding:1.25rem;border-radius:8px;font-family:monospace;font-size:.9rem;margin-top:.75rem;overflow-x:auto">
<span style="color:#94a3b8"># Text (string)</span><br>
name = <span style="color:#86efac">"Aarav"</span><br><br>
<span style="color:#94a3b8"># Number (integer)</span><br>
age = <span style="color:#fbbf24">18</span><br><br>
<span style="color:#94a3b8"># Decimal (float)</span><br>
score = <span style="color:#fbbf24">9.5</span><br><br>
<span style="color:#94a3b8"># True/False (boolean)</span><br>
is_student = <span style="color:#67e8f9">True</span>
          </div>`,
        quiz: [
          { q: 'Which data type stores text in Python?', options: ['int', 'float', 'str', 'bool'], answer: 2 },
          { q: 'What is the output of: type(3.14)?', options: ['int', 'float', 'str', 'double'], answer: 1 },
          { q: 'Which is a valid variable name in Python?', options: ['2name', 'my-name', 'my_name', 'class'], answer: 2 },
          { q: 'What does bool store?', options: ['Numbers', 'Text', 'True/False', 'Decimals'], answer: 2 }
        ]
      },
      {
        id: 'loops', title: 'Loops & Conditionals', difficulty: 'Medium',
        content: `
          <h3>Loops & Conditionals</h3>
          <p>Loops repeat code. Conditionals run code only when a condition is met.</p>
          <div style="background:#1e293b;color:#e2e8f0;padding:1.25rem;border-radius:8px;font-family:monospace;font-size:.9rem;margin-top:.75rem;overflow-x:auto">
<span style="color:#94a3b8"># if-else</span><br>
marks = <span style="color:#fbbf24">75</span><br>
<span style="color:#c084fc">if</span> marks >= <span style="color:#fbbf24">60</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#86efac">print</span>(<span style="color:#86efac">"Pass"</span>)<br>
<span style="color:#c084fc">else</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#86efac">print</span>(<span style="color:#86efac">"Fail"</span>)<br><br>
<span style="color:#94a3b8"># for loop</span><br>
<span style="color:#c084fc">for</span> i <span style="color:#c084fc">in</span> <span style="color:#86efac">range</span>(<span style="color:#fbbf24">5</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#86efac">print</span>(i)
          </div>`,
        quiz: [
          { q: 'How many times does range(5) iterate?', options: ['4', '5', '6', '10'], answer: 1 },
          { q: 'Which keyword starts a conditional in Python?', options: ['when', 'if', 'check', 'case'], answer: 1 },
          { q: 'What does a "for" loop do?', options: ['Runs once', 'Repeats over a sequence', 'Checks a condition', 'Defines a function'], answer: 1 },
          { q: 'What is the opposite of "if"?', options: ['but', 'not', 'else', 'then'], answer: 2 }
        ]
      },
      {
        id: 'functions', title: 'Functions', difficulty: 'Medium',
        content: `
          <h3>Functions in Python</h3>
          <p>A function is a reusable block of code that performs a specific task. Use <code>def</code> to define it.</p>
          <div style="background:#1e293b;color:#e2e8f0;padding:1.25rem;border-radius:8px;font-family:monospace;font-size:.9rem;margin-top:.75rem;overflow-x:auto">
<span style="color:#c084fc">def</span> <span style="color:#fbbf24">greet</span>(name):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#94a3b8"># Function body</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c084fc">return</span> <span style="color:#86efac">"Hello, "</span> + name<br><br>
<span style="color:#94a3b8"># Call the function</span><br>
<span style="color:#86efac">print</span>(greet(<span style="color:#86efac">"Priya"</span>))<br>
<span style="color:#94a3b8"># Output: Hello, Priya</span>
          </div>`,
        quiz: [
          { q: 'Which keyword defines a function in Python?', options: ['func', 'function', 'def', 'define'], answer: 2 },
          { q: 'What does "return" do?', options: ['Prints a value', 'Sends a value back to the caller', 'Stops the loop', 'Defines a variable'], answer: 1 },
          { q: 'Can a function take parameters?', options: ['Yes', 'No', 'Only numbers', 'Only strings'], answer: 0 },
          { q: 'What is a function?', options: ['A data type', 'A loop', 'A reusable block of code', 'A module'], answer: 2 }
        ]
      }
    ]
  },
  science: {
    label: 'Basic Science', icon: '🔬', color: '#7c3aed',
    topics: [
      {
        id: 'cells', title: 'Cells — The Unit of Life', difficulty: 'Easy',
        content: `
          <h3>Cells — The Basic Unit of Life</h3>
          <p>All living things are made of cells. The cell is the smallest structural and functional unit of life.</p>
          <h4 style="margin-top:1.25rem;color:var(--navy)">Key Parts of a Cell</h4>
          <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem">
            <li><strong>Cell Membrane:</strong> Controls what enters and exits the cell.</li>
            <li><strong>Nucleus:</strong> The "control center" — contains DNA.</li>
            <li><strong>Mitochondria:</strong> Produces energy (ATP) — "powerhouse of the cell".</li>
            <li><strong>Cytoplasm:</strong> Gel-like fluid that fills the cell.</li>
            <li><strong>Ribosome:</strong> Makes proteins.</li>
          </ul>`,
        quiz: [
          { q: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell Wall'], answer: 2 },
          { q: 'Which organelle contains DNA?', options: ['Cytoplasm', 'Nucleus', 'Mitochondria', 'Vacuole'], answer: 1 },
          { q: 'What does the cell membrane do?', options: ['Produces energy', 'Controls entry/exit', 'Makes proteins', 'Stores water'], answer: 1 },
          { q: 'Where are proteins made in a cell?', options: ['Nucleus', 'Vacuole', 'Ribosome', 'Cell wall'], answer: 2 }
        ]
      },
      {
        id: 'atoms', title: 'Atoms & Elements', difficulty: 'Medium',
        content: `
          <h3>Atoms & Elements</h3>
          <p>An atom is the smallest unit of matter. Elements are pure substances made of only one type of atom.</p>
          <h4 style="margin-top:1.25rem;color:var(--navy)">Atomic Structure</h4>
          <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem">
            <li><strong>Protons:</strong> Positively charged particles in the nucleus.</li>
            <li><strong>Neutrons:</strong> Neutral particles in the nucleus.</li>
            <li><strong>Electrons:</strong> Negatively charged particles orbiting the nucleus.</li>
          </ul>
          <div style="background:var(--gray-50);border-left:4px solid var(--teal);padding:1rem;border-radius:0 8px 8px 0;margin-top:1.25rem">
            The atomic number = number of protons. Carbon has 6 protons, so its atomic number is 6.
          </div>`,
        quiz: [
          { q: 'What charge does a proton have?', options: ['Negative', 'Neutral', 'Positive', 'Variable'], answer: 2 },
          { q: 'What is the atomic number of an element?', options: ['Number of neutrons', 'Number of protons', 'Number of electrons', 'Atomic mass'], answer: 1 },
          { q: 'Where are protons and neutrons located?', options: ['Electron cloud', 'Nucleus', 'Outer shell', 'Cytoplasm'], answer: 1 },
          { q: 'Carbon has atomic number 6. How many protons does it have?', options: ['3', '6', '12', '14'], answer: 1 }
        ]
      }
    ]
  },
  english: {
    label: 'English Communication', icon: '📚', color: '#d97706',
    topics: [
      {
        id: 'grammar', title: 'Grammar Essentials', difficulty: 'Easy',
        content: `
          <h3>Grammar Essentials</h3>
          <p>Grammar is the set of structural rules governing the composition of clauses, phrases, and words.</p>
          <h4 style="margin-top:1.25rem;color:var(--navy)">Parts of Speech</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:.75rem">
            <div style="background:var(--gray-50);padding:.75rem;border-radius:8px"><strong>Noun:</strong> Names a person, place, or thing. <em>Alex, India, book</em></div>
            <div style="background:var(--gray-50);padding:.75rem;border-radius:8px"><strong>Verb:</strong> Shows action or state. <em>run, is, think</em></div>
            <div style="background:var(--gray-50);padding:.75rem;border-radius:8px"><strong>Adjective:</strong> Describes a noun. <em>smart, red, large</em></div>
            <div style="background:var(--gray-50);padding:.75rem;border-radius:8px"><strong>Adverb:</strong> Describes a verb. <em>quickly, very, well</em></div>
          </div>`,
        quiz: [
          { q: '"Run" in "I run every morning" is a:', options: ['Noun', 'Adjective', 'Verb', 'Adverb'], answer: 2 },
          { q: 'Which sentence uses correct grammar?', options: ['She go to school.', 'She goes to school.', 'She going to school.', 'She gone to school.'], answer: 1 },
          { q: '"Beautiful" is an example of:', options: ['Noun', 'Verb', 'Adjective', 'Adverb'], answer: 2 },
          { q: 'The plural of "child" is:', options: ['childs', 'childes', 'children', 'child\'s'], answer: 2 }
        ]
      },
      {
        id: 'writing', title: 'Writing Skills', difficulty: 'Medium',
        content: `
          <h3>Writing Skills</h3>
          <p>Good writing is clear, concise, and organized. A strong paragraph has a topic sentence, supporting details, and a conclusion.</p>
          <h4 style="margin-top:1.25rem;color:var(--navy)">Paragraph Structure</h4>
          <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem">
            <li><strong>Topic Sentence:</strong> States the main idea.</li>
            <li><strong>Supporting Sentences:</strong> Provide evidence or explanation.</li>
            <li><strong>Concluding Sentence:</strong> Wraps up the paragraph.</li>
          </ul>
          <div style="background:var(--gray-50);border-left:4px solid var(--teal);padding:1rem;border-radius:0 8px 8px 0;margin-top:1.25rem">
            <strong>Tip:</strong> Before writing, plan using the 5 Ws: Who, What, When, Where, Why.
          </div>`,
        quiz: [
          { q: 'What does the topic sentence do?', options: ['Concludes the paragraph', 'States the main idea', 'Gives examples', 'Asks a question'], answer: 1 },
          { q: 'Which is NOT one of the 5 Ws?', options: ['Who', 'What', 'How', 'Where'], answer: 2 },
          { q: 'Good writing is:', options: ['Long and complex', 'Clear and concise', 'Full of adjectives', 'Without punctuation'], answer: 1 },
          { q: 'A concluding sentence should:', options: ['Introduce a new idea', 'Ask a question', 'Wrap up the paragraph', 'Start with "I"'], answer: 2 }
        ]
      }
    ]
  }
};

// ---- Study Plan Templates ----
const STUDY_PLANS = {
  math: ['Algebra Basics', 'Fractions & Decimals', 'Geometry Basics', 'Quadratic Equations', 'Statistics'],
  python: ['Variables & Data Types', 'Operators & Expressions', 'Loops & Conditionals', 'Functions', 'Lists & Dictionaries'],
  science: ['Cells — Unit of Life', 'Atoms & Elements', 'Periodic Table', 'Newton\'s Laws', 'Photosynthesis'],
  english: ['Grammar Essentials', 'Reading Comprehension', 'Writing Skills', 'Vocabulary Building', 'Essay Writing']
};

// ---- State ----
let currentSubject = null;
let currentTopic   = null;
let quizData       = null;
let quizIndex      = 0;
let quizScore      = 0;
let answered       = false;

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderSubjectList();
  // Auto-select first subject
  selectSubject('math');
});

function renderSubjectList() {
  const el = document.getElementById('subjectList');
  if (!el) return;
  el.innerHTML = Object.entries(CURRICULUM).map(([key, sub]) => `
    <button onclick="selectSubject('${key}')" id="subjectBtn_${key}"
      style="display:flex;align-items:center;gap:.7rem;padding:.7rem 1rem;border-radius:8px;border:1.5px solid var(--gray-200);background:var(--white);cursor:pointer;text-align:left;transition:all .2s;font-size:.9rem;font-weight:500;color:var(--navy);width:100%">
      <span style="font-size:1.3rem">${sub.icon}</span> ${sub.label}
    </button>
  `).join('');
}

function selectSubject(key) {
  currentSubject = key;
  const sub = CURRICULUM[key];
  document.querySelectorAll('[id^="subjectBtn_"]').forEach(b => {
    b.style.background = 'var(--white)';
    b.style.borderColor = 'var(--gray-200)';
    b.style.color = 'var(--navy)';
  });
  const btn = document.getElementById('subjectBtn_' + key);
  if (btn) { btn.style.background = 'rgba(13,148,136,.1)'; btn.style.borderColor = 'var(--teal)'; btn.style.color = 'var(--teal-dark)'; }

  document.getElementById('topicHeading').textContent = `${sub.icon} ${sub.label} — Choose a Topic`;
  const progress = Store.get('progress');
  const completed = (progress?.completedTopics || []).filter(t => t.startsWith(key + '_')).length;
  const topicProg = document.getElementById('topicProgress');
  if (topicProg) { topicProg.style.display = 'inline'; topicProg.textContent = `${completed}/${sub.topics.length} done`; }

  const topicList = document.getElementById('topicList');
  topicList.innerHTML = sub.topics.map((t, i) => {
    const done = (progress?.completedTopics || []).includes(key + '_' + t.id);
    const diffClass = t.difficulty === 'Easy' ? 'tag-success' : t.difficulty === 'Medium' ? 'tag-amber' : 'tag-navy';
    return `
      <button onclick="openLesson('${key}', ${i})"
        style="padding:1rem;border-radius:12px;border:1.5px solid ${done ? 'var(--success)' : 'var(--gray-200)'};background:${done ? 'rgba(22,163,74,.05)' : 'var(--white)'};cursor:pointer;text-align:left;transition:all .2s;position:relative"
        onmouseover="this.style.borderColor='var(--teal)';this.style.boxShadow='var(--shadow-sm)'" 
        onmouseout="this.style.borderColor='${done ? 'var(--success)' : 'var(--gray-200)'  }';this.style.boxShadow='none'">
        ${done ? '<div style="position:absolute;top:.6rem;right:.6rem;color:var(--success);font-size:.8rem;font-weight:700">✓ Done</div>' : ''}
        <div style="font-size:1.5rem;margin-bottom:.4rem">${sub.icon}</div>
        <div style="font-weight:600;color:var(--navy);font-size:.9rem;margin-bottom:.35rem">${t.title}</div>
        <span class="tag ${diffClass}">${t.difficulty}</span>
      </button>
    `;
  }).join('');

  showSection('topicSection');
});

function openLesson(subjectKey, topicIndex) {
  currentSubject = subjectKey;
  currentTopic = topicIndex;
  const sub = CURRICULUM[subjectKey];
  const topic = sub.topics[topicIndex];

  document.getElementById('lessonTitle').textContent = `${sub.icon} ${topic.title}`;
  const tag = document.getElementById('lessonTag');
  const diffClass = topic.difficulty === 'Easy' ? 'tag-success' : topic.difficulty === 'Medium' ? 'tag-amber' : 'tag-navy';
  tag.className = 'tag ' + diffClass;
  tag.textContent = topic.difficulty;

  document.getElementById('lessonContent').innerHTML = topic.content;
  showSection('lessonSection');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToTopics() { showSection('topicSection'); selectSubject(currentSubject); }
function backToLesson() { showSection('lessonSection'); }

function startQuiz() {
  const sub = CURRICULUM[currentSubject];
  const topic = sub.topics[currentTopic];
  quizData = topic.quiz;
  quizIndex = 0;
  quizScore = 0;
  answered = false;

  document.getElementById('quizTitle').textContent = `Quiz: ${topic.title}`;
  showSection('quizSection');
  renderQuestion();
}

function renderQuestion() {
  const total = quizData.length;
  const progress = ((quizIndex) / total) * 100;
  document.getElementById('quizProgressFill').style.width = progress + '%';
  document.getElementById('quizCounter').textContent = `${quizIndex + 1} / ${total}`;

  const q = quizData[quizIndex];
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('quizContainer').innerHTML = `
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options" id="quizOptions">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" onclick="selectAnswer(${i})" id="opt_${i}" aria-label="Option ${letters[i]}: ${opt}">
          <span class="option-letter">${letters[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('')}
    </div>
    <div id="quizFeedback"></div>
    <div style="margin-top:1.5rem;display:flex;justify-content:flex-end">
      <button id="nextBtn" class="btn btn-primary hidden" onclick="nextQuestion()">
        ${quizIndex < quizData.length - 1 ? 'Next Question →' : 'See Results 🏆'}
      </button>
    </div>
  `;
  answered = false;
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  const q = quizData[quizIndex];
  const isCorrect = idx === q.answer;
  if (isCorrect) quizScore++;

  document.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.style.pointerEvents = 'none';
    if (i === q.answer) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  const fb = document.getElementById('quizFeedback');
  fb.innerHTML = isCorrect
    ? `<div class="quiz-feedback correct">✅ Correct! Well done.</div>`
    : `<div class="quiz-feedback wrong">❌ Incorrect. The correct answer was: <strong>${q.options[q.answer]}</strong></div>`;

  document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex < quizData.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const total = quizData.length;
  const pct = Math.round((quizScore / total) * 100);
  const grade = pct >= 80 ? '🌟 Excellent!' : pct >= 60 ? '👍 Good Job!' : '📖 Keep Practicing';
  const gradeColor = pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)';

  document.getElementById('quizProgressFill').style.width = '100%';
  document.getElementById('quizCounter').textContent = 'Complete!';

  const topic = CURRICULUM[currentSubject].topics[currentTopic];

  document.getElementById('quizContainer').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-score-circle">
        <strong>${quizScore}/${total}</strong>
        <span>${pct}%</span>
      </div>
      <h3 style="color:${gradeColor};margin-bottom:.5rem">${grade}</h3>
      <p style="color:var(--gray-600);margin-bottom:1.5rem">You scored ${quizScore} out of ${total} questions on "${topic.title}".</p>
      ${quizScore < total ? `<div class="alert alert-info mb-3">💡 <strong>Recommendation:</strong> Review the lesson again before your next attempt to improve your score.</div>` : `<div class="alert alert-success mb-3">🎉 Great work! You've mastered this topic.</div>`}
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-secondary" onclick="startQuiz()">🔄 Retry Quiz</button>
        <button class="btn btn-primary" onclick="markComplete()">✅ Mark as Complete</button>
        <button class="btn btn-outline-teal" onclick="backToTopics()">📂 All Topics</button>
      </div>
    </div>
  `;

  // Save quiz score
  Store.update('progress', p => {
    p.quizScores = p.quizScores || [];
    p.quizScores.push({ subject: currentSubject, topic: topic.id, score: quizScore, total, date: new Date().toLocaleDateString() });
    p.totalXP = (p.totalXP || 0) + (quizScore * 20);
    return p;
  }, {});
}

function markComplete() {
  const topic = CURRICULUM[currentSubject].topics[currentTopic];
  const topicKey = currentSubject + '_' + topic.id;
  Store.update('progress', p => {
    p.completedTopics = p.completedTopics || [];
    if (!p.completedTopics.includes(topicKey)) {
      p.completedTopics.push(topicKey);
      p.completedLessons = (p.completedLessons || 0) + 1;
      p.totalXP = (p.totalXP || 0) + 100;
    }
    // Badge: first lesson
    p.badges = p.badges || [];
    if (!p.badges.includes('first_lesson')) p.badges.push('first_lesson');
    if (p.completedTopics.length >= 5 && !p.badges.includes('fast_learner')) p.badges.push('fast_learner');
    return p;
  }, {});

  const container = document.getElementById('quizContainer');
  const successMsg = document.createElement('div');
  successMsg.className = 'alert alert-success mt-3';
  successMsg.innerHTML = '✅ Topic marked as complete! +100 XP earned. <a href="progress.html">View your progress →</a>';
  container.appendChild(successMsg);
  selectSubject(currentSubject);
}

function showSection(id) {
  ['topicSection', 'lessonSection', 'quizSection'].forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.toggle('hidden', s !== id);
  });
}

// ---- Study Plan Generator ----
function generateStudyPlan() {
  const subject = document.getElementById('planSubject').value;
  const hours = parseInt(document.getElementById('planHours').value);
  const weeks = parseInt(document.getElementById('planWeeks').value);
  const topics = STUDY_PLANS[subject] || [];
  const days = weeks * 7;
  const sessionsPerDay = hours;
  const topicsPerSession = 1;

  let html = `<div style="background:var(--gray-50);border-radius:12px;padding:1.25rem">
    <h4 style="margin-bottom:1rem;color:var(--navy)">📅 ${weeks}-Week Study Plan: ${CURRICULUM[subject]?.label || subject}</h4>
    <p class="small text-muted mb-3">This plan is generated using predefined rules based on your subject, hours, and duration — not AI.</p>
    <div style="display:flex;flex-direction:column;gap:.6rem">`;

  let topicIdx = 0;
  for (let week = 1; week <= weeks; week++) {
    html += `<div style="font-weight:700;color:var(--navy);margin-top:.5rem;padding:.4rem .6rem;background:var(--gray-100);border-radius:6px">Week ${week}</div>`;
    for (let day = 1; day <= 7; day++) {
      const dayTopic = topics[topicIdx % topics.length];
      topicIdx++;
      const dayLabel = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][day - 1];
      html += `<div style="display:flex;gap:1rem;align-items:center;padding:.4rem 0">
        <span style="min-width:40px;font-weight:600;font-size:.82rem;color:var(--gray-400)">${dayLabel}</span>
        <span style="flex:1;font-size:.88rem">${dayTopic} — ${hours}h session</span>
        <span class="tag tag-teal">Day ${(week - 1) * 7 + day}</span>
      </div>`;
    }
  }

  html += `</div></div>`;
  const out = document.getElementById('planOutput');
  if (out) { out.innerHTML = html; out.classList.remove('hidden'); }
}
