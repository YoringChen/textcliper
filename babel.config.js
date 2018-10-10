const presets = [
  [
    '@babel/env', {
      useBuiltIns: 'usage'
    }
  ],
  "@babel/typescript"
];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread"
]

module.exports = {
  presets,
  plugins
}