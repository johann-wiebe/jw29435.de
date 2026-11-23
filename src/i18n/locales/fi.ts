// Suomi. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const fi: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Pieniä työkaluja oikeisiin tarpeisiin: Serva, Nuvo Explorer ja CLR by NMBRS, tekijänä Johann Wiebe.",
    },
    impressum: {
      title: "Julkaisijatiedot – jw29435",
      description: "Sivuston jw29435.de julkaisijatiedot. jw29435 on Servan, Nuvo Explorerin ja CLR by NMBRSin koti.",
    },
    datenschutz: {
      title: "Tietosuoja – jw29435",
      description:
        "Sivustojen jw29435.de ja johannwiebe.de tietosuojaseloste: palvelinlokit ja Google Analytics vain suostumuksella.",
    },
    ogImageAlt: "jw29435-logo: kannettava tietokone, jossa kirjaimet JW",
  },

  layout: {
    skipLink: "Siirry sisältöön",
    homeLink: "jw29435 – etusivu",
    mainNav: "Päävalikko",
    navProducts: "Tuotteet",
    navContact: "Yhteystiedot",
    navImpressum: "Julkaisijatiedot",
    language: "Kieli",
    footerBy: "Tuotteen tekijä: **jw29435**",
    footerImpressum: "Julkaisijatiedot",
    footerDatenschutz: "Tietosuoja",
    cookieSettings: "Evästeasetukset",
  },

  languageHint: {
    text: "Tämä sivu on saatavilla myös suomeksi.",
    action: "Lue suomeksi",
    dismiss: "Sulje ilmoitus",
  },

  home: {
    eyebrow: "jw29435 · Sovelluksia ja verkkotyökaluja",
    title: "Pieniä työkaluja oikeisiin tarpeisiin.",
    lead: "Kolme Johann Wieben tuotetta: yksi suunnittelee jumalanpalveluksia, yksi avaa oman Synologyn liikkeellä ollessa, yksi tekee kuvista numeromaalauspohjia. Kaikki näyttävät samalta.",
    logoAlt: "jw29435-logo: kannettava tietokone, jossa kirjaimet JW",
    productsHeading: "Tuotteet",
    contactHeading: "Yhteystiedot",
    contactText: "Löysitkö virheen tai onko sinulla idea jollekin tuotteelle? Kirjoita minulle.",
    copy: "Kopioi",
    copied: "Kopioitu",
  },

  products: {
    statusLabel: "Tila:",
    serva: {
      platform: "Verkko · seurakunnille",
      description:
        "Suunnittelee jumalanpalvelukset, saarnavuorot ja kuorolaulut ja muistuttaa saarnaajia vuorostaan sähköpostilla, WhatsAppilla tai push-ilmoituksella.",
      action: "Avaa Serva",
      status: "Käytössä",
    },
    nuvo: {
      platform: "Android · iOS tulossa",
      description:
        "Selaa oman Synologysi tiedostoja ja toista musiikkikansioita suoraan lähiverkossa, VPN:n kautta tai HTTPS:llä.",
      action: "Play-testiin",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Tekee kuvasta numeromaalauspohjan, halutessasi vain niillä väreillä, jotka vesivärirasiastasi löytyvät.",
      action: "Google Playssa",
      status: "Saatavilla",
    },
  },

  consent: {
    title: "Saanko mitata, miten sivustoa käytetään?",
    text: "Suostumuksellasi käytän Google Analyticsia nähdäkseni, mitä sivuja avataan. Google asettaa tällöin evästeitä ja siirtää tietoja myös Yhdysvaltoihin. Voit muuttaa valintaasi milloin tahansa alatunnisteen kohdasta ”Evästeasetukset”. Lisää [tietosuojaselosteessa](page:datenschutz).",
    currentGranted: "Nyt: sallittu",
    currentDenied: "Nyt: estetty",
    deny: "Estä",
    allow: "Salli",
  },

  legalNotice: {
    text: "Tämä on käännös. Oikeudellisesti sitova on ainoastaan saksankielinen versio.",
    link: "Saksankieliseen versioon",
  },

  impressum: {
    title: "Julkaisijatiedot",
    intro: "Nämä julkaisijatiedot koskevat sivustoja jw29435.de ja johannwiebe.de.",
    providerHeading: "Tiedot DDG:n (Saksan digipalvelulaki) 5 §:n mukaisesti",
    contactHeading: "Yhteystiedot",
    email: "Sähköposti: {email}",
  },

  datenschutz: {
    title: "Tietosuojaseloste",
    intro:
      "Tämä seloste koskee sivustoja jw29435.de ja johannwiebe.de. Siinä kerrotaan, mitä tietoja vierailun yhteydessä syntyy ja mitä niille tapahtuu.",
    serva:
      "Servalla on oma tietosuojaselosteensa: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Rekisterinpitäjä",
    controllerEmail: "Sähköposti: {email}",

    cookiesHeading: "Evästeet ja analytiikka",
    cookies:
      "Ilman suostumustasi kumpikaan sivusto ei itse aseta evästeitä, käytä analytiikkaa tai seurantatyökaluja eikä upota kolmansien osapuolten sisältöä. Fontit toimitetaan sivun mukana; selaimesi ei sen vuoksi ota yhteyttä Google Fontsiin tai muihin palveluihin. Sivustolla jw29435.de voit sallia Google Analyticsin (katso alla).",

    analyticsHeading: "jw29435.de: Google Analytics suostumuksella",
    analytics1:
      "Jos napsautat bannerissa ”Salli”, jw29435.de käyttää Google Analytics 4:ää, joka on Google Ireland Limitedin (Gordon House, Barrow Street, Dublin 4, Irlanti) verkkoanalytiikkapalvelu. Sen avulla näen yhteenvetona, mitä sivuja avataan ja kuinka usein, mistä vierailut tulevat ja millä laitteilla ja selaimilla. Sitä ennen Google Analyticsia ei ladata.",
    analytics2:
      "Google Analytics tallentaa tätä varten evästeitä selaimeesi (”_ga” ja ”_ga_1F5GCWHXKX”, enintään kahdeksi vuodeksi) ja käsittelee käyttötietoja, kuten avatut sivut, ajankohdan, viittaavan sivun, likimääräisen sijainnin, laitteen ja selaimen. Google Analytics 4 ei tallenna IP-osoitteita. Google Signals ja henkilökohtainen mainonta on poistettu käytöstä. Tällöin tietoja voidaan siirtää myös Google LLC:lle Yhdysvaltoihin; Google on sertifioitu EU-US Data Privacy Framework -järjestelyn mukaisesti.",
    analytics3:
      "Oikeusperuste on suostumuksesi (EU:n yleisen tietosuoja-asetuksen (GDPR) 6 artiklan 1 kohdan a alakohta, TDDDG:n eli Saksan telekommunikaatio- ja digipalvelujen tietosuojalain 25 §:n 1 momentti). Voit peruuttaa sen milloin tahansa tulevaisuuden osalta: napsauta alatunnisteessa ”Evästeasetukset” ja sitten ”Estä”. Google Analyticsin evästeet poistetaan samalla. Itse valintasi sivusto tallentaa selaimesi paikalliseen tallennustilaan (”analytics-consent”), jotta banneri ei tule näkyviin joka käynnillä; tähän ei tarvita suostumusta (TDDDG:n 25 §:n 2 momentin 2 kohta). Lisätietoja: [Googlen tietosuojakäytäntö](https://policies.google.com/privacy?hl=fi).",

    hostingHeading: "jw29435.de: palvelin GitHub Pagesissa",
    hosting:
      "jw29435.de toimitetaan GitHub Pagesin kautta (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Yhdysvallat). Kun sivu avataan, GitHub käsittelee teknisesti välttämättömiä tietoja ja tallentaa ne palvelinlokeihin: IP-osoitteesi, päivämäärän ja kellonajan, avatun osoitteen ja selaimen tunnisteen. Tämä palvelee sivun toimittamista ja sen turvallisuutta. Oikeusperuste on oikeutettu etu turvalliseen ja käytettävissä olevaan verkkosivustoon (GDPR:n 6 artiklan 1 kohdan f alakohta). Minulla ei ole pääsyä näihin lokeihin; niiden säilytysajan määrää GitHub, ja niitä säilytetään niin kauan kuin palvelun turvallisuus ja toiminta edellyttävät. GitHub on sertifioitu EU-US Data Privacy Framework -järjestelyn mukaisesti. Lisätietoja: [GitHubin tietosuojaseloste](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare ja oma palvelin",
    cloudflare:
      "johannwiebe.de toimitetaan Cloudflaren verkon kautta (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, Yhdysvallat). Cloudflare välittää pyynnöt omalle palvelimelleni, suojaa hyökkäyksiltä ja käsittelee samalla yhteystietoja. Automaattisilta käyttökerroilta suojautuakseen Cloudflare voi asettaa teknisesti välttämättömän evästeen (esimerkiksi ”__cf_bm”). Oikeusperuste on oikeutettu etu turvalliseen ja käytettävissä olevaan verkkosivustoon (GDPR:n 6 artiklan 1 kohdan f alakohta). Cloudflare on sertifioitu EU-US Data Privacy Framework -järjestelyn mukaisesti. Lisätietoja: [Cloudflaren tietosuojakäytäntö](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Palvelin kirjoittaa käyttölokeja, joissa on IP-osoitteesi, päivämäärä ja kellonaika, avattu osoite, siirretyn datan määrä, viittaava sivu ja selaimen tunniste. Tämä palvelee sivun toimittamista, turvallisuutta ja vianetsintää (GDPR:n 6 artiklan 1 kohdan f alakohta). Lokitiedostot poistetaan viimeistään 30 päivän kuluttua.",

    emailHeading: "Yhteydenotto sähköpostilla",
    email:
      "Jos kirjoitat minulle sähköpostia, käsittelen osoitettasi ja viestin sisältöä vastatakseni (GDPR:n 6 artiklan 1 kohdan b tai f alakohta). Näiden verkkotunnusten sähköpostit välitetään Cloudflare Email Routingin kautta Gmail-postilaatikkooni (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanti). Google tallentaa viestit postilaatikkooni; tällöin tietoja voidaan siirtää myös Yhdysvaltoihin. Google on sertifioitu EU-US Data Privacy Framework -järjestelyn mukaisesti. Lisätietoja: [Googlen tietosuojakäytäntö](https://policies.google.com/privacy?hl=fi). Poistan viestit, kun ne on käsitelty eikä niiden säilyttämisvelvollisuutta ole.",

    rightsHeading: "Oikeutesi",
    rights:
      "Sinulla on oikeus saada pääsy tallennettuihin tietoihisi (GDPR:n 15 artikla) sekä oikeus tietojen oikaisemiseen (16 artikla), poistamiseen (17 artikla), käsittelyn rajoittamiseen (18 artikla) ja siirtämiseen järjestelmästä toiseen (20 artikla). Voit vastustaa käsittelyä, joka perustuu GDPR:n 6 artiklan 1 kohdan f alakohtaan (21 artikla). Sähköposti osoitteeseen {email} riittää.",
    complaint:
      "Lisäksi voit tehdä valituksen tietosuojavalvontaviranomaiselle (GDPR:n 77 artikla). Toimivaltainen viranomainen on Nordrhein-Westfalenin osavaltion tietosuoja- ja tiedonsaantivaltuutettu (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Päivitetty: marraskuu 2026",
  },
};

export default fi;
