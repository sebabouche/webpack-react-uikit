const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(['css','sass'])
      },
      {
        test: /\.(ico|jpe?g|png|gif)$/,
        loaders: ['file?name=[path][name].[ext]',
          'image-webpack?{
            progressive:true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant:{quality: "65-90", speed: 4}
          }'
        ]
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
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
