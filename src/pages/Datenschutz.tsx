import { Address } from "../components/Address";
import { TranslationNotice } from "../components/TranslationNotice";
import { contactEmail } from "../content/site";
import { Rich } from "../i18n/Rich";
import { useI18n } from "../i18n/useI18n";

export function Datenschutz() {
  const { t } = useI18n();
  const text = t.datenschutz;
  const emailLink = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;

  return (
    <article className="prose container">
      <TranslationNotice page="datenschutz" />
      <h1>{text.title}</h1>
      <p>{text.intro}</p>
      <p>
        <Rich text={text.serva} />
      </p>

      <h2>{text.controllerHeading}</h2>
      <Address />
      <p>
        <Rich text={text.controllerEmail} vars={{ email: emailLink }} />
      </p>

      <h2>{text.cookiesHeading}</h2>
      <p>{text.cookies}</p>

      <h2>{text.analyticsHeading}</h2>
      <p>{text.analytics1}</p>
      <p>{text.analytics2}</p>
      <p>
        <Rich text={text.analytics3} />
      </p>

      <h2>{text.hostingHeading}</h2>
      <p>
        <Rich text={text.hosting} />
      </p>

      <h2>{text.cloudflareHeading}</h2>
      <p>
        <Rich text={text.cloudflare} />
      </p>
      <p>{text.serverLogs}</p>

      <h2>{text.emailHeading}</h2>
      <p>
        <Rich text={text.email} />
      </p>

      <h2>{text.rightsHeading}</h2>
      <p>
        <Rich text={text.rights} vars={{ email: contactEmail }} />
      </p>
      <p>
        <Rich text={text.complaint} />
      </p>

      <p className="prose__meta">{text.updated}</p>
    </article>
  );
}
