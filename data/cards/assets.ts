/**
 * Local card demo artwork (original SVG illustrations) inlined as data URIs so
 * copied React/HTML snippets stay fully self-contained â€” no site-only asset
 * paths are ever embedded in a demo or its snippet code.
 */

const uri = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

export const cardImages = {
  "editorial-studio": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="eBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f3eee6"/><stop offset="1" stop-color="#e2d9c9"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#eBg)"/>
  <rect x="0" y="600" width="1200" height="200" fill="#cfc4ae"/>
  <ellipse cx="600" cy="620" rx="360" ry="34" fill="#a89a80" opacity=".35"/>
  <path d="M560 620c-26-120-26-220 40-300 66 80 66 180 40 300z" fill="#8b6f52"/>
  <path d="M620 340c40-60 96-84 150-70-30 62-86 96-150 70z" fill="#7f9c8c"/>
  <path d="M640 380c54-38 112-44 158-14-44 44-108 52-158 14z" fill="#6d8a7a" opacity=".9"/>
  <circle cx="880" cy="520" r="96" fill="#c98d68" opacity=".9"/>
  <circle cx="330" cy="540" r="58" fill="#3b453f"/>
</svg>`),
  "photo-ceramics": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 750">
  <rect width="1000" height="750" fill="#e9e2d6"/>
  <rect x="0" y="520" width="1000" height="230" fill="#d3c8b4"/>
  <path d="M210 520c0-72 40-104 90-104s90 32 90 104z" fill="#b3745a"/>
  <rect x="238" y="392" width="124" height="26" rx="13" fill="#9c6049"/>
  <path d="M420 520c0-56 34-84 80-84s80 28 80 84z" fill="#7f9c8c"/>
  <rect x="444" y="408" width="112" height="24" rx="12" fill="#68846f"/>
  <path d="M640 520c0-40 28-64 62-64s62 24 62 64z" fill="#5b6660"/>
  <ellipse cx="300" cy="700" rx="240" ry="40" fill="#b6a88f" opacity=".5"/>
  <ellipse cx="700" cy="710" rx="220" ry="36" fill="#b6a88f" opacity=".4"/>
</svg>`),
  "photo-studio": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#e4e6e2"/>
  <path d="M0 0h520l-180 800H0z" fill="#f2f1ea" opacity=".8"/>
  <rect x="0" y="600" width="1200" height="200" fill="#beb2a0"/>
  <rect x="0" y="588" width="1200" height="16" fill="#a89b88"/>
  <path d="M980 600V300c0-96-86-160-190-160" fill="none" stroke="#39443d" stroke-width="18" stroke-linecap="round"/>
  <circle cx="790" cy="140" r="44" fill="#e8c9a0"/>
  <rect x="180" y="470" width="300" height="120" rx="8" fill="#ffffff"/>
  <rect x="212" y="500" width="200" height="12" rx="6" fill="#c9c4b8"/>
  <rect x="212" y="528" width="140" height="12" rx="6" fill="#d8d4c9"/>
  <rect x="560" y="520" width="220" height="70" rx="8" fill="#7f9c8c"/>
  <circle cx="420" cy="560" r="30" fill="#c98d68"/>
</svg>`),
  "portfolio-atrium": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="aSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#dfe7e8"/><stop offset="1" stop-color="#f2ede4"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#aSky)"/>
  <circle cx="880" cy="200" r="96" fill="#e8c9a0" opacity=".85"/>
  <rect x="0" y="470" width="1200" height="280" fill="#c9c3b6"/>
  <rect x="120" y="180" width="960" height="330" fill="#ddd7ca"/>
  <rect x="120" y="180" width="960" height="26" fill="#b9b2a2"/>
  <rect x="120" y="330" width="960" height="26" fill="#cfc8b9"/>
  <rect x="120" y="470" width="960" height="40" fill="#b9b2a2"/>
  <g fill="#9aa39b">
    <rect x="180" y="206" width="34" height="124"/>
    <rect x="420" y="206" width="34" height="124"/>
    <rect x="700" y="206" width="34" height="124"/>
    <rect x="980" y="206" width="34" height="124"/>
  </g>
  <g fill="#8f9992" opacity=".85">
    <rect x="300" y="356" width="34" height="114"/>
    <rect x="560" y="356" width="34" height="114"/>
    <rect x="840" y="356" width="34" height="114"/>
  </g>
  <rect x="0" y="640" width="1200" height="110" fill="#b3b7ad"/>
  <rect x="140" y="510" width="920" height="130" fill="#7f9c8c" opacity=".35"/>
</svg>`),
  "portfolio-atrium-alt": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="aaSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2e3a52"/><stop offset="1" stop-color="#6b6f8a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#aaSky)"/>
  <circle cx="880" cy="250" r="96" fill="#e8b06a" opacity=".9"/>
  <rect x="0" y="470" width="1200" height="280" fill="#2b3140"/>
  <rect x="120" y="180" width="960" height="330" fill="#3c4356"/>
  <rect x="120" y="180" width="960" height="26" fill="#303748"/>
  <rect x="120" y="330" width="960" height="26" fill="#353c4e"/>
  <rect x="120" y="470" width="960" height="40" fill="#303748"/>
  <g fill="#e8c9a0" opacity=".9">
    <rect x="180" y="206" width="34" height="124"/>
    <rect x="420" y="206" width="34" height="124"/>
    <rect x="700" y="206" width="34" height="124"/>
    <rect x="980" y="206" width="34" height="124"/>
  </g>
  <g fill="#e8c9a0" opacity=".55">
    <rect x="300" y="356" width="34" height="114"/>
    <rect x="560" y="356" width="34" height="114"/>
    <rect x="840" y="356" width="34" height="114"/>
  </g>
  <rect x="0" y="640" width="1200" height="110" fill="#232936"/>
  <rect x="140" y="510" width="920" height="130" fill="#7fb39b" opacity=".25"/>
</svg>`),
  "portfolio-kinetic": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800">
  <rect width="1400" height="800" fill="#ecebe6"/>
  <g opacity=".5" stroke="#d5d4cc" stroke-width="1">
    <path d="M0 160h1400M0 320h1400M0 480h1400M0 640h1400"/>
    <path d="M280 0v800M560 0v800M840 0v800M1120 0v800"/>
  </g>
  <path d="M-80 620 L520 60 L760 60 L160 620 Z" fill="#2f6f5c" opacity=".9"/>
  <path d="M260 780 L900 140 L1090 140 L450 780 Z" fill="#a9c4b6" opacity=".9"/>
  <path d="M640 800 L1180 260 L1300 260 L760 800 Z" fill="#39443d" opacity=".85"/>
  <circle cx="1190" cy="150" r="58" fill="#c98d68"/>
</svg>`),
  "product-headphones": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
  <defs>
    <linearGradient id="phBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#eef1ed"/><stop offset="1" stop-color="#cfd9d1"/>
    </linearGradient>
    <linearGradient id="phCup" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3a423c"/><stop offset="1" stop-color="#222823"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#phBg)"/>
  <circle cx="400" cy="420" r="268" fill="#ffffff" opacity=".35"/>
  <ellipse cx="400" cy="668" rx="218" ry="30" fill="#1e2420" opacity=".1"/>
  <path d="M226 446v-52a174 174 0 0 1 348 0v52" fill="none" stroke="url(#phCup)" stroke-width="44" stroke-linecap="round"/>
  <rect x="176" y="404" width="104" height="204" rx="48" fill="url(#phCup)"/>
  <rect x="520" y="404" width="104" height="204" rx="48" fill="url(#phCup)"/>
  <rect x="196" y="424" width="64" height="164" rx="32" fill="#7fb39b"/>
  <rect x="540" y="424" width="64" height="164" rx="32" fill="#7fb39b"/>
  <circle cx="400" cy="288" r="14" fill="#7fb39b"/>
</svg>`),
  "product-headphones-alt": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
  <defs>
    <linearGradient id="paBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4efe8"/><stop offset="1" stop-color="#ded2c2"/>
    </linearGradient>
    <linearGradient id="paCup" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#443a31"/><stop offset="1" stop-color="#2a231d"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#paBg)"/>
  <circle cx="400" cy="420" r="268" fill="#ffffff" opacity=".4"/>
  <ellipse cx="400" cy="668" rx="218" ry="30" fill="#302619" opacity=".12"/>
  <g transform="rotate(5 400 420)">
    <path d="M226 446v-52a174 174 0 0 1 348 0v52" fill="none" stroke="url(#paCup)" stroke-width="44" stroke-linecap="round"/>
    <rect x="176" y="404" width="104" height="204" rx="48" fill="url(#paCup)"/>
    <rect x="520" y="404" width="104" height="204" rx="48" fill="url(#paCup)"/>
    <rect x="196" y="424" width="64" height="164" rx="32" fill="#c98d68"/>
    <rect x="540" y="424" width="64" height="164" rx="32" fill="#c98d68"/>
    <circle cx="400" cy="288" r="14" fill="#c98d68"/>
  </g>
</svg>`),
  "product-watch": uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 750">
  <defs>
    <linearGradient id="wBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e8ecef"/><stop offset="1" stop-color="#c8d2d8"/>
    </linearGradient>
    <linearGradient id="wCase" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#39424a"/><stop offset="1" stop-color="#20262b"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="750" fill="url(#wBg)"/>
  <circle cx="500" cy="375" r="258" fill="#ffffff" opacity=".35"/>
  <rect x="452" y="24" width="96" height="250" rx="40" fill="#313a41"/>
  <rect x="452" y="476" width="96" height="250" rx="40" fill="#313a41"/>
  <circle cx="500" cy="375" r="196" fill="url(#wCase)"/>
  <circle cx="500" cy="375" r="170" fill="#eef1ee"/>
  <g stroke="#9aa6a0" stroke-width="8" stroke-linecap="round">
    <path d="M500 220v18"/><path d="M500 512v18"/><path d="M345 375h18"/><path d="M637 375h18"/>
  </g>
  <path d="M500 375V262" stroke="#2c332e" stroke-width="14" stroke-linecap="round"/>
  <path d="M500 375l78 52" stroke="#2c332e" stroke-width="12" stroke-linecap="round"/>
  <path d="M500 375l-58 74" stroke="#b0674f" stroke-width="5" stroke-linecap="round"/>
  <circle cx="500" cy="375" r="12" fill="#b0674f"/>
</svg>`),
} as const;

export type CardImageName = keyof typeof cardImages;

export function cardImage(name: CardImageName): string {
  return cardImages[name];
}
