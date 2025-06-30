const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat();

module.exports = [
  // TypeScript and Prettier for .ts files
  {
    files: ['**/*.ts'],
    ...compat.config({
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'prettier/prettier': 'error',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
      },
    })[0],
  },
  // Angular template linting for .html files
  {
    files: ['**/*.html'],
    ...compat.config({
      extends: ['plugin:@angular-eslint/template/recommended'],
    })[0],
  },
]; 