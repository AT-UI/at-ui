const path = require('path')
const webpack = require('webpack')
const MarkdownItContainer = require('markdown-it-container')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const striptags = require('./strip-tags')

const config = require('./config')
const utils = require('./utils')

const projectRoot = config.projectRoot

module.exports = {
  entry: {
    // dist: './src/main.js',
    docs: './docs/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'stylesheet': path.resolve(__dirname, '../src/stylesheet'),
      'vue': 'vue/dist/vue.js'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.yml$/,
        loader: 'json!yaml'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.serverConfig': {
        portalPrefix: JSON.stringify(config.portalPrefix)
      }
    }),
    new ExtractTextPlugin('styles.css')
  ],
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // },
  postcss: webpack => [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie > 8']
    })
    // require('postcss-url')()
  ],
  vue: {
    loaders: utils.cssLoaders({
      extract: false
    }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions', 'ie > 8']
      })
      // require('postcss-url')()
    ]
  },
  vueMarkdown: {
    preprocess: (MarkdownIt, source) => {
      MarkdownIt.renderer.rules.table_open = function () {
        return '<table class="table">'
      }
      MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence)
      return source
    },
    use: [
      [MarkdownItContainer, 'demo', {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            const html = convert(striptags(tokens[idx + 1].content, 'script'))

            return `<demo-box>
                      <div slot="demo">${html}</div>
                      <div slot="source-code">`
          }

          // closing tag
          return '</div></demo-box>'
        }
      }]
    ]
  }
}

/**
 * 增加 hljs 的 className
 */
function wrapCustomClass (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

/**
 * Format html string
 */
function convert (str) {
  str = str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
  return str
}
