const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const historyAPIFallback = require('connect-history-api-fallback')
const DashboardPlugin = require('webpack-dashboard/plugin')

const config = require('./config')
const webpackConfig = require('./webpack.dev.conf')

// Default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
  publicePath: webpackConfig.output.publicePath,
  stats: {
    colors: true,
    chunks: false
  }
})

const hotMiddleware = webpackHotMiddleware(compiler)

// Fore page reload when html-webpack-plugin template changes
compiler.plugin('compilation', compilation => {
  compilation.plugin('htme-webpack-plugin-after-emit', (data, callback) => {
    hotMiddleware.publish({
      action: 'reload'
    })
    callback()
  })
})

// Webpack Dashboard
compiler.apply(new DashboardPlugin())

// Proxy API Requests
Object.keys(proxyTable).forEach(context => {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// Handle fallback for HTML5 History API
app.use(historyAPIFallback())

// Serve webpack bundle output
app.use(devMiddleware)

// Enable hot-reload and state-preserving
// compilation err display
app.use(hotMiddleware)

// Serve pure static assets
const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, err => {
  if (err) {
    console.error(err)
    return
  }
  console.info('==> 🌎 Listening on port %s.\n', port)
})
