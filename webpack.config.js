const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "./style/style.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [
    './src/LaymansConversationer.js','./style/style.scss',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /(\.css$)/, include: /node_modules/, loaders: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader", 
          use: [ "css-loader", "sass-loader" ]
        })
      },
      {test: /\.json$/, loader: "json-loader"},
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin({ filename: "./style/style.css" }),
  ]
};

