/**
 * Shared CSS shells for the hand-authored (base) effects. Each base effect
 * data file composes its own scoped CSS from these pieces; preview components
 * import the exact `css` string from the data file so the live preview always
 * matches the copyable code.
 */

export function reducedMotion(root: string) {
  return `@media (prefers-reduced-motion: reduce){${root},${root} *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`;
}

export function focusRing(root: string, accent: string) {
  return `${root}:focus-visible{outline:3px solid color-mix(in srgb,${accent} 35%,transparent);outline-offset:4px}`;
}

export function baseReset(root: string, accent: string, accentAlt: string) {
  return `${root}{--he-accent:${accent};--he-accent-2:${accentAlt};all:initial;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,sans-serif;color:#161b26;isolation:isolate}${root},${root} *{box-sizing:border-box}`;
}

export interface CardShellOptions {
  root: string;
  accent: string;
  accentAlt: string;
  /** Inner wrapper class (Scale & Shadow scales a contained surface). */
  inner?: string;
}

export function cardShell({ root, accent, accentAlt, inner }: CardShellOptions) {
  const scope = inner ? `${root} .${inner}` : root;
  return `${baseReset(root, accent, accentAlt)}
${scope}{position:relative;display:flex;flex-direction:column;width:min(100%,270px);min-height:214px;border:1px solid #e3e7ee;border-radius:14px;background:#fff;box-shadow:0 2px 6px rgba(15,23,42,.06)}
${root} .he-card-art{height:86px;flex:none;overflow:hidden;border-radius:14px 14px 0 0;background:radial-gradient(130% 150% at 12% 0%,rgba(255,255,255,.28),transparent 55%),linear-gradient(135deg,var(--he-accent),var(--he-accent-2))}
${root} .he-card-copy{position:relative;display:flex;flex-direction:column;padding:14px 16px 15px}
${root} .he-kicker{font-size:10px;font-weight:750;letter-spacing:.13em;text-transform:uppercase;color:var(--he-accent)}
${root} h3{margin:5px 0 4px;font-size:16px;line-height:1.25;color:#161b26}
${root} p{margin:0;color:#667085;font-size:12px;line-height:1.5}
${root} a{display:inline-flex;align-items:center;gap:5px;margin-top:12px;font-size:12px;font-weight:700;color:#161b26;text-decoration:none}
${root} a span{transition:transform .2s ease}
${root}:hover a span,${root}:focus-within a span{transform:translateX(3px)}
${focusRing(root, accent)}
${reducedMotion(root)}`;
}

export function imageShell(root: string, accent: string, accentAlt: string) {
  return `${baseReset(root, accent, accentAlt)}
${root}{position:relative;display:block;width:min(100%,300px);aspect-ratio:4/3;overflow:hidden;border-radius:12px;background:#1b2230;box-shadow:0px 2px 3px -1px rgba(0,0,0,0.1),0px 1px 0px 0px rgba(25,28,33,0.02),0px 0px 0px 1px rgba(25,28,33,0.08)}
${root} img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
${root} figcaption{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding:10px 13px;color:#fff;background:linear-gradient(180deg,transparent,rgba(10,14,22,.62));z-index:3}
${root} figcaption strong{font-size:13px;font-weight:750;text-shadow:0 1px 4px rgba(0,0,0,.4)}
${root} figcaption span{font-size:9px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,.88);text-shadow:0 1px 3px rgba(0,0,0,.4)}
${focusRing(root, accent)}
${reducedMotion(root)}`;
}

export function linkShell(root: string, accent: string, accentAlt: string) {
  return `${baseReset(root, accent, accentAlt)}
${root}{position:relative;display:inline-block;padding:6px 2px;color:#1c2430;font-size:15px;font-weight:650;text-decoration:none;white-space:nowrap}
${focusRing(root, accent)}
${reducedMotion(root)}`;
}

export function buttonShell(root: string, accent: string, accentAlt: string) {
  return `${baseReset(root, accent, accentAlt)}
${root}{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:0 24px;border:1px solid transparent;border-radius:10px;background:#fff;color:#1c2430;font-size:14px;font-weight:650;line-height:1;cursor:pointer;transition:transform .2s cubic-bezier(.23,1,.32,1),box-shadow .22s ease,color .22s ease,background-color .22s ease,border-color .22s ease}
${root}:active{transform:translateY(1px)}
${focusRing(root, accent)}
${reducedMotion(root)}`;
}

export function navShell(root: string, accent: string, accentAlt: string) {
  return `${baseReset(root, accent, accentAlt)}
${root}{position:relative;display:inline-flex;align-items:stretch;gap:2px;padding:5px;border:1px solid #dce1e9;border-radius:11px;background:#fff;box-shadow:0 1px 3px rgba(15,23,42,.06)}
${root} a{position:relative;display:flex;align-items:center;justify-content:center;padding:9px 12px;border-radius:7px;color:#64748b;font-size:12px;font-weight:650;line-height:1;text-decoration:none;white-space:nowrap;transition:color .24s ease,background-color .24s ease,transform .24s cubic-bezier(.23,1,.32,1)}
${root} a:hover{color:#172033}
${root} a[aria-current]{color:var(--he-accent)}
${root} a:focus-visible{outline:2px solid color-mix(in srgb,var(--he-accent) 45%,transparent);outline-offset:2px}
${reducedMotion(root)}`;
}