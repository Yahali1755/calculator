const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './build'),
  },
  devServer: {
    port: '5000',
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
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
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
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.join(__dirname, 'public', 'index.html')})
  ]
};