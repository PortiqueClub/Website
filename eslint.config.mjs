import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['.github/**'],
  },
  {
    rules: {
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
      }],
      'vue/html-indent': ['error', 2, {
        baseIndent: 0,
      }],
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/no-unused-components': ['error', {
        ignoreWhenBindingPresent: true,
      }],
      'vue/no-unused-vars': ['error', {
        ignorePattern: '^_',
      }],
      'vue/no-template-shadow': 'off',
      'vue/v-on-event-hyphenation': 'off',

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'curly': [0, 'all'],
      '@stylistic/brace-style': [0, 'stroustrup', { allowSingleLine: false }],
      'no-unused-vars': 'off',
      'antfu/top-level-function': 'off',
      '@typescript-eslint/no-unused-vars': ['off'],
      'arrow-parens': [2, 'as-needed'],
    },
  },
)
