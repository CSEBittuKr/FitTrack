# FitTrack — Architectural & Design Decisions

### 1. Why did you choose this design approach instead of the obvious alternative?
Instead of building a typical dark-mode "tech SaaS" or a generic fitness app loaded with stock photos, floating purple orbs, artificial kickers, and exaggerated marketing copy, I chose a crisp, product-led light design with emerald green accents and a prominent, live-feeling dashboard directly in the hero. 

The obvious alternative is to describe features abstractly using generic icons and stock fitness imagery. However, fitness and habit trackers live or die by daily usability and clarity. By presenting a realistic, interactive dashboard right in the first viewport, visitors instantly see how their day looks: daily steps, calorie burns, active minutes, 30-day streak progress, and today’s routine checklist. This gives an immediate "I want to track my day with this" feeling within the first 3 seconds without needing fake marketing claims or artificial social proof.

### 2. What trade-off did you make because of the time limit, and what would you improve if you had one full week?
- **Trade-off Made**: For charts and activity graphs, I built structured semantic HTML/CSS bar charts and progress rings rather than pulling in heavy third-party graphing libraries (like Chart.js or D3). This kept the build 100% lightweight, dependency-free, and easy to explain line by line, but limits the graphs to static daily data rather than continuous multi-month pan/zoom curves.
- **One-Week Improvements**:
  1. **Local State Persistence**: Use `localStorage` to save habit checkbox states and calculate dynamic streak counts across browser sessions.
  2. **Interactive Chart Tooltips & Canvas**: Build lightweight custom Canvas/SVG interactive curves that show hour-by-hour calorie/step breakdowns when hovering over individual days.
  3. **Custom Goal Builder**: Allow users to add new custom habits and drag-and-drop organize morning and evening routines.
  4. **Dark/Light Theme Toggle**: Add a seamless contrast switcher tailored for low-light morning workouts.

### 3. Where did you use AI tools, and what did you personally verify or change afterward?
- **Where AI was used**: AI was used to help brainstorm honest, realistic product copy, generate the initial semantic HTML5 boilerplate, and suggest CSS variable tokens for the green-and-slate color palette.
- **What was personally verified and changed**:
  1. **Eliminated AI Anti-Patterns (Impeccable Guidelines)**: Removed artificial uppercase eyebrow/kicker tags above headings, refactored stacked icon boxes into side-by-side header rows, and prevented extreme border-radius bloating.
  2. **Strict Zero-Comment Audit**: Manually inspected and cleaned all HTML, CSS, and JS files to guarantee zero comments were present.
  3. **Responsive Geometry at 390px and 1440px**: Refactored the dashboard grid layout and mobile menu toggles to ensure zero horizontal overflow, comfortable mobile touch targets (44px+), and proportional card stacking.
  4. **Interactive JavaScript Refinements**: Rewrote the habit counter calculation and demo tab switcher to ensure clean DOM event listener binding, accessible ARIA attributes (`aria-selected`, `aria-controls`), and reliable triple-click Easter egg detection.
