'use strict'

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.jsx'],
    alias: {
      'react': 'preact/aliases',
      'react-dom': 'preact/aliases'
    }
  }
}
