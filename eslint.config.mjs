import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
  {
    files: ['{lib,test,bin}/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsPlugin.configs.recommended.rules,
      // Keep the existing runtime error behaviour during the tooling upgrade.
      'preserve-caught-error': 'off',
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'quote-props': ['error', 'as-needed'],
      'no-param-reassign': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'space-infix-ops': ['error'],
      'no-multi-spaces': ['error'],
      '@typescript-eslint/no-empty-function': ['off'],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
]
