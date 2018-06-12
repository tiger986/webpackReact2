var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: './src/script/index.js',

  output: {
    path: __dirname + '/build',
    //filename: 'index_[hash].js'
    filename: 'index.js'
  },

  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 9000,
    historyApiFallback: false,
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      }
    ]
  },

  plugins: [
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),*/
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      title: 'react小例子'
    }),
    new ExtractTextPlugin({
      //filename: 'index_[hash].css',
      filename: 'index.css',
      disable: false,
      allChunks: true
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:9000'
    })
  ],

  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
    'redux': 'window.Redux',
    'react-redux': 'window.ReactRedux',
    "jquery": 'window.$'
  }
}
