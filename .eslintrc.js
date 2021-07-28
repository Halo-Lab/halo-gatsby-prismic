module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "babel-eslint",
  rules: {
    strict: 0,
    "no-console": 0,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
