const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: 'app.bundle.js',
    publicPath: './'
  },
  watch: false,
  mode: 'development',
  target: 'web',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.bundle.css'
    }),
    new OptimizeCSSAssetsPlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(tag|riot)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@riotjs/webpack-loader',
            options: {
              hot: false,
              scopedCss: true
            },
          },
        ]
      },
      {
        test: /\.(png|jp(e*)g|gif|svg|eot|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   limit: 100000
            // }
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'resolve-url-loader' },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ]
      }
    ]
  }
}
