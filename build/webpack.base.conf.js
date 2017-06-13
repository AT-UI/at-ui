const path = require('path')
const webpack = require('webpack')
const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')

const config = require('./config')
const utils = require('./utils')

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))

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

module.exports = {
  entry: './docs/main.js',
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'stylesheet': path.resolve(__dirname, '../src/stylesheet'),
      'at': path.resolve(__dirname, '../dist/at.js'),
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'eslint',
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     exclude: /node_modules/
    //   }
    // ],
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: vueMarkdown
      },
      {
        test: /\.yml$/,
        loader: 'json-loader!yaml-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie > 8']
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            extract: false
          }),
          postcss: [
            require('autoprefixer')({
              browsers: ['last 2 versions', 'ie > 8']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.serverConfig': {
        portalPrefix: JSON.stringify(config.portalPrefix)
      }
    })
  ],
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // },
}
