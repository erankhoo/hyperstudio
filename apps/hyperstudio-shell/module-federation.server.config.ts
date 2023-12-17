import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'hyperstudio-shell',
  remotes: [
    [
      'hyperbooth',
      'https://hypergai-web.s3.us-east-2.amazonaws.com/hyperbooth/web/1.0.20/server/remoteEntry.js',
    ],
  ],
};

export default config;
