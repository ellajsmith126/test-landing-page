# Beverage Barricade Landing Page — Design Spec

## Overview

Single-page landing page for the Avant Grub Beverage Barricade product. Bold & energetic visual tone with dark backgrounds and vibrant product-color accents. Primary CTA drives to Amazon purchase.

## Tech Stack

- Single HTML file (`beverage-barricade.html`)
- Tailwind CSS via CDN
- Minimal inline JavaScript (Intersection Observer for scroll animations, scroll listener for sticky nav)
- No build step, no JavaScript framework
- Deployed via GitHub → Netlify

## Visual Direction

- **Tone:** Bold, high-contrast, energetic (Shark Tank / Kickstarter energy)
- **Background:** Dark (charcoal/near-black `#0a0a0f` to `#1a1a26`) with gradient transitions
- **Primary accent:** Electric orange (`#f97316` range) — matches product color, high energy
- **Secondary accents:** Product rainbow colors (blue, green, yellow, orange, pink, purple) for feature highlights
- **Typography:** Inter font family, heavy weights for headlines, clean for body
- **White space:** Generous section padding for breathing room between sections

## Page Sections (top to bottom)

### 1. Sticky Navigation Bar
- Left: "Avant Grub" text logo (bold, white)
- Right: "Shop on Amazon" CTA button (orange, rounded)
- Transparent on hero, solid dark on scroll
- Mobile: hamburger menu not needed (nav is minimal — just logo + CTA)

### 2. Hero Section
- **Background:** Dark with subtle gradient or mesh pattern
- **Layout:** Two-column on desktop (text left, image right), stacked on mobile
- **Headline:** "Keep Bugs Out. Pop Tabs Easy. Know Your Drink."
- **Subtext:** "The reusable snap-on can cover that protects your drink, opens with half the force, and comes in 6 colors so you always know which one is yours."
- **CTA:** Large orange "Shop on Amazon" button
- **Image:** `hero-product.jpg` (purple barricade on blue can with all 6 colors shown)
- **Badge/social proof:** "1K+ bought last month on Amazon" or similar trust signal

### 3. Problem → Solution Section
- **Headline:** "Three Problems. One Clip."
- **Layout:** Three columns on desktop, stacked on mobile
- **Each column:**
  - Icon/image at top
  - Problem → solution framing
  - Column 1: Bug icon + `bug-protection.jpg` — "Bugs & Dust? Swivel shut. Keep everything out."
  - Column 2: `easy-open.jpg` — "Hard Tabs? Half the force. No broken nails."
  - Column 3: `identify-drinks.jpg` — "Whose Drink? 6 colors. Always know yours."
- **Accent:** Each column uses a different product color as its highlight

### 4. How It Works
- **Headline:** "Snap. Pop. Sip."
- **Layout:** Three-step horizontal flow with numbered steps
- **Steps:**
  1. "Slide onto the tab" — with subtle icon/illustration
  2. "Pop the top open with ease" — half the force messaging
  3. "Sip, then swivel to seal" — protection messaging
- **Visual:** `hero-product.jpg` or CSS-illustrated can diagram
- **Background:** Slightly lighter dark shade for contrast with adjacent sections

### 5. Pricing Section
- **Headline:** "Grab Yours"
- **Layout:** Three pricing cards side by side
- **Cards:**
  - **6-Pack** — $9.99 — "Shop on Amazon" button
  - **12-Pack** — $14.99 — Highlighted border/badge "Most Popular" — "Shop on Amazon" button
  - **36-Pack** — $24.99 — Badge "Best Value" — "Shop on Amazon" button
- **All buttons link to:** `https://www.amazon.com/dp/B01M07PZ8X`
- **Background:** Dark with subtle gradient

### 6. Use Cases / Lifestyle Section
- **Headline:** "Use It Anywhere You Crack Open a Can"
- **Image:** `lifestyle-grid.jpg` (golf, BBQ, camping, fishing)
- **Layout:** Full-width image with subtle overlay, or image grid
- **Supporting text:** Brief list — picnics, tailgates, camping, parties, beach days

### 7. Product Specs Strip
- **Layout:** Horizontal row of icon + label pairs
- **Items:** Fits 6–16 oz Cans | BPA-Free | Dishwasher Safe | Food-Grade Polymer | Reusable | Lifetime Guarantee
- **Style:** Muted/subtle section — icons with labels, dark background

### 8. Final CTA Section
- **Headline:** "Stop Sharing Your Drink With Bugs."
- **Subtext:** "Available now on Amazon."
- **CTA:** Large orange "Shop on Amazon" button
- **Background:** Gradient or accent color block to stand out

### 9. Footer
- Simple, minimal
- "Avant Grub" branding
- Copyright line
- Optional: link to Amazon store

## Images

| File | Section | Description |
|------|---------|-------------|
| `hero-product.jpg` | Hero, How It Works | Purple barricade on can + all 6 colors |
| `product-colors.jpg` | Hero alt / specs | All 6 colors fanned out |
| `bug-protection.jpg` | Problem section | Beach usage, bug protection demo |
| `easy-open.jpg` | Problem section | Hand using product vs painful tab |
| `identify-drinks.jpg` | Problem section | Friends with different colors overhead |
| `lifestyle-grid.jpg` | Use cases | 4-photo grid: golf, BBQ, camping, fishing |

All images are in `images/` relative to the project root (e.g., `images/hero-product.jpg`).

Note: Images are placeholders cropped from Amazon listing. User will provide higher-quality originals later.

## Responsive Behavior

- **Desktop (1024px+):** Two-column hero, three-column features, three pricing cards side by side
- **Tablet (768px–1023px):** Two-column hero, two-column features (third wraps), pricing cards stacked single column
- **Mobile (<768px):** Single column throughout, stacked sections, full-width CTA buttons

## Interactions & Animations

- Scroll-triggered fade-up for sections as they enter viewport (CSS + Intersection Observer)
- Hover effects on pricing cards (subtle lift/shadow)
- Hover effects on CTA buttons (brightness/scale)
- Sticky nav background transition on scroll
- Keep animations subtle and performant — no heavy libraries

## SEO & Meta

- **Title:** "Beverage Barricade by Avant Grub — Keep Bugs Out, Pop Tabs Easy"
- **Meta description:** "Reusable snap-on can cover. Blocks bugs, opens cans with half the force, 6 colors to ID your drink. BPA-free, dishwasher safe."
- **Open Graph tags:** Title, description, and `hero-product.jpg` as OG image

## Deployment

1. Push to GitHub repository (existing remote: `ellajsmith126/test-landing-page`)
2. Connect repo to Netlify
3. Deploy as static site — no build command needed
4. Landing page served as `beverage-barricade.html` (or configure as index for a subdirectory/custom domain)

## Out of Scope

- No email collection / signup form
- No custom e-commerce checkout
- No blog or additional pages
- No video embed
- No backend
