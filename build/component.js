require('shelljs/global')

const ora = require('ora')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const spinner = ora('building components for production...')

spinner.start()
baseWebpackConfig.entry = {}

const buildsConfig = {
  'dev': {
    filename: 'at.js',
    library: 'at',
    libraryTarget: 'umd',
    env: 'developement'
  },
  'prod': {
    filename: 'at.min.js',
    library: 'at',
    libraryTarget: 'umd',
    env: 'production'
  }
}

function getConfig (options) {
  const config = merge(baseWebpackConfig, {
    entry: {
      main: './src/index.js'
    },
    output: {
      filename: options.filename,
      library: options.library,
      libraryTarget: options.libraryTarget
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

  if (options.env === 'production') {
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }

  return config
}

Object.keys(buildsConfig).map(conf => {
  webpack(getConfig(buildsConfig[conf]), (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      color: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  })
})
