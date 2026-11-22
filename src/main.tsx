import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found. Expected an element with id='root' in index.html.");
}

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// If the container already has children, it was pre-rendered at build time
// (see scripts/prerender.mjs) — hydrate in place. Otherwise fall back to a
// fresh client render, so `npm run dev` still works without a pre-render step.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
