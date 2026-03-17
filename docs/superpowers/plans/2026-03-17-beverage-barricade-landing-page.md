# Beverage Barricade Landing Page Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page product landing page for the Avant Grub Beverage Barricade that drives Amazon purchases.

**Architecture:** Single HTML file with Tailwind CSS via CDN and minimal inline JS. No build step. Nine sections from sticky nav to footer. Dark theme with orange accents. All images already exist in `images/`.

**Tech Stack:** HTML, Tailwind CSS (CDN), inline JavaScript (Intersection Observer, scroll listener), deployed via GitHub + Netlify.

**Spec:** `docs/superpowers/specs/2026-03-17-beverage-barricade-landing-page-design.md`

---

## File Structure

| File | Responsibility |
|------|---------------|
| `beverage-barricade.html` | The entire landing page — markup, Tailwind config, inline JS |
| `images/*.jpg` | Product images (already exist, no changes needed) |
| `.claude/launch.json` | Dev server config (already exists, may need update) |

This is a single-file project. All markup, styles (via Tailwind utility classes), and scripts live in `beverage-barricade.html`.

---

## Task 1: Scaffold HTML with head, Tailwind config, and sticky nav

**Files:**
- Create: `beverage-barricade.html`

- [ ] **Step 1: Create the HTML file with `<head>`, Tailwind CDN, custom config, and nav bar**

The `<head>` must include:
- Meta charset, viewport
- Title: "Beverage Barricade by Avant Grub — Keep Bugs Out, Pop Tabs Easy"
- Meta description: "Reusable snap-on can cover. Blocks bugs, opens cans with half the force, 6 colors to ID your drink. BPA-free, dishwasher safe."
- Open Graph tags (og:title, og:description, og:image pointing to `images/hero-product.jpg`)
- Tailwind CDN script (`https://cdn.tailwindcss.com`)
- Google Fonts link for Inter (weights: 400, 500, 600, 700, 800, 900)
- Tailwind config extending: fontFamily (Inter), custom colors for brand orange range and dark range (matching spec: `#0a0a0f` through `#2e2e4a`), and fade-up animation keyframes

The nav bar:
- Fixed position, full width, z-50
- Transparent background initially (transitions to solid dark on scroll via JS added later)
- Left: "AVANT GRUB" bold text logo, white
- Right: "Shop on Amazon" orange rounded button linking to `https://www.amazon.com/dp/B01M07PZ8X`
- Padding: horizontal `px-6`, vertical `py-4`
- `id="navbar"` for JS targeting later

Close the file with empty `<body>` (just the nav inside) and `</html>`.

- [ ] **Step 2: Preview in browser to verify nav renders**

Start the dev server and confirm:
- Nav bar is visible at top
- Logo text shows on left, button on right
- Orange button is styled and clickable
- Dark background (or transparent over white for now)

- [ ] **Step 3: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: scaffold landing page with head, Tailwind config, and sticky nav"
```

---

## Task 2: Hero section

**Files:**
- Modify: `beverage-barricade.html`

- [ ] **Step 1: Add the hero section after the nav**

Structure:
- `<section>` with dark background gradient (from `#0a0a0f` to `#12121a`), min-height screen, flex centering
- Top padding `pt-24` to clear fixed nav
- Inner container: `max-w-7xl mx-auto px-6`
- Two-column grid on desktop (`lg:grid-cols-2`), single column on mobile
- Left column:
  - Headline `<h1>`: "Keep Bugs Out. Pop Tabs Easy. Know Your Drink." — text-4xl to text-6xl, font-extrabold, white, leading-tight
  - Subtext `<p>`: "The reusable snap-on can cover that protects your drink, opens with half the force, and comes in 6 colors so you always know which one is yours." — text-lg, text-gray-400, mt-6
  - Trust badge `<div>`: "1,000+ bought last month on Amazon" — small text, text-orange-400, mt-4, with a star or fire icon (inline SVG or emoji)
  - CTA button `<a>`: "Shop on Amazon" — large orange bg, white text, rounded-full, px-8 py-4, mt-8, hover:brightness-110, transition, links to Amazon URL
- Right column:
  - `<img src="images/hero-product.jpg">` — rounded-2xl, shadow, max width constrained

- [ ] **Step 2: Preview and verify**

Check:
- Two columns on desktop, stacked on mobile
- Headline is large and bold
- Orange button is prominent
- Image displays correctly
- Adequate spacing from nav

- [ ] **Step 3: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: add hero section with headline, CTA, and product image"
```

---

## Task 3: Problem → Solution section

**Files:**
- Modify: `beverage-barricade.html`

- [ ] **Step 1: Add the three-column problem/solution section**

Structure:
- `<section>` with slightly different dark bg (`#12121a`), `py-24`
- Container `max-w-7xl mx-auto px-6`
- Section headline: "Three Problems. One Clip." — centered, text-3xl to text-4xl, font-bold, white
- Subtitle: "One tiny accessory. Three big headaches solved." — centered, text-gray-400, mt-4
- Three-column grid (`lg:grid-cols-3`, `gap-8`, `mt-16`)
- Each column is a card with:
  - Rounded image at top (`<img>`, `rounded-xl`, `w-full`, `h-48 object-cover`)
  - Problem text as heading (bold, colored with respective product color): "Bugs & Dust?", "Hard Tabs?", "Whose Drink?"
  - Solution text below: short copy from spec
  - Each card uses a different accent border-top color: green for bugs, orange for tabs, blue for identification
- Column 1: `bug-protection.jpg`, green accent
- Column 2: `easy-open.jpg`, orange accent
- Column 3: `identify-drinks.jpg`, blue accent

- [ ] **Step 2: Preview and verify on desktop and mobile**

Check:
- Three columns on desktop, single column on mobile
- Images load correctly
- Color accents are distinct per column
- Text is readable against dark background

- [ ] **Step 3: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: add problem/solution section with three feature columns"
```

---

## Task 4: How It Works section

**Files:**
- Modify: `beverage-barricade.html`

- [ ] **Step 1: Add the three-step "How It Works" section**

Structure:
- `<section>` with lighter dark bg (`#1a1a26`) for contrast, `py-24`
- Container `max-w-7xl mx-auto px-6`
- Headline: "Snap. Pop. Sip." — centered, text-3xl to text-4xl, font-bold, white
- Three-step horizontal flow (`lg:grid-cols-3`, `gap-12`, `mt-16`)
- Each step:
  - Large step number in orange (`text-6xl font-black text-orange-500 opacity-30`)
  - Step title (bold, white): "Slide It On", "Pop the Top", "Sip & Seal"
  - Step description (text-gray-400): brief explanatory text
  - Connecting arrow between steps on desktop (use a `→` character or CSS border, hidden on mobile)

- [ ] **Step 2: Preview and verify**

Check:
- Steps flow left to right on desktop
- Stack vertically on mobile
- Step numbers are decorative/large
- Visual hierarchy is clear

- [ ] **Step 3: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: add how-it-works three-step section"
```

---

## Task 5: Pricing section

**Files:**
- Modify: `beverage-barricade.html`

- [ ] **Step 1: Add the three pricing cards**

Structure:
- `<section>` with dark bg, `py-24`
- Container `max-w-7xl mx-auto px-6`
- Headline: "Grab Yours" — centered, bold, white
- Three cards in a grid (`lg:grid-cols-3`, `gap-8`, `mt-16`)
- Each card:
  - Rounded (`rounded-2xl`), dark panel bg (`bg-[#1a1a26]`), `p-8`, border (`border border-white/10`)
  - Pack name at top (bold, white): "6-Pack", "12-Pack", "36-Pack"
  - Price large: "$9.99", "$14.99", "$24.99" — `text-4xl font-bold text-white`
  - "Shop on Amazon" button — orange bg, full width, rounded, links to Amazon URL
- Middle card (12-Pack) is highlighted:
  - Orange border (`border-orange-500`)
  - "Most Popular" badge at top — small orange bg pill
  - Slight scale or shadow to make it stand out
- 36-Pack card:
  - "Best Value" badge — subtle badge styling
- On tablet/mobile: cards stack to single column

- [ ] **Step 2: Preview and verify**

Check:
- Three cards side by side on desktop
- 12-pack card is visually highlighted
- Prices display correctly with dollar signs
- All buttons link to Amazon
- Cards stack on mobile

- [ ] **Step 3: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: add pricing section with three pack options"
```

---

## Task 6: Use Cases / Lifestyle section

**Files:**
- Modify: `beverage-barricade.html`

- [ ] **Step 1: Add the lifestyle image section**

Structure:
- `<section>` with dark bg (`#12121a`), `py-24`
- Container `max-w-7xl mx-auto px-6`
- Headline: "Use It Anywhere You Crack Open a Can" — centered, bold, white
- Full-width rounded image: `lifestyle-grid.jpg` — `rounded-2xl`, `mt-12`, `w-full`
- Below image: a row of use-case tags/pills — "Picnics", "Tailgates", "Camping", "Beach Days", "BBQ", "Birthday Parties" — small rounded-full pills with subtle bg, flex wrap, centered, `gap-3`, `mt-8`

- [ ] **Step 2: Preview and verify**

Check:
- Image displays full width and rounded
- Tags/pills wrap nicely on mobile
- Spacing looks balanced

- [ ] **Step 3: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: add lifestyle use cases section with image and tags"
```

---

## Task 7: Product specs strip + Final CTA + Footer

**Files:**
- Modify: `beverage-barricade.html`

- [ ] **Step 1: Add the product specs horizontal strip**

Structure:
- `<section>` with border-y (`border-white/10`), `py-12`, dark bg
- Container: flex wrap, centered, `gap-8` to `gap-12`
- Six items, each with an inline SVG icon + label text:
  - "Fits 6–16 oz Cans" (can icon)
  - "BPA-Free" (shield/check icon)
  - "Dishwasher Safe" (water droplet icon)
  - "Food-Grade Polymer" (leaf/material icon)
  - "Reusable" (recycle icon)
  - "Lifetime Guarantee" (star icon)
- Icons: simple inline SVGs, text-orange-500, `w-6 h-6`
- Labels: text-sm, text-gray-400

- [ ] **Step 2: Add the final CTA section**

Structure:
- `<section>` with gradient bg (dark to orange-tinted dark), `py-24`
- Container centered, text-center
- Headline: "Stop Sharing Your Drink With Bugs." — text-3xl to text-5xl, font-bold, white
- Subtext: "Available now on Amazon." — text-gray-300, mt-4
- CTA button: "Shop on Amazon" — large, orange, rounded-full, `mt-8`, same style as hero button, links to Amazon URL

- [ ] **Step 3: Add the footer**

Structure:
- `<footer>` with darkest bg (`#0a0a0f`), `py-8`
- Container centered, flex between (or stacked on mobile)
- Left: "AVANT GRUB" bold text
- Right: copyright "2026 Avant Grub. All rights reserved."
- Text: text-sm, text-gray-500

- [ ] **Step 4: Preview and verify all three additions**

Check:
- Specs strip shows icons + labels in a centered row
- Final CTA is visually distinct with gradient background
- Footer is minimal and clean
- Full page scroll from top to bottom is cohesive

- [ ] **Step 5: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: add specs strip, final CTA, and footer"
```

---

## Task 8: Scroll animations and sticky nav JavaScript

**Files:**
- Modify: `beverage-barricade.html`

- [ ] **Step 1: Add CSS classes for animations**

In the Tailwind config's `extend` block, add:
- `fadeUp` keyframe: from `opacity:0, translateY(30px)` to `opacity:1, translateY(0)`
- `fade-up` animation class: `fadeUp 0.6s ease forwards`

Add a utility class in a `<style>` block:
```css
.animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
```

- [ ] **Step 2: Add `animate-on-scroll` class to all section containers**

Add the class to each `<section>` element (or their inner content wrappers) so they start hidden and animate in.

- [ ] **Step 3: Add inline JavaScript before `</body>`**

Two scripts:

**Intersection Observer for scroll animations:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```

**Sticky nav background on scroll:**
```javascript
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-[#0a0a0f]/95', 'backdrop-blur-md', 'shadow-lg');
  } else {
    navbar.classList.remove('bg-[#0a0a0f]/95', 'backdrop-blur-md', 'shadow-lg');
  }
});
```

Note: The Tailwind JIT CDN supports arbitrary values in classList operations. If it doesn't work at runtime, fall back to toggling a custom CSS class instead (e.g., `.nav-scrolled { background: rgba(10,10,15,0.95); backdrop-filter: blur(12px); }`).

- [ ] **Step 4: Preview and verify**

Check:
- Sections fade in as you scroll down
- Nav starts transparent, becomes solid dark with blur after scrolling ~50px
- Animations don't fire until elements enter viewport
- No janky re-triggers (each section only animates once)

- [ ] **Step 5: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: add scroll animations and sticky nav background transition"
```

---

## Task 9: Responsive polish and hover effects

**Files:**
- Modify: `beverage-barricade.html`

- [ ] **Step 1: Add hover effects**

- CTA buttons: `hover:scale-105 hover:brightness-110 transition-all duration-200`
- Pricing cards: `hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300`
- Ensure these classes are on all relevant elements

- [ ] **Step 2: Test responsive breakpoints**

Resize browser to check:
- **Mobile (375px):** Single column everywhere, full-width buttons, stacked hero, readable text
- **Tablet (768px):** Two-column hero, features may be 2-col with 3rd wrapping
- **Desktop (1280px):** Full layout — two-col hero, three-col features, three pricing cards

Fix any overflow, text sizing, or spacing issues found.

- [ ] **Step 3: Add `prefers-reduced-motion` support**

Add to the `<style>` block:
```css
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll { opacity: 1; transform: none; transition: none; }
}
```

- [ ] **Step 4: Final full-page preview**

Scroll through the entire page top to bottom and verify:
- All sections render correctly
- All images load
- All Amazon links work
- Animations are smooth
- Mobile layout is clean

- [ ] **Step 5: Commit**

```bash
git add beverage-barricade.html
git commit -m "feat: add hover effects, responsive polish, and reduced-motion support"
```

---

## Task 10: Update dev server config and deploy setup

**Files:**
- Modify: `.claude/launch.json`

- [ ] **Step 1: Check and update launch.json if needed**

Read `.claude/launch.json`. If it only serves `index.html`, the existing PowerShell server at `server.ps1` already serves any file by path, so `beverage-barricade.html` will be accessible at `http://localhost:3000/beverage-barricade.html`. No changes needed unless launch.json points elsewhere.

- [ ] **Step 2: Push to GitHub**

```bash
git push origin master
```

- [ ] **Step 3: Deploy on Netlify**

Use the Netlify CLI or web UI:
- Connect the GitHub repo `ellajsmith126/test-landing-page`
- Build command: (none — static site)
- Publish directory: `.` (root)
- The page will be available at `https://<site-name>.netlify.app/beverage-barricade.html`

- [ ] **Step 4: Verify deployed site**

Open the Netlify URL and confirm:
- Page loads correctly
- All images display
- Amazon links work
- Responsive design works on mobile

- [ ] **Step 5: Commit any final changes**

```bash
git add -A
git commit -m "chore: finalize deployment configuration"
git push origin master
```
