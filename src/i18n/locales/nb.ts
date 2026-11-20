// Norsk bokmål. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const nb: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Små verktøy for virkelige arbeidsflyter: Serva, Nuvo Explorer og CLR by NMBRS fra Johann Wiebe.",
    },
    impressum: {
      title: "Juridisk informasjon – jw29435",
      description: "Juridisk informasjon for jw29435.de, paraplyen for Serva, Nuvo Explorer og CLR by NMBRS.",
    },
    datenschutz: {
      title: "Personvernerklæring – jw29435",
      description:
        "Personvernerklæring for jw29435.de og johannwiebe.de: serverlogger og Google Analytics bare med samtykke.",
    },
    ogImageAlt: "jw29435-logo: bærbar PC med bokstavene JW på rav",
  },

  layout: {
    skipLink: "Gå til innholdet",
    homeLink: "jw29435 – forside",
    mainNav: "Hovednavigasjon",
    navProducts: "Produkter",
    navContact: "Kontakt",
    navImpressum: "Juridisk info",
    language: "Språk",
    footerBy: "Et produkt fra **jw29435**",
    footerImpressum: "Juridisk info",
    footerDatenschutz: "Personvern",
    cookieSettings: "Cookie-innstillinger",
  },

  languageHint: {
    text: "Denne siden finnes også på norsk.",
    action: "Les på norsk",
    dismiss: "Lukk meldingen",
  },

  home: {
    eyebrow: "jw29435 · Apper og nettverktøy",
    title: "Små verktøy for virkelige arbeidsflyter.",
    lead: "Tre produkter fra Johann Wiebe: ett planlegger gudstjenester, ett åpner din egen Synology når du er på farten, ett gjør bilder om til maler for mal etter tall. Alle ser like ut.",
    logoAlt: "jw29435-logo: bærbar PC med bokstavene JW",
    productsHeading: "Produkter",
    contactHeading: "Kontakt",
    contactText: "Har du funnet en feil eller har en idé til et av produktene? Skriv til meg.",
    copy: "Kopier",
    copied: "Kopiert",
  },

  products: {
    statusLabel: "Status:",
    serva: {
      platform: "Nett · for menigheter",
      description:
        "Planlegger gudstjenester, prekentjenester og korsanger og minner predikanter på tjenesten sin via e-post, WhatsApp eller push.",
      action: "Åpne Serva",
      status: "I bruk",
    },
    nuvo: {
      platform: "Android · iOS planlagt",
      description:
        "Bla gjennom filene på din egen Synology og spill av musikkmapper direkte, i det lokale nettverket, via VPN eller over HTTPS.",
      action: "Til Play-testen",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Gjør et bilde om til en mal for mal etter tall, om du vil bare med fargene som finnes i fargeskrinet ditt.",
      action: "I Play-butikken",
      status: "Tilgjengelig",
    },
  },

  consent: {
    title: "Kan jeg måle hvordan nettstedet brukes?",
    text: "Med ditt samtykke bruker jeg Google Analytics for å se hvilke sider som besøkes. Google setter da informasjonskapsler og overfører også data til USA. Du kan når som helst endre valget ditt via «Cookie-innstillinger» nederst på siden. Les mer i [personvernerklæringen](page:datenschutz).",
    currentGranted: "Nå: tillatt",
    currentDenied: "Nå: avvist",
    deny: "Avvis",
    allow: "Tillat",
  },

  legalNotice: {
    text: "Dette er en oversettelse. Bare den tyske versjonen er juridisk bindende.",
    link: "Til den tyske versjonen",
  },

  impressum: {
    title: "Juridisk informasjon",
    intro: "Denne juridiske informasjonen gjelder for nettstedene jw29435.de og johannwiebe.de.",
    providerHeading: "Opplysninger i henhold til § 5 DDG (tysk lov om digitale tjenester)",
    contactHeading: "Kontakt",
    email: "E-post: {email}",
  },

  datenschutz: {
    title: "Personvernerklæring",
    intro:
      "Denne erklæringen gjelder for nettstedene jw29435.de og johannwiebe.de. Den beskriver hvilke data som oppstår ved et besøk, og hva som skjer med dem.",
    serva:
      "Serva har sin egen personvernerklæring: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Behandlingsansvarlig",
    controllerEmail: "E-post: {email}",

    cookiesHeading: "Informasjonskapsler og analyse",
    cookies:
      "Uten ditt samtykke setter ingen av nettstedene selv informasjonskapsler, de bruker ingen analyse og ingen sporere og bygger ikke inn innhold fra tredjeparter. Skriftene leveres sammen med siden; nettleseren din kobler seg derfor ikke til Google Fonts eller andre tjenester. På jw29435.de kan du tillate Google Analytics (se nedenfor).",

    analyticsHeading: "jw29435.de: Google Analytics med samtykke",
    analytics1:
      "Hvis du klikker på «Tillat» i banneret, bruker jw29435.de Google Analytics 4, en nettanalysetjeneste fra Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Med den ser jeg i sammenfattet form hvilke sider som besøkes hvor ofte, hvor besøkene kommer fra, og med hvilke enheter og nettlesere. Før det lastes ikke Google Analytics inn.",
    analytics2:
      "Google Analytics lagrer til dette informasjonskapsler i nettleseren din («_ga» og «_ga_1F5GCWHXKX», i opptil to år) og behandler bruksdata som besøkte sider, tidspunkt, henvisende side, omtrentlig posisjon, enhet og nettleser. Google Analytics 4 lagrer ikke IP-adresser. Google Signals og personalisert reklame er slått av. Data kan da også overføres til Google LLC i USA; Google er sertifisert under EU-US Data Privacy Framework.",
    analytics3:
      "Grunnlaget er ditt samtykke (art. 6 nr. 1 bokstav a GDPR, § 25 første ledd TDDDG). Du kan når som helst trekke det tilbake med virkning for fremtiden: Klikk på «Cookie-innstillinger» nederst på siden og deretter på «Avvis». Informasjonskapslene fra Google Analytics slettes da. Selve valget ditt lagrer nettstedet i nettleserens lokale lagring («analytics-consent»), slik at banneret ikke vises ved hvert besøk; dette krever ikke samtykke (§ 25 andre ledd nr. 2 TDDDG). Mer informasjon: [Googles personvernerklæring](https://policies.google.com/privacy?hl=no).",

    hostingHeading: "jw29435.de: hosting hos GitHub Pages",
    hosting:
      "jw29435.de leveres via GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Når en side hentes, behandler GitHub teknisk nødvendige data og lagrer dem i serverlogger: IP-adressen din, dato og klokkeslett, den hentede adressen og nettleserens identifikator. Dette tjener til å levere siden og til sikkerheten. Grunnlaget er den berettigede interessen i et sikkert og tilgjengelig nettsted (art. 6 nr. 1 bokstav f GDPR). Jeg har ikke tilgang til disse loggene; hvor lenge de oppbevares, bestemmer GitHub, nemlig så lenge det er nødvendig for tjenestens sikkerhet og drift. GitHub er sertifisert under EU-US Data Privacy Framework. Mer informasjon: [GitHubs personvernerklæring](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare og egen server",
    cloudflare:
      "johannwiebe.de leveres via Cloudflares nettverk (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare videresender forespørslene til min egen server, beskytter mot angrep og behandler i den forbindelse tilkoblingsdataene. For å beskytte mot automatisert tilgang kan Cloudflare sette en teknisk nødvendig informasjonskapsel (for eksempel «__cf_bm»). Grunnlaget er den berettigede interessen i et sikkert og tilgjengelig nettsted (art. 6 nr. 1 bokstav f GDPR). Cloudflare er sertifisert under EU-US Data Privacy Framework. Mer informasjon: [Cloudflares personvernerklæring](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Serveren skriver tilgangslogger med IP-adressen din, dato og klokkeslett, den hentede adressen, den overførte datamengden, den henvisende siden og nettleserens identifikator. Dette tjener til å levere siden, til sikkerheten og til feilsøking (art. 6 nr. 1 bokstav f GDPR). Loggfilene slettes senest etter 30 dager.",

    emailHeading: "Kontakt via e-post",
    email:
      "Hvis du sender meg en e-post, behandler jeg adressen din og innholdet for å kunne svare (art. 6 nr. 1 bokstav b eller f GDPR). E-post til disse domenene videresendes via Cloudflare Email Routing til postkassen min hos Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Google lagrer meldingene i postkassen min; data kan da også overføres til USA. Google er sertifisert under EU-US Data Privacy Framework. Mer informasjon: [Googles personvernerklæring](https://policies.google.com/privacy?hl=no). Jeg sletter meldingene når de er ferdigbehandlet og det ikke finnes noen oppbevaringsplikt.",

    rightsHeading: "Dine rettigheter",
    rights:
      "Du har rett til innsyn i de lagrede dataene dine (art. 15 GDPR), til retting (art. 16), sletting (art. 17), begrensning av behandlingen (art. 18) og dataportabilitet (art. 20). Du kan protestere mot en behandling basert på art. 6 nr. 1 bokstav f GDPR (art. 21). Det er nok med en e-post til {email}.",
    complaint:
      "Du kan også klage til en tilsynsmyndighet for personvern (art. 77 GDPR). Ansvarlig er delstatsombudet for personvern og informasjonsfrihet i Nordrhein-Westfalen (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Sist oppdatert: november 2026",
  },
};

export default nb;
