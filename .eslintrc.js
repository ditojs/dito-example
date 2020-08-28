// http://eslint.org/docs/user-guide/configuring
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [
    '@babel'
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    // Allow paren-less arrow functions.
    'arrow-parens': ['error', 'as-needed'],
    // Allow async-await.
    'generator-star-spacing': 'off',
    'indent': ['error', 2, {
      flatTernaryExpressions: true
    }],
    'max-len': ['error', 80, 2, {
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': isProduction ? 'error' : 'warn',
    // Allow debugger during development.
    'no-debugger': isProduction ? 'error' : 'warn',
    'no-mixed-operators': 'off',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-prototype-builtins': 'off',
    'no-return-assign': 'error',
    'no-this-before-super': 'error',
    'no-undef': isProduction ? 'error' : 'warn',
    'no-unreachable': isProduction ? 'error' : 'warn',
    'no-unused-vars': [isProduction ? 'error' : 'warn', {
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true
    }],
    'no-var': 'error',
    'object-shorthand': 'error',
    'standard/object-curly-even-spacing': 'off',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': ['error', {
      destructuring: 'all'
    }],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        object: true,
        array: false
      }
    }],
    'quotes': ['error', 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true
    }],
    'quote-props': ['error', 'consistent-as-needed'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'space-in-parens': ['error', 'never']
  }
}
