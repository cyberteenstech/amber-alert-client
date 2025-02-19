/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "img.youtube.com",
                pathname: "/**",
            },
        ],
        minimumCacheTTL: 31536000, // Cache images for 1 year
    },
    async headers() {
        return [
            {
                source: "/_next/static/(.*)", // Cache Next.js static assets
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/images/(.*)", // If you serve images from the public folder
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
