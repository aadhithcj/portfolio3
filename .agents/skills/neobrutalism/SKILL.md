---
name: neobrutalism
description: Design system guidelines for Neo-Brutalism web interfaces featuring bold borders, hard offset shadows, vibrant saturated accents, warm surfaces, and tactile micro-interactions.
---

# Neo-Brutalism Design System Skill

## Overview
Neo-Brutalism is a bold, modern take on web design that blends raw brutalist functionality with vibrant, playful aesthetics. It rejects soft gradients, blurry shadows, and cookie-cutter corporate minimalism in favor of crisp geometry, tactile feedback, and high visual contrast.

---

## 1. Visual Foundations

### Borders & Geometry
- **Borders**: Sharp, visible `2px` or `3px` solid borders on all cards, buttons, badges, and containers (`border-2 border-border` or `border-[3px] border-border`).
- **Corner Radius**: Sharp right angles (`rounded-none`) or subtle, restrained rounding (`rounded-sm`). Avoid pill shapes for cards.
- **Seams**: Use thin console borders (`divide-x divide-border/40` or `border-r border-border/40`) for grid-segmented navigation bars.

### Shadows & Depth
- **Zero-Blur Hard Shadows**: Never use fuzzy or diffused `box-shadow`. Use strictly hard, offset black or high-contrast shadows:
  - Standard card: `shadow-[4px_4px_0px_0px_var(--border)]`
  - Subtle / badge: `shadow-[2px_2px_0px_0px_var(--border)]`
  - Prominent CTA / modal: `shadow-[6px_6px_0px_0px_var(--border)]`
- **Dark Mode Shadows**: In dark mode, ensure shadows contrast against dark surfaces using a lighter border/shadow variable (e.g., `#2E2D34` or `#F7F0D9`).

### Palette & Contrast
- **Surfaces**:
  - Light mode: Warm organic cream/paper surface (`#F7F0D9` or `bg-card`).
  - Dark mode: Deep tech slate / carbon (`#011921` or `#2E2D34`).
- **Foreground / Text**: Crisp near-black (`#2E2D34`) in light mode; soft cream (`#F7F0D9`) in dark mode. High contrast ratio >= 7:1 for body copy.
- **Saturated Accents**:
  - Yellow: `#F1BE05` (primary brand, active states, key CTAs)
  - Orange: `#FF7700` (milestones, warm highlights)
  - Cyan: `#42BFDD` (tech stack, info badges)
  - Crimson / Pink: `#CE4760` / `#FF3C38` (playful graphics, tags)
  - Emerald: `#22C55E` (system status, live indicators)
  - Purple: `#9649CB` (special items)

---

## 2. Typography

- **Display**: Expressive serif (e.g. `Instrument Serif`) or extra-bold sans (e.g. `Geist 900`, `Space Grotesk 700`) for headlines.
- **Console / Technical Elements**: Monospace (`JetBrains Mono`, `font-mono`) for labels, indices, metadata, code pills, and commands.
- **Section Headers**: Terminal-style labels with `#` or `##`, uppercase tracking, and bracketed counts (e.g. `## explore portfolio // control panel [3 MODULES]`).

---

## 3. Micro-Interactions & Tactility

- **Tactile Hover Shift**:
  - Standard hover: `hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[6px_6px_0px_0px_var(--border)]`
  - Active / click: `active:translate-x-1 active:translate-y-1 active:shadow-none`
  - Button press down simulates a physical mechanical switch.
- **Timing**:
  - Snappy, responsive transitions: `150ms` to `200ms` (`transition-all duration-150`).
  - Respect `prefers-reduced-motion` for accessibility.
- **Focus States**:
  - High-visibility keyboard focus rings: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2`.

---

## 4. Component Rules

### Navigation & Headers
- Segmented developer-console bar with thin hairline borders (`border-border/40`).
- Active link marked with solid accent fill (`bg-primary text-primary-foreground font-black shadow-[inset_0_-3px_0_0_var(--border)]`).

### Cards & Modules
- Clear, distinct personality for related cards rather than identical repetition.
- Include indices (`01 //`, `02 //`), small colored icon containers with solid borders, and clear micro-tags.

### Buttons & CTAs
- High-contrast, tactile blocks with hard offset shadows.
- Avoid low-contrast ghost buttons for primary actions. Use uppercase bold text with arrows (`→` or `↗`).
