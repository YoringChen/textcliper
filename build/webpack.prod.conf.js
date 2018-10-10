const merge = require('webpack-merge')
const Config = require('../config/prod')
const baseConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const output = Config.library ? {
  library: 'HelloWorld',
  libraryTarget: 'umd',
  libraryExport: 'default',
} : {}

module.exports = merge(baseConfig, {
  mode: 'production',
  output: output,
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    })
  ]
})
