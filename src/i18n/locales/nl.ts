// Nederlands. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const nl: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Kleine tools voor echte werkprocessen: Serva, Nuvo Explorer en CLR by NMBRS van Johann Wiebe.",
    },
    impressum: {
      title: "Colofon – jw29435",
      description: "Colofon van jw29435.de, het overkoepelende adres van Serva, Nuvo Explorer en CLR by NMBRS.",
    },
    datenschutz: {
      title: "Privacyverklaring – jw29435",
      description:
        "Privacyverklaring voor jw29435.de en johannwiebe.de: serverlogs en Google Analytics alleen met toestemming.",
    },
    ogImageAlt: "jw29435-logo: laptop met de letters JW op amber",
  },

  layout: {
    skipLink: "Naar de inhoud",
    homeLink: "jw29435 – startpagina",
    mainNav: "Hoofdnavigatie",
    navProducts: "Producten",
    navContact: "Contact",
    navImpressum: "Colofon",
    language: "Taal",
    footerBy: "Een product van **jw29435**",
    footerImpressum: "Colofon",
    footerDatenschutz: "Privacy",
    cookieSettings: "Cookie-instellingen",
  },

  languageHint: {
    text: "Deze pagina is ook beschikbaar in het Nederlands.",
    action: "Lezen in het Nederlands",
    dismiss: "Melding sluiten",
  },

  home: {
    eyebrow: "jw29435 · Apps en webtools",
    title: "Kleine tools voor echte werkprocessen.",
    lead: "Drie producten van Johann Wiebe: één plant kerkdiensten, één opent onderweg je eigen Synology, één maakt van foto’s sjablonen om op nummer te schilderen. Ze zien er allemaal hetzelfde uit.",
    logoAlt: "jw29435-logo: laptop met de letters JW",
    productsHeading: "Producten",
    contactHeading: "Contact",
    contactText: "Een fout gevonden of een idee voor een van de producten? Stuur me een bericht.",
    copy: "Kopiëren",
    copied: "Gekopieerd",
  },

  products: {
    statusLabel: "Status:",
    serva: {
      platform: "Web · voor kerkgemeenten",
      description:
        "Plant kerkdiensten, preekbeurten en koorliederen en herinnert predikanten via e-mail, WhatsApp of pushmelding aan hun beurt.",
      action: "Serva openen",
      status: "In gebruik",
    },
    nuvo: {
      platform: "Android · iOS gepland",
      description:
        "Bestanden op je eigen Synology doorzoeken en muziekmappen direct afspelen, in het lokale netwerk, via VPN of via HTTPS.",
      action: "Naar de Play-test",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Maakt van een foto een sjabloon voor schilderen op nummer, als je wilt alleen met de kleuren uit je eigen verfdoos.",
      action: "In de Play Store",
      status: "Beschikbaar",
    },
  },

  consent: {
    title: "Mag ik meten hoe de site wordt gebruikt?",
    text: "Met je toestemming gebruik ik Google Analytics om te zien welke pagina’s worden bekeken. Google plaatst daarbij cookies en stuurt gegevens ook door naar de VS. Je kunt je keuze op elk moment wijzigen via “Cookie-instellingen” in de footer. Meer hierover in de [privacyverklaring](page:datenschutz).",
    currentGranted: "Huidige keuze: toegestaan",
    currentDenied: "Huidige keuze: geweigerd",
    deny: "Weigeren",
    allow: "Toestaan",
  },

  legalNotice: {
    text: "Dit is een vertaling. Alleen de Duitse versie is juridisch bindend.",
    link: "Naar de Duitse versie",
  },

  impressum: {
    title: "Colofon",
    intro: "Dit colofon geldt voor de websites jw29435.de en johannwiebe.de.",
    providerHeading: "Gegevens volgens § 5 DDG (Duitse Digitale-dienstenwet)",
    contactHeading: "Contact",
    email: "E-mail: {email}",
  },

  datenschutz: {
    title: "Privacyverklaring",
    intro:
      "Deze verklaring geldt voor de websites jw29435.de en johannwiebe.de. Ze beschrijft welke gegevens bij een bezoek ontstaan en wat ermee gebeurt.",
    serva:
      "Serva heeft een eigen privacyverklaring: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Verwerkingsverantwoordelijke",
    controllerEmail: "E-mail: {email}",

    cookiesHeading: "Cookies en analyse",
    cookies:
      "Zonder je toestemming plaatsen beide websites zelf geen cookies, gebruiken ze geen analytics en geen trackers en sluiten ze geen inhoud van derden in. De lettertypen worden samen met de pagina geleverd; je browser maakt daarvoor geen verbinding met Google Fonts of andere diensten. Op jw29435.de kun je Google Analytics toestaan (zie hieronder).",

    analyticsHeading: "jw29435.de: Google Analytics met toestemming",
    analytics1:
      "Als je in de banner op “Toestaan” klikt, gebruikt jw29435.de Google Analytics 4, een webanalysedienst van Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Ierland). Daarmee zie ik in samengevatte vorm welke pagina’s hoe vaak worden bekeken, waar de bezoeken vandaan komen en met welke apparaten en browsers. Daarvoor wordt Google Analytics niet geladen.",
    analytics2:
      "Google Analytics slaat daarvoor cookies op in je browser (“_ga” en “_ga_1F5GCWHXKX”, tot twee jaar) en verwerkt gebruiksgegevens zoals bekeken pagina’s, tijdstip, referrer, globale locatie, apparaat en browser. Google Analytics 4 slaat geen IP-adressen op. Google Signals en gepersonaliseerde advertenties zijn uitgeschakeld. Daarbij kunnen gegevens ook worden doorgegeven aan Google LLC in de VS; Google is gecertificeerd onder het EU-US Data Privacy Framework.",
    analytics3:
      "De grondslag is je toestemming (art. 6 lid 1 sub a AVG, § 25 lid 1 TDDDG). Je kunt die op elk moment met ingang voor de toekomst intrekken: klik in de footer op “Cookie-instellingen” en daarna op “Weigeren”. De cookies van Google Analytics worden daarbij verwijderd. Je keuze zelf slaat de site op in de lokale opslag van je browser (“analytics-consent”), zodat de banner niet bij elk bezoek verschijnt; daarvoor is geen toestemming nodig (§ 25 lid 2 nr. 2 TDDDG). Meer informatie: [privacybeleid van Google](https://policies.google.com/privacy?hl=nl).",

    hostingHeading: "jw29435.de: hosting bij GitHub Pages",
    hosting:
      "jw29435.de wordt geleverd via GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, VS). Bij het opvragen van een pagina verwerkt GitHub technisch noodzakelijke gegevens en slaat die op in serverlogs: je IP-adres, datum en tijd, het opgevraagde adres en de browseridentificatie. Dat dient om de pagina te leveren en te beveiligen. De grondslag is het gerechtvaardigd belang bij een veilige en beschikbare website (art. 6 lid 1 sub f AVG). Ik heb geen toegang tot deze logs; hoe lang ze worden bewaard, bepaalt GitHub, namelijk zo lang als nodig is voor de beveiliging en de werking van de dienst. GitHub is gecertificeerd onder het EU-US Data Privacy Framework. Meer informatie: [privacyverklaring van GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare en eigen server",
    cloudflare:
      "johannwiebe.de wordt geleverd via het netwerk van Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, VS). Cloudflare stuurt de verzoeken door naar mijn eigen server, beschermt tegen aanvallen en verwerkt daarbij de verbindingsgegevens. Ter bescherming tegen geautomatiseerde toegang kan Cloudflare een technisch noodzakelijke cookie plaatsen (bijvoorbeeld “__cf_bm”). De grondslag is het gerechtvaardigd belang bij een veilige en beschikbare website (art. 6 lid 1 sub f AVG). Cloudflare is gecertificeerd onder het EU-US Data Privacy Framework. Meer informatie: [privacybeleid van Cloudflare](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "De server schrijft toegangslogs met je IP-adres, datum en tijd, het opgevraagde adres, de overgedragen hoeveelheid gegevens, de referrer en de browseridentificatie. Dat dient om de pagina te leveren, voor de beveiliging en voor het opsporen van fouten (art. 6 lid 1 sub f AVG). De logbestanden worden uiterlijk na 30 dagen verwijderd.",

    emailHeading: "Contact per e-mail",
    email:
      "Als je me een e-mail stuurt, verwerk ik je adres en de inhoud om te antwoorden (art. 6 lid 1 sub b resp. f AVG). E-mails aan deze domeinen worden via Cloudflare Email Routing doorgestuurd naar mijn mailbox bij Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ierland). Google slaat de berichten op in mijn mailbox; daarbij kunnen gegevens ook naar de VS worden doorgegeven. Google is gecertificeerd onder het EU-US Data Privacy Framework. Meer informatie: [privacybeleid van Google](https://policies.google.com/privacy?hl=nl). Ik verwijder de berichten zodra ze zijn afgehandeld en er geen bewaarplicht bestaat.",

    rightsHeading: "Je rechten",
    rights:
      "Je hebt het recht op inzage in je opgeslagen gegevens (art. 15 AVG), op rectificatie (art. 16), wissing (art. 17), beperking van de verwerking (art. 18) en overdraagbaarheid van gegevens (art. 20). Tegen een verwerking op grond van art. 6 lid 1 sub f AVG kun je bezwaar maken (art. 21). Een e-mail aan {email} volstaat.",
    complaint:
      "Daarnaast kun je een klacht indienen bij een toezichthoudende autoriteit voor gegevensbescherming (art. 77 AVG). Bevoegd is de Gemachtigde voor gegevensbescherming en vrijheid van informatie van Noordrijn-Westfalen (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Laatst bijgewerkt: november 2026",
  },
};

export default nl;
