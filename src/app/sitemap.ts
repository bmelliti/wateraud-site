// src/app/sitemap.ts
import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  const lastmod = new Date().toISOString();
  return [
    { url: `${SITE_URL}/en`, lastModified: lastmod },
    { url: `${SITE_URL}/fr`, lastModified: lastmod },
    { url: `${SITE_URL}/en/services`, lastModified: lastmod },
    { url: `${SITE_URL}/fr/services`, lastModified: lastmod },
    { url: `${SITE_URL}/en/industries`, lastModified: lastmod },
    { url: `${SITE_URL}/fr/industries`, lastModified: lastmod },
    { url: `${SITE_URL}/en/about`, lastModified: lastmod },
    { url: `${SITE_URL}/fr/about`, lastModified: lastmod },
    { url: `${SITE_URL}/en/contact`, lastModified: lastmod },
    { url: `${SITE_URL}/fr/contact`, lastModified: lastmod },
    { url: `${SITE_URL}/en/terms`, lastModified: lastmod },
    { url: `${SITE_URL}/fr/terms`, lastModified: lastmod },
  ];
}
