/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@mee-monorepo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
