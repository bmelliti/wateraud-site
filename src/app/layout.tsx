import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WaterAud - Simplified Water Treatment',
  description: 'Independent water treatment expertise for municipal and industrial engineers',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wateraud.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // DO NOT add html or body tags here - they're in [locale]/layout.tsx
  return children;
}