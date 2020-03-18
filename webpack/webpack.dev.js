/* eslint-disable */
const common = require('./webpack.common'),
  merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  }
});
