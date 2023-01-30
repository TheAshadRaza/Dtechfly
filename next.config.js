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


module.exports = nextConfig
