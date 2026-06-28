// next.config.ts
const nextConfig = {
  experimental: {
    viewTransition: true, // required for document.startViewTransition to work
  },
};

export default nextConfig;