export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wateraud.vercel.app';
  
  const routes = [
    { path: '/en', priority: '1.0', changefreq: 'weekly' },
    { path: '/fr', priority: '1.0', changefreq: 'weekly' },
    { path: '/en/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/fr/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/en/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/fr/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/en/industries', priority: '0.8', changefreq: 'monthly' },
    { path: '/fr/industries', priority: '0.8', changefreq: 'monthly' },
    { path: '/en/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/fr/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/en/terms', priority: '0.5', changefreq: 'yearly' },
    { path: '/fr/terms', priority: '0.5', changefreq: 'yearly' },
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}