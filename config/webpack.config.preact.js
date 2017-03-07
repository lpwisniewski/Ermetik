'use strict'

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules\/(?!(cozy-ui))/,
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
