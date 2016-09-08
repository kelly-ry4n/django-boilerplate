var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { 
          test: /\.jsx?$/, 
          exclude: /node_modules/, 
          loader: 'babel-loader',
          query: {
              presets: ['es2016','react']
          }
      }, {
          test: /\.scss?$/,
          exclude: /node_modules/,
          loaders: ['style','css','sass'],
      },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
}
