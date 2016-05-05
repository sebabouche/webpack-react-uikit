const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const buildDirectory = './dist/';

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    colors: true,
    watch: true,
    port: 7070,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'bundle.js',
    publicPath: "/"
  },
  externals: {
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css','sass'])
      },
      {
        test: /\.(ico|jpe?g|png|gif)$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
         test: /\.(woff|woff2|ttf|otf|eot\?#.+|svg#.+)$/,
         loader: "file?name=[path][name].[ext]"
       }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html'
    })
  ]
};
