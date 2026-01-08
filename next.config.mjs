/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bizgrow-digital.co.uk',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;