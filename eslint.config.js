// @ts-check
// https://typescript-eslint.io/getting-started/typed-linting/monorepos
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, {
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],

    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'no-restricted-syntax': [
      'error',
      'ObjectPattern > RestElement',
      'ObjectExpression > SpreadElement',
      'AwaitExpression',
    ],
  },
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
      // import.meta.dirname is only present for ESM files in Node.js >=20.11.0 / >= 21.2.0.
      // For CommonJS modules and/or older versions of Node.js, use __dirname or an alternative.
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
