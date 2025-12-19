import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...react.configs.flat.recommended,
      ...react.configs.flat['jsx-runtime'],
      ...reactHooks.configs.flat.recommended,
      reactRefresh.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: react,
    },
    rules: {
      // Put rules you want to override here
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-dom/no-dangerously-set-innerhtml': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
