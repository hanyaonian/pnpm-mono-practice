// @ts-check
// @see https://kulshekhar.github.io/ts-jest/
// @see https://typescript-eslint.io/getting-started/typed-linting/monorepos
// @see https://typescript-eslint.io/packages/typescript-eslint/#usage-with-other-plugins
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';

export default tseslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['**/build/**', '**/dist/**', 'src/some/file/to/ignore.ts']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      jest: jestPlugin
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
        // import.meta.dirname is only present for ESM files in Node.js >=20.11.0 / >= 21.2.0.
        // For CommonJS modules and/or older versions of Node.js, use __dirname or an alternative.
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      'no-debugger': 'error',
      'no-restricted-syntax': 'warn',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'enumMember',
          format: ['PascalCase']
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/consistent-type-assertions': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }]
    }
  },
  {
    // disable type-aware linting on JS files
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    // enable jest rules on test files
    files: ['tests/*.ts'],
    ...jestPlugin.configs['flat/recommended']
  }
);
