const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');



module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: [".js", ".vue", ".json"],
  },
  externals: {//把一个模块做成外部依赖，不会打包到js文件中
    jquery: 'jQuery',
    lodash:'_'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/, // 加快编译速度，不包含node_modules文件夹内容
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }, {
          loader: "eslint-loader",
          options: {
            // eslint options (if necessary)
            fix: true
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [{
            loader: 'url-loader', // 根据图片大小，把图片优化成base64
            options: {
              limit: 10000
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // 提取css文件的插件
    new HtmlWebpackPlugin({
      title: 'AICODER 全栈线下实习', // 默认值：Webpack App
      filename: 'main.html', // 默认值： 'index.html'
      template: path.resolve(__dirname, 'src/main.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true, //是否移除注释
        removeAttributeQuotes: true // 移除属性的引号
      }
    }),
    new CleanWebpackPlugin()
  ],
}