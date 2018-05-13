var webpack = require('webpack')
var path = require('path')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.config.js')


module.exports = merge(baseConfig, {
  entry: {
    'textcliper.min': './src/index.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: false
      },
      minimize:true,
      include: /\.min\.js$/,
    })
  ]
})