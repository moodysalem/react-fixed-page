const path = require('path');

module.exports = {
  entry: './src/index.jsx',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },

  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    library: 'ReactFixedPage',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  externals: [
    {
      'react': { commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React' },
      'prop-types': 'prop-types'
    }
  ]
};