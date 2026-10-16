import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PwaRegistration from "@/components/PwaRegistration";
import "./globals.css";

const siteUrl = "https://hovereffects.in";

// Self-hosted variable fonts: builds stay fully offline and no request is made
// to Google Fonts at build time or at runtime.
const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "HoverEffects",
  manifest: "/manifest.webmanifest",
  title: {
    template: "%s — HoverEffects",
    default: "HoverEffects — Curated Hover Effects for Modern UI",
  },
  description:
    "A curated collection of CSS and React hover effects for buttons, cards, links, inputs, and more. Copy-ready for production.",
  keywords: [
    "hover effects",
    "CSS animations",
    "React hover components",
    "UI micro-interactions",
    "Tailwind CSS effects",
    "web animation library",
    "frontend UI effects",
  ],
  openGraph: {
    type: "website",
    siteName: "HoverEffects",
    title: "HoverEffects — Curated Hover Effects for Modern UI",
    description:
      "A curated collection of CSS and React hover effects for buttons, cards, links, inputs, and more. Copy-ready for production.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "HoverEffects — Curated Hover Effects for Modern UI",
    description:
      "A curated collection of CSS and React hover effects for buttons, cards, links, inputs, and more. Copy-ready for production.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  appleWebApp: {
    capable: true,
    title: "HoverEffects",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: "#fcfcfb",
};

const presetIds = ["indigo", "violet", "blue", "teal", "green", "orange", "rose"];

/**
 * Prepaint appearance bootstrap.
 *
 * Runs before hydration to set theme + palette attributes so there is no flash
 * of the wrong colours. It only sets data attributes; the semantic variables
 * themselves live in the generated appearance-presets.css, and custom accents
 * are applied inline by the ThemeProvider once hydrated.
 */
const appearanceScript = `(function(){var r=document.documentElement,ids=${JSON.stringify(
  presetIds,
)},t='system',p='indigo';try{var s=localStorage.getItem('hovereffects.appearance.v2');if(s){var v=JSON.parse(s);if(v&&typeof v==='object'){if(['system','light','dark'].indexOf(v.theme)>-1)t=v.theme;if(v.accent&&v.accent.kind==='preset'&&ids.indexOf(v.accent.preset)>-1)p=v.accent.preset;if(v.accent&&v.accent.kind==='custom')p='indigo'}}else{var o=localStorage.getItem('hovereffects.appearance.v1');if(o){var q=JSON.parse(o);var map={emerald:'green',amber:'orange',indigo:'indigo',rose:'rose'};if(q&&map[q.accent])p=map[q.accent];if(q&&(q.theme==='light'||q.theme==='dark'||q.theme==='system'))t=q.theme}var l=localStorage.getItem('hoverefx-theme');if(l==='light'||l==='dark')t=l}}catch(e){}var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);r.dataset.siteTheme=d?'dark':'light';r.dataset.siteThemeMode=t;r.dataset.sitePalette=p;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',getComputedStyle(r).getPropertyValue('--site-canvas').trim()||'#fcfcfb')})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-site-theme="light"
      data-site-theme-mode="system"
      data-site-palette="indigo"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: appearanceScript }} />
      </head>
      <body className="min-h-full overflow-x-clip">
        <ThemeProvider>
          <PwaRegistration />
          {/* ─── Layout shell: centering wrapper ─── */}
          <div className="site-shell mx-auto w-full max-w-[calc(72rem+70px)] min-h-dvh flex flex-col relative">

            {/* Left separator — desktop (bounded within wrapper) */}
            <div
              className="site-hatch hidden lg:block absolute left-0 inset-y-0 w-[35px] pointer-events-none z-10 border-x"
              style={{
                backgroundAttachment: "fixed",
              }}
            />

            {/* Right separator — desktop (bounded within wrapper) */}
            <div
              className="site-hatch hidden lg:block absolute right-0 inset-y-0 w-[35px] pointer-events-none z-10 border-x"
              style={{
                backgroundAttachment: "fixed",
              }}
            />

            {/* Mobile separators — thin lines at viewport edges */}
            <div
              className="site-hatch lg:hidden fixed inset-y-0 left-0 pointer-events-none z-10 border-x"
              style={{
                width: "clamp(2px, 0.4vw, 4px)",
                backgroundAttachment: "fixed",
              }}
            />
            <div
              className="site-hatch lg:hidden fixed inset-y-0 right-0 pointer-events-none z-10 border-x"
              style={{
                width: "clamp(2px, 0.4vw, 4px)",
                backgroundAttachment: "fixed",
              }}
            />

            {/* Dots texture — desktop, masked outside wrapper */}
            <div
              className="site-dots hidden lg:block fixed inset-0 pointer-events-none z-0"
              style={{
                backgroundSize: "16px 16px",
                maskImage:
                  "linear-gradient(to right, black 0%, black calc(50% - 36rem - 35px), transparent calc(50% - 36rem - 35px), transparent calc(50% + 36rem + 35px), black calc(50% + 36rem + 35px), black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, black 0%, black calc(50% - 36rem - 35px), transparent calc(50% - 36rem - 35px), transparent calc(50% + 36rem + 35px), black calc(50% + 36rem + 35px), black 100%)",
              }}
            />

            {/* ─── Content area — bounded between vertical separators ─── */}
            <div className="flex-1 flex flex-col max-lg:px-0 px-[35px]">
              <Navbar />
              {children}
              <div
                className="site-hatch w-full h-[10px] border-y"
              />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
