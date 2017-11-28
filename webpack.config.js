const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./scripts/app.js', './scss/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.scss$/, // TODO: Before production add required plugins
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  }
}
