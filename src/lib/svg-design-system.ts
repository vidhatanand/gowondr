/**
 * goPondr SVG Design System
 *
 * This file defines the rules, tokens, and guidelines for all inline SVGs
 * across the goPondr website. Every SVG illustration must follow these specs
 * for consistency, readability, and brand alignment.
 *
 * USAGE: Reference this file when creating or editing any SVG.
 * The design system page at /design-system displays all SVGs with their specs.
 */

// ============================================================
// 1. VIEWBOX & LAYOUT
// ============================================================

export const SVG_VIEWBOX = {
  /** Wide landscape (comparison scenes, landscapes) */
  wide: "0 0 600 280",
  /** Standard landscape (hub pages, moderate detail) */
  standard: "0 0 700 300",
  /** Tall portrait (vertical diagrams like seed-to-tree) */
  portrait: "0 0 400 500",
} as const;

// All SVGs must use:
// - className="w-full h-auto"
// - preserveAspectRatio="xMidYMid meet"
// - role="img" with descriptive aria-label

// ============================================================
// 2. TYPOGRAPHY TOKENS
// ============================================================

export const SVG_TEXT = {
  /** Font family — always use body font */
  fontFamily: "var(--font-body)",

  /** Title — section/group headers inside SVG */
  title: {
    fontSize: 12,
    fontWeight: 700,
    opacity: 0.8,
  },

  /** Label — node/landmark labels */
  label: {
    fontSize: 10,
    fontWeight: 600,
    opacity: 0.7,
  },

  /** Caption — descriptive sublabels */
  caption: {
    fontSize: 9,
    fontWeight: 600,
    opacity: 0.5,
  },

  /** Micro — atmospheric/decorative text (e.g., "fading...") */
  micro: {
    fontSize: 8,
    fontWeight: 600,
    opacity: 0.3,
  },
} as const;

// RULES:
// - Minimum fontSize: 8px (below this is unreadable on mobile)
// - Minimum opacity for readable text: 0.4
// - Decorative/atmospheric text can go to opacity 0.2
// - All text: textAnchor="middle" unless positioned at edges
// - No rotated text — always horizontal
// - No text overlapping shapes — position with clear breathing room
// - Text spacing: minimum 16px vertical gap between adjacent labels

// ============================================================
// 3. COLOR PALETTE
// ============================================================

export const SVG_COLORS = {
  /** Figures */
  parent: "#A4582E",      // terracotta — always solid fill, no opacity
  child: "#4B7A5B",       // green — always solid fill, no opacity

  /** Brand */
  teal: "#235A5F",
  terracotta: "#A4582E",
  green: "#4B7A5B",

  /** Neutrals */
  ink: "#1E2A34",
  slate: "#52616D",
  sand: "#EFE6D8",
  clay: "#E6D5C3",
  paper: "#FFFDF9",
  linen: "#F8F4ED",

  /** Subject palette (for bridges, curriculum visuals) */
  subjects: {
    reading: "#6A4E73",
    math: "#2A6E73",
    science: "#4B744F",
    world: "#886328",
    personal: "#94536C",
    arts: "#7A5AA6",
    digital: "#4966A8",
    inquiry: "#9E563C",
  },

  /** Semantic states */
  positive: "#4B7A5B",     // green — growth, success
  warning: "#52616D",      // slate — fading, concern
  neutral: "#E6D5C3",      // clay — paths, dividers
} as const;

// ============================================================
// 4. FIGURE SPECS
// ============================================================

export const SVG_FIGURES = {
  parent: {
    headRadius: 8,        // r=8 for standard, r=5 for distant
    headFill: "#A4582E",  // solid, NO opacity
    bodyStroke: "#A4582E",
    bodyStrokeWidth: 3,
    limbStrokeWidth: 2.5,
  },
  child: {
    headRadius: 6,        // r=6 for standard, r=4 for distant
    headFill: "#4B7A5B",  // solid, NO opacity
    bodyStroke: "#4B7A5B",
    bodyStrokeWidth: 2.5,
    limbStrokeWidth: 2,
  },
} as const;

// RULES:
// - Figures always use FILLED heads (circle with fill=, NOT stroke-only)
// - All limbs: strokeLinecap="round"
// - Don't force parent+child into every SVG — only where it makes sense
// - Distant figures can use smaller radii (r=5/r=4) but never add opacity

// ============================================================
// 5. SHAPE LANGUAGE
// ============================================================

export const SVG_SHAPES = {
  /** Stroke width for primary paths/connections */
  primaryStroke: 2.5,
  /** Stroke width for secondary/detail paths */
  secondaryStroke: 1.5,
  /** Stroke width for decorative/texture */
  decorativeStroke: 0.8,

  /** All strokes use round caps */
  strokeLinecap: "round" as const,

  /** Dashed lines */
  dashPattern: "5 4",
  /** Dotted lines */
  dotPattern: "2 3",

  /** Plant leaf radius range */
  leafRadius: { min: 3, max: 8 },
  /** Tree canopy radius range */
  canopyRadius: { min: 6, max: 14 },
} as const;

// ============================================================
// 6. DEPTH & ATMOSPHERE
// ============================================================

export const SVG_DEPTH = {
  /** Background elements (mountains, distant trees) */
  far: { opacity: 0.06, maxOpacity: 0.15 },
  /** Mid-ground (ground layers, paths) */
  mid: { opacity: 0.15, maxOpacity: 0.4 },
  /** Foreground (figures, labels, primary shapes) */
  near: { opacity: 0.4, maxOpacity: 1.0 },

  /** Texture dots */
  textureDotRadius: { min: 0.6, max: 1.5 },
  textureDotOpacity: { min: 0.06, max: 0.12 },
} as const;

// ============================================================
// 7. LANDSCAPE TEMPLATE
// ============================================================

// For landscape-style SVGs, use this structure (top to bottom):
// 1. Sky gradient (cream → linen)
// 2. Clouds (2-4 ellipses, opacity 0.3-0.7)
// 3. Birds (2-3 V shapes, opacity 0.15-0.3)
// 4. Distant mountains (1-2 layers of bezier curves)
// 5. Ground layer 1 — teal-soft (#EAF3F2) — represents structure
// 6. Ground layer 2 — terracotta-soft (#F7ECE4) — represents warmth
// 7. Path/trail — dashed terracotta line
// 8. Landmarks/nodes along the path
// 9. Vegetation (trees, plants, flowers)
// 10. Figures (parent+child if relevant)
// 11. Labels (positioned in clear areas, never overlapping shapes)

// ============================================================
// 8. COMPARISON TEMPLATE
// ============================================================

// For comparison SVGs (two-panel side-by-side):
// 1. Vertical dashed divider at x=300 (for 600-wide viewBox)
// 2. Left panel: negative/warning scenario (slate/grey tones)
// 3. Right panel: positive/solution scenario (teal/green tones)
// 4. Ground line in both halves
// 5. Labels: left title at top-left, right title at top-right
// 6. Outcome labels at bottom of each half
// 7. Figures placed contextually (not forced)

// ============================================================
// 9. SVG INVENTORY
// ============================================================

export const SVG_INVENTORY = [
  {
    page: "Research Hub",
    path: "/research",
    type: "landscape",
    viewBox: "0 0 700 300",
    title: "HOW OUR RESEARCH CONNECTS",
    concept: "7 research landmarks along a path through a valley",
    hasFigures: true,
  },
  {
    page: "Parent-Child Connection",
    path: "/research/parent-child-connection-learning",
    type: "portrait",
    viewBox: "0 0 400 520",
    title: "FROM RESPONSIVE INTERACTION TO LEARNING",
    concept: "Seed growing into tree — roots (interaction) → branches (language, safety, attention) → canopy (stronger learning)",
    hasFigures: true,
  },
  {
    page: "Concept-First Coverage",
    path: "/research/concept-first-coverage",
    type: "comparison",
    viewBox: "0 0 600 280",
    title: "RANDOM ACTIVITIES VS CONCEPT-FIRST DESIGN",
    concept: "Two gardens — scattered chaos vs neat connected rows",
    hasFigures: true,
  },
  {
    page: "Playful Screen-Light",
    path: "/research/playful-screen-light-learning",
    type: "comparison",
    viewBox: "0 0 600 280",
    title: "WHY MULTI-MODAL BEATS SINGLE-MODE",
    concept: "Two windows — cold screen vs warm table with objects",
    hasFigures: true,
  },
  {
    page: "Thinking Routines",
    path: "/research/thinking-routines-visible-understanding",
    type: "diagram",
    viewBox: "0 0 500 300",
    title: "HOW THINKING ROUTINES WORK",
    concept: "Magnifying glass revealing hidden thinking patterns",
    hasFigures: true,
  },
  {
    page: "Adaptive Planning",
    path: "/research/adaptive-planning-spaced-revisit",
    type: "comparison",
    viewBox: "0 0 600 280",
    title: "WHY SPACED REVISIT MATTERS",
    concept: "Two paths — straight with wilting plants vs looping with green plants",
    hasFigures: true,
  },
  {
    page: "Breadth in AI World",
    path: "/research/breadth-future-ready-ai-world",
    type: "comparison",
    viewBox: "0 0 600 280",
    title: "NARROW VS BROAD FOUNDATIONS",
    concept: "Two bridges — narrow plank (2 subjects) vs wide bridge (all 8 subjects)",
    hasFigures: true,
  },
  {
    page: "Digital Literacy",
    path: "/research/digital-literacy-with-judgment",
    type: "comparison",
    viewBox: "0 0 600 280",
    title: "DEVICE FLUENCY VS DIGITAL JUDGMENT",
    concept: "Single hammer vs full toolbox with 5 labeled tools",
    hasFigures: true,
  },
  {
    page: "How goPondr Supports You",
    path: "/for-parents",
    type: "landscape",
    viewBox: "0 0 600 260",
    title: "HOW GOPONDR SUPPORTS YOU",
    concept: "Parent+child walking a path — stepping stones, growing plants, horizon",
    hasFigures: true,
  },
  {
    page: "How Subjects Connect",
    path: "/subjects",
    type: "landscape",
    viewBox: "0 0 700 440",
    title: "HOW 8 SUBJECTS CONNECT",
    concept: "Root system — 8 subject plants above ground, connected roots below",
    hasFigures: false,
  },
  {
    page: "Homepage Learning Arc",
    path: "/",
    type: "interactive",
    viewBox: "0 0 360 540",
    title: "THE LEARNING ARC",
    concept: "9 nodes along S-curve path with phase groupings",
    hasFigures: false,
  },
] as const;

// ============================================================
// 10. AGENT PROMPT TEMPLATE
// ============================================================

export const SVG_AGENT_PROMPT = `
You are creating an inline SVG illustration for goPondr, a parent-led home learning platform.

## MANDATORY RULES:
1. Text: fontFamily="var(--font-body)" on ALL text elements
2. Text sizes: title=12px, label=10px, caption=9px, micro=8px (minimum 8px)
3. Text opacity: readable text ≥0.4, decorative text ≥0.2
4. Text position: NEVER overlap shapes. Always horizontal. Min 16px vertical gap between labels.
5. Figures: FILLED heads (circle fill="#A4582E" for parent, fill="#4B7A5B" for child). NO stroke-only outlines. NO opacity on figure fills.
6. Strokes: strokeLinecap="round" everywhere. Primary=2.5px, secondary=1.5px, decorative=0.8px
7. Colors: only brand palette (#235A5F teal, #A4582E terracotta, #4B7A5B green, #52616D slate, #1E2A34 ink, #EFE6D8 sand, #E6D5C3 clay, #FFFDF9 paper, #F8F4ED linen)
8. JSX: camelCase attributes (strokeWidth, strokeLinecap, textAnchor, fontFamily, fontWeight, fontSize, etc.)
9. Depth: distant elements opacity 0.06-0.15, mid-ground 0.15-0.4, foreground 0.4-1.0
10. Don't force parent+child figures where they don't make sense for the concept
`;
