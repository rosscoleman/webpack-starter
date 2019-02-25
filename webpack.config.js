const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // WARNING: don't use to produce production bundles
  optimization: {
    minimize: false
  },
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 80,
/*    proxy: {
      '/api': {
        target: 'http://localhost:8080'//,
        //#pathRewrite: {'^/api': ''}
      }
    }
*/
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.js'])
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};