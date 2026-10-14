/** Supported site locales. Localized routes are only published after human-readable copy exists. */
export const LOCALES = [
  { code: 'en', name: 'English', languageTag: 'en' },
  { code: 'zh-cn', name: '简体中文', languageTag: 'zh-Hans' },
  { code: 'zh-tw', name: '繁體中文', languageTag: 'zh-Hant' },
  { code: 'ja', name: '日本語', languageTag: 'ja' },
  { code: 'ko', name: '한국어', languageTag: 'ko' },
  { code: 'de', name: 'Deutsch', languageTag: 'de' },
  { code: 'fr', name: 'Français', languageTag: 'fr' },
  { code: 'es', name: 'Español', languageTag: 'es' },
  { code: 'pt-br', name: 'Português (Brasil)', languageTag: 'pt-BR' },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];
export type NonEnglishLocale = Exclude<Locale, 'en'>;

export const TRANSLATED_LOCALES = LOCALES.filter((item) => item.code !== 'en');

export function isTranslatedLocale(code: string): code is NonEnglishLocale {
  return TRANSLATED_LOCALES.some((item) => item.code === code);
}
