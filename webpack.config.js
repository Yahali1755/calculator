const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: '/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './build'),
  },
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
},
    hot: true,
    liveReload: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader', 
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader", 'babel-loader',],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};