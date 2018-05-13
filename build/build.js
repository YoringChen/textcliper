process.env.NODE_ENV = 'production'

var chalk = require('chalk')

var webpack = require('webpack')
var config = require('../config/webpack.prod.js')

webpack(config, function (err, stats) {
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (err || stats.compilation.errors.length) {
    console.log('\n\n  Tip: \n\n  build error, discontinued!  :( \n')
    throw err
  } else {
    console.log(chalk.cyan('  Build complete.\n'))
  }
})
