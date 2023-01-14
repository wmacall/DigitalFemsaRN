import {I18n, TranslateOptions} from 'i18n-js';
import es from './translations/es.json';

const i18n = new I18n({
  es,
});

i18n.defaultLocale = 'es';
i18n.locale = 'es';
i18n.enableFallback = true;

type DefaultLocale = typeof es;
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

export function translate(key: TxKeyPath, options?: TranslateOptions) {
  return key ? i18n.t(key, options) : '';
}

export default i18n;
