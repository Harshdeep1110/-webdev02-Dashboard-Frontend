🤝 Contributing to Kanban Collaboration Board

Thank you for your interest in contributing! This project is a debugging challenge — your goal is to find and fix the 45+ intentional bugs hidden in the codebase. Here's how to get started.

🚀 Getting Started

1. Fork the Repository

Click the Fork button in the top-right corner of the GitHub repo page. This creates your own copy of the project under your GitHub account.

2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/web-dev-challenge-2.git
cd web-dev-challenge-2
```

3. Add the Upstream Remote

Keep your fork synced with the original repo:

```bash
git remote add upstream https://github.com/GDG-Open-Challenge/web-dev-challenge-2.git
git fetch upstream
```

🔀 Branching Strategy

Create a separate branch for each bug fix. Use this naming convention:

`fix/issue-<number>-<short-description>`

Examples:

```bash
git checkout -b fix/issue-1-drag-duplication
git checkout -b fix/issue-4-search-efficiency
git checkout -b fix/issue-16-memory-leak
```

**Important**

Always branch off from the latest main branch:

```bash
git checkout main
git pull upstream main
git checkout -b fix/issue-<number>-<description>
```

🛠 Making Changes

1. Pick an issue from the GitHub Issues tab.
2. Comment on the issue to let others know you're working on it.
3. Read the full description — understand the bug behavior, root cause, and affected file.
4. Fix the bug in the relevant file(s).
5. Test your fix by opening `index.html` in a browser and verifying the correct behavior.

### Testing Locally

**Option 1: Open directly**
`open index.html`

**Option 2: Use a local server (recommended)**
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080`

📝 Commit Message Convention

Follow the Conventional Commits standard:

`fix(scope): brief description of the fix (#issue-number)`

Examples:

```bash
git commit -m "fix(drag): resolve card duplication by checking target list existence (#1)"
git commit -m "fix(render): optimize search by implementing debouncing (#4)"
git commit -m "fix(css): fix dark mode card visibility by adding shadow variables (#3)"
```

**Note**: Scope should be the affected area: `drag`, `render`, `modal`, `css`, `data`, `a11y`, etc.

🚀 Submitting a Pull Request

1. **Push Your Branch**

```bash
git push origin fix/issue-<number>-<description>
```

2. **Open a Pull Request**

- Go to your fork on GitHub.
- Click "Compare & pull request".
- Set the base repository to `GDG-Open-Challenge/web-dev-challenge-2` and base branch to `main`.
- You **MUST** follow the PR format below — PRs that do not follow this format will be requested to revise.

📋 Required Pull Request Format

Every pull request must follow this exact structure. Copy this template and fill in every section. Incomplete submissions will not be reviewed.

---

## 🐛 Bug Fix: Issue #<number> — <Issue Title>

### 📌 Summary

| Field             | Details                                      |
|-------------------|----------------------------------------------|
| **Issue**         | #<number>                                    |
| **Title**         | <Issue title>                                |
| **Severity**      | 🟢 Low / 🟡 Medium / 🔴 High               |
| **Category**      | Bug / UX / Accessibility / Performance       |
| **File(s)**       | `<file path>`                                |
| **Function(s)**   | `<function name(s)>`                         |

---

### 🔍 Bug Description

<Explain what the bug does in your own words. Describe the incorrect behavior that a user would experience. Be specific — include what you observe vs. what is expected.>

**Steps to Reproduce:**
1. <Step 1>
2. <Step 2>
3. <Step 3>

**Expected Behavior:** <What should happen>

**Actual Behavior:** <What currently happens>

---

### 🔬 Root Cause Analysis

<Explain WHY the bug occurs at a technical level. Identify the exact code pattern, JavaScript behavior, CSS property, or logic error that causes the issue. This is the most important section — demonstrate that you understand the underlying cause, not just the symptom.>

---

### ✅ Fix Applied

<Explain your fix and WHY it resolves the root cause. Don't just say "I changed X to Y" — explain the reasoning behind your approach and why it's the correct solution.>

---

### 📄 Code Changes

#### Before (Buggy Code)

```js
// File: <file path>
// Line(s): <line number(s)>
// <paste the exact original buggy code here>
```

#### After (Fixed Code)

```js
// File: <file path>
// Line(s): <line number(s)>
// <paste your corrected code here>
```

*If your fix spans multiple files, include a Before/After block for each file.*

---

### 🧪 Testing & Verification

Describe how you tested your fix:

- [ ] Verified the fix resolves the described bug
- [ ] Confirmed no regressions — other features still work correctly
- [ ] Tested on Chrome
- [ ] Tested on Firefox or Safari
- [ ] Tested on mobile viewport (≤480px)
- [ ] Tested edge cases (e.g., empty state, rapid clicks)

**Test Evidence:**
<Screenshots, recordings, or console output>

---

### 📚 Additional Notes (Optional)

<Any other context, related issues you noticed, alternative approaches considered, or references to documentation/articles that helped you understand the bug.>

---

## ⚠️ PR Review Criteria

Your pull request will be evaluated on:

| Criterion | What We Look For |
|-----------|-----------------|
| **Correctness** | Does the fix actually resolve the bug without introducing new issues? |
| **Root Cause Understanding** | Did you identify WHY the bug occurs, not just WHAT to change? |
| **Code Quality** | Is the fix minimal, clean, and focused on the bug? |
| **Before/After Clarity** | Are the code changes clearly documented with exact line references? |
| **Testing** | Did you verify the fix across browsers and edge cases? |
| **Format Compliance** | Did you follow the required PR template completely? |

> [!CAUTION]
> PRs that skip sections, leave placeholders unfilled, or bundle multiple bug fixes will be sent back for revision.

---

## ✅ Contribution Rules

| Rule | Details |
|------|---------|
| **One bug per PR** | Don't bundle multiple fixes in a single pull request |
| **No frameworks** | Keep it HTML, CSS, and vanilla JS only — no React, jQuery, Tailwind, etc. |
| **Don't reformat code** | Fix only the bug; don't restructure, rename, or beautify the surrounding code |
| **Don't add dependencies** | No npm packages, CDN libraries, or external tools |
| **Test before submitting** | Verify your fix works in at least 2 browsers |
| **Follow the PR template** | Every section must be filled out completely |

---

## 🏷 Issue Difficulty Levels

Issues are tagged by difficulty to help you choose based on your experience:

| Level | Label | Description |
|-------|-------|-------------|
| 🟢 | `good first issue` | Great for beginners — straightforward fixes |
| 🟡 | `intermediate` | Requires understanding of JS/CSS behavior |
| 🔴 | `advanced` | Deep debugging — type coercion, async behavior, data mutation, hidden characters |

---

## 💬 Need Help?

- Comment on the issue you're working on so others know it's in progress.
- Ask questions in the issue thread if you're stuck.
- Review other contributors' PRs to learn different approaches.

---

## 📜 Code of Conduct

- Be respectful and constructive in all interactions.
- Help other contributors when possible.
- Give credit where credit is due.
- Have fun debugging! 🐛
