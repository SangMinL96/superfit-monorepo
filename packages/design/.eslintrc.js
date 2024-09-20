/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@superfit/eslint-config/react-internal.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  env: {
    jest: true
  },
};
