const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    // eslint-disable-next-line no-undef
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.min.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
