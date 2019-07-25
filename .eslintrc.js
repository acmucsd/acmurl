module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': [
    'google',
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  "settings": {
    "react": {
      "version": "latest",
    },
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "react/jsx-uses-react": 1,
  },
};
