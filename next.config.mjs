/** @type {import('next').NextConfig} */

// Em produção no GitHub Pages o site fica em /carlapersonal.
// A Action define GITHUB_PAGES=true; em dev local o basePath fica vazio.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "carlapersonal";
const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  // Exposto ao cliente para prefixar manualmente o src das imagens
  // (next/image com unoptimized nao aplica basePath sozinho).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
