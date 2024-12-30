import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config) {
    // Ensure that the symlink is resolved correctly
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  trailingSlash: true,
};

export default nextConfig;