# @alandell0n/i18next-react-native-language-detector [![NPM version](https://img.shields.io/npm/v/@alandell0n/i18next-react-native-language-detector)](https://yarnpkg.com/package/@alandell0n/i18next-react-native-language-detector) [![BundlePhobia](https://img.shields.io/bundlephobia/minzip/@alandell0n/i18next-react-native-language-detector)](https://bundlephobia.com/result?p=@alandell0n/i18next-react-native-language-detector)

The i18next language detector (language code and language tag), which is used to detect the user's language in React Native.

## Usage

Install the package using the following command:

```
yarn add @alandell0n/i18next-react-native-language-detector
```

or 

```
npm install @alandell0n/i18next-react-native-language-detector
```

Example of usage:

```ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { RNLanguageCodeDetector, RNLanguageTagDetector } from '@alandell0n/i18next-react-native-language-detector';

i18next
  .use(RNLanguageCodeDetector) // for language code (e.g. 'en')
  //.use(RNLanguageTagDetector) // for language tag (e.g. 'en-US')
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    ns: [],
    defaultNS: undefined,

    resources: {
      en: {
        common: require('./locales/en/common.json'),
      },
      ru: {
        common: require('./locales/ru/common.json'),
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
```
