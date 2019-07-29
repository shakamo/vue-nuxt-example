module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {},
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
};
