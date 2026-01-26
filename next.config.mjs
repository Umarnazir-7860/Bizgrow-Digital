/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bizgrow-digital.co.uk', // Isay add karein
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.bizgrow-digital.co.uk', // Subdomain backup ke liye
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;