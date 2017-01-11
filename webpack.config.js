module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    hot: true,
    inline: true
  },

  output: {
    path: './dist',
    publicPath: '/assets/',
    filename: 'app.bundle.js'
  }
}