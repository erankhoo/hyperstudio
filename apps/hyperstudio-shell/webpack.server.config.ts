import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederationForSSR } from '@nx/react/module-federation';
// import { merge } from 'webpack-merge';

import baseConfig from './module-federation.config';

const defaultConfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact({ ssr: true }),
  withModuleFederationForSSR(defaultConfig)
  // (config, { options, context }) => {
  //   return merge(config, {
  //     module: {
  //       rules: [
  //         {
  //           test: /\.(sass|scss)$/,
  //           use: [
  //             'style-loader',
  //             'css-loader',
  //             'postcss-loader',
  //             {
  //               loader: 'sass-loader',
  //               options: {
  //                 // Prefer `dart-sass`
  //                 implementation: require('sass'),
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           test: /\.css$/,
  //           use: ['style-loader', 'css-loader'],
  //         },
  //       ],
  //     },
  //   });
  // }
);
