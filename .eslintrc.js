module.exports = {
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: '2021',
      sourceType: 'module',
      jsx: true,
    },
  },

  env: {
    browser: true,
  },

  rules: {
    'no-extra-boolean-cast': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-named-as-default-member': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'no-shadow': 'off',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './',
      },
    },
  },

  overrides: [
    {
      files: ['!src/**'],
      env: {
        browser: false,
        node: true,
      },
    },
  ],
}
