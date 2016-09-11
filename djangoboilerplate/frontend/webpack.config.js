var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin('public/style.css', {
        allChunks: true
    }),
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
          loader: ExtractTextPlugin.extract('css!sass'),
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
            test: /\.json$/,
            loader: 'json'
        },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
}
