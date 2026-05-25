import { en } from './en';
import { es } from './es';

export const translations = { es, en } as const;

export type Locale = keyof typeof translations;

export function t(locale: Locale) {
  return translations[locale];
}
