/**
 * Distinct demonstration content for every generated (expanded) effect.
 *
 * This is the single source of truth for demo copy and labels. The HTML
 * snippet, the React snippet, and the live preview all read from here so the
 * three stay in parity. Content is authored per effect id to avoid the
 * repeated placeholder shells that generic generation produces.
 *
 * Site appearance tokens must never be referenced here: this is demo-owned
 * content that is copied verbatim into user projects.
 *
 * `image` references a key in `data/image-manifest.ts`; image effects use the
 * manifest's direct CDN URLs (never gallery-private assets).
 */

export interface DemoContent {
  kicker?: string;
  heading?: string;
  body?: string;
  cta?: string;
  caption?: string;
  subtitle?: string;
  alt?: string;
  /** Manifest key for the demo photograph (images category, card accents). */
  image?: string;
  label?: string;
  iconLabel?: string;
  iconPath?: string;
  items?: Array<{ index: string; label: string }>;
  fieldLabel?: string;
  fieldValue?: string;
  prefix?: string;
  meta?: string;
  badgeLabel?: string;
  badgeAlt?: string;
  badgeCount?: string;
  badgeIcon?: string;
  trigger?: string;
  tipTitle?: string;
  tipBody?: string;
  kbd?: string;
}

export const expandedContent: Record<string, DemoContent> = {
  // ── Buttons ─────────────────────────────────────────────────────────────
  "btn-extra-01": { label: "View plans" },
  "btn-extra-02": { label: "Create account" },
  "btn-extra-03": { label: "Continue" },
  "btn-extra-04": { label: "Confirm" },
  "btn-extra-05": { label: "Ship now" },
  "btn-extra-06": { label: "Sync data" },
  "btn-extra-07": { label: "Accept invite" },
  "btn-extra-08": { label: "Start trial" },
  "btn-extra-09": { label: "Subscribe", badgeAlt: "Subscribed" },
  "btn-extra-10": { label: "Explore" },
  "btn-extra-11": { label: "New version", badgeCount: "3" },
  "btn-extra-12": { label: "Open editor" },
  "btn-extra-13": { label: "Mark done" },
  "btn-extra-14": { label: "Enable alerts" },
  "btn-extra-15": { label: "Resume" },
  "btn-extra-16": { label: "Learn More" },
  "btn-extra-17": { label: "Try the demo" },

  // ── Images ──────────────────────────────────────────────────────────────
  "image-extra-01": { caption: "Zoom In", subtitle: "Closes in gently", alt: "Green velvet armchair in a bright, minimal room", image: "armchair" },
  "image-extra-02": { caption: "Zoom Out", subtitle: "Widens to full frame", alt: "Cozy neutral living room with a soft sofa and cushions", image: "living-room-cozy" },
  "image-extra-03": { caption: "Slide Left", subtitle: "Composition drifts left", alt: "White concrete apartment facade with a grid of balconies", image: "facade-grid" },
  "image-extra-04": { caption: "Slide Right", subtitle: "Composition drifts right", alt: "Warm modern living room with a beige sofa and soft light", image: "living-room-warm" },
  "image-extra-05": { caption: "Slide Up", subtitle: "Composition rises", alt: "Designer desk with an iMac, notebook and tidy stationery", image: "desk-studio" },
  "image-extra-06": { caption: "Slide Down", subtitle: "Composition lowers", alt: "Hotel bedroom with crisp white linen and a balcony view", image: "hotel-bedroom" },
  "image-extra-07": { caption: "Rotate Zoom", subtitle: "Tilts into focus", alt: "Curved white concrete facade of a modern building", image: "facade-curved" },
  "image-extra-08": { caption: "Blur Out", subtitle: "Softens the shot", alt: "Apartment living room with a wide sofa and a city view", image: "apartment-view" },
  "image-extra-09": { caption: "Grayscale", subtitle: "Drains the color", alt: "Green velvet armchair in a bright, minimal room", image: "armchair" },
  "image-extra-10": { caption: "Sepia Tone", subtitle: "Warms the tones", alt: "White modern building facade with clean lines", image: "facade-white" },
  "image-extra-11": { caption: "Fade Out", subtitle: "Softly steps back", alt: "Modern luxury living room in warm tones", image: "interior-luxury" },
  "image-extra-12": { caption: "Dim Soft", subtitle: "Lights down low", alt: "Teak lounge chair in a sunlit room with plants", image: "lounge-chair" },
  "image-extra-13": { caption: "Shine Sweep", subtitle: "A sheen crosses", alt: "Beige sofa in a warm, bright living room", image: "living-room-sofa" },
  "image-extra-14": { caption: "Circle Crop", subtitle: "Round reveal", alt: "Modern office building facade with vertical lines", image: "building-facade" },
  "image-extra-15": { caption: "Lift Card", subtitle: "Rises with depth", alt: "Desk with an open laptop, coffee cup and notebook", image: "desk-coffee" },
  "image-extra-16": { caption: "Parallax Hover", subtitle: "Depth on demand", alt: "Bright bedroom with white linen and wooden details", image: "bedroom-linen" },
  "image-extra-17": { caption: "Micro Rotate", subtitle: "A gentle tilt", alt: "Apartment interior with plants beside a sofa", image: "apartment-plants" },
  "image-extra-18": { caption: "Gradient Overlay", subtitle: "Accent wash rises", alt: "Modern house exterior at dusk with warm interior lights", image: "house-dusk" },
  "image-extra-19": { caption: "Caption Slide", subtitle: "Title slides in", alt: "Warm modern living room with a beige sofa and soft light", image: "living-room-warm" },
  "image-extra-20": { caption: "Caption Fade", subtitle: "Title fades in", alt: "Teak lounge chair in a sunlit room with plants", image: "lounge-chair" },
  "image-extra-21": { caption: "Split Cover", subtitle: "Covers part away", alt: "Bright bedroom with white linen and wooden details", image: "bedroom-linen" },
  "image-extra-22": { caption: "Diagonal Mask", subtitle: "Clips one corner", alt: "Desk with an open laptop, coffee cup and notebook", image: "desk-coffee" },
  "image-extra-23": { caption: "Corner Frame", subtitle: "Corners draw in", alt: "Modern office building facade with vertical lines", image: "building-facade" },
  "image-extra-24": { caption: "Border Draw", subtitle: "Outline traces", alt: "Curved white concrete facade of a modern building", image: "facade-curved" },
  "image-extra-25": { caption: "CTA Slide", subtitle: "Action slides in", alt: "Apartment living room with a wide sofa and a city view", image: "apartment-view" },
  "image-extra-26": { caption: "Badge Pop", subtitle: "Tag springs out", alt: "Modern beige living room with an arched mirror", image: "living-room-beige" },
  "image-extra-27": { caption: "Icon Pop", subtitle: "Symbol springs out", alt: "White modern building facade with clean lines", image: "facade-white" },
  "image-extra-28": { caption: "Glass Panel", subtitle: "Frosted pane lifts", alt: "Modern luxury living room in warm tones", image: "interior-luxury" },
  "image-extra-29": { caption: "Neon Glow", subtitle: "Rim lights up", alt: "Green velvet armchair in a bright, minimal room", image: "armchair" },
  "image-extra-30": { caption: "Light Beam", subtitle: "Beam sweeps across", alt: "Modern house exterior at dusk with warm interior lights", image: "house-dusk" },
  "image-extra-31": { caption: "Ripple Ring", subtitle: "Rings expand outward", alt: "Cozy neutral living room with a soft sofa and cushions", image: "living-room-cozy" },
  "image-extra-32": { caption: "Progress Line", subtitle: "Line fills below", alt: "Workspace desk with a laptop, phone and stationery", image: "workspace-desk" },
  "image-extra-33": { caption: "Dot Select", subtitle: "Dots fade in", alt: "Designer desk with an iMac, notebook and tidy stationery", image: "desk-studio" },
  "image-extra-34": { caption: "Cross Lines", subtitle: "Accent lines cross", alt: "Apartment interior with plants beside a sofa", image: "apartment-plants" },
  "image-extra-35": { caption: "Zoom Pan", subtitle: "Drifts across the crop", alt: "Hotel bedroom with crisp white linen and a balcony view", image: "hotel-bedroom" },
  "image-extra-36": { caption: "Brighten", subtitle: "Exposure lifts", alt: "Warm modern living room with a beige sofa and soft light", image: "living-room-warm" },
  "image-extra-37": { caption: "Darken", subtitle: "Light dips low", alt: "Modern house exterior at dusk with warm interior lights", image: "house-dusk" },
  "image-extra-38": { caption: "Contrast Pop", subtitle: "Punchier frame", alt: "White concrete apartment facade with a grid of balconies", image: "facade-grid" },
  "image-extra-39": { caption: "Saturate", subtitle: "Colors intensify", alt: "Green velvet armchair in a bright, minimal room", image: "armchair" },
  "image-extra-40": { caption: "Hue Shift", subtitle: "Palette rotates", alt: "Modern luxury living room in warm tones", image: "interior-luxury" },
  "image-extra-41": { caption: "Invert", subtitle: "Negative frame", alt: "Desk with an open laptop, coffee cup and notebook", image: "desk-coffee" },
  "image-extra-42": { caption: "Color Reveal", subtitle: "Color blooms in", alt: "Modern beige living room with an arched mirror", image: "living-room-beige" },
  "image-extra-43": { caption: "Blur Reveal", subtitle: "Sharpens to focus", alt: "Workspace desk with a laptop, phone and stationery", image: "workspace-desk" },

  // ── Links ───────────────────────────────────────────────────────────────
  "link-extra-01": { label: "Project archive" },
  "link-extra-02": { label: "Read the case study" },
  "link-extra-03": { label: "Deployment guide" },
  "link-extra-04": { label: "View the changelog" },
  "link-extra-05": { label: "Open documentation" },
  "link-extra-06": { label: "Meet the team" },
  "link-extra-07": { label: "Watch the demo" },
  "link-extra-08": { label: "Browse the gallery" },
  "link-extra-09": { label: "Ship the release" },
  "link-extra-10": { label: "Follow the trail" },
  "link-extra-11": { label: "Start the tutorial" },
  "link-extra-12": { label: "Visit the studio" },
  "link-extra-13": { label: "Explore the roadmap" },
  "link-extra-14": { label: "Download the kit" },
  "link-extra-15": { label: "See the source" },
  "link-extra-16": { label: "View the pricing" },
  "link-extra-17": { label: "Read the story" },
  "link-extra-18": { label: "Open the editor" },
  "link-extra-19": { label: "Meet the founders" },
  "link-extra-20": { label: "Track the order" },
  "link-extra-21": { label: "Back to overview" },
  "link-extra-22": { label: "Confirm changes" },
  "link-extra-23": { label: "Check the notes" },
  "link-extra-24": { label: "Explore the palette" },
  "link-extra-25": { label: "Announce the launch" },
  "link-extra-26": { label: "Retire the plan" },
  "link-extra-27": { label: "Top of the list" },
  "link-extra-28": { label: "Subscribe now", badgeAlt: "Subscribed" },
  "link-extra-29": { label: "Lift the section" },
  "link-extra-30": { label: "Open the portal" },
  "link-extra-31": { label: "Inspect the widget" },
  "link-extra-32": { label: "Trace the system" },

  // ── Icons ───────────────────────────────────────────────────────────────
  "icon-extra-01": { iconLabel: "Lock account", iconPath: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6|M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0|M8 11v-4a4 4 0 1 1 8 0v4" },
  "icon-extra-02": { iconLabel: "Set reminder", iconPath: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0|M12 7v5l3 3" },
  "icon-extra-03": { iconLabel: "Send email", iconPath: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10|M3 7l9 6l9 -6" },
  "icon-extra-04": { iconLabel: "Save bookmark", iconPath: "M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4" },
  "icon-extra-05": { iconLabel: "Refresh view", iconPath: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4|M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" },
  "icon-extra-06": { iconLabel: "Rate favourite", iconPath: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" },
  "icon-extra-07": { iconLabel: "Open chat", iconPath: "M8 9h8|M8 13h6|M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" },
  "icon-extra-08": { iconLabel: "View profile", iconPath: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0|M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" },
  "icon-extra-09": { iconLabel: "Pin location", iconPath: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0|M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" },
  "icon-extra-10": { iconLabel: "Ring bell", iconPath: "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6|M9 17v1a3 3 0 0 0 6 0v-1" },
  "icon-extra-11": { iconLabel: "Record video", iconPath: "M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4|M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" },
  "icon-extra-12": { iconLabel: "Night mode", iconPath: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" },
  "icon-extra-13": { iconLabel: "Move up", iconPath: "M12 5l0 14|M18 11l-6 -6|M6 11l6 -6" },
  "icon-extra-14": { iconLabel: "Shift right", iconPath: "M5 12l14 0|M13 18l6 -6|M13 6l6 6" },
  "icon-extra-15": { iconLabel: "Add to favorites", iconPath: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" },
  "icon-extra-16": { iconLabel: "Move down", iconPath: "M12 5l0 14|M18 13l-6 6|M6 13l6 6" },
  "icon-extra-17": { iconLabel: "Ghost mode", iconPath: "M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7|M10 10l.01 0|M14 10l.01 0|M10 14a3.5 3.5 0 0 0 4 0" },
  "icon-extra-18": { iconLabel: "Reload page", iconPath: "M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747|M20 4v5h-5" },
  "icon-extra-19": { iconLabel: "Play demo", iconPath: "M7 4v16l13 -8l-13 -8" },
  "icon-extra-20": { iconLabel: "Live activity", iconPath: "M3 12h4l3 8l4 -16l3 8h4" },
  "icon-extra-21": { iconLabel: "Swap sides", iconPath: "M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0|M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0|M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3|M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" },
  "icon-extra-22": { iconLabel: "Clear item", iconPath: "M18 6l-12 12|M6 6l12 12" },
  "icon-extra-23": { iconLabel: "Heat level", iconPath: "M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.294 -2.333 5.588c0 3.704 3.134 6.706 7 6.706c3.866 0 7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" },
  "icon-extra-24": { iconLabel: "Turn corner", iconPath: "M17 7l-10 10|M8 7l9 0l0 9" },
  "icon-extra-25": { iconLabel: "Glow effect", iconPath: "M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138|M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138|M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" },
  "icon-extra-26": { iconLabel: "Add more", iconPath: "M12 5l0 14|M5 12l14 0" },
  "icon-extra-27": { iconLabel: "Connect wifi", iconPath: "M12 18l.01 0|M9.172 15.172a4 4 0 0 1 5.656 0|M6.343 12.343a8 8 0 0 1 11.314 0|M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" },
  "icon-extra-28": { iconLabel: "Save file", iconPath: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2|M7 11l5 5l5 -5|M12 4l0 12" },
  "icon-extra-29": { iconLabel: "Fullscreen", iconPath: "M4 8v-2a2 2 0 0 1 2 -2h2|M4 16v2a2 2 0 0 0 2 2h2|M16 4h2a2 2 0 0 1 2 2v2|M16 20h2a2 2 0 0 0 2 -2v-2" },
  "icon-extra-30": { iconLabel: "Drop water", iconPath: "M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546" },
  "icon-extra-31": { iconLabel: "Fast energy", iconPath: "M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" },
  "icon-extra-32": { iconLabel: "Scan code", iconPath: "M5 12h14|M3 7v-2a2 2 0 0 1 2 -2h2|M3 17v2a2 2 0 0 0 2 2h2|M17 3h2a2 2 0 0 1 2 2v2|M17 21h2a2 2 0 0 0 2 -2v-2" },
  "icon-extra-33": { iconLabel: "Paint fill", iconPath: "M3 21v-4a4 4 0 1 1 4 4h-4|M21 3a16 16 0 0 0 -12.8 10.2|M21 3a16 16 0 0 1 -10.2 12.8|M10.6 9a9 9 0 0 1 4.4 4.4" },
  "icon-extra-34": { iconLabel: "Sparkle", iconPath: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" },
  "icon-extra-35": { iconLabel: "Navigate", iconPath: "M12 18.5l7.265 2.463c.196 .077 .42 .032 .57 -.116a.548 .548 0 0 0 .134 -.572l-7.969 -17.275l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" },

  // ── Navigation ──────────────────────────────────────────────────────────
  "nav-extra-01": { items: [{ index: "01", label: "Overview" }, { index: "02", label: "Activity" }, { index: "03", label: "Settings" }] },
  "nav-extra-02": { items: [{ index: "01", label: "Home" }, { index: "02", label: "Library" }, { index: "03", label: "Profile" }] },
  "nav-extra-03": { items: [{ index: "01", label: "Docs" }, { index: "02", label: "Guides" }, { index: "03", label: "API" }] },
  "nav-extra-04": { items: [{ index: "01", label: "Inbox" }, { index: "02", label: "Drafts" }, { index: "03", label: "Sent" }] },
  "nav-extra-05": { items: [{ index: "01", label: "General" }, { index: "02", label: "Members" }, { index: "03", label: "Billing" }] },
  "nav-extra-06": { items: [{ index: "01", label: "Home" }, { index: "02", label: "Explore" }, { index: "03", label: "Saved" }] },
  "nav-extra-07": { items: [{ index: "01", label: "Products" }, { index: "02", label: "Pricing" }, { index: "03", label: "About" }] },
  "nav-extra-08": { items: [{ index: "01", label: "Chapter one" }, { index: "02", label: "Chapter two" }, { index: "03", label: "Chapter three" }] },
  "nav-extra-09": { items: [{ index: "01", label: "Design" }, { index: "02", label: "Code" }, { index: "03", label: "Ship" }] },
  "nav-extra-10": { items: [{ index: "01", label: "Write" }, { index: "02", label: "Preview" }, { index: "03", label: "Publish" }] },
  "nav-extra-11": { items: [{ index: "01", label: "Today" }, { index: "02", label: "Week" }, { index: "03", label: "Month" }] },
  "nav-extra-12": { items: [{ index: "01", label: "All" }, { index: "02", label: "Open" }, { index: "03", label: "Closed" }] },
  "nav-extra-13": { items: [{ index: "01", label: "Frontend" }, { index: "02", label: "Backend" }, { index: "03", label: "Design" }] },
  "nav-extra-14": { items: [{ index: "01", label: "New" }, { index: "02", label: "Edit" }, { index: "03", label: "Delete" }] },
  "nav-extra-15": { items: [{ index: "01", label: "Focus" }, { index: "02", label: "Break" }, { index: "03", label: "Done" }] },
  "nav-extra-16": { items: [{ index: "01", label: "Overview" }, { index: "02", label: "Reports" }, { index: "03", label: "Teams" }] },
  "nav-extra-17": { items: [{ index: "01", label: "Canvas" }, { index: "02", label: "Assets" }, { index: "03", label: "Share" }] },
  "nav-extra-18": { items: [{ index: "01", label: "Guide" }, { index: "02", label: "FAQ" }, { index: "03", label: "Contact" }] },
  "nav-extra-19": { items: [{ index: "01", label: "Home" }, { index: "02", label: "Browse" }, { index: "03", label: "Saved" }] },
  "nav-extra-20": { items: [{ index: "01", label: "Basics" }, { index: "02", label: "Patterns" }, { index: "03", label: "Guides" }] },
  "nav-extra-21": { items: [{ index: "01", label: "Drafts" }, { index: "02", label: "Sent" }, { index: "03", label: "Archive" }] },
  "nav-extra-22": { items: [{ index: "01", label: "Files" }, { index: "02", label: "Notes" }, { index: "03", label: "Tasks" }] },
  "nav-extra-23": { items: [{ index: "01", label: "One" }, { index: "02", label: "Two" }, { index: "03", label: "Three" }] },
  "nav-extra-24": { items: [{ index: "01", label: "Store" }, { index: "02", label: "Studio" }, { index: "03", label: "Lab" }] },
  "nav-extra-25": { items: [{ index: "01", label: "Parent" }, { index: "02", label: "Child" }, { index: "03", label: "Leaf" }] },
  "nav-extra-26": { items: [{ index: "01", label: "New" }, { index: "02", label: "Open" }, { index: "03", label: "Save" }] },
  "nav-extra-27": { items: [{ index: "01", label: "Alpha" }, { index: "02", label: "Beta" }, { index: "03", label: "Stable" }] },
  "nav-extra-28": { items: [{ index: "01", label: "Account" }, { index: "02", label: "Billing" }, { index: "03", label: "Team" }] },
  "nav-extra-29": { items: [{ index: "01", label: "Read" }, { index: "02", label: "Write" }, { index: "03", label: "Share" }] },
  "nav-extra-30": { items: [{ index: "01", label: "Steps" }, { index: "02", label: "Stages" }, { index: "03", label: "Phases" }] },
  "nav-extra-31": { items: [{ index: "01", label: "Grid" }, { index: "02", label: "List" }, { index: "03", label: "Mosaic" }] },
  "nav-extra-32": { items: [{ index: "01", label: "Calm" }, { index: "02", label: "Tide" }, { index: "03", label: "Swell" }] },

  // ── Inputs ──────────────────────────────────────────────────────────────
  "input-extra-01": { fieldLabel: "Workspace name", fieldValue: "Northwind", meta: "9 / 32" },
  "input-extra-02": { fieldLabel: "Repository", fieldValue: "hover-effects", meta: "13 / 32" },
  "input-extra-03": { fieldLabel: "Website", fieldValue: "example.com", prefix: "https://", meta: "11 / 32" },
  "input-extra-04": { fieldLabel: "Price", fieldValue: "49.00", prefix: "$", meta: "5 / 32" },
  "input-extra-05": { fieldLabel: "Email address", fieldValue: "you@studio.dev", meta: "13 / 32" },
  "input-extra-06": { fieldLabel: "API key", fieldValue: "sk_live_4821", prefix: "•", meta: "12 / 32" },
  "input-extra-07": { fieldLabel: "Search notes", fieldValue: "design tokens", meta: "13 / 32" },
  "input-extra-08": { fieldLabel: "Full name", fieldValue: "Ada Lovelace", meta: "12 / 32" },
  "input-extra-09": { fieldLabel: "Command", fieldValue: "build --watch", prefix: "/", meta: "13 / 32" },
  "input-extra-10": { fieldLabel: "Tag", fieldValue: "frontend", meta: "8 / 32" },
  "input-extra-11": { fieldLabel: "Search components", fieldValue: "button", meta: "6 / 32" },
  "input-extra-12": { fieldLabel: "Message", fieldValue: "Ship it", meta: "7 / 32" },
  "input-extra-13": { fieldLabel: "Password", fieldValue: "hunter2!", prefix: "•", meta: "8 / 32" },
  "input-extra-14": { fieldLabel: "Invite teammate", fieldValue: "sam@studio.dev", meta: "14 / 32" },
  "input-extra-15": { fieldLabel: "Project name", fieldValue: "Atlas", meta: "7 / 24" },
  "input-extra-16": { fieldLabel: "Token", fieldValue: "sk_live_92", meta: "8 / 24" },
  "input-extra-17": { fieldLabel: "Domain", fieldValue: "studio.dev", prefix: "@", meta: "10 / 24" },
  "input-extra-18": { fieldLabel: "Team size", fieldValue: "12", meta: "2 / 24" },
  "input-extra-19": { fieldLabel: "Passphrase", fieldValue: "••••••••", meta: "8 / 24" },
  "input-extra-20": { fieldLabel: "Card number", fieldValue: "4242 4242", meta: "11 / 24" },
  "input-extra-21": { fieldLabel: "Bio", fieldValue: "Design engineer", meta: "13 / 24" },
  "input-extra-22": { fieldLabel: "Street", fieldValue: "1 Market Way", meta: "11 / 24" },
  "input-extra-23": { fieldLabel: "License", fieldValue: "pro-2026", meta: "9 / 24" },
  "input-extra-24": { fieldLabel: "Username", fieldValue: "ada", meta: "5 / 24" },
  "input-extra-25": { fieldLabel: "API URL", fieldValue: "api.studio.dev", prefix: "https://", meta: "14 / 24" },
  "input-extra-26": { fieldLabel: "Handle", fieldValue: "@hoverfx", meta: "9 / 24" },
  "input-extra-27": { fieldLabel: "Role", fieldValue: "Frontend", meta: "7 / 24" },
  "input-extra-28": { fieldLabel: "Query", fieldValue: "transition", meta: "10 / 24" },
  "input-extra-29": { fieldLabel: "Amount", fieldValue: "1,024", meta: "7 / 24" },
  "input-extra-30": { fieldLabel: "Total", fieldValue: "49", prefix: "$", meta: "6 / 24" },
  "input-extra-31": { fieldLabel: "Commit", fieldValue: "ship it", prefix: "/", meta: "9 / 24" },

  // ── Badges ──────────────────────────────────────────────────────────────
  "badge-extra-01": { badgeLabel: "Synced", badgeAlt: "Retry", badgeCount: "03", badgeIcon: "✓" },
  "badge-extra-02": { badgeLabel: "New", badgeAlt: "Seen", badgeCount: "12", badgeIcon: "✦" },
  "badge-extra-03": { badgeLabel: "Comments", badgeAlt: "None", badgeCount: "24", badgeIcon: "💬" },
  "badge-extra-04": { badgeLabel: "Pro", badgeAlt: "Free", badgeCount: "01", badgeIcon: "★" },
  "badge-extra-05": { badgeLabel: "Live", badgeAlt: "Idle", badgeCount: "07", badgeIcon: "●" },
  "badge-extra-06": { badgeLabel: "Online", badgeAlt: "Away", badgeCount: "00", badgeIcon: "●" },
  "badge-extra-07": { badgeLabel: "Pinned", badgeAlt: "Unpin", badgeCount: "05", badgeIcon: "📌" },
  "badge-extra-08": { badgeLabel: "Drafting", badgeAlt: "Public", badgeCount: "02", badgeIcon: "✎" },
  "badge-extra-09": { badgeLabel: "Featured", badgeAlt: "Standard", badgeCount: "09", badgeIcon: "🏷" },
  "badge-extra-10": { badgeLabel: "Storage", badgeAlt: "Full", badgeCount: "68", badgeIcon: "⛁" },
  "badge-extra-11": { badgeLabel: "Priority", badgeAlt: "Low", badgeCount: "01", badgeIcon: "▲" },
  "badge-extra-12": { badgeLabel: "Archived", badgeAlt: "Restore", badgeCount: "41", badgeIcon: "⬒" },
  "badge-extra-13": { badgeLabel: "On hold", badgeAlt: "Approved", badgeCount: "06", badgeIcon: "◌" },
  "badge-extra-14": { badgeLabel: "Reviewing", badgeAlt: "Approved", badgeCount: "08", badgeIcon: "✓" },
  "badge-extra-15": { badgeLabel: "Deployed", badgeAlt: "Live", badgeCount: "07", badgeIcon: "✓" },
  "badge-extra-16": { badgeLabel: "Healthy", badgeAlt: "Watching", badgeCount: "12", badgeIcon: "●" },
  "badge-extra-17": { badgeLabel: "Awaiting", badgeAlt: "Approved", badgeCount: "03", badgeIcon: "◌" },
  "badge-extra-18": { badgeLabel: "Syncing", badgeAlt: "Sync again", badgeCount: "02", badgeIcon: "↻" },
  "badge-extra-19": { badgeLabel: "Pro plan", badgeAlt: "Upgrade", badgeCount: "01", badgeIcon: "★" },
  "badge-extra-20": { badgeLabel: "Unseen", badgeAlt: "Seen", badgeCount: "24", badgeIcon: "✦" },
  "badge-extra-21": { badgeLabel: "Spotlight", badgeAlt: "Spotlight", badgeCount: "09", badgeIcon: "🏷" },
  "badge-extra-22": { badgeLabel: "Inbox", badgeAlt: "Empty", badgeCount: "18", badgeIcon: "💬" },
  "badge-extra-23": { badgeLabel: "Draft", badgeAlt: "Publish", badgeCount: "04", badgeIcon: "✎" },
  "badge-extra-24": { badgeLabel: "Frosted", badgeAlt: "Clear", badgeCount: "11", badgeIcon: "◌" },
  "badge-extra-25": { badgeLabel: "Shiny", badgeAlt: "Matte", badgeCount: "06", badgeIcon: "✦" },
  "badge-extra-26": { badgeLabel: "Anchored", badgeAlt: "Unpin", badgeCount: "05", badgeIcon: "📌" },
  "badge-extra-27": { badgeLabel: "Quick", badgeAlt: "Slow", badgeCount: "08", badgeIcon: "●" },
  "badge-extra-28": { badgeLabel: "Active", badgeAlt: "Idle", badgeCount: "01", badgeIcon: "●" },
  "badge-extra-29": { badgeLabel: "Trending", badgeAlt: "Top", badgeCount: "15", badgeIcon: "✦" },
  "badge-extra-30": { badgeLabel: "Milestone", badgeAlt: "Next", badgeCount: "07", badgeIcon: "▲" },
  "badge-extra-31": { badgeLabel: "Active now", badgeAlt: "Away", badgeCount: "00", badgeIcon: "●" },

  // ── Tooltips ────────────────────────────────────────────────────────────
  "tooltip-extra-01": { trigger: "Storage used", tipTitle: "Storage", tipBody: "68% of 10 GB is in use.", kbd: "⌘ I" },
  "tooltip-extra-02": { trigger: "Preview theme", tipTitle: "Theme", tipBody: "Switch between light and dark.", kbd: "⌘ T" },
  "tooltip-extra-03": { trigger: "Share link", tipTitle: "Share", tipBody: "Anyone with the link can view.", kbd: "⌘ L" },
  "tooltip-extra-04": { trigger: "Deploy status", tipTitle: "Deploy", tipBody: "Production is healthy.", kbd: "⌘ D" },
  "tooltip-extra-05": { trigger: "Hold to confirm", tipTitle: "Delete", tipBody: "Appears after a short delay.", kbd: "⌘ ⌫" },
  "tooltip-extra-06": { trigger: "Track pointer", tipTitle: "Pointer", tipBody: "The tip follows your cursor.", kbd: "⌘ P" },
  "tooltip-extra-07": { trigger: "Release notes", tipTitle: "v2.4.0", tipBody: "Faster previews and 40 new effects.", kbd: "⌘ R" },
  "tooltip-extra-08": { trigger: "Help", tipTitle: "Guide", tipBody: "Shortcut reference for this panel.", kbd: "⌘ /" },
  "tooltip-extra-09": { trigger: "Format", tipTitle: "Format", tipBody: "The caret morphs into a rounded marker.", kbd: "⌘ F" },
  "tooltip-extra-10": { trigger: "Metadata", tipTitle: "Details", tipBody: "Author, size, and last edit.", kbd: "⌘ M" },
  "tooltip-extra-11": { trigger: "Flip settings", tipTitle: "Settings", tipBody: "Flips over like a coin into view.", kbd: "⌘ ," },
  "tooltip-extra-12": { trigger: "Soft focus", tipTitle: "Focus", tipBody: "Blurs in for a calm entrance.", kbd: "⌘ B" },
  "tooltip-extra-13": { trigger: "Copy value", tipTitle: "Copy", tipBody: "Click to copy the token.", kbd: "⌘ C" },
  "tooltip-extra-14": { trigger: "Keyboard", tipTitle: "Shortcuts", tipBody: "Navigate with the keyboard.", kbd: "⌘ K" },
  "tooltip-extra-15": { trigger: "Service status", tipTitle: "Operational", tipBody: "All systems are running normally.", kbd: "⌘ S" },
  "tooltip-extra-16": { trigger: "Version", tipTitle: "Version", tipBody: "Running v2.4.0 with the latest patch.", kbd: "⌘ V" },
  "tooltip-extra-17": { trigger: "Hover glow", tipTitle: "Glow", tipBody: "A soft accent light surrounds the tip.", kbd: "⌘ G" },
  "tooltip-extra-18": { trigger: "Scale in", tipTitle: "Scale", tipBody: "The tip settles from a smaller scale.", kbd: "⌘ S" },
  "tooltip-extra-19": { trigger: "Arrow", tipTitle: "Pointer", tipBody: "The caret draws in as the tip appears.", kbd: "⌘ P" },
  "tooltip-extra-20": { trigger: "Depth", tipTitle: "Depth", tipBody: "The tip rises with layered content.", kbd: "⌘ D" },
  "tooltip-extra-21": { trigger: "Info", tipTitle: "Guide", tipBody: "A helper icon pops in beside the title.", kbd: "⌘ I" },
  "tooltip-extra-22": { trigger: "Underline", tipTitle: "Trigger", tipBody: "The trigger grows a small underline.", kbd: "⌘ U" },
  "tooltip-extra-23": { trigger: "Round", tipTitle: "Shape", tipBody: "Corners ease from sharp to rounded.", kbd: "⌘ R" },
  "tooltip-extra-24": { trigger: "Fade", tipTitle: "Fade", tipBody: "The tip fades in with a gentle slide.", kbd: "⌘ F" },
  "tooltip-extra-25": { trigger: "Rise", tipTitle: "Rise", tipBody: "The tip slides up into place.", kbd: "⌘ R" },
  "tooltip-extra-26": { trigger: "Mark", tipTitle: "Mark", tipBody: "A small dot leads the title.", kbd: "⌘ M" },
  "tooltip-extra-27": { trigger: "Verify now", tipTitle: "Confirm", tipBody: "A check appears once the trigger is held.", kbd: "⌘ C" },
  "tooltip-extra-28": { trigger: "Palette", tipTitle: "Palette", tipBody: "The title fills with the accent gradient.", kbd: "⌘ P" },
  "tooltip-extra-29": { trigger: "Edge", tipTitle: "Edge", tipBody: "A bright edge sits along the top border.", kbd: "⌘ E" },
  "tooltip-extra-30": { trigger: "Frost", tipTitle: "Frost", tipBody: "A frosted pane with a bright inner highlight.", kbd: "⌘ B" },
  "tooltip-extra-31": { trigger: "Step 1", tipTitle: "Step 1", tipBody: "A numbered badge marks the first step.", kbd: "⌘ 1" },
  "tooltip-extra-32": { trigger: "Night", tipTitle: "Night", tipBody: "The trigger flips to a dark surface.", kbd: "⌘ N" },
};

export function contentFor(id: string, fallback: DemoContent = {}): DemoContent {
  return expandedContent[id] ?? fallback;
}