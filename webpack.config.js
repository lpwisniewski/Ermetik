'use strict'

const merge = require('webpack-merge')
const { production } = require('./config/webpack.vars')

const common = merge(
  require('./config/webpack.config.base'),
  require('./config/webpack.config.preact'),
  require('./config/webpack.config.pictures'),
  require(`./config/webpack.target.browser`)
)

if (production) {
  module.exports = merge(common, require('./config/webpack.config.prod'))
} else {
  module.exports = merge(common, require('./config/webpack.config.dev'))
}
