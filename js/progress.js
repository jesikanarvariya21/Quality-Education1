/* ===================================================
   EduBridge — Progress & Achievements Logic
   =================================================== */
"use strict";

const ALL_BADGES = [
  { id: 'first_lesson',  icon: '🎓', name: 'First Lesson',   desc: 'Completed your first topic' },
  { id: 'quiz_ace',      icon: '✅', name: 'Quiz Ace',        desc: 'Scored 100% on a quiz' },
  { id: 'streak_7',      icon: '🔥', name: '7-Day Streak',    desc: 'Studied 7 days in a row' },
  { id: 'fast_learner',  icon: '⚡', name: 'Fast Learner',    desc: 'Completed 5 topics' },
  { id: 'explorer',      icon: '🗺️', name: 'Explorer',        desc: 'Visited all sections of EduBridge' },
  { id: 'math_master',   icon: '📐', name: 'Math Master',     desc: 'Completed all Math topics' },
  { id: 'code_rookie',   icon: '💻', name: 'Code Rookie',     desc: 'Completed first Python topic' },
  { id: 'career_seeker', icon: '🎯', name: 'Career Seeker',   desc: 'Completed the career quiz' },
  { id: 'streak_30',     icon: '🌟', name: '30-Day Streak',   desc: 'Studied 30 days in a row' },
  { id: 'perfectionist', icon: '💎', name: 'Perfectionist',   desc: 'Scored 100% on 3 different quizzes' }
];

const LEVELS = [
  { min: 0,    label: 'Beginner',   color: '#94a3b8' },
  { min: 500,  label: 'Explorer',   color: '#0d9488' },
  { min: 1000, label: 'Learner',    color: '#0f2657' },
  { min: 2000, label: 'Achiever',   color: '#7c3aed' },
  { min: 3500, label: 'Scholar',    color: '#d97706' },
  { min: 5000, label: 'Master',     color: '#dc2626' }
];

document.addEventListener('DOMContentLoaded', () => {
  renderProgress();
});

function renderProgress() {
  const p = Store.get('progress');
  if (!p) return;

  // Streak & XP
  setText('streakCount', p.streak || 0);
  setText('xpDisplay', (p.totalXP || 0).toLocaleString() + ' XP');
  const level = LEVELS.slice().reverse().find(l => (p.totalXP || 0) >= l.min) || LEVELS[0];
  setText('xpLevel', level.label);
  document.getElementById('xpDisplay').style.color = level.color;

  // Course progress
  const courseEl = document.getElementById('courseProgress');
  if (courseEl && p.enrolledCourses) {
    courseEl.innerHTML = p.enrolledCourses.map(c => `
      <div>
        <div style="display:flex;justify-content:space-between;margin-bottom:.4rem">
          <div style="display:flex;align-items:center;gap:.5rem">
            <span style="font-size:1.2rem">${c.icon}</span>
            <span style="font-weight:600;color:var(--navy);font-size:.92rem">${c.title}</span>
          </div>
          <span style="font-weight:700;color:${c.color};font-size:.92rem">${c.progress}%</span>
        </div>
        <div class="progress-wrap">
          <div class="progress-fill" style="width:${c.progress}%;background:${c.color}"></div>
        </div>
      </div>
    `).join('');
  }

  // Quiz history
  const quizEl = document.getElementById('quizHistory');
  if (quizEl) {
    if (p.quizScores && p.quizScores.length > 0) {
      quizEl.innerHTML = `
        <table style="width:100%;border-collapse:collapse;font-size:.88rem">
          <thead>
            <tr style="border-bottom:2px solid var(--gray-100)">
              <th style="text-align:left;padding:.5rem;color:var(--navy)">Subject</th>
              <th style="text-align:left;padding:.5rem;color:var(--navy)">Topic</th>
              <th style="text-align:center;padding:.5rem;color:var(--navy)">Score</th>
              <th style="text-align:center;padding:.5rem;color:var(--navy)">Date</th>
            </tr>
          </thead>
          <tbody>
            ${p.quizScores.map(s => {
              const pct = Math.round((s.score / s.total) * 100);
              const color = pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)';
              return `<tr style="border-bottom:1px solid var(--gray-100)">
                <td style="padding:.6rem .5rem;text-transform:capitalize">${s.subject}</td>
                <td style="padding:.6rem .5rem">${s.topic}</td>
                <td style="padding:.6rem .5rem;text-align:center;font-weight:700;color:${color}">${s.score}/${s.total} (${pct}%)</td>
                <td style="padding:.6rem .5rem;text-align:center;color:var(--gray-400)">${s.date}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      `;
    } else {
      quizEl.innerHTML = `<div class="text-center" style="padding:1.5rem;color:var(--gray-400)">No quiz history yet. <a href="learning.html">Take a quiz →</a></div>`;
    }
  }

  // Badges
  const badgesEl = document.getElementById('badgesContainer');
  if (badgesEl) {
    const earned = p.badges || [];
    badgesEl.innerHTML = ALL_BADGES.map(b => {
      const isEarned = earned.includes(b.id);
      return `
        <div class="achievement-badge ${isEarned ? 'earned' : 'locked'}" title="${b.desc}">
          <div class="badge-icon">${isEarned ? b.icon : '🔒'}</div>
          <div class="badge-name">${b.name}</div>
          ${isEarned ? '<div style="font-size:.68rem;color:var(--success)">Earned ✓</div>' : '<div style="font-size:.68rem;color:var(--gray-400)">Locked</div>'}
        </div>
      `;
    }).join('');
  }

  // Stats
  setText('statTopics',  (p.completedTopics || []).length);
  setText('statQuizzes', (p.quizScores || []).length);
  setText('statBadges',  (p.badges || []).length);

  if (p.quizScores && p.quizScores.length > 0) {
    const avg = p.quizScores.reduce((sum, s) => sum + (s.score / s.total * 100), 0) / p.quizScores.length;
    setText('statAvg', Math.round(avg) + '%');
  }
}

function clearQuizHistory() {
  if (!confirm('Clear quiz history? This cannot be undone.')) return;
  Store.update('progress', p => { p.quizScores = []; return p; }, {});
  renderProgress();
}

function resetProgress() {
  if (!confirm('Reset all demo data? This will restore the original demo progress.')) return;
  localStorage.removeItem('edubridge_progress');
  initProgress();
  renderProgress();
  alert('Demo data has been reset!');
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
