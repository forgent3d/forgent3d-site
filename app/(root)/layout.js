/** "/" 只做按地区/语言跳到 /en 或 /zh(page.js),不出页面;站点的根布局在 app/[locale]/layout.js。 */
export default function RedirectRootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
