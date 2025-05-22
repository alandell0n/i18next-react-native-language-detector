import { type LanguageDetectorModule } from 'i18next';
import { getLocales } from 'react-native-localize';

export const RNLanguageCodeDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init: () => {},
  detect: () => getLocales()[0].languageCode,
  cacheUserLanguage: () => {},
};

export const RNLanguageTagDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init: () => {},
  detect: () => getLocales()[0].languageTag,
  cacheUserLanguage: () => {},
};
