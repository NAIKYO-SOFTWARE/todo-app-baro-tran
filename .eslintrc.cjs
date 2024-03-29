module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'vite.config.ts',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','eslint-config-prettier', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      'prettier',
    ],
    "@typescript-eslint/no-explicit-any": "off"
  },
  'prettier/prettier': [
    'warn',
    {
      arrowParens: 'always',
      semi: false,
      trailingComma: 'none',
      tabWidth: 2,
      endOfLine: 'auto',
      useTabs: false,
      singleQuote: true,
      printWidth: 120,
      jsxSingleQuote: true
    }
  ]

}
