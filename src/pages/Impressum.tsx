import { Address } from "../components/Address";
import { contactEmail } from "../content/site";

export function Impressum() {
  return (
    <article className="prose container">
      <h1>Impressum</h1>
      <p>Dieses Impressum gilt für die Websites jw29435.de und johannwiebe.de.</p>

      <h2>Angaben gemäß § 5 DDG</h2>
      <Address />

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
    </article>
  );
}
