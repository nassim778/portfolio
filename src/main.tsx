import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (typeof window !== "undefined") {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Missing #root element");
  }

  if (import.meta.env.DEV) {
    createRoot(root).render(app);
  } else {
    hydrateRoot(root, app);
  }
}
