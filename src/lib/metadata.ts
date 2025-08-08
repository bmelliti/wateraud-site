import type { Metadata } from 'next';

export interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

// Keep your existing generateMetadata function as is
export function generateMetadata({
  title = 'WaterAud - Water Treatment Consulting',
  description = 'Independent water treatment expertise for municipal and industrial engineers',
  path = '',
  image = '/og-image.png',
}: GenerateMetadataProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wateraud.com';
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      url,
      siteName: 'WaterAud',
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}