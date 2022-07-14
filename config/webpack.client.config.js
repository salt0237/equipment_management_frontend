const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require("path");

const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const dotenv = new Dotenv()

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx|\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
    ]
  },
  plugins: [
      dotenv,
      htmlWebPackPlugin
    ]
};
