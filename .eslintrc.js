module.exports = {
  root: true,
  extends: 'o2team',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prefer-spread': 'off',
    'class-methods-use-this': 'off'
  }
}
