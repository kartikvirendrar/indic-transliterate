export default [
  {
    ignores: ['build/', 'dist/', 'node_modules/', '.snapshots/', '*.min.js', 'src/'],
  },
  {
    files: ['**/*.js', '**/*.ts'], // ESLint will lint these file types
    rules: {
      // Add your rules here
    },
  },
];
