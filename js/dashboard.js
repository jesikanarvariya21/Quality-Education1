/* ===================================================
   EduBridge — Dashboard Logic
   =================================================== */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const progress = Store.get('progress');
  if (!progress) return;

  // Welcome
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const el = document.getElementById('dashWelcome');
  if (el) el.textContent = `${greeting}, ${progress.name}! 👋`;

  const dateEl = document.getElementById('dashDate');
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Stats
  setText('dashStreak', progress.streak + ' 🔥');
  setText('dashLessons', progress.completedLessons);
  setText('dashXP', progress.totalXP.toLocaleString() + ' XP');
  setText('dashBadges', progress.badges.length);

  // Courses
  const courseList = document.getElementById('courseList');
  if (courseList && progress.enrolledCourses) {
    courseList.innerHTML = progress.enrolledCourses.map(c => `
      <div style="display:flex;flex-direction:column;gap:.4rem">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:.6rem">
            <span style="font-size:1.4rem">${c.icon}</span>
            <div>
              <div style="font-weight:600;color:var(--navy);font-size:.9rem">${c.title}</div>
              <div class="small text-muted">${c.progress}% complete</div>
            </div>
          </div>
          <a href="learning.html" class="btn btn-outline-teal btn-sm">Continue</a>
        </div>
        <div class="progress-wrap">
          <div class="progress-fill" style="width:${c.progress}%;background:${c.color}"></div>
        </div>
      </div>
    `).join('<hr class="divider" style="margin:.5rem 0">');
  }

  // Study Plan
  const planEl = document.getElementById('studyPlan');
  if (planEl && progress.studyPlan) {
    planEl.innerHTML = progress.studyPlan.map((item, idx) => `
      <label style="display:flex;align-items:center;gap:.75rem;cursor:pointer;padding:.5rem;border-radius:8px;transition:background .2s" 
             onmouseover="this.style.background='var(--gray-50)'" onmouseout="this.style.background='transparent'">
        <input type="checkbox" id="plan_${idx}" ${item.done ? 'checked' : ''} onchange="togglePlan(${idx})"
               style="width:18px;height:18px;accent-color:var(--teal);cursor:pointer">
        <div style="flex:1">
          <div style="font-weight:600;font-size:.88rem;color:var(--navy);${item.done ? 'text-decoration:line-through;opacity:.5' : ''}">${item.task}</div>
          <div class="small text-muted">📅 ${item.time}</div>
        </div>
        ${item.done ? '<span style="color:var(--success);font-size:.8rem;font-weight:600">✓ Done</span>' : ''}
      </label>
    `).join('');
  }

  // Recommendations
  const recEl = document.getElementById('recommendations');
  const recs = [
    { icon: '📐', subject: 'Algebra', topic: 'Quadratic Equations', difficulty: 'Medium', color: 'tag-navy' },
    { icon: '🐍', subject: 'Python', topic: 'List Comprehensions', difficulty: 'Easy', color: 'tag-teal' },
    { icon: '🔬', subject: 'Chemistry', topic: 'Periodic Table Basics', difficulty: 'Easy', color: 'tag-purple' }
  ];
  if (recEl) {
    recEl.innerHTML = recs.map(r => `
      <div style="display:flex;align-items:center;gap:.75rem;padding:.5rem 0">
        <div style="width:40px;height:40px;border-radius:8px;background:var(--gray-100);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0">${r.icon}</div>
        <div style="flex:1">
          <div style="font-weight:600;font-size:.88rem;color:var(--navy)">${r.topic}</div>
          <div class="small text-muted">${r.subject}</div>
        </div>
        <span class="tag ${r.color}">${r.difficulty}</span>
        <a href="learning.html" class="btn btn-primary btn-sm">Go →</a>
      </div>
    `).join('<hr class="divider" style="margin:0">');
  }
});

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function togglePlan(idx) {
  Store.update('progress', p => {
    p.studyPlan[idx].done = !p.studyPlan[idx].done;
    if (p.studyPlan[idx].done) {
      p.completedLessons = (p.completedLessons || 0) + 1;
      p.totalXP = (p.totalXP || 0) + 50;
    } else {
      p.completedLessons = Math.max(0, (p.completedLessons || 0) - 1);
      p.totalXP = Math.max(0, (p.totalXP || 0) - 50);
    }
    return p;
  }, {});
  // Re-render stats
  const p = Store.get('progress');
  if (p) {
    const l = document.getElementById('dashLessons');
    const x = document.getElementById('dashXP');
    if (l) l.textContent = p.completedLessons;
    if (x) x.textContent = p.totalXP.toLocaleString() + ' XP';
  }
}
