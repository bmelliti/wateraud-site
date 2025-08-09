// src/lib/metadata.ts
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export function generateMetadata(opts?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: 'WaterAud',
    description:
      'Independent water treatment expertise for municipal and industrial engineers',
    openGraph: {
      url: SITE_URL,
      siteName: 'WaterAud',
      title: 'WaterAud',
      description:
        'Independent water treatment expertise for municipal and industrial engineers',
      images: [
        {
          url: '/og.png', // keep relative
          width: 1200,
          height: 630,
          alt: 'WaterAud',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@', // optional
      images: ['/og.png'], // keep relative
    },
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
    ...opts,
  };
}
