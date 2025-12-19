/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      ppr: false,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flagicons.lipis.dev',
          pathname: '/flags/**',
        },
      ],
    },
  };
  export default nextConfig;