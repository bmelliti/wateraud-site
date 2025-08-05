// src/app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

/* ---------- Custom fonts ---------- */
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

/* ---------- Site-wide <head> data ---------- */
export const metadata: Metadata = {
  title: 'WaterAud – Expert Water Treatment Solutions',
  description:
    'Professional water treatment consultancy for municipal and industrial clients. Optimize costs, ensure compliance, and maximize treatment effectiveness.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

/* ---------- Root layout ---------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Skip-link for keyboard users -------------- */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="skip-link fixed -left-[9999px] top-8 z-[999] bg-primary-600 text-white px-4 py-2 rounded-lg
                     focus:left-1/2 focus:-translate-x-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>

        {/* Header + Nav */}
        <Navbar />

        {/* Main content slot */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
