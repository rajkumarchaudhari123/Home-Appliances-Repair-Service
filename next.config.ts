// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },

      { protocol: 'https', hostname: 'tse1.mm.bing.net', pathname: '/**' },
      { protocol: 'https', hostname: 'tse2.mm.bing.net', pathname: '/**' },
      { protocol: 'https', hostname: 'tse3.mm.bing.net', pathname: '/**' },
      { protocol: 'https', hostname: 'tse4.mm.bing.net', pathname: '/**' },

      { protocol: 'https', hostname: 'e7.pngegg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
      { protocol: 'https', hostname: 'www.bluestarindia.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.lloydindia.com', pathname: '/**' },
      { protocol: 'https', hostname: 'pngimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'logowik.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.cookielaw.org', pathname: '/**' },
      { protocol: 'https', hostname: 'img.freepik.com', pathname: '/**' },
      { protocol: 'https', hostname: 'static.vecteezy.com', pathname: '/**' },
      { protocol: 'https', hostname: 'logos-world.net', pathname: '/**' },
    ],

    // Image optimization
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      // Next.js optimized images
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: 'Thu, 31 Dec 2037 23:55:55 GMT',
          },
        ],
      },

      // Next.js static files
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: 'Thu, 31 Dec 2037 23:55:55 GMT',
          },
        ],
      },

      // Public images
      {
        source: '/:path*.(jpg|jpeg|png|gif|webp|svg|ico|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: 'Thu, 31 Dec 2037 23:55:55 GMT',
          },
        ],
      },

      // CSS & JS
      {
        source: '/:path*.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: 'Thu, 31 Dec 2037 23:55:55 GMT',
          },
        ],
      },

      // Fonts
      {
        source: '/:path*.(woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: 'Thu, 31 Dec 2037 23:55:55 GMT',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
