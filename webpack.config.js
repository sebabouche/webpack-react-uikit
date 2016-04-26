var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// on peut passer à notre commande de build l'option --production
// on récupère sa valeur ici en tant que booléen
var production = process.argv.indexOf("--production") > -1

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.(ico|jpe?g|png|gif)$/,
        loader: "file?name=[path][name].[ext]"
      },
      {
         test: /\.(woff|woff2|ttf|otf|eot\?#.+|svg#.+)$/,
         loader: "file?name=[path][name].[ext]"
       },
       {
         test: /\.(html|txt)$/,
         loader: "file?name=[path][name].[ext]"
       }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    //publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name].css", {disable: !production}),
    new webpack.DefinePlugin({
      __PROD__: production
    })
  ]
  .concat(
    production ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ] : []
  )
};
