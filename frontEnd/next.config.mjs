const nextConfig = {
    images: {
        unoptimized: true, 
        
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "5000",
                pathname: "/uploads/**",
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;