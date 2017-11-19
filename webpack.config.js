const webpack = require('webpack');
var path = require('path');

let loaders = [];
let plugins = [];

loaders.push({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader'
});

plugins.push(new webpack.HotModuleReplacementPlugin());


module.exports = {
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: loaders
  },
  plugins
};