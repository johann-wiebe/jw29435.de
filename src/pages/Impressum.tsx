import { Address } from "../components/Address";
import { TranslationNotice } from "../components/TranslationNotice";
import { contactEmail } from "../content/site";
import { Rich } from "../i18n/Rich";
import { useI18n } from "../i18n/useI18n";

export function Impressum() {
  const { t } = useI18n();
  const text = t.impressum;

  return (
    <article className="prose container">
      <TranslationNotice page="impressum" />
      <h1>{text.title}</h1>
      <p>{text.intro}</p>

      <h2>{text.providerHeading}</h2>
      <Address />

      <h2>{text.contactHeading}</h2>
      <p>
        <Rich text={text.email} vars={{ email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a> }} />
      </p>
    </article>
  );
}
