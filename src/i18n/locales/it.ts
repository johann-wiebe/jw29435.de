// Italiano. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const it: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Piccoli strumenti per attività reali: Serva, Nuvo Explorer e CLR by NMBRS di Johann Wiebe.",
    },
    impressum: {
      title: "Note legali – jw29435",
      description: "Note legali di jw29435.de, il sito che riunisce Serva, Nuvo Explorer e CLR by NMBRS.",
    },
    datenschutz: {
      title: "Privacy – jw29435",
      description:
        "Informativa sulla privacy di jw29435.de e johannwiebe.de: log del server e Google Analytics solo con consenso.",
    },
    ogImageAlt: "Logo jw29435: portatile con le lettere JW su sfondo ambra",
  },

  layout: {
    skipLink: "Vai al contenuto",
    homeLink: "jw29435 – pagina iniziale",
    mainNav: "Navigazione principale",
    navProducts: "Prodotti",
    navContact: "Contatti",
    navImpressum: "Note legali",
    language: "Lingua",
    footerBy: "Un prodotto di **jw29435**",
    footerImpressum: "Note legali",
    footerDatenschutz: "Privacy",
    cookieSettings: "Impostazioni cookie",
  },

  languageHint: {
    text: "Questa pagina è disponibile anche in italiano.",
    action: "Leggi in italiano",
    dismiss: "Chiudi avviso",
  },

  home: {
    eyebrow: "jw29435 · App e strumenti web",
    title: "Piccoli strumenti per attività reali.",
    lead: "Tre prodotti di Johann Wiebe: uno pianifica i culti, uno apre il tuo Synology quando sei fuori casa, uno trasforma le foto in modelli da dipingere con i numeri. Tutti e tre hanno lo stesso aspetto.",
    logoAlt: "Logo jw29435: portatile con le lettere JW",
    productsHeading: "Prodotti",
    contactHeading: "Contatti",
    contactText: "Hai trovato un errore o hai un’idea per uno dei prodotti? Scrivimi.",
    copy: "Copia",
    copied: "Copiato",
  },

  products: {
    statusLabel: "Stato:",
    serva: {
      platform: "Web · per le chiese",
      description:
        "Pianifica culti, turni di predicazione e canti del coro e ricorda ai predicatori il loro turno via email, WhatsApp o notifica push.",
      action: "Apri Serva",
      status: "In uso",
    },
    nuvo: {
      platform: "Android · iOS in arrivo",
      description:
        "Sfoglia i file sul tuo Synology e riproduci direttamente le cartelle di musica, in LAN, tramite VPN o via HTTPS.",
      action: "Al test su Play",
      status: "Alpha",
    },
    clr: {
      platform: "Android",
      description:
        "Trasforma una foto in un modello da dipingere con i numeri, se vuoi solo con i colori della tua scatola di colori.",
      action: "Su Google Play",
      status: "Disponibile",
    },
  },

  consent: {
    title: "Posso misurare come viene usato il sito?",
    text: "Con il tuo consenso uso Google Analytics per vedere quali pagine vengono visitate. Google imposta dei cookie e trasferisce dati anche negli USA. Puoi modificare la tua scelta in qualsiasi momento tramite «Impostazioni cookie» nel piè di pagina. Maggiori informazioni nell’[informativa sulla privacy](page:datenschutz).",
    currentGranted: "Attualmente: consentito",
    currentDenied: "Attualmente: rifiutato",
    deny: "Rifiuta",
    allow: "Consenti",
  },

  legalNotice: {
    text: "Questa è una traduzione. Fa fede esclusivamente la versione tedesca.",
    link: "Alla versione tedesca",
  },

  impressum: {
    title: "Note legali",
    intro: "Queste note legali valgono per i siti web jw29435.de e johannwiebe.de.",
    providerHeading: "Informazioni ai sensi del § 5 DDG (legge tedesca sui servizi digitali)",
    contactHeading: "Contatti",
    email: "Email: {email}",
  },

  datenschutz: {
    title: "Informativa sulla privacy",
    intro:
      "Questa informativa vale per i siti web jw29435.de e johannwiebe.de. Descrive quali dati vengono generati durante la visita e cosa ne viene fatto.",
    serva:
      "Serva ha una propria informativa sulla privacy: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Titolare del trattamento",
    controllerEmail: "Email: {email}",

    cookiesHeading: "Cookie e analisi",
    cookies:
      "Senza il tuo consenso, nessuno dei due siti imposta cookie propri, usa strumenti di analisi o tracker, né incorpora contenuti di terzi. I caratteri vengono forniti insieme alla pagina; il tuo browser non si collega per questo a Google Fonts o ad altri servizi. Su jw29435.de puoi consentire Google Analytics (vedi sotto).",

    analyticsHeading: "jw29435.de: Google Analytics con consenso",
    analytics1:
      "Se nel banner fai clic su «Consenti», jw29435.de utilizza Google Analytics 4, un servizio di analisi web di Google Ireland Limited (Gordon House, Barrow Street, Dublino 4, Irlanda). In questo modo vedo in forma aggregata quali pagine vengono visitate e con quale frequenza, da dove provengono le visite e con quali dispositivi e browser. Prima di allora Google Analytics non viene caricato.",
    analytics2:
      "A tal fine Google Analytics memorizza cookie nel tuo browser («_ga» e «_ga_1F5GCWHXKX», fino a due anni) e tratta dati di utilizzo come le pagine visitate, l’orario, il referrer, la posizione approssimativa, il dispositivo e il browser. Google Analytics 4 non memorizza indirizzi IP. Google Signals e la pubblicità personalizzata sono disattivati. I dati possono essere trasferiti anche a Google LLC negli USA; Google è certificata ai sensi dell’EU-US Data Privacy Framework.",
    analytics3:
      "La base giuridica è il tuo consenso (art. 6, paragrafo 1, lettera a), del RGPD, § 25, comma 1, TDDDG). Puoi revocarlo in qualsiasi momento con effetto per il futuro: fai clic su «Impostazioni cookie» nel piè di pagina e poi su «Rifiuta». I cookie di Google Analytics vengono così eliminati. Il sito memorizza la tua scelta nello spazio di archiviazione locale del tuo browser («analytics-consent»), in modo che il banner non compaia a ogni visita; per questo non è necessario alcun consenso (§ 25, comma 2, n. 2, TDDDG). Ulteriori informazioni: [Informativa sulla privacy di Google](https://policies.google.com/privacy?hl=it).",

    hostingHeading: "jw29435.de: hosting su GitHub Pages",
    hosting:
      "jw29435.de viene fornito tramite GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Quando viene richiamata una pagina, GitHub tratta dati tecnicamente necessari e li memorizza nei log del server: il tuo indirizzo IP, data e ora, l’indirizzo richiamato e l’identificativo del browser. Ciò serve alla fornitura della pagina e alla sua sicurezza. La base giuridica è il legittimo interesse a un sito web sicuro e disponibile (art. 6, paragrafo 1, lettera f), del RGPD). Non ho accesso a questi log; per quanto tempo vengono conservati lo stabilisce GitHub, ossia per il tempo necessario alla sicurezza e al funzionamento del servizio. GitHub è certificata ai sensi dell’EU-US Data Privacy Framework. Ulteriori informazioni: [Informativa sulla privacy di GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare e server proprio",
    cloudflare:
      "johannwiebe.de viene fornito tramite la rete di Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare inoltra le richieste al mio server, protegge dagli attacchi e a tal fine tratta i dati di connessione. Per proteggersi dagli accessi automatizzati, Cloudflare può impostare un cookie tecnicamente necessario (ad esempio «__cf_bm»). La base giuridica è il legittimo interesse a un sito web sicuro e disponibile (art. 6, paragrafo 1, lettera f), del RGPD). Cloudflare è certificata ai sensi dell’EU-US Data Privacy Framework. Ulteriori informazioni: [Informativa sulla privacy di Cloudflare](https://www.cloudflare.com/it-it/privacypolicy/).",
    serverLogs:
      "Il server scrive log di accesso con il tuo indirizzo IP, data e ora, l’indirizzo richiamato, la quantità di dati trasferiti, il referrer e l’identificativo del browser. Ciò serve alla fornitura della pagina, alla sicurezza e alla ricerca degli errori (art. 6, paragrafo 1, lettera f), del RGPD). I file di log vengono eliminati al più tardi dopo 30 giorni.",

    emailHeading: "Contatto via email",
    email:
      "Se mi scrivi un’email, tratto il tuo indirizzo e il contenuto per risponderti (art. 6, paragrafo 1, lettera b) o f), del RGPD). Le email inviate a questi domini vengono inoltrate tramite Cloudflare Email Routing alla mia casella Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublino 4, Irlanda). Google conserva i messaggi nella mia casella; i dati possono essere trasferiti anche negli USA. Google è certificata ai sensi dell’EU-US Data Privacy Framework. Ulteriori informazioni: [Informativa sulla privacy di Google](https://policies.google.com/privacy?hl=it). Elimino i messaggi quando sono stati evasi e non sussiste alcun obbligo di conservazione.",

    rightsHeading: "I tuoi diritti",
    rights:
      "Hai diritto di accesso ai tuoi dati memorizzati (art. 15 del RGPD), di rettifica (art. 16), di cancellazione (art. 17), di limitazione del trattamento (art. 18) e alla portabilità dei dati (art. 20). Puoi opporti a un trattamento basato sull’art. 6, paragrafo 1, lettera f), del RGPD (art. 21). È sufficiente un’email a {email}.",
    complaint:
      "Puoi inoltre proporre reclamo a un’autorità di controllo per la protezione dei dati (art. 77 del RGPD). È competente la Commissaria per la protezione dei dati e la libertà d’informazione della Renania Settentrionale-Vestfalia (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Aggiornamento: novembre 2026",
  },
};

export default it;
