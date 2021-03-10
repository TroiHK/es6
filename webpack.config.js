var path = require('path');
var webpack = require('webpack');

module.exports = (env, argv) => ({
  mode: argv.mode,
  devtool: argv.mode === 'development' ? 'source-map' : false,
 entry: './js/main.js',
 output: {
   path: path.resolve(__dirname, 'build'),
   filename: 'main.bundle.js'
 },
 module: {
   rules: [
   {
     test: /\.js$/,
     exclude: /node_modules/,
     use: {
      loader: 'babel-loader',
    }
  }
  ]
},
stats: {
 colors: true
}
});