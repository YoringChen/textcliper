var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var config = require('../config/webpack.dev.js')
webpackDevServer.addDevServerEntrypoints(config, config.devServer);
var server = new webpackDevServer(webpack(config), {
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})

server.listen(8087)