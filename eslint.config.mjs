// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    // Formatting-only Vue rules — the codebase isn't run through Prettier/a
    // formatter, so these just produce noise without catching real bugs.
    rules: {
      'vue/attributes-order': 'off',
      'vue/html-self-closing': 'off',
      'vue/first-attribute-linebreak': 'off',
    },
  },
)
