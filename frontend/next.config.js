/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mi-proyecto", // muy importante para GitHub Pages
  trailingSlash: true, // importante para evitar errores 404
  images: {
    unoptimized: true, // 👈 Esto desactiva la optimización para que pueda exportar
  },
};

module.exports = nextConfig;
