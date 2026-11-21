// Eesti. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const et: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Väikesed tööriistad päris tööülesanneteks: Serva, Nuvo Explorer ja CLR by NMBRS, autor Johann Wiebe.",
    },
    impressum: {
      title: "Õigusteave – jw29435",
      description: "Saidi jw29435.de õigusteave. jw29435 on Serva, Nuvo Exploreri ja CLR by NMBRS-i kodu.",
    },
    datenschutz: {
      title: "Privaatsus – jw29435",
      description:
        "Saitide jw29435.de ja johannwiebe.de privaatsuspoliitika: serverilogid ja Google Analytics ainult nõusolekul.",
    },
    ogImageAlt: "jw29435 logo: sülearvuti tähtedega JW merevaigukollasel taustal",
  },

  layout: {
    skipLink: "Mine sisu juurde",
    homeLink: "jw29435 – avaleht",
    mainNav: "Peamenüü",
    navProducts: "Tooted",
    navContact: "Kontakt",
    navImpressum: "Õigusteave",
    language: "Keel",
    footerBy: "**jw29435** toode",
    footerImpressum: "Õigusteave",
    footerDatenschutz: "Privaatsus",
    cookieSettings: "Küpsiste seaded",
  },

  languageHint: {
    text: "See leht on saadaval ka eesti keeles.",
    action: "Loe eesti keeles",
    dismiss: "Sulge teade",
  },

  home: {
    eyebrow: "jw29435 · Rakendused ja veebitööriistad",
    title: "Väikesed tööriistad päris tööülesanneteks.",
    lead: "Kolm Johann Wiebe toodet: üks planeerib jumalateenistusi, üks avab teel olles sinu oma Synology, üks teeb fotodest numbrite järgi värvimise malle. Kõik näevad välja ühtemoodi.",
    logoAlt: "jw29435 logo: sülearvuti tähtedega JW",
    productsHeading: "Tooted",
    contactHeading: "Kontakt",
    contactText: "Leidsid vea või on sul mõne toote jaoks idee? Kirjuta mulle.",
    copy: "Kopeeri",
    copied: "Kopeeritud",
  },

  products: {
    statusLabel: "Olek:",
    serva: {
      platform: "Veeb · kogudustele",
      description:
        "Planeerib jumalateenistusi, jutlustajate graafikuid ja koorilaule ning tuletab jutlustajatele nende aega meelde e-posti, WhatsAppi või tõuketeatega.",
      action: "Ava Serva",
      status: "Kasutusel",
    },
    nuvo: {
      platform: "Android · iOS plaanis",
      description:
        "Sirvi oma Synology faile ja esita muusikakaustu otse, kohtvõrgus, VPN-i kaudu või HTTPS-i abil.",
      action: "Play testi",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Teeb fotost numbrite järgi värvimise malli, soovi korral ainult nende värvidega, mis sinu värvikarbis on.",
      action: "Google Plays",
      status: "Saadaval",
    },
  },

  consent: {
    title: "Kas ma võin mõõta, kuidas saiti kasutatakse?",
    text: "Sinu nõusolekul kasutan Google Analyticsit, et näha, milliseid lehti avatakse. Google paneb seejuures küpsiseid ja edastab andmeid ka USA-sse. Saad oma valikut igal ajal muuta jaluses lingiga „Küpsiste seaded“. Lisateave on [privaatsuspoliitikas](page:datenschutz).",
    currentGranted: "Praegu: lubatud",
    currentDenied: "Praegu: keelatud",
    deny: "Keela",
    allow: "Luba",
  },

  legalNotice: {
    text: "See on tõlge. Õiguslikult siduv on ainult saksakeelne versioon.",
    link: "Saksakeelsesse versiooni",
  },

  impressum: {
    title: "Õigusteave",
    intro: "See õigusteave kehtib veebisaitidele jw29435.de ja johannwiebe.de.",
    providerHeading: "Andmed vastavalt DDG (Saksa digiteenuste seadus) §-le 5",
    contactHeading: "Kontakt",
    email: "E-post: {email}",
  },

  datenschutz: {
    title: "Privaatsuspoliitika",
    intro:
      "See poliitika kehtib veebisaitidele jw29435.de ja johannwiebe.de. Siin kirjeldatakse, milliseid andmeid külastuse ajal tekib ja mis nendega juhtub.",
    serva:
      "Serval on oma privaatsuspoliitika: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Vastutav töötleja",
    controllerEmail: "E-post: {email}",

    cookiesHeading: "Küpsised ja analüüs",
    cookies:
      "Ilma sinu nõusolekuta ei pane kumbki sait ise küpsiseid, ei kasuta analüütikat ega jälgijaid ega manusta kolmandate osapoolte sisu. Fondid edastatakse koos lehega; sinu brauser ei loo selleks ühendust Google Fontsi ega muude teenustega. Saidil jw29435.de saad Google Analyticsi lubada (vt allpool).",

    analyticsHeading: "jw29435.de: Google Analytics nõusolekul",
    analytics1:
      "Kui klõpsad bänneril „Luba“, kasutab jw29435.de teenust Google Analytics 4, mis on Google Ireland Limitedi (Gordon House, Barrow Street, Dublin 4, Iirimaa) veebianalüüsi teenus. Selle abil näen koondkujul, milliseid lehti kui sageli avatakse, kust külastused tulevad ning milliste seadmete ja brauseritega. Enne seda Google Analyticsit ei laadita.",
    analytics2:
      "Google Analytics salvestab selleks sinu brauserisse küpsiseid („_ga“ ja „_ga_1F5GCWHXKX“, kuni kaks aastat) ja töötleb kasutusandmeid, nagu avatud lehed, aeg, viitaja, ligikaudne asukoht, seade ja brauser. Google Analytics 4 ei salvesta IP-aadresse. Google Signals ja isikustatud reklaam on välja lülitatud. Seejuures võidakse andmeid edastada ka Google LLC-le USA-s; Google on sertifitseeritud EU-US Data Privacy Frameworki alusel.",
    analytics3:
      "Aluseks on sinu nõusolek (isikuandmete kaitse üldmääruse (IKÜM) art 6 lg 1 p a, TDDDG ehk Saksa telekommunikatsiooni ja digiteenuste andmekaitse seaduse § 25 lg 1). Saad selle igal ajal edaspidiseks tagasi võtta: klõpsa jaluses „Küpsiste seaded“ ja seejärel „Keela“. Google Analyticsi küpsised kustutatakse seejuures. Sinu valiku enda salvestab sait sinu brauseri kohalikku salvestusruumi („analytics-consent“), et bänner ei ilmuks igal külastusel; selleks pole nõusolekut vaja (TDDDG § 25 lg 2 p 2). Lisateave: [Google’i privaatsuspoliitika](https://policies.google.com/privacy?hl=et).",

    hostingHeading: "jw29435.de: majutus GitHub Pagesis",
    hosting:
      "jw29435.de edastatakse GitHub Pagesi kaudu (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Lehe avamisel töötleb GitHub tehniliselt vajalikke andmeid ja salvestab need serverilogidesse: sinu IP-aadressi, kuupäeva ja kellaaja, avatud aadressi ning brauseri identifikaatori. See teenib lehe edastamist ja selle turvalisust. Aluseks on õigustatud huvi turvalise ja kättesaadava veebisaidi vastu (IKÜM art 6 lg 1 p f). Mul puudub juurdepääs nendele logidele; nende säilitamise aja määrab GitHub, ja nimelt nii kaua, kui see on teenuse turvalisuse ja toimimise jaoks vajalik. GitHub on sertifitseeritud EU-US Data Privacy Frameworki alusel. Lisateave: [GitHubi privaatsusteatis](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare ja oma server",
    cloudflare:
      "johannwiebe.de edastatakse Cloudflare’i võrgu kaudu (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare suunab päringud edasi minu oma serverisse, kaitseb rünnakute eest ja töötleb seejuures ühenduse andmeid. Automatiseeritud juurdepääsu eest kaitsmiseks võib Cloudflare panna tehniliselt vajaliku küpsise (näiteks „__cf_bm“). Aluseks on õigustatud huvi turvalise ja kättesaadava veebisaidi vastu (IKÜM art 6 lg 1 p f). Cloudflare on sertifitseeritud EU-US Data Privacy Frameworki alusel. Lisateave: [Cloudflare’i privaatsuspoliitika](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Server kirjutab juurdepääsulogisid, milles on sinu IP-aadress, kuupäev ja kellaaeg, avatud aadress, edastatud andmete hulk, viitaja ja brauseri identifikaator. See teenib lehe edastamist, turvalisust ja vigade otsimist (IKÜM art 6 lg 1 p f). Logifailid kustutatakse hiljemalt 30 päeva pärast.",

    emailHeading: "Kontakt e-posti teel",
    email:
      "Kui kirjutad mulle e-kirja, töötlen sinu aadressi ja sisu, et vastata (IKÜM art 6 lg 1 p b või f). Nende domeenide e-kirjad suunatakse Cloudflare Email Routingu kaudu edasi minu Gmaili postkasti (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Iirimaa). Google salvestab kirjad minu postkasti; seejuures võidakse andmeid edastada ka USA-sse. Google on sertifitseeritud EU-US Data Privacy Frameworki alusel. Lisateave: [Google’i privaatsuspoliitika](https://policies.google.com/privacy?hl=et). Kustutan kirjad, kui need on lahendatud ja säilitamiskohustust ei ole.",

    rightsHeading: "Sinu õigused",
    rights:
      "Sul on õigus saada teavet oma salvestatud andmete kohta (IKÜM art 15) ning õigus nende parandamisele (art 16), kustutamisele (art 17), töötlemise piiramisele (art 18) ja andmete ülekandmisele (art 20). IKÜM art 6 lg 1 p f alusel toimuvale töötlemisele võid esitada vastuväite (art 21). Piisab e-kirjast aadressile {email}.",
    complaint:
      "Lisaks võid esitada kaebuse andmekaitse järelevalveasutusele (IKÜM art 77). Pädev on Nordrhein-Westfaleni liidumaa andmekaitse ja teabevabaduse volinik (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Seisuga: november 2026",
  },
};

export default et;
