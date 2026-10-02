/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The desktop-era gallery and model pages are retired; public models live in the app now.
  async redirects() {
    return [
      // 不带 www 的裸域永久跳到 www:两个主机都回 200 时,外链和抓取被拆成两份(canonical 只能事后合并)。
      // value 两头必须自己锚定:OpenNext 匹配 host 用的是不锚定的 RegExp.test,写成 "forgent3d\\.com"
      // 会连 www.forgent3d.com 一起命中,跳成死循环。"/" 单列一条:它匹配 /:path* 时参数为空,
      // OpenNext 不替换,Location 会原样写成 "/:path*"。
      { source: "/", has: [{ type: "host", value: "^forgent3d\\.com$" }], destination: "https://www.forgent3d.com/", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "^forgent3d\\.com$" }],
        destination: "https://www.forgent3d.com/:path*",
        permanent: true,
      },
      { source: "/:locale(en|zh)/gallery", destination: "https://app.forgent3d.com/explore", permanent: true },
      { source: "/m/:shareSlug/:rest*", destination: "https://app.forgent3d.com/m/:shareSlug", permanent: true },
      { source: "/m/:shareSlug", destination: "https://app.forgent3d.com/m/:shareSlug", permanent: true },
    ];
  },
};

export default nextConfig;
