/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },

      // Bing Images
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tse2.mm.bing.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tse3.mm.bing.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tse4.mm.bing.net",
        pathname: "/**",
      },

      // PngEgg
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
        pathname: "/**",
      },

      // Wikipedia
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },

      // Blue Star
      {
        protocol: "https",
        hostname: "www.bluestarindia.com",
        pathname: "/**",
      },

      // Lloyd
      {
        protocol: "https",
        hostname: "www.lloydindia.com",
        pathname: "/**",
      },

      // PNGIMG
      {
        protocol: "https",
        hostname: "pngimg.com",
        pathname: "/**",
      },

      // Logowik
      {
        protocol: "https",
        hostname: "logowik.com",
        pathname: "/**",
      },

      // CookieLaw
      {
        protocol: "https",
        hostname: "cdn.cookielaw.org",
        pathname: "/**",
      },

      // Freepik
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },

      // Vecteezy
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/**",
      },

      // Logos World
      {
        protocol: "https",
        hostname: "logos-world.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
