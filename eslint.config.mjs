export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      '.git/**',
      'build/**',
      'dist/**',
      '*.config.{js,mjs}',
    ],
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];