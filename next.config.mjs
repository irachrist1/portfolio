/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove MDX extensions since we're using static data
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // Remove experimental MDX settings
};

export default nextConfig;
