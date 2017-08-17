require('shelljs/global')

const ora = require('ora')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const spinner = ora('building locale for production...')

spinner.start()
baseWebpackConfig.entry = {}

/**
 * Get the files of language
 */
const files = fs.readdirSync('./src/locale/lang')
const localeEntry = {}

files.forEach(fileName => {
  const name = fileName.split('.')[0]
  localeEntry[name] = `./src/locale/lang/${fileName}`
})

const webpackConfig = merge(baseWebpackConfig, {
  entry: localeEntry,
  output: {
    path: path.resolve(__dirname, '../dist/locale'),
    publicPath: '/dist/locale/',
    filename: '[name].js',
    library: 'at/locale',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      progress: true,
      hide_modules: true
    }),
    new webpack.BannerPlugin({
      banner: `/*! AT-UI i18n v${require('../package.json').version} | https://at.aotu.io | (c) 2017 O2Team | MIT License */`,
      raw: true,
      entryOnly: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

webpack(webpackConfig, (err, stats) => {
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
