'use strict'

const webpack = require('webpack')
var DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  devtool: '#source-map',
  plugins: [
    new DashboardPlugin()
  ]
}
