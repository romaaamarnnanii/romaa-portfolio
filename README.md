# Romaa Amarnnanii — Personal Portfolio Site

A portfolio-cum-resume presenting Roma as a **product manager in climate-tech** —
built to land a mid-level PM role, build public reputation, and show the whole
person (product work + reading, art, music, cooking, games).

Open `index.html` in a browser to view. No build step — plain HTML/CSS/JS.

---

## File structure

```
romaa-portfolio/
├── index.html                    Main single-scroll page
├── cases/                        Case-study detail pages (Work links here)
│   ├── carbonos.html             ← fully worked TEMPLATE — copy its structure
│   ├── ghg-methodology.html      stub
│   ├── sbti.html                 stub
│   └── marketing-to-product.html stub
├── assets/
│   ├── styles.css                All styling (shared across pages)
│   └── main.js                   Nav toggle + Garden tabs
└── README.md                     This file
```

## Structure of the site (finalised)

1. Hero — emoji identity line + point-of-view headline + philosophy
2. About — the writing → marketing → product arc (theme: "make complicated things clear")
3. Work — quiet numbered list; each row opens a case study in `cases/`
4. Career — real roles/dates timeline (writing → marketing → product)
5. Studies — MBA · Business Analytics · MA Psychology · CSRD (+ minor creds)
6. The Garden — one section, 3 tabs (Thinking / Building / Frameworks) + a "Now" line
7. Beyond Work — the colour "bloom": On my shelf / Making / Playing / Cooking
8. Contact — email, LinkedIn, Goodreads, podcast, résumé

## Design decisions

- **Look:** minimalist + light. Cream paper `#FBF7F0`, near-black ink, lots of
  whitespace, hairline dividers, almost no boxes or shadows.
- **Colour, used creatively (not sprinkled):** each section has ONE coded accent
  (About/Career = rose, Work/Studies = quince/gold, Garden = evergreen), shown
  only in the eyebrow mark, a link underline, or one italic word. Beyond Work is
  the deliberate full-colour "bloom" that contrasts the restraint everywhere else.
- **Palette tokens** (in `:root`): rose `#C6427E`, quince `#C79200`,
  evergreen `#1D4A3E`, cream-pink `#F5DCE4`, cream-yellow `#F6EAC4`.
- **Type:** Fraunces (serif display, light weight 300 for headlines) + Inter (body).
- **Voice:** sharp for work, warm for personal.

## What's REAL vs. PLACEHOLDER

REAL & final:
- Hero, About (locked copy), identity line, philosophy tagline
- Career roles/dates (from LinkedIn), Studies (from LinkedIn)
- Beyond Work content (books from Goodreads; hobbies as told)
- Contact details

PLACEHOLDER — needs Roma's input (marked with `[...]` / "Placeholder" in the files):
- **Work case studies** — only `cases/carbonos.html` is a worked template;
  it too has `[bracketed]` prompts. The other three are stubs.
- **Career** — the one-line contribution under each role (except Climes).
- **Garden** — all Thinking/Building/Frameworks entries are placeholder titles.

## TO-DO (in priority order)

1. **Add images.** Every `.imgslot` div is a placeholder. Replace with
   `<img src="assets/portrait.jpg" alt="...">`. Priority images:
   - Hero portrait (vertical 4:5) — biggest visual impact
   - About candid
   - One visual per case study (product screen / diagram / abstract)
   - Beyond Work strips: painting, clay, drums, cooking
   Put image files in `assets/`.
2. **Write the Work case studies.** Use `cases/carbonos.html` as the model:
   problem → what I owned → approach → what shipped → reflection. Keep Climes
   metrics qualitative ("audit-ready", "materially faster"), not specific figures.
3. **Sharpen Career one-liners** for Pink Lemonade & Incivus.
4. **Fill the Garden** with 2–3 real notes per tab (or fewer tabs if thin).
5. **Résumé PDF** — link a real file in Contact (currently `#`).
6. **Podcast link** — add the real URL in Contact (currently `#`).

## Notes / open threads

- Considered but deferred: testimonials section (Roma to gather quotes later).
- References Roma liked: kanesherwell.com (dark/metric), havananguyen.com
  (warm, multi-passionate), taewoongseo.com (clean cards + emoji identity).
  Current build = minimalist-light interpretation of those.
- The site is a hybrid: single-scroll main page + separate case-study pages.
