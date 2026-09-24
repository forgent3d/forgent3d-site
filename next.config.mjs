/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The desktop-era gallery and model pages are retired; public models live in the app now.
  async redirects() {
    return [
      { source: "/:locale(en|zh)/gallery", destination: "https://app.forgent3d.com/explore", permanent: true },
      { source: "/m/:shareSlug/:rest*", destination: "https://app.forgent3d.com/m/:shareSlug", permanent: true },
      { source: "/m/:shareSlug", destination: "https://app.forgent3d.com/m/:shareSlug", permanent: true },
    ];
  },
};

export default nextConfig;
