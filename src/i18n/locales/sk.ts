// Slovenčina. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const sk: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Malé nástroje pre skutočné činnosti: Serva, Nuvo Explorer a CLR by NMBRS od Johanna Wiebeho.",
    },
    impressum: {
      title: "Právne informácie – jw29435",
      description: "Údaje o prevádzkovateľovi webu jw29435.de, strešného webu pre Serva, Nuvo Explorer a CLR by NMBRS.",
    },
    datenschutz: {
      title: "Ochrana súkromia – jw29435",
      description:
        "Zásady ochrany osobných údajov pre jw29435.de a johannwiebe.de: serverové logy a Google Analytics len so súhlasom.",
    },
    ogImageAlt: "Logo jw29435: notebook s písmenami JW na jantárovom pozadí",
  },

  layout: {
    skipLink: "Prejsť na obsah",
    homeLink: "jw29435 – úvodná stránka",
    mainNav: "Hlavná navigácia",
    navProducts: "Produkty",
    navContact: "Kontakt",
    navImpressum: "Právne informácie",
    language: "Jazyk",
    footerBy: "Produkt od **jw29435**",
    footerImpressum: "Právne informácie",
    footerDatenschutz: "Ochrana súkromia",
    cookieSettings: "Nastavenia cookies",
  },

  languageHint: {
    text: "Táto stránka je k dispozícii aj v slovenčine.",
    action: "Čítať v slovenčine",
    dismiss: "Zavrieť upozornenie",
  },

  home: {
    eyebrow: "jw29435 · Aplikácie a webové nástroje",
    title: "Malé nástroje pre skutočné činnosti.",
    lead: "Tri produkty od Johanna Wiebeho: jeden plánuje bohoslužby, druhý otvára vlastné Synology na cestách, tretí robí z fotiek predlohy na maľovanie podľa čísel. Všetky vyzerajú rovnako.",
    logoAlt: "Logo jw29435: notebook s písmenami JW",
    productsHeading: "Produkty",
    contactHeading: "Kontakt",
    contactText: "Našli ste chybu alebo máte nápad pre niektorý z produktov? Napíšte mi.",
    copy: "Kopírovať",
    copied: "Skopírované",
  },

  products: {
    statusLabel: "Stav:",
    serva: {
      platform: "Web · pre zbory",
      description:
        "Plánuje bohoslužby, kazateľské služby a zborové piesne a pripomína kazateľom ich termín e-mailom, cez WhatsApp alebo push upozornením.",
      action: "Otvoriť Serva",
      status: "V prevádzke",
    },
    nuvo: {
      platform: "Android · iOS v pláne",
      description:
        "Prehliadanie súborov na vlastnom Synology a priame prehrávanie hudobných priečinkov, v miestnej sieti, cez VPN alebo cez HTTPS.",
      action: "Na test v Play",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Urobí z fotky predlohu na maľovanie podľa čísel, na želanie len s farbami, ktoré máte vo svojej krabičke farieb.",
      action: "Na Google Play",
      status: "K dispozícii",
    },
  },

  consent: {
    title: "Môžem merať, ako sa stránka používa?",
    text: "S vaším súhlasom používam Google Analytics, aby som videl, ktoré stránky sa navštevujú. Google pritom ukladá cookies a prenáša údaje aj do USA. Svoju voľbu môžete kedykoľvek zmeniť cez „Nastavenia cookies“ v päte stránky. Viac v [zásadách ochrany osobných údajov](page:datenschutz).",
    currentGranted: "Aktuálne: povolené",
    currentDenied: "Aktuálne: odmietnuté",
    deny: "Odmietnuť",
    allow: "Povoliť",
  },

  legalNotice: {
    text: "Toto je preklad. Právne záväzná je iba nemecká verzia.",
    link: "Na nemeckú verziu",
  },

  impressum: {
    title: "Právne informácie",
    intro: "Tieto údaje o prevádzkovateľovi platia pre weby jw29435.de a johannwiebe.de.",
    providerHeading: "Údaje podľa § 5 DDG (nemecký zákon o digitálnych službách)",
    contactHeading: "Kontakt",
    email: "E-mail: {email}",
  },

  datenschutz: {
    title: "Zásady ochrany osobných údajov",
    intro:
      "Tieto zásady platia pre weby jw29435.de a johannwiebe.de. Opisujú, aké údaje pri návšteve vznikajú a čo sa s nimi deje.",
    serva:
      "Serva má vlastné zásady ochrany osobných údajov: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Prevádzkovateľ",
    controllerEmail: "E-mail: {email}",

    cookiesHeading: "Cookies a analýza",
    cookies:
      "Bez vášho súhlasu žiadny z oboch webov sám neukladá cookies, nepoužíva analytiku ani trackery a nevkladá obsah tretích strán. Písma sa doručujú spolu so stránkou; váš prehliadač sa kvôli nim nepripája ku Google Fonts ani k iným službám. Na jw29435.de môžete povoliť Google Analytics (pozri nižšie).",

    analyticsHeading: "jw29435.de: Google Analytics so súhlasom",
    analytics1:
      "Ak v banneri kliknete na „Povoliť“, jw29435.de používa Google Analytics 4, službu webovej analýzy spoločnosti Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Írsko). Vďaka tomu v súhrnnej podobe vidím, ktoré stránky sa ako často navštevujú, odkiaľ návštevy prichádzajú a z akých zariadení a prehliadačov. Predtým sa Google Analytics nenačítava.",
    analytics2:
      "Google Analytics na tento účel ukladá do vášho prehliadača cookies („_ga“ a „_ga_1F5GCWHXKX“, až na dva roky) a spracúva údaje o používaní, ako sú navštívené stránky, čas, referrer, približná poloha, zariadenie a prehliadač. Google Analytics 4 neukladá IP adresy. Google Signals a prispôsobená reklama sú vypnuté. Pritom sa údaje môžu prenášať aj spoločnosti Google LLC v USA; Google je certifikovaný v rámci EU-US Data Privacy Framework.",
    analytics3:
      "Právnym základom je váš súhlas (čl. 6 ods. 1 písm. a) GDPR, § 25 ods. 1 TDDDG). Môžete ho kedykoľvek odvolať s účinnosťou do budúcnosti: kliknite v päte stránky na „Nastavenia cookies“ a potom na „Odmietnuť“. Cookies Google Analytics sa pritom vymažú. Samotnú vašu voľbu ukladá stránka do lokálneho úložiska vášho prehliadača („analytics-consent“), aby sa banner nezobrazoval pri každej návšteve; na to nie je potrebný súhlas (§ 25 ods. 2 bod 2 TDDDG). Ďalšie informácie: [zásady ochrany súkromia Google](https://policies.google.com/privacy?hl=sk).",

    hostingHeading: "jw29435.de: hosting na GitHub Pages",
    hosting:
      "jw29435.de sa doručuje cez GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Pri otvorení stránky GitHub spracúva technicky nevyhnutné údaje a ukladá ich do serverových logov: vašu IP adresu, dátum a čas, požadovanú adresu a identifikáciu prehliadača. Slúži to na doručenie stránky a na jej bezpečnosť. Právnym základom je oprávnený záujem na bezpečnom a dostupnom webe (čl. 6 ods. 1 písm. f) GDPR). K týmto logom nemám prístup; ako dlho sa uchovávajú, určuje GitHub, a to tak dlho, ako je to potrebné na bezpečnosť a prevádzku služby. GitHub je certifikovaný v rámci EU-US Data Privacy Framework. Ďalšie informácie: [vyhlásenie GitHub o ochrane súkromia](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare a vlastný server",
    cloudflare:
      "johannwiebe.de sa doručuje cez sieť Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare preposiela požiadavky na môj vlastný server, chráni pred útokmi a spracúva pritom údaje o spojení. Na ochranu pred automatizovaným prístupom môže Cloudflare uložiť technicky nevyhnutný cookie (napríklad „__cf_bm“). Právnym základom je oprávnený záujem na bezpečnom a dostupnom webe (čl. 6 ods. 1 písm. f) GDPR). Cloudflare je certifikovaný v rámci EU-US Data Privacy Framework. Ďalšie informácie: [zásady ochrany súkromia Cloudflare](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Server zapisuje prístupové logy s vašou IP adresou, dátumom a časom, požadovanou adresou, objemom prenesených údajov, referrerom a identifikáciou prehliadača. Slúži to na doručenie stránky, na bezpečnosť a na hľadanie chýb (čl. 6 ods. 1 písm. f) GDPR). Súbory logov sa vymažú najneskôr po 30 dňoch.",

    emailHeading: "Kontakt e-mailom",
    email:
      "Ak mi napíšete e-mail, spracúvam vašu adresu a obsah, aby som mohol odpovedať (čl. 6 ods. 1 písm. b) alebo f) GDPR). E-maily na tieto domény sa cez Cloudflare Email Routing preposielajú do mojej schránky v Gmaile (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Írsko). Google ukladá správy v mojej schránke; pritom sa údaje môžu prenášať aj do USA. Google je certifikovaný v rámci EU-US Data Privacy Framework. Ďalšie informácie: [zásady ochrany súkromia Google](https://policies.google.com/privacy?hl=sk). Správy mažem, keď sú vybavené a neexistuje povinnosť ich uchovávať.",

    rightsHeading: "Vaše práva",
    rights:
      "Máte právo na prístup k svojim uloženým údajom (čl. 15 GDPR), na ich opravu (čl. 16), vymazanie (čl. 17), obmedzenie spracúvania (čl. 18) a prenosnosť údajov (čl. 20). Proti spracúvaniu na základe čl. 6 ods. 1 písm. f) GDPR môžete namietať (čl. 21). Stačí e-mail na {email}.",
    complaint:
      "Okrem toho môžete podať sťažnosť dozornému orgánu pre ochranu osobných údajov (čl. 77 GDPR). Príslušná je Krajinská splnomocnenkyňa pre ochranu údajov a slobodu informácií Severného Porýnia-Vestfálska (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Stav k novembru 2026",
  },
};

export default sk;
