// src/app/[locale]/page.tsx
// Keep these so the page itself is definitely statically generated
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default function LocalizedHome({ params }: { params: { locale: string } }) {
  return (
    <main className="px-6 py-16">
      <h1 className="text-3xl font-bold">OK: /{params.locale}</h1>
      <p className="mt-2 text-neutral-700">
        Minimal page to confirm routing works. Replace with your real content after verification.
      </p>
      <ul className="mt-6 list-disc pl-5">
        <li><a className="text-primary-600 underline" href="/en">/en</a></li>
        <li><a className="text-primary-600 underline" href="/fr">/fr</a></li>
      </ul>
    </main>
  );
}
