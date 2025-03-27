const path = require('path');

const commonConfig = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
  },
  devtool: 'source-map',
};

const esmConfig = {
  ...commonConfig,
  ...{
    output: {
      filename: 'index.mjs',
      path: path.resolve(__dirname, 'dist/mjs'),
      library: {
        type: 'module',
      },
    },
    experiments: {
      outputModule: true,
    },
  },
};

const cjsConfig = {
  ...commonConfig,
  ...{
    output: {
      filename: 'index.cjs',
      path: path.resolve(__dirname, 'dist/cjs'),
      library: {
        type: 'commonjs2',
      },
    },
  },
};

const umdConfig = {
  ...commonConfig,
  ...{
    output: {
      filename: 'index.umd.js',
      path: path.resolve(__dirname, 'dist/umd'),
      library: '@alonedev/react',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
  },
};

module.exports = [esmConfig, cjsConfig, umdConfig];
