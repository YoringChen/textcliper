const merge = require('webpack-merge')
const defaultConfig = require('./index.js')

module.exports = merge(defaultConfig.prod, {
})
