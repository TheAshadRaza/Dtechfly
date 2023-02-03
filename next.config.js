/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}




const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',
        port: '',
        pathname: '/media4.giphy.com/media/**',
      },
    ],
  },
}

module.exports = nextConfig
