const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'quorixia-cms.onrender.com', 'cms.quorixia.com', 'res.cloudinary.com'],
  },
  // You can add other configurations here as needed
};

module.exports = withNextIntl(nextConfig);
