import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

/**
 * Server entry used by scripts/prerender.mjs at build time.
 * Renders the app to a static HTML string so the published index.html already
 * contains the visible content — important for link previews, search crawlers,
 * screenshot bots, and the first paint before JavaScript loads.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
