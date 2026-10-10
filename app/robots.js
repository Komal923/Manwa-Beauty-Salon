export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/_next/"],
    },
    sitemap: "https://www.manwasalon.in/sitemap.xml",
    host: "https://www.manwasalon.in",
  };
}
