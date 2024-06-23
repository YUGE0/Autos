/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cgplxtvfyxxkomatphzi.supabase.co',
          },
        ],
      },
};

export default nextConfig;
