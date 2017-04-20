const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')

const portalPrefix = config.config.portalPrefix
const hotMiddleware = `webpack-hot-middleware/client?path=${portalPrefix}__webpack_hmr&noInfo=true&reload=true`

// Add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = [hotMiddleware].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  // eval-source-map if faster for development
  devtool: 'eval-source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
