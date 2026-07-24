---
name: Max Paardekam Portfolio
description: An editorial workbench for source-backed software projects.
---

# Design System: Max Paardekam Portfolio

## Overview

**Creative North Star: "The Marked-Up Workbench"**

The portfolio behaves like a deliberately arranged working surface: oversized type establishes authorship, project imagery reads as pinned proof, and compact technical notation adds precision. The system is bold without obscuring content, with asymmetry concentrated in composition rather than noisy decoration.

Motion explains hierarchy and scroll position. A single horizontal stack marquee establishes technical range, project media reveals in sequence, and interaction feedback stays quick and physical.

**Key Characteristics:**

- Cropped, confident display typography.
- A bright paper-like field with one acid-lime accent and a tinted ink inverse for dark mode.
- Asymmetric desktop compositions that collapse to one clean mobile column.
- Real project evidence shown at inspectable scale.
- Sharp editorial rules and restrained rounded controls.

## Colors

Use a restrained strategy: tinted paper and ink neutrals with one acid-lime accent. Dark mode preserves the same roles rather than introducing a second palette.

**The One Signal Rule.** Acid lime is the only accent and is reserved for action, focus, and a few decisive fields.

### Tokens

| Role          | Light     | Dark      |
| ------------- | --------- | --------- |
| Paper         | `#f2f4f5` | `#101813` |
| Raised paper  | `#ffffff` | `#17231d` |
| Ink           | `#16201c` | `#f0f4f1` |
| Soft ink      | `#52635d` | `#aabbb4` |
| Rule          | `#bec9c5` | `#405149` |
| Signal        | `#c7ff3d` | `#baf735` |
| Strong signal | `#9be61d` | `#8fd816` |

## Typography

Use an expressive grotesk display face with a clear, contemporary sans for body copy. Monospace is limited to real technical metadata such as stack labels and project indices.

**The Scale Is Voice Rule.** Personality comes from size, crop, and weight inside one typographic family, never from random font mixing.

- Display: self-hosted Bricolage Grotesque Variable, weights 580-790.
- Body and interface: self-hosted Figtree Variable, weights 600-720.
- Tracking: zero. Hierarchy comes from weight, scale, and line height.
- Hero title: `clamp(4.25rem, 8vw, 6rem)` on desktop and a width-safe `clamp(3rem, 15vw, 5.25rem)` on mobile.

## Layout

Desktop uses a wide editorial grid with intentionally uneven project spans, anchored by generous section gaps. The hero fits within the initial dynamic viewport. Below 768px, every multi-column region resolves into a single reading order with stable media aspect ratios and no horizontal page overflow.

- Content frame: `min(100% - 48px, 1440px)` desktop and `min(100% - 32px, 680px)` mobile.
- Grid: 12 columns with 24px gutters on desktop; one column below 768px.
- Section rhythm: 96-176px responsive block spacing.
- Project composition: 12-column lead, 8/4 editorial pair, then centered 8-column proof.

## Elevation & Depth

The world is primarily flat. Depth comes from image layering, offset ink shadows on interactive media, and overlap that resembles physical proofs on a desk. Ambient glass and glow effects are excluded.

**The Proof Has Weight Rule.** Project media may lift on interaction, but text sections remain flat and quiet.

## Shapes

The system uses sharp section geometry and one restrained small-radius family for media, buttons, and tags. Pills are reserved for compact controls only.

- Shared radius: 6px.
- Rules: 1px using the mode-specific rule token.
- Touch targets: controls are at least 38px square and primary actions are at least 44px high.

## Components

- Navigation: compact wordmark, two anchors, and an icon-only theme control with a tooltip and accessible name.
- Hero proof: authentic project screenshot, physical tape detail, offset ink shadow, and a viewport-safe caption.
- Stack strip: one looping technical marquee; static and horizontally scrollable under reduced motion.
- Project proof: repository-linked media, title, source-backed description, technology tags, and a second explicit repository action.
- Contact index: five direct routes in a ruled list, each with a semantic icon and visible destination.

## Motion and Accessibility

- Entry and in-view transitions use `cubic-bezier(0.16, 1, 0.3, 1)` and run once.
- The hero proof has restrained scroll-linked vertical movement.
- Reduced motion removes entry/parallax movement, disables the marquee, and removes hover transforms.
- Keyboard focus uses a 3px strong-signal outline with a 4px offset.
- Theme follows the operating system on first visit and persists explicit user selection in local storage.

## Do's and Don'ts

### Do:

- **Do** let real screenshots and repository links carry credibility.
- **Do** vary project scale and placement while preserving a clear reading order.
- **Do** use motion for entry sequence, state feedback, and spatial continuity.

### Don't:

- **Don't** use purple gradients, mesh backgrounds, generic glass panels, or equal feature cards.
- **Don't** turn every section into a container or repeat an eyebrow above every heading.
- **Don't** add decorative perpetual animation beyond the single technical marquee.
