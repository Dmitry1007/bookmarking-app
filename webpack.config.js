var path    = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(_dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    loaders: [

    ]
  },
  babel: {

  },
  plugins: [

  ]
}
