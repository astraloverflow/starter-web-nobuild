module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'order/order': ['custom-properties', 'declarations', 'at-rules', 'rules'],
    'plugin/no-unsupported-browser-features': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
  },
  ignoreFiles: ['node_modules/**', 'dist/**'],
};
