export default [
  {
    files: ['**/*.js'],

    ignores: ['node_modules/**', 'dist/**'],

    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      eqeqeq: 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];
