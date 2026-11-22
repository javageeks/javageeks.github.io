// Prerender the home route into dist/index.html so the published HTML already
// contains the visible content. Run after the client and SSR Vite builds.
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const templatePath = resolve(root, "dist/index.html");
const ssrEntryPath = resolve(root, "dist-ssr/entry-server.js");

const template = await readFile(templatePath, "utf-8");
const { render } = await import(ssrEntryPath);

const appHtml = render("/");
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

await writeFile(templatePath, html, "utf-8");

// Clean up the intermediate SSR build — only dist/ ships.
await rm(resolve(root, "dist-ssr"), { recursive: true, force: true });

console.log("✓ prerendered dist/index.html");
