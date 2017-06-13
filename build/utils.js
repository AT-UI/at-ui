const path = require('path')
const config = require('./config')
const extractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = _path => {
  return path.posix.join(config.build.assetsSubDirectory, _path)
}

exports.cssLoaders = options => {
  options = options || {}

  // Generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    const sourceLoader = loaders.map(loader => {
      let extraParamChar

      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader += '-loader'
        extraParamChar = '?'
      }

      return loader + (options.sourceMap ? `${extraParamChar}sourceMap` : '')
    }).join('!')

    if (options.extract) {
      return extractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: sourceLoader
      })
    }

    return ['vue-style-loader', sourceLoader].join('!')
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'resolve-url', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'resolve-url', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  }
}

/**
 * Generate loaders for standalone style files (outside of .vue)
 */
exports.styleLoaders = options => {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp(`\\.${extension}$`),
      loader
    })
  }

  return output
}

/**
 * 增加 hljs 的 classname
 */
exports.wrapCustomClass = render => {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

/**
 * Format HTML string
 */
exports.convertHtml = str => {
  return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}
