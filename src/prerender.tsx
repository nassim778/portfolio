import { StrictMode } from "react";
import { renderToString } from "react-dom/server.edge";
import App from "./App";

export function prerender() {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );

  return { html };
}
