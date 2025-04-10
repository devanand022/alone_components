import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { fileURLToPath } from 'url';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    const currentDir = path.dirname(fileURLToPath(import.meta.url));

    config.module?.rules?.push(
      {
        test: /\.module\.(css|scss)$/,
        exclude: [path.resolve(currentDir, 'node_modules')],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /(\.css|\.scss)$/,
        exclude: [path.resolve(currentDir, 'node_modules')],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    );
    return config;
  },
  docs: {},
};

export default config;
