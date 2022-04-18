/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.semperitgroup.com'],
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoibG9yZGRvaCIsImEiOiJjbDIzZWFtdWYwbmd5M2JvYXE5MGZ4enY2In0.W009tnG5x9OKO_bOsCVM9g',
  },
};

module.exports = nextConfig;
