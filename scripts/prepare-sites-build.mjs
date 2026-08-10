import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const routes = [
  "projects",
  "resume",
  "ai-expression",
  "industrial-design",
  "product-definition",
  "product-management",
  "decisions",
  "validation",
  "delivery",
  "insights",
  "medical",
  "industrial",
];

for (const route of routes) {
  const routeDir = join(distDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(join(distDir, "index.html"), join(routeDir, "index.html"));
}

await copyFile(join(distDir, "index.html"), join(distDir, "404.html"));

const worker = `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (
      response.status !== 404 ||
      request.method !== "GET" ||
      !(request.headers.get("accept") || "").includes("text/html")
    ) {
      return response;
    }

    const fallbackUrl = new URL("/index.html", request.url);
    return env.ASSETS.fetch(new Request(fallbackUrl, request));
  },
};
`;

const serverDir = join(distDir, "server");
await mkdir(serverDir, { recursive: true });
await writeFile(join(serverDir, "index.js"), worker, "utf8");
