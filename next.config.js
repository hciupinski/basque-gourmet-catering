/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // enables static export
    images: {
        unoptimized: true
    },
    trailingSlash: true, // helpful for S3/CloudFront directory indexes
};
module.exports = nextConfig;