import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { loadAnalytics, readConsent } from "./analytics";
import { App } from "./App";
import "./styles/fonts";
import "./styles/tokens.css";
import "./styles/global.css";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Im Build ist jede Seite vorgerendert; im Dev-Server ist #root leer.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

if (readConsent() === "granted") loadAnalytics();
