module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'import/named': 0,
    'object-curly-newline': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'no-debugger': 0,
    'no-undef': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/prefer-stateless-function': 0,
    'import/no-cycle': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'react/no-access-state-in-setstate': 0,
    'react/react-in-jsx-scope': 0,
  },
};
