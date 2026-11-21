// Dansk. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const da: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Små værktøjer til virkelige arbejdsgange: Serva, Nuvo Explorer og CLR by NMBRS af Johann Wiebe.",
    },
    impressum: {
      title: "Juridisk information – jw29435",
      description: "Juridisk information for jw29435.de, paraplyen for Serva, Nuvo Explorer og CLR by NMBRS.",
    },
    datenschutz: {
      title: "Privatlivspolitik – jw29435",
      description:
        "Privatlivspolitik for jw29435.de og johannwiebe.de: serverlogs og Google Analytics kun med samtykke.",
    },
    ogImageAlt: "jw29435-logo: bærbar computer med bogstaverne JW på rav",
  },

  layout: {
    skipLink: "Gå til indhold",
    homeLink: "jw29435 – forside",
    mainNav: "Hovednavigation",
    navProducts: "Produkter",
    navContact: "Kontakt",
    navImpressum: "Juridisk info",
    language: "Sprog",
    footerBy: "Et produkt fra **jw29435**",
    footerImpressum: "Juridisk info",
    footerDatenschutz: "Privatliv",
    cookieSettings: "Cookieindstillinger",
  },

  languageHint: {
    text: "Denne side findes også på dansk.",
    action: "Læs på dansk",
    dismiss: "Luk meddelelsen",
  },

  home: {
    eyebrow: "jw29435 · Apps og webværktøjer",
    title: "Små værktøjer til virkelige arbejdsgange.",
    lead: "Tre produkter fra Johann Wiebe: ét planlægger gudstjenester, ét åbner din egen Synology, når du er på farten, og ét laver mal efter tal-skabeloner ud fra fotos. De ser alle ens ud.",
    logoAlt: "jw29435-logo: bærbar computer med bogstaverne JW",
    productsHeading: "Produkter",
    contactHeading: "Kontakt",
    contactText: "Har du fundet en fejl eller fået en idé til et af produkterne? Skriv til mig.",
    copy: "Kopiér",
    copied: "Kopieret",
  },

  products: {
    statusLabel: "Status:",
    serva: {
      platform: "Web · til menigheder",
      description:
        "Planlægger gudstjenester, prædiketjenester og korsange og minder prædikanter om deres tjeneste via e-mail, WhatsApp eller push.",
      action: "Åbn Serva",
      status: "I brug",
    },
    nuvo: {
      platform: "Android · iOS planlagt",
      description:
        "Gennemse filerne på din egen Synology og afspil musikmapper direkte, på det lokale netværk, via VPN eller over HTTPS.",
      action: "Til Play-testen",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Gør et foto til en mal efter tal-skabelon, hvis du vil kun med de farver, der er i din farvelade.",
      action: "I Play Butik",
      status: "Tilgængelig",
    },
  },

  consent: {
    title: "Må jeg måle, hvordan siden bruges?",
    text: "Med dit samtykke bruger jeg Google Analytics til at se, hvilke sider der besøges. Google sætter i den forbindelse cookies og overfører også data til USA. Du kan når som helst ændre dit valg via „Cookieindstillinger“ i sidefoden. Læs mere i [privatlivspolitikken](page:datenschutz).",
    currentGranted: "Aktuelt: tilladt",
    currentDenied: "Aktuelt: afvist",
    deny: "Afvis",
    allow: "Tillad",
  },

  legalNotice: {
    text: "Dette er en oversættelse. Kun den tyske version er juridisk bindende.",
    link: "Til den tyske version",
  },

  impressum: {
    title: "Juridisk information",
    intro: "Denne juridiske information gælder for websitene jw29435.de og johannwiebe.de.",
    providerHeading: "Oplysninger i henhold til § 5 DDG (den tyske lov om digitale tjenester)",
    contactHeading: "Kontakt",
    email: "E-mail: {email}",
  },

  datenschutz: {
    title: "Privatlivspolitik",
    intro:
      "Denne erklæring gælder for websitene jw29435.de og johannwiebe.de. Den beskriver, hvilke data der opstår ved et besøg, og hvad der sker med dem.",
    serva:
      "Serva har sin egen privatlivspolitik: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Dataansvarlig",
    controllerEmail: "E-mail: {email}",

    cookiesHeading: "Cookies og analyse",
    cookies:
      "Uden dit samtykke sætter ingen af de to websites selv cookies, de bruger hverken analyseværktøjer eller trackere og indlejrer ikke indhold fra tredjeparter. Skrifttyperne leveres sammen med siden; din browser opretter derfor ingen forbindelse til Google Fonts eller andre tjenester. På jw29435.de kan du tillade Google Analytics (se nedenfor).",

    analyticsHeading: "jw29435.de: Google Analytics med samtykke",
    analytics1:
      "Hvis du klikker på „Tillad“ i banneret, bruger jw29435.de Google Analytics 4, en webanalysetjeneste fra Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Dermed kan jeg i samlet form se, hvilke sider der besøges hvor ofte, hvor besøgene kommer fra, og med hvilke enheder og browsere. Inden da indlæses Google Analytics ikke.",
    analytics2:
      "Google Analytics gemmer hertil cookies i din browser („_ga“ og „_ga_1F5GCWHXKX“, i op til to år) og behandler brugsdata som besøgte sider, tidspunkt, henvisende side, omtrentlig placering, enhed og browser. Google Analytics 4 gemmer ikke IP-adresser. Google Signals og personaliseret annoncering er slået fra. I den forbindelse kan data også blive overført til Google LLC i USA; Google er certificeret under EU-US Data Privacy Framework.",
    analytics3:
      "Grundlaget er dit samtykke (art. 6, stk. 1, litra a, i GDPR, § 25, stk. 1, i TDDDG). Du kan når som helst tilbagekalde det med virkning for fremtiden: Klik på „Cookieindstillinger“ i sidefoden og derefter på „Afvis“. Cookies fra Google Analytics slettes i den forbindelse. Selve dit valg gemmer siden i din browsers lokale lager („analytics-consent“), så banneret ikke vises ved hvert besøg; det kræver ikke samtykke (§ 25, stk. 2, nr. 2, i TDDDG). Yderligere oplysninger: [Googles privatlivspolitik](https://policies.google.com/privacy?hl=da).",

    hostingHeading: "jw29435.de: hosting hos GitHub Pages",
    hosting:
      "jw29435.de leveres via GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Når en side hentes, behandler GitHub teknisk nødvendige data og gemmer dem i serverlogs: din IP-adresse, dato og klokkeslæt, den hentede adresse og browserens identifikation. Det tjener til at levere siden og til dens sikkerhed. Grundlaget er den legitime interesse i et sikkert og tilgængeligt website (art. 6, stk. 1, litra f, i GDPR). Jeg har ikke adgang til disse logs; hvor længe de opbevares, fastlægger GitHub, nemlig så længe det er nødvendigt for tjenestens sikkerhed og drift. GitHub er certificeret under EU-US Data Privacy Framework. Yderligere oplysninger: [GitHubs privatlivserklæring](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare og egen server",
    cloudflare:
      "johannwiebe.de leveres via Cloudflares netværk (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare videresender forespørgslerne til min egen server, beskytter mod angreb og behandler i den forbindelse forbindelsesdataene. For at beskytte mod automatiseret adgang kan Cloudflare sætte en teknisk nødvendig cookie (for eksempel „__cf_bm“). Grundlaget er den legitime interesse i et sikkert og tilgængeligt website (art. 6, stk. 1, litra f, i GDPR). Cloudflare er certificeret under EU-US Data Privacy Framework. Yderligere oplysninger: [Cloudflares privatlivspolitik](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Serveren skriver adgangslogs med din IP-adresse, dato og klokkeslæt, den hentede adresse, den overførte datamængde, den henvisende side og browserens identifikation. Det tjener til at levere siden, til sikkerhed og til fejlfinding (art. 6, stk. 1, litra f, i GDPR). Logfilerne slettes senest efter 30 dage.",

    emailHeading: "Kontakt via e-mail",
    email:
      "Hvis du skriver en e-mail til mig, behandler jeg din adresse og indholdet for at kunne svare (art. 6, stk. 1, litra b eller f, i GDPR). E-mails til disse domæner videresendes via Cloudflare Email Routing til min postkasse hos Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Google gemmer beskederne i min postkasse; i den forbindelse kan data også blive overført til USA. Google er certificeret under EU-US Data Privacy Framework. Yderligere oplysninger: [Googles privatlivspolitik](https://policies.google.com/privacy?hl=da). Jeg sletter beskederne, når de er færdigbehandlede, og der ikke er pligt til at opbevare dem.",

    rightsHeading: "Dine rettigheder",
    rights:
      "Du har ret til indsigt i dine gemte data (art. 15 i GDPR), til berigtigelse (art. 16), sletning (art. 17), begrænsning af behandlingen (art. 18) og dataportabilitet (art. 20). Du kan gøre indsigelse mod en behandling på grundlag af art. 6, stk. 1, litra f, i GDPR (art. 21). En e-mail til {email} er nok.",
    complaint:
      "Du kan desuden klage til en tilsynsmyndighed for databeskyttelse (art. 77 i GDPR). Den kompetente myndighed er delstaten Nordrhein-Westfalens kommissær for databeskyttelse og informationsfrihed (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Senest opdateret: november 2026",
  },
};

export default da;
