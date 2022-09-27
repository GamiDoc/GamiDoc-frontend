/** @type {import('next').NextConfig} */
// require("dotenv").config()
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', "s.gravatar.com"],
  },
}

module.exports = nextConfig
