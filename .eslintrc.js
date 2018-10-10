module.exports = {
  'root': true,
  'parser': 'typescript-eslint-parser',
  'plugins': [
    'typescript'
  ],
  'extends': 'eslint-config-standard-with-typescript',
  'rules': {
    'semi': 'off',
    'camelcase': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? "on" : "off",
  }
}