const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf.js')

const config = require('./config')

baseWebpackConfig.entry = {}

module.exports = merge(baseWebpackConfig, {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: '/dist/',
    filename: 'at.js',
    library: 'at',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})
