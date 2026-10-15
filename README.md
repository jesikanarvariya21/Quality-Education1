# EduBridge — Quality Education for Everyone

> A student project aligned with **UN Sustainable Development Goal 4 (Quality Education)**

---

## Problem Statement

Millions of students around the world — especially in rural and low-income communities — face three major barriers to quality education:

1. **One-Size-Fits-All Learning** — Traditional classrooms can't adapt to different learning speeds, leaving many students behind or unchallenged.
2. **Geographic & Economic Inequality** — Rural and low-income students lack access to quality teachers, textbooks, and educational technology.
3. **No Career Guidance** — Students graduate without understanding what careers exist, what skills are required, or how to prepare for them.

---

## Target Users

- Students in Classes 6–12 and beyond
- Rural and low-income learners with limited access to coaching
- First-generation learners needing career direction
- Anyone seeking free, self-paced educational resources

---

## Solution: EduBridge

EduBridge is a complete educational web platform that delivers:

| Feature | Description |
|---|---|
| 🧠 Personalized Learning | Topic-based lessons with instant-feedback quizzes and study plan generator |
| 📚 Free Resources | Curated notes, tutorials, and practice questions organized by subject and level |
| 🎯 Career Guidance | Career exploration, skill roadmaps, project ideas, and an interest questionnaire |
| 🏆 Progress Tracking | Badges, learning streaks, XP system, and quiz history |
| 🌍 Multilingual | English + Hindi content, with more languages planned |
| 📱 Mobile-First | Responsive design optimized for smartphones and low-bandwidth connections |

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, features, SDG 4 section, stats |
| Dashboard | `dashboard.html` | Personalized welcome, courses, study plan |
| Personalized Learning | `learning.html` | Lessons, quizzes, study plan generator |
| Resources | `resources.html` | Searchable, filterable resource library |
| Career Guidance | `career.html` | Career paths, roadmaps, interest quiz |
| Progress & Achievements | `progress.html` | Badges, quiz history, XP, streaks |
| About | `about.html` | Mission, SDG alignment, future roadmap |
| Contact | `contact.html` | Validated feedback form (demo) |

---

## Folder Structure

```
edubridge/
├── index.html          ← Home page
├── dashboard.html      ← Student Dashboard
├── learning.html       ← Personalized Learning + Quizzes
├── resources.html      ← Learning Resources
├── career.html         ← Career Guidance
├── progress.html       ← Progress & Achievements
├── about.html          ← About EduBridge
├── contact.html        ← Contact & Feedback
│
├── css/
│   └── styles.css      ← Complete stylesheet (navy/teal palette)
│
└── js/
    ├── app.js          ← Shared logic (LocalStorage, nav, animations)
    ├── dashboard.js    ← Dashboard rendering and study plan interaction
    ├── learning.js     ← Curriculum data, quiz engine, study plan generator
    ├── resources.js    ← Resource data, search, and filters
    ├── career.js       ← Career paths, interest questionnaire, results
    ├── progress.js     ← Badge system, quiz history, XP levels
    └── contact.js      ← Form validation and demo submission
```

---

## How to Run Locally

### Option 1: Open directly (no server needed for basic functionality)
```bash
# Navigate to the edubridge folder
cd edubridge

# Open in browser
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Use a local development server (recommended)
```bash
# Using Python (comes pre-installed on most systems)
cd edubridge
python -m http.server 8000

# Then open: http://localhost:8000
```

```bash
# Using Node.js / npx
cd edubridge
npx serve .

# Or with live-server
npx live-server
```

### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

---

## Technology Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic elements, ARIA labels) |
| Styling | CSS3 (custom properties, Grid, Flexbox, animations) |
| Logic | Vanilla JavaScript (ES6+, no frameworks) |
| Fonts | Google Fonts (Inter, Plus Jakarta Sans) |
| Storage | Browser LocalStorage (no backend required) |

No build tools, bundlers, or package managers are required. The entire project runs with plain HTML/CSS/JS.

---

## Key Features — Working vs Demo

| Feature | Status | Notes |
|---|---|---|
| Navigation | ✅ Working | All page links functional |
| Responsive design | ✅ Working | Mobile, tablet, desktop |
| Quiz engine | ✅ Working | Instant feedback, scoring |
| Study plan generator | ✅ Working | Predefined rules (not AI) |
| Progress tracking | ✅ Working | LocalStorage persistence |
| Badge system | ✅ Working | Earned on real actions |
| Resource search & filter | ✅ Working | Client-side filtering |
| Career questionnaire | ✅ Working | Rule-based recommendations |
| Language toggle (EN/HI) | ✅ Working | Switches resource pool |
| Contact form validation | ✅ Working | Full client-side validation |
| Form submission | ⚠️ Demo | No backend; saves locally |
| User authentication | ⚠️ Demo | Not implemented (no backend) |
| AI tutor | ⚠️ Demo | Not integrated (no API key) |
| Offline access | 🔮 Planned | Future PWA feature |

---

## SDG 4 Alignment

EduBridge directly addresses **UN Sustainable Development Goal 4 — Quality Education**:

| SDG Target | How EduBridge Addresses It |
|---|---|
| **4.1** Free, quality primary & secondary education | Free resources for all levels |
| **4.4** Technical & vocational skills | Career paths with skill roadmaps |
| **4.5** Eliminate economic disparities | No cost, mobile-friendly, rural-accessible |
| **4.6** Literacy & numeracy for all | Core subject curriculum (Math, Science, English) |
| **4.7** Education for sustainable development | SDG awareness integrated throughout |
| **4.a** Inclusive learning environments | Accessible, keyboard-navigable, responsive design |

---

## Accessibility Features

- Semantic HTML with ARIA labels
- Keyboard-navigable controls (`focus-visible` styling)
- High-contrast color palette (Navy + Teal + White)
- Readable fonts at appropriate sizes
- Mobile-friendly, touch-optimized UI
- Low-bandwidth compatible (no heavy images or videos)

---

## Future Improvements

### Platform
- Real backend with user authentication (Node.js + PostgreSQL or Firebase)
- Progressive Web App (PWA) with full offline support
- Real-time AI tutoring using open-source LLMs (no API key in frontend)
- Live doubt-solving sessions (text and video)
- Teacher and parent dashboards
- Peer-to-peer study groups

### Content
- 10+ regional language translations (Tamil, Bengali, Marathi, Telugu, etc.)
- Downloadable lesson packs for offline use
- Video lessons hosted on open platforms
- Comprehensive exam preparation (JEE, NEET, UPSC)

### Technical
- Migrate to React with component-based architecture
- SEO optimization with server-side rendering
- Full WCAG 2.1 AA accessibility compliance
- Analytics dashboard for learning patterns
- CDN delivery for low-bandwidth regions

---

## Demo Data Notice

All statistics shown on EduBridge (students reached, courses available, satisfaction rates) are illustrative figures used for demonstration purposes. They do not represent real users or verified data.

Career recommendations are for educational guidance and exploration only — they are not guaranteed job outcomes or professional career advice.

---

## License

This project is created for academic/demonstration purposes as part of an IBM-associated student presentation. It is not a production service.

---

*EduBridge — Bridging the gap between potential and opportunity.*  
*Aligned with UN SDG 4: Quality Education for Everyone.*
#   Q u a l i t y - E d u c a t i o n 2  
 