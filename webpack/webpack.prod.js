/* eslint-disable */
const common = require('./webpack.common'),
  merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main[contentHash].js',
  }
});