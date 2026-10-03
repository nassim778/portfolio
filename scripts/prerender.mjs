import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const { render } = await import(resolve(root, "dist-ssr/entry-server.js"));

const appHtml = render();
const templatePath = resolve(root, "dist/index.html");
const template = readFileSync(templatePath, "utf-8");

const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`Prerender marker ${marker} not found in dist/index.html`);
}

writeFileSync(templatePath, template.replace(marker, `<div id="root">${appHtml}</div>`));
console.log(`Prerendered ${appHtml.length} chars of app HTML into dist/index.html`);
