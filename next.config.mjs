/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

// https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=150&h=150

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
        
      },
    ],
  },
};

export default nextConfig;
