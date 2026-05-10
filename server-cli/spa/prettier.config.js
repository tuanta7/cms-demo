/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-organize-imports'],
  jsxSingleQuote: true,
};

export default config;
