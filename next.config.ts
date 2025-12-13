// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Bing
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tse2.mm.bing.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tse3.mm.bing.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tse4.mm.bing.net',
        pathname: '/**',
      },
      // PngEgg
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
        pathname: '/**',
      },
      // Wikipedia
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      // Blue Star
      {
        protocol: 'https',
        hostname: 'www.bluestarindia.com',
        pathname: '/**',
      },
      // Lloyd
      {
        protocol: 'https',
        hostname: 'www.lloydindia.com',
        pathname: '/**',
      },
      // PNGIMG
      {
        protocol: 'https',
        hostname: 'pngimg.com',
        pathname: '/**',
      },
      // Logowik
      {
        protocol: 'https',
        hostname: 'logowik.com',
        pathname: '/**',
      },
      // CookieLaw
      {
        protocol: 'https',
        hostname: 'cdn.cookielaw.org',
        pathname: '/**',
      },
      // Freepik
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
      // Vecteezy
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        pathname: '/**',
      },
      // Logos World
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        pathname: '/**',
      },
    ],
    
    // Cache optimization for Next.js Image component
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Cache-Control headers for ALL static assets
  async headers() {
    return [
      // Cache Next.js optimized images
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache Next.js static files
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache your own images in public folder
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|svg|ico|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache CSS, JS files
      {
        source: '/:path*\\.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache fonts
      {
        source: '/:path*\\.(woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;