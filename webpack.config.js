const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    apps: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
      new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'HtmlWebpackPlugin'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};