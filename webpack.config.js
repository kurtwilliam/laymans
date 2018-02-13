module.exports = {
  entry: [
    './src/LaymansConversationer.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'cheap-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
