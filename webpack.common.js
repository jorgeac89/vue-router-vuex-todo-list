const path = require('path');
const webpack = require('webpack');
const RemovePlugin = require('remove-files-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devMode = process.env.NODE_ENV !== 'production';
const analyze = process.env.npm_config_analyze;
const inlineStyle = process.env.npm_config_inline_style;

const plugins = [
  new VueLoaderPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js'
  }),
  new RemovePlugin({
    before: {
      include: [path.resolve(__dirname, 'dist')]
    }
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'config.local.js'),
        to: path.resolve(__dirname, 'dist', 'config.js')
      },
      {
        from: path.resolve(__dirname, 'assets'),
        to: path.resolve(__dirname, 'dist', 'assets')
      }
    ]
  }),
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, 'dist', 'index.html'),
    template: path.resolve(__dirname, 'index.ejs'),
    meta: {
      viewport: 'width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no'
    },
    title: 'Vue Router Vuex Todo List',
    favicon: path.resolve(__dirname, 'assets', 'favicon.ico'),
  })
];

if (!inlineStyle) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css'
    }),
  );
}

if (analyze) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'assets', 'bundle'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
    publicPath: '/assets/bundle/',
    libraryTarget: 'var',
    library: '[name]',
    sourceMapFilename: '[file].map',
    crossOriginLoading: 'anonymous'
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'vue-style-loader', options: { sourceMap: devMode } },
          inlineStyle ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: devMode }
          },
          'postcss-loader',
          { loader: 'resolve-url-loader', options: { sourceMap: devMode } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', 'css', '.scss'],
    alias: {
      lib: path.resolve(__dirname, 'lib'),
      src: path.resolve(__dirname, 'src'),
      common: path.resolve(__dirname, 'src', 'common'),
      'error-404': path.resolve(__dirname, 'src', 'error-404'),
      list: path.resolve(__dirname, 'src', 'list'),
      new: path.resolve(__dirname, 'src', 'new'),
      mocks: path.resolve(__dirname, '__tests__', '__mocks__')
    }
  },
  externals: {
    config: 'window.appGlob.config'
  },
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true,
    writeToDisk: true,
    compress: true,
    historyApiFallback: {}
  },
  context: __dirname,
  target: 'web',
  plugins
};
