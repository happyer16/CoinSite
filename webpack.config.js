module.exports = {
  entry: [
    './src/index.js',
    './src/style.css'
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader'
      }
    ]
  }
};
