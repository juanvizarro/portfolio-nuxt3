module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    // 'plugin:nuxt/recommended',
    'eslint:recommended',
    './.nuxt/.eslint.globals.json'
  ],
  plugins: [],
  rules: {},
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/multi-word-component-names': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'space-in-parens': 'off',
        'computed-property-spacing': 'off',
        'vue/component-tags-order': [
          'error',
          {
            order: [['script', 'template'], 'style', 'i18n']
          }
        ],
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 1
          },
          multiline: {
            max: 1
          }
        }]
      }
    }
  ]
}
