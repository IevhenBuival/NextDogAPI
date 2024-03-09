/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/v1/images/upload", //https://api.thedogapi.com/v1/images/upload
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "POST" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
