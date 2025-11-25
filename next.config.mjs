/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
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