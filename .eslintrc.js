module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 1,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    'no-unused-vars': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'consistent-return': 0,
    'no-unused-expressions': 0,
    'default-param-last': 0,
    'array-callback-return': 0,
  },
}
