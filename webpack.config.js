var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/"
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
        loader: "file?name=[path][name].[ext]"
      },
      {
         test: /\.(woff|woff2|ttf|otf|eot\?#.+|svg#.+)$/,
         loader: "file?name=[path][name].[ext]"
       }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html'
    })
  ]
};
