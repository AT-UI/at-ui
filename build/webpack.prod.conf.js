const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = require('./config')
const utils = require('./utils')
const RewriteFontUrl = require('./rewrite-font-url')
const baseWebpackConfig = require('./webpack.base.conf')

process.env.NODE_ENV = 'production'

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? 'source-map' : false,
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: utils.assetsPath('js/[name].[chunkhash:6].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash:6].js')
  },
  resolve: {
    alias: {
      'at-ui-lib': path.resolve(__dirname, '../dist/at.js'),
      'at-ui-style': 'stylesheet/css/at.css',
      'at-ui-locale-zh': path.resolve(__dirname, '../dist/locale/zh-CN.js'),
      'at-ui-locale-en': path.resolve(__dirname, '../dist/locale/en-US.js')
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // }),
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash:6].css')),
    new RewriteFontUrl({
      fileReg: new RegExp('static/css/'),
      processor: source => source.replace(/static\/fonts/g, '../fonts')
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(config.config.projectRoot, 'docs/assets/favicon.png'),
      prefix: 'favicons/'
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'docs/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        )
      }
    })
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // })
  ]
})

module.exports = webpackConfig
