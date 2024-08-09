const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'review_build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"]
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'review_build'),  // Папка, откуда сервер будет обслуживать файлы
    open: true,  // Автоматически открывать браузер после запуска
  },
}