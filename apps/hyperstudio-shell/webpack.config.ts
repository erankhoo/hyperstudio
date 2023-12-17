import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
// import { merge } from 'webpack-merge';

import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
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
