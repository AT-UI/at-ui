/**
 * Configuration
 */
const path = require('path')

const env = process.env.NODE_ENV || 'development'

const config = {
  env,
  projectRoot: path.resolve(__dirname, '../'),
  port: process.env.PORT || 7200,
  portalPrefix: '/'
}

// Append trailing slash if not added
const portalPrefix = config.portalPrefix
config.portalPrefix = portalPrefix + (/.*\/$/.test(portalPrefix) ? '' : '/')

module.exports = {
  config,
  dev: {
    port: config.port,
    proxyTable: {},
    assetsSubDirectory: 'static',
    assetsPublicPath: config.portalPrefix,
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  }
}
