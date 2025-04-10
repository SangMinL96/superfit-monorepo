const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: [
    "only-warn",
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'react-hooks',
    'import',
    'unused-imports',
  ],
  rules: {
    "import/namespace": "off",
    "import/order": "off",
    "import/default": "off",
    "import/no-duplicates": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'unused-imports/no-unused-imports': 'warn', // 이건 플러그인 필요
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": ['error', { "enableDangerousAutofixThisMayCauseInfiniteLoops": true }],
    'react/react-in-jsx-scope': 'off', // Next.js는 필요 없음
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off', // TS 쓰면 필요 없음
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
