const webpack = require('webpack');

module.exports = {
  entry: "./src/index.jsx",

  module: {
    loaders: [
      // interpret ES6/JSX
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: [ 'transform-decorators-legacy' ],
          presets: [ 'es2015', 'stage-1', 'react' ]
        }
      }
    ]
  },

  output: {
    path: "./dist",
    filename: "index.js",
    library: "ReactFixedPage",
    libraryTarget: "umd"
  },

  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },

  externals: [
    {
      'react': { commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React' },
      'prop-types': 'prop-types'
    }
  ]
};
