import createMDX from '@next/mdx';

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions:['mdx', 'ts', 'tsx'],
  /* config options here */
  // compiler: {
  //   removeConsole: false
  // },
  // logging: {
  //   fetches: {
  //     fullUrl: true
  //   }
  // } 
  experimental: {
    mdxRs: true
  }
};

// add markdown plugins hrer.
const withMDX = createMDX({});

export default withMDX(nextConfig);
