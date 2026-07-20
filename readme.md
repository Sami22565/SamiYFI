# Sami Yafeai — Design System

Design system for **Sami Yafeai**, a fitness coach whose primary product is a 1-on-1 coaching
mentorship (fitness + business) sold through an application funnel — a bold, dark, high-energy
aesthetic in the vein of creator/coach "apply now" landing pages.

## Sources
- GitHub repo `Sami22565/SamiYFI` was provided but is **empty** (no commits) — nothing could be read
  from it. If real product code/content is pushed there later, re-run this system against it for a
  more accurate recreation: https://github.com/Sami22565/SamiYFI
- `apply.husseinfht.com` was supplied as a **structural reference only** (video-hero + apply-form
  funnel layout belonging to a different creator, Hussein Farhat). None of its branding, copy, colors,
  or type were copied — only the general page pattern (hero video → stats/social proof → process →
  FAQ → multi-step application form) informed the funnel's structure.
- Everything else (colors, type, components, copy) was designed from scratch for this brand, since no
  logo, palette, font files, or existing site were provided.

Because there's no real source material yet, treat every visual decision here as a **first draft** —
swap in real brand assets (logo, fonts, photos, copy) as soon as they exist.

## What's in this system
- `styles.css` — root stylesheet, imports every token + component stylesheet below.
- `tokens/` — colors, typography, spacing, effects (radii/shadows/motion), fonts.
- `components/` — reusable React UI primitives, grouped by concern:
  - `forms/` — Button, Input, Textarea, Select, Checkbox
  - `content/` — Badge, Tag, Card, TestimonialCard, StatBlock
  - `disclosure/` — Accordion
  - `navigation/` — Nav
- `guidelines/` — foundation specimen cards (colors, type, spacing, radii, shadows, motion, wordmark).
- `ui_kits/application-funnel/` — full click-through landing page + multi-step apply form.
- `SKILL.md` — portable skill file for use in Claude Code.

## Content fundamentals
- **Voice**: direct, confident, second-person ("you/your"), coach-to-client. Short declarative
  sentences. Numbers do the persuading ("500+ clients coached", "12-week program").
- **Casing**: headlines are Title Case or ALL CAPS (display font is uppercase by convention); body
  copy is sentence case.
- **CTAs**: imperative and short — "Apply Now", "See how it works", "Submit Application" — never
  "Learn more" alone.
- **Emoji**: not used in UI copy. (Social clips in this niche use emoji heavily, but the product
  surfaces here — funnel, forms — stay clean/text-only.)
- **Vibe**: hustle/high-energy but not hype-scammy — confident coach, not a "guru." Avoid ALL-CAPS
  paragraphs, exclamation overload, or fake urgency beyond "limited spots."

## Visual foundations
- **Color**: near-black backgrounds (`--black-1/2/3`) with an ember-red accent (`--ember-500`,
  `#FF4B2B`) for primary CTAs and a muted gold (`--gold-500`) as a secondary/premium accent. Text is
  off-white, never pure white or pure black.
- **Type**: `Anton` (condensed, heavy, uppercase) for display/headlines — high-impact, poster-like.
  `Manrope` for body and UI text — clean, humanist, legible at small sizes. See "Fonts" below re:
  substitution.
- **Spacing**: 4px base scale (`--space-1` 4px → `--space-10` 128px). Generous section padding
  (64–96px) between funnel sections.
- **Backgrounds**: flat dark surfaces, no gradients, no textures/patterns. One full-bleed photo/video
  slot in the hero; everywhere else is flat color.
- **Animation**: fast and confident — 120–200ms, `cubic-bezier(0.2,0.6,0.2,1)`, no bounce/spring.
  Buttons scale to 0.97 on press.
- **Hover states**: primary/secondary buttons darken one step; outline/ghost buttons brighten text
  or border color. No opacity fades.
- **Press states**: `transform: scale(0.97)` on active, no color change beyond hover.
- **Borders**: 1px hairlines (`--border-subtle` on dark surfaces) — no colored left-border accent
  cards.
- **Shadows**: soft dark elevation shadows for depth; a warm ember "glow" shadow reserved for primary
  CTA buttons only (`--shadow-glow-ember`).
- **Corner radii**: cards and inputs are moderately rounded (10–16px); buttons, badges, and tags are
  full pill (`--radius-pill`) — a deliberate contrast between sharp content panels and soft
  interactive controls.
- **Cards**: flat dark surface (`--bg-card`), 1px hairline border, 16px radius, no shadow at rest
  (shadow reserved for CTAs/elevation, not default cards).
- **Transparency/blur**: only the modal scrim (`rgba(0,0,0,0.6)`) — no frosted-glass/backdrop-blur
  elsewhere.
- **Imagery tone**: not yet supplied — hero uses a fillable slot. When real photography is added,
  keep it warm-toned and high-contrast (typical of fitness/training content), not desaturated or
  b&w.
- **Layout**: single fixed top nav (not sticky by default), content capped at 1120px max-width,
  centered.

## Iconography
No icon set or icon font was provided in any source. **Lucide** (CDN-loaded, `unpkg.com/lucide`) is
used as the nearest stroke-based match for the small set of icons this funnel needs (close, social
marks) — flagged here as a substitution. No PNG/SVG icon files exist in this project; nothing was
hand-drawn. If the real brand adopts a specific icon set later, swap the CDN link in
`ui_kits/application-funnel/index.html` and any new UI kit screens.

## Fonts — substitution flagged
No brand font files were supplied. **Anton** (display) and **Manrope** (body) were chosen as bold,
neutral nearest-matches for a fitness/coaching brand and are loaded from Google Fonts
(`tokens/fonts.css`). **Please share real brand font files if Sami Yafeai has them** — this is a
placeholder choice.

## Logo
No logo file was supplied. Per policy, no logo was drawn or approximated — every place a mark would
go uses the plain-type wordmark "Sami Yafeai" set in the display font (see
`guidelines/brand-wordmark.card.html`). Attach a real logo to replace this.

## Components
- `Button` (primary/secondary/outline/ghost, sm/md/lg)
- `Input`, `Textarea`, `Select`, `Checkbox` — application form fields
- `Badge` (eyebrow/status pill), `Tag` (neutral outline tag)
- `Card` (base dark surface), `TestimonialCard`, `StatBlock`
- `Accordion` — FAQ disclosure
- `Nav` — top navigation with wordmark + CTA slot

### Intentional additions
None of the above were pulled from a concrete source (the GitHub repo was empty) — this is the
standard set sized to a single-page application funnel, per the "from-scratch" path.

## UI Kits
- `ui_kits/application-funnel/` — the one product in this system today: a fitness-coaching
  application landing page (hero, stats, how-it-works, testimonials, FAQ, footer) plus a 3-step
  apply modal with a submitted/confirmation state. Open `index.html` and click "Apply Now" to try it.

## Index
- `styles.css` — root stylesheet
- `tokens/` — colors.css, typography.css, spacing.css, effects.css, fonts.css
- `components/components.css` — shared component CSS classes
- `components/forms/`, `components/content/`, `components/disclosure/`, `components/navigation/`
- `guidelines/` — specimen cards (Colors, Type, Spacing, Brand groups)
- `ui_kits/application-funnel/` — index.html + section JSX + ApplyModal + Footer
- `SKILL.md` — Claude Code–portable skill file
