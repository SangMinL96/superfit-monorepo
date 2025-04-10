/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@superfit/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: [
    'next.config.js', // 여기에 추가
    'node_modules/',
    '.eslintrc.js',
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
