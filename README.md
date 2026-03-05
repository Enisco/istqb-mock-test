# ISTQB CTFL 4.0 — Mock Exam Platform

A full-featured mock exam platform for the **ISTQB Certified Tester Foundation Level 4.0** certification, built with Next.js 14 and TypeScript.

---

## Features

- 🎯 **44 Practice Questions** covering all 6 CTFL 4.0 syllabus chapters
- ⏱ **45-minute timed exam** (vs the real 60 min — harder practice!)
- 🔀 **Randomised per session** — no two exams are the same
- ✅ **Instant results** with pass/fail verdict (65% threshold)
- 📋 **Full review mode** — see correct answers and explanations
- 🔍 **Filter results** by correct, wrong, or unanswered
- 📊 **Per-question metadata** — K-level and syllabus section tags
- ⚠️ **Submit confirmation** dialog with unanswered count
- 🏁 **Auto-submit** when timer expires

---

### Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Building for Production

```bash
# Build
pnpm build

# Run production build locally
pnpm start
```

---

## Deploying to Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy (follow prompts)
vercel

# Or connect your GitHub repo at vercel.com for auto-deploy
```

---

## Syllabus Coverage

| Chapter | Section | Topic                       | Questions |
| ------- | ------- | --------------------------- | --------- |
| 1       | 1.1–1.5 | Fundamentals of Testing     | ~12       |
| 2       | 2.1–2.3 | Testing Throughout the SDLC | ~10       |
| 3       | 3.1–3.2 | Static Testing              | ~6        |
| 4       | 4.1–4.5 | Test Analysis and Design    | ~16       |
| 5       | 5.1–5.5 | Managing Test Activities    | ~10       |
| 6       | 6.1–6.2 | Test Tools                  | ~6        |

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Custom Properties** (no Tailwind, no UI library)
- **Google Fonts** — Syne, IBM Plex Mono, Inter

---

_For practice purposes only. Not affiliated with ISTQB._
