import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'hyperbooth',
  library: {
    name: 'hyperbooth',
    type: 'commonjs-module',
  },
  exposes: {
    './Module': 'apps/hyperbooth/src/remote-entry.ts',
  },
};

export default config;
