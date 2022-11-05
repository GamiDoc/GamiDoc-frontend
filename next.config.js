module.exports = {
  reactStrictMode: true,
  images: { domains: ['lh3.googleusercontent.com', "s.gravatar.com"], },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ttf$/i,
      type: "asset/resource",
    });
    return config;
  },
}
