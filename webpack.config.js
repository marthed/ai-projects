const webpack = require('webpack');
var path = require('path');

let loaders = [];

loaders.push({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader',
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
  }
};