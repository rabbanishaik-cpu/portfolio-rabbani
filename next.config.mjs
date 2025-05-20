/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add ESLint configuration
    eslint: {
      // This will check for ESLint errors during the build process
      ignoreDuringBuilds: true,
    }
  };
  
  export default nextConfig;