// TEMP SANITY CHECK — replace this file
// src/app/[locale]/page.tsx

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}
export default function Page({ params }: { params: { locale: string } }) {
  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, sans-serif' }}>
      <h1>OK: /{params.locale}</h1>
      <p>This is a minimal test page to confirm routing works on Vercel.</p>
      <ul>
        <li><a href="/en">/en</a></li>
        <li><a href="/fr">/fr</a></li>
      </ul>
    </main>
  );
}
