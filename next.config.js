/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'happybabysss.myshoprenter.hu' },
      { protocol: 'https', hostname: 'www.babypanda.hu' },
      { protocol: 'https', hostname: 'babypanda.hu' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};

module.exports = nextConfig;
