const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
