// src/app/[locale]/error.tsx
'use client';
import { useEffect } from 'react';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/server';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
  params
}: {
  error: Error & { digest?: string };
  reset: () => void;
  params: { locale: Locale };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  // This is a Client Component; getTranslations is async. For simplicity,
  // you can hardcode English here or create a small client t() hook.
  // Quick fix: inline English/French by reading locale from params:
  const locale = params?.locale ?? 'en';
  const t = locale === 'fr'
    ? { title: 'Oups !', subtitle: 'Un problème est survenu', msg: 'Nous sommes désolés...', try: 'Réessayer', home: 'Accueil' }
    : { title: 'Oops!', subtitle: 'Something went wrong', msg: 'We apologize for the inconvenience...', try: 'Try again', home: 'Go home' };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">{t.title}</h1>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">{t.subtitle}</h2>
        <p className="text-neutral-700 mb-8">{t.msg}</p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset}>{t.try}</Button>
          <Button variant="secondary" onClick={() => (window.location.href = `/${locale}`)}>
            {t.home}
          </Button>
        </div>
      </div>
    </div>
  );
}
