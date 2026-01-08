/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Is se automatic / add ho jayega
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