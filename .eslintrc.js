module.exports = {
  root: true,
  env: {
    browser: true,
  },
  plugins: [
    'import',
    'promise',
    'node',
    'standard',
    'compat',
    'security',
    'unicorn',
    'jsdoc',
  ],
  extends: [
    // Standardjs JavaScript Coding Style
    'standard',
    // Error when using features not supported by .browserlistrc selection
    'plugin:compat/recommended',
    // Some useful rules to avoid JavaScript security issues
    'plugin:security/recommended',
    // A mishmash of useful rules
    'plugin:unicorn/recommended',
    // Unsets rules that conflict with Prettier
    // _MUST_ always come last
    'prettier',
    'prettier/react',
    'prettier/standard',
    'prettier/unicorn',
    'prettier/vue',
  ],
  rules: {
    'no-unused-vars': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'SequenceExpression',
        message:
          'Sequence expressions (the comma operator) are not allowed. See eslint no-sequences.',
      },
    ],
    'jsdoc/require-jsdoc': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-access': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-hyphen-before-param-description': 'always',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/valid-types': 'error',
    'jsdoc/no-undefined-types': 'error',
    'jsdoc/no-defaults': 'error',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/newline-after-description': 'error',
  },
  ignorePatterns: ['!.eslintrc.js', 'dist/**'],
};
