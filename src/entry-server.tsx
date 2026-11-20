import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./App";

export { pageEntries, redirects } from "./routes";
export { languages } from "./i18n/catalogs";
export { validateCatalogs } from "./i18n/validate";
export { siteUrl } from "./content/site";

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
