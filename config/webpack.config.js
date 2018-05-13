var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './src/index.js',
  output: {
    filename: 'textcliper.min.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    modules: [
      path.join(__dirname, '../node_modules')
    ]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  }
}

module.exports = config