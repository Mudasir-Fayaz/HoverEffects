import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://hovereffects.in";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 overflow-x-hidden">
        <ThemeProvider>
          {/* ─── Layout shell: centering wrapper ─── */}
          <div className="mx-auto w-full max-w-[calc(72rem+70px)] min-h-dvh flex flex-col relative">

            {/* Left separator — desktop (bounded within wrapper) */}
            <div
              className="hidden lg:block absolute left-0 inset-y-0 w-[35px] pointer-events-none z-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
                backgroundAttachment: "fixed",
                borderLeft: "1px solid rgba(148,163,184,0.15)",
                borderRight: "1px solid rgba(148,163,184,0.15)",
              }}
            />

            {/* Right separator — desktop (bounded within wrapper) */}
            <div
              className="hidden lg:block absolute right-0 inset-y-0 w-[35px] pointer-events-none z-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
                backgroundAttachment: "fixed",
                borderLeft: "1px solid rgba(148,163,184,0.15)",
                borderRight: "1px solid rgba(148,163,184,0.15)",
              }}
            />

            {/* Mobile separators — thin lines at viewport edges */}
            <div
              className="lg:hidden fixed inset-y-0 left-0 pointer-events-none z-10"
              style={{
                width: "clamp(2px, 0.4vw, 4px)",
                backgroundImage:
                  "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
                backgroundAttachment: "fixed",
                borderLeft: "1px solid rgba(148,163,184,0.15)",
                borderRight: "1px solid rgba(148,163,184,0.15)",
              }}
            />
            <div
              className="lg:hidden fixed inset-y-0 right-0 pointer-events-none z-10"
              style={{
                width: "clamp(2px, 0.4vw, 4px)",
                backgroundImage:
                  "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
                backgroundAttachment: "fixed",
                borderLeft: "1px solid rgba(148,163,184,0.15)",
                borderRight: "1px solid rgba(148,163,184,0.15)",
              }}
            />

            {/* Dots texture — desktop, masked outside wrapper */}
            <div
              className="hidden lg:block fixed inset-0 pointer-events-none z-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(148,163,184,0.2) 1px, transparent 1px)",
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
                className="w-full h-[10px]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
                  backgroundSize: "10px 10px",
                  borderTop: "1px solid rgba(148,163,184,0.15)",
                  borderBottom: "1px solid rgba(148,163,184,0.15)",
                }}
              />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
