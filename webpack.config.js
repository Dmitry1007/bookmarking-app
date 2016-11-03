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
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  babel: {
    "presets": ["es2015"],
    "plugins": ["transform-runtime"]
  },
  plugins: [

  ]
}
