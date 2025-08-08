'use client';

import { useParams } from 'next/navigation';
import type { Locale } from './config';

export function useLocale(): Locale {
  const params = useParams();
  return (params?.locale as Locale) || 'en';
}

// Hook for client components that need translations
export function useTranslation() {
  const locale = useLocale();
  
  // For client components, you might want to fetch translations
  // or pass them down from server components as props
  return {
    locale,
    // Add translation helper functions if needed
  };
}