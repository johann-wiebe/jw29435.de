// Magyar. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const hu: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Kis eszközök valódi feladatokhoz: Serva, Nuvo Explorer és CLR by NMBRS – Johann Wiebe munkái.",
    },
    impressum: {
      title: "Impresszum – jw29435",
      description: "A jw29435.de impresszuma. A jw29435 a Serva, a Nuvo Explorer és a CLR by NMBRS otthona.",
    },
    datenschutz: {
      title: "Adatvédelem – jw29435",
      description:
        "A jw29435.de és a johannwiebe.de adatvédelmi tájékoztatója: szervernaplók, Google Analytics csak hozzájárulással.",
    },
    ogImageAlt: "jw29435 logó: laptop JW betűkkel borostyánsárga alapon",
  },

  layout: {
    skipLink: "Ugrás a tartalomra",
    homeLink: "jw29435 – kezdőlap",
    mainNav: "Fő navigáció",
    navProducts: "Termékek",
    navContact: "Kapcsolat",
    navImpressum: "Impresszum",
    language: "Nyelv",
    footerBy: "A **jw29435** terméke",
    footerImpressum: "Impresszum",
    footerDatenschutz: "Adatvédelem",
    cookieSettings: "Cookie-beállítások",
  },

  languageHint: {
    text: "Ez az oldal magyarul is elérhető.",
    action: "Olvasás magyarul",
    dismiss: "Értesítés bezárása",
  },

  home: {
    eyebrow: "jw29435 · Alkalmazások és webes eszközök",
    title: "Kis eszközök valódi feladatokhoz.",
    lead: "Johann Wiebe három terméke: az egyik istentiszteleteket tervez, a másik útközben is megnyitja a saját Synologyt, a harmadik fotókból készít számfestő sablonokat. Mindhárom egyformán néz ki.",
    logoAlt: "jw29435 logó: laptop JW betűkkel",
    productsHeading: "Termékek",
    contactHeading: "Kapcsolat",
    contactText: "Hibát talált, vagy ötlete van valamelyik termékhez? Írjon nekem.",
    copy: "Másolás",
    copied: "Másolva",
  },

  products: {
    statusLabel: "Állapot:",
    serva: {
      platform: "Web · gyülekezeteknek",
      description:
        "Megtervezi az istentiszteleteket, az igehirdetési beosztást és a kórusénekeket, és e-mailben, WhatsAppon vagy push-értesítéssel emlékezteti az igehirdetőket az időpontjukra.",
      action: "Serva megnyitása",
      status: "Használatban",
    },
    nuvo: {
      platform: "Android · iOS tervben",
      description:
        "Böngésszen a saját Synologyján lévő fájlok között, és játssza le közvetlenül a zenei mappákat helyi hálózaton, VPN-en vagy HTTPS-en keresztül.",
      action: "Play-teszt",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Fotóból számfestő sablont készít, kérésre csak azokkal a színekkel, amelyek az Ön festékdobozában megvannak.",
      action: "Google Play",
      status: "Elérhető",
    },
  },

  consent: {
    title: "Mérhetem, hogyan használják az oldalt?",
    text: "Az Ön hozzájárulásával a Google Analyticset használom, hogy lássam, mely oldalakat nyitják meg. A Google ennek során cookie-kat helyez el, és adatokat az USA-ba is továbbít. Döntését bármikor megváltoztathatja a lábléc „Cookie-beállítások” pontjában. Bővebben az [adatvédelmi tájékoztatóban](page:datenschutz).",
    currentGranted: "Jelenleg: engedélyezve",
    currentDenied: "Jelenleg: elutasítva",
    deny: "Elutasítás",
    allow: "Engedélyezés",
  },

  legalNotice: {
    text: "Ez egy fordítás. Jogilag kizárólag a német nyelvű változat az irányadó.",
    link: "A német nyelvű változathoz",
  },

  impressum: {
    title: "Impresszum",
    intro: "Ez az impresszum a jw29435.de és a johannwiebe.de weboldalra vonatkozik.",
    providerHeading: "Adatok a DDG (német digitális szolgáltatásokról szóló törvény) 5. §-a szerint",
    contactHeading: "Kapcsolat",
    email: "E-mail: {email}",
  },

  datenschutz: {
    title: "Adatvédelmi tájékoztató",
    intro:
      "Ez a tájékoztató a jw29435.de és a johannwiebe.de weboldalra vonatkozik. Leírja, milyen adatok keletkeznek a látogatás során, és mi történik velük.",
    serva:
      "A Servának saját adatvédelmi tájékoztatója van: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Adatkezelő",
    controllerEmail: "E-mail: {email}",

    cookiesHeading: "Cookie-k és elemzés",
    cookies:
      "Az Ön hozzájárulása nélkül egyik weboldal sem helyez el saját maga cookie-kat, nem használ elemzőeszközt vagy követőt, és nem ágyaz be harmadik féltől származó tartalmat. A betűtípusok az oldallal együtt érkeznek; böngészője ehhez nem kapcsolódik a Google Fontshoz vagy más szolgáltatáshoz. A jw29435.de oldalon engedélyezheti a Google Analyticset (lásd lent).",

    analyticsHeading: "jw29435.de: Google Analytics hozzájárulással",
    analytics1:
      "Ha a bannerben az „Engedélyezés” gombra kattint, a jw29435.de a Google Analytics 4-et használja, amely a Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Írország) webelemző szolgáltatása. Így összesített formában látom, mely oldalakat milyen gyakran nyitnak meg, honnan érkeznek a látogatások, és milyen eszközökkel és böngészőkkel. Ezt megelőzően a Google Analytics nem töltődik be.",
    analytics2:
      "A Google Analytics ehhez cookie-kat tárol a böngészőjében („_ga” és „_ga_1F5GCWHXKX”, legfeljebb két évig), és használati adatokat kezel, például a megnyitott oldalakat, az időpontot, a hivatkozó oldalt, a hozzávetőleges helyet, az eszközt és a böngészőt. A Google Analytics 4 nem tárol IP-címeket. A Google Signals és a személyre szabott hirdetések ki vannak kapcsolva. Ennek során adatok a Google LLC-hez, az USA-ba is kerülhetnek; a Google az EU-US Data Privacy Framework szerint tanúsított.",
    analytics3:
      "A jogalap az Ön hozzájárulása (az általános adatvédelmi rendelet (GDPR) 6. cikk (1) bekezdés a) pontja, a TDDDG – német távközlési és digitális szolgáltatási adatvédelmi törvény – 25. § (1) bekezdése). Hozzájárulását bármikor, a jövőre nézve visszavonhatja: kattintson a láblécben a „Cookie-beállítások”, majd az „Elutasítás” gombra. A Google Analytics cookie-jai ekkor törlődnek. Magát a döntését az oldal a böngészője helyi tárolójában menti („analytics-consent”), hogy a banner ne jelenjen meg minden látogatáskor; ehhez nincs szükség hozzájárulásra (TDDDG 25. § (2) bekezdés 2. pont). További információ: [a Google adatvédelmi irányelvei](https://policies.google.com/privacy?hl=hu).",

    hostingHeading: "jw29435.de: tárhely a GitHub Pagesen",
    hosting:
      "A jw29435.de a GitHub Pagesen keresztül érhető el (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Egy oldal megnyitásakor a GitHub műszakilag szükséges adatokat kezel, és szervernaplókban tárolja őket: az Ön IP-címét, a dátumot és az időt, a megnyitott címet és a böngésző azonosítóját. Ez az oldal kiszolgálását és biztonságát szolgálja. A jogalap a biztonságos és elérhető weboldalhoz fűződő jogos érdek (GDPR 6. cikk (1) bekezdés f) pont). Ezekhez a naplókhoz nincs hozzáférésem; a megőrzésük idejét a GitHub határozza meg, mégpedig addig, ameddig a szolgáltatás biztonsága és működése megkívánja. A GitHub az EU-US Data Privacy Framework szerint tanúsított. További információ: [a GitHub adatvédelmi nyilatkozata](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare és saját szerver",
    cloudflare:
      "A johannwiebe.de a Cloudflare hálózatán keresztül érhető el (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). A Cloudflare továbbítja a kéréseket a saját szerveremre, véd a támadások ellen, és ennek során kezeli a kapcsolati adatokat. Az automatizált hozzáférések elleni védelem érdekében a Cloudflare műszakilag szükséges cookie-t helyezhet el (például „__cf_bm”). A jogalap a biztonságos és elérhető weboldalhoz fűződő jogos érdek (GDPR 6. cikk (1) bekezdés f) pont). A Cloudflare az EU-US Data Privacy Framework szerint tanúsított. További információ: [a Cloudflare adatvédelmi irányelvei](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "A szerver hozzáférési naplót vezet, amely tartalmazza az Ön IP-címét, a dátumot és az időt, a megnyitott címet, az átvitt adatmennyiséget, a hivatkozó oldalt és a böngésző azonosítóját. Ez az oldal kiszolgálását, a biztonságot és a hibakeresést szolgálja (GDPR 6. cikk (1) bekezdés f) pont). A naplófájlok legkésőbb 30 nap után törlődnek.",

    emailHeading: "Kapcsolatfelvétel e-mailben",
    email:
      "Ha e-mailt ír nekem, a címét és az üzenet tartalmát a válaszadás érdekében kezelem (GDPR 6. cikk (1) bekezdés b), illetve f) pont). Az e domainekre érkező e-mailek a Cloudflare Email Routingon keresztül a Gmail-postafiókomba kerülnek (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Írország). A Google az üzeneteket a postafiókomban tárolja; ennek során adatok az USA-ba is kerülhetnek. A Google az EU-US Data Privacy Framework szerint tanúsított. További információ: [a Google adatvédelmi irányelvei](https://policies.google.com/privacy?hl=hu). Az üzeneteket törlöm, ha elintéződtek, és nem áll fenn megőrzési kötelezettség.",

    rightsHeading: "Az Ön jogai",
    rights:
      "Önnek joga van tájékoztatást kapni a tárolt adatairól (GDPR 15. cikk), továbbá joga van azok helyesbítéséhez (16. cikk), törléséhez (17. cikk), az adatkezelés korlátozásához (18. cikk) és az adathordozhatósághoz (20. cikk). A GDPR 6. cikk (1) bekezdés f) pontja alapján végzett adatkezelés ellen tiltakozhat (21. cikk). Elegendő egy e-mail a(z) {email} címre.",
    complaint:
      "Ezenkívül panaszt tehet egy adatvédelmi felügyeleti hatóságnál (GDPR 77. cikk). Az illetékes hatóság Észak-Rajna-Vesztfália tartományi adatvédelmi és információszabadság-biztosa (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Utolsó frissítés: 2026. november",
  },
};

export default hu;
