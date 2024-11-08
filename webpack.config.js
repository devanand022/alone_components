const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: '@alonedev/alone_components',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets : [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    '@babel/preset-react'
                  ],
                },
            },
            exclude: /node_modules/,
        },
    ],
  },
  externals: {
    react: 'react',
  },
};
