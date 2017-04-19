module.exports = {
  root: true,
  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  // },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'o2team',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prefer-spread': 'off'
  }
}
