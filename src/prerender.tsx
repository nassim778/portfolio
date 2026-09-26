import { StrictMode } from "react";
import { renderToString } from "react-dom/server.edge";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";

export function prerender() {
  const html = renderToString(
    <StrictMode>
      <App />
      <Analytics mode="production" />
    </StrictMode>,
  );

  return { html };
}
