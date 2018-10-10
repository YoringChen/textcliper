const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'helloworld.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        enforce: "pre",
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
    ]
  }
}