import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const { render } = await import(resolve(root, "dist-ssr/entry-server.js"));

// React 19 hoists <img fetchPriority> into a preload <link> during
// renderToString. index.html already preloads the hero image, and a
// link inside #root would not match the client render.
const appHtml = render().replace(
  /<link rel="preload" as="image" href="\/hero-photo\.webp"[^>]*>/,
  "",
);
const templatePath = resolve(root, "dist/index.html");
const template = readFileSync(templatePath, "utf-8");

const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`Prerender marker ${marker} not found in dist/index.html`);
}

writeFileSync(templatePath, template.replace(marker, `<div id="root">${appHtml}</div>`));
console.log(`Prerendered ${appHtml.length} chars of app HTML into dist/index.html`);
