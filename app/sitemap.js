import { SERVICES } from "../lib/data";

export default function sitemap() {
  const baseUrl = "https://www.manwasalon.in";
  const staticRoutes = ["", "/services", "/book", "/contact"];
  const serviceRoutes = SERVICES.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
