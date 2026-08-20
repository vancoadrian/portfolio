export default defineI18nConfig(() => ({
  // Safety net: a key missing from en.json falls back to the Slovak source
  // text instead of rendering the raw key path.
  fallbackLocale: 'sk'
}))
