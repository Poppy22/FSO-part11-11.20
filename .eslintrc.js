module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['frontend/**/*.js', 'UI/**/*.js'],
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
