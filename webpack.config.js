const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
 module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      }
    ],
  },
  watchOptions: {
  aggregateTimeout: 600,
  ignored: /node_modules/,
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      publicPath: '/dist/index'
  },
};