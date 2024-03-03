/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images : {
    remotePatterns : [
      {
        protocol : 'https',
        hostname : 'th.bing.com'
      }
    ]
  }
}


export default nextConfig;
