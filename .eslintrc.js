module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'preact',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  ignorePatterns: ['build/'],
};
