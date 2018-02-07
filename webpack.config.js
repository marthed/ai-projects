const webpack = require('webpack');
var path = require('path');
var babelloader = require('babel-loader');

let loaders = [];

loaders.push({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: babelloader,
});

loaders.push({
  test: /\.css$/,
  loaders: ['style-loader', 'css-loader']
});

module.exports = {
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: loaders
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
};