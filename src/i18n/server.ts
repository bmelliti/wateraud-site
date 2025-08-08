import type { Locale } from './config';
import en from '@/i18n/translations/en.json';
import fr from '@/i18n/translations/fr.json';

export type Translations = typeof en;

export async function getTranslations(locale: Locale): Promise<Translations> {
  return locale === 'fr' ? fr : en;
}
