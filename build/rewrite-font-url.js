const webpackSources = require('webpack-sources')

const Options = {
  fileReg: /\.css$/g,
  processor: null
}

function CovRewriter (options) {
  Object.assign(Options, options)
}

CovRewriter.prototype.createCssAsset = function (css, originalAsset) {
  return new webpackSources.RawSource(css)
}

CovRewriter.prototype.assetFind = function (assets) {
  let asset = ''
  Object.keys(assets).forEach(key => {
    if (Options.fileReg.test(key)) {
      asset = assets[key]
      if (Options.processor) {
        assets[key] = this.createCssAsset(Options.processor(asset.source()), asset)
      }
    }
  })
}

CovRewriter.prototype.apply = function (compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    this.assetFind(compilation.assets)
    callback()
  })
}

module.exports = CovRewriter
