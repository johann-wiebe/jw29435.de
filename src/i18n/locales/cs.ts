// Čeština. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const cs: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Malé nástroje pro skutečné činnosti: Serva, Nuvo Explorer a CLR by NMBRS od Johanna Wiebeho.",
    },
    impressum: {
      title: "Právní informace – jw29435",
      description: "Údaje o provozovateli webu jw29435.de, zastřešujícího Serva, Nuvo Explorer a CLR by NMBRS.",
    },
    datenschutz: {
      title: "Ochrana soukromí – jw29435",
      description:
        "Zásady ochrany osobních údajů pro jw29435.de a johannwiebe.de: serverové logy a Google Analytics jen se souhlasem.",
    },
    ogImageAlt: "Logo jw29435: notebook s písmeny JW na jantarovém pozadí",
  },

  layout: {
    skipLink: "Přejít na obsah",
    homeLink: "jw29435 – úvodní stránka",
    mainNav: "Hlavní navigace",
    navProducts: "Produkty",
    navContact: "Kontakt",
    navImpressum: "Právní informace",
    language: "Jazyk",
    footerBy: "Produkt od **jw29435**",
    footerImpressum: "Právní informace",
    footerDatenschutz: "Ochrana soukromí",
    cookieSettings: "Nastavení cookies",
  },

  languageHint: {
    text: "Tato stránka je k dispozici také v češtině.",
    action: "Číst v češtině",
    dismiss: "Zavřít upozornění",
  },

  home: {
    eyebrow: "jw29435 · Aplikace a webové nástroje",
    title: "Malé nástroje pro skutečné činnosti.",
    lead: "Tři produkty od Johanna Wiebeho: jeden plánuje bohoslužby, druhý otevírá vlastní Synology na cestách, třetí dělá z fotek předlohy k malování podle čísel. Všechny vypadají stejně.",
    logoAlt: "Logo jw29435: notebook s písmeny JW",
    productsHeading: "Produkty",
    contactHeading: "Kontakt",
    contactText: "Našli jste chybu nebo máte nápad pro některý z produktů? Napište mi.",
    copy: "Kopírovat",
    copied: "Zkopírováno",
  },

  products: {
    statusLabel: "Stav:",
    serva: {
      platform: "Web · pro sbory",
      description:
        "Plánuje bohoslužby, kazatelské služby a sborové písně a připomíná kazatelům jejich termín e-mailem, přes WhatsApp nebo push oznámením.",
      action: "Otevřít Serva",
      status: "V provozu",
    },
    nuvo: {
      platform: "Android · iOS v plánu",
      description:
        "Procházení souborů na vlastním Synology a přímé přehrávání hudebních složek, v místní síti, přes VPN nebo přes HTTPS.",
      action: "K testu v Play",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Udělá z fotky předlohu k malování podle čísel, na přání jen s barvami, které máte ve své krabičce barev.",
      action: "Na Google Play",
      status: "K dispozici",
    },
  },

  consent: {
    title: "Mohu měřit, jak se stránka používá?",
    text: "S vaším souhlasem používám Google Analytics, abych viděl, které stránky se navštěvují. Google přitom ukládá cookies a předává data i do USA. Svou volbu můžete kdykoli změnit přes „Nastavení cookies“ v zápatí. Více v [zásadách ochrany osobních údajů](page:datenschutz).",
    currentGranted: "Aktuálně: povoleno",
    currentDenied: "Aktuálně: odmítnuto",
    deny: "Odmítnout",
    allow: "Povolit",
  },

  legalNotice: {
    text: "Toto je překlad. Právně závazná je pouze německá verze.",
    link: "Na německou verzi",
  },

  impressum: {
    title: "Právní informace",
    intro: "Tyto údaje o provozovateli platí pro weby jw29435.de a johannwiebe.de.",
    providerHeading: "Údaje podle § 5 DDG (německý zákon o digitálních službách)",
    contactHeading: "Kontakt",
    email: "E-mail: {email}",
  },

  datenschutz: {
    title: "Zásady ochrany osobních údajů",
    intro:
      "Tyto zásady platí pro weby jw29435.de a johannwiebe.de. Popisují, jaká data při návštěvě vznikají a co se s nimi děje.",
    serva:
      "Serva má vlastní zásady ochrany osobních údajů: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Správce",
    controllerEmail: "E-mail: {email}",

    cookiesHeading: "Cookies a analýza",
    cookies:
      "Bez vašeho souhlasu žádný z obou webů sám neukládá cookies, nepoužívá analytiku ani trackery a nevkládá obsah třetích stran. Písma se doručují spolu se stránkou; váš prohlížeč se kvůli nim nepřipojuje ke Google Fonts ani k jiným službám. Na jw29435.de můžete povolit Google Analytics (viz níže).",

    analyticsHeading: "jw29435.de: Google Analytics se souhlasem",
    analytics1:
      "Pokud v banneru kliknete na „Povolit“, používá jw29435.de Google Analytics 4, službu webové analýzy společnosti Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irsko). Díky tomu v souhrnné podobě vidím, které stránky se jak často navštěvují, odkud návštěvy přicházejí a z jakých zařízení a prohlížečů. Předtím se Google Analytics nenačítá.",
    analytics2:
      "Google Analytics k tomu ukládá do vašeho prohlížeče cookies („_ga“ a „_ga_1F5GCWHXKX“, až na dva roky) a zpracovává údaje o používání, jako jsou navštívené stránky, čas, referrer, přibližná poloha, zařízení a prohlížeč. Google Analytics 4 neukládá IP adresy. Google Signals a personalizovaná reklama jsou vypnuté. Přitom mohou být data předávána i společnosti Google LLC v USA; Google je certifikován v rámci EU-US Data Privacy Framework.",
    analytics3:
      "Právním základem je váš souhlas (čl. 6 odst. 1 písm. a) GDPR, § 25 odst. 1 TDDDG). Můžete ho kdykoli odvolat s účinkem do budoucna: klikněte v zápatí na „Nastavení cookies“ a poté na „Odmítnout“. Cookies Google Analytics se přitom smažou. Samotnou vaši volbu ukládá stránka do místního úložiště vašeho prohlížeče („analytics-consent“), aby se banner nezobrazoval při každé návštěvě; k tomu není souhlas potřeba (§ 25 odst. 2 bod 2 TDDDG). Další informace: [zásady ochrany soukromí Google](https://policies.google.com/privacy?hl=cs).",

    hostingHeading: "jw29435.de: hosting na GitHub Pages",
    hosting:
      "jw29435.de se doručuje přes GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Při otevření stránky zpracovává GitHub technicky nezbytná data a ukládá je do serverových logů: vaši IP adresu, datum a čas, požadovanou adresu a identifikaci prohlížeče. Slouží to k doručení stránky a k její bezpečnosti. Právním základem je oprávněný zájem na bezpečném a dostupném webu (čl. 6 odst. 1 písm. f) GDPR). K těmto logům nemám přístup; jak dlouho se uchovávají, určuje GitHub, a to tak dlouho, jak je to nutné pro bezpečnost a provoz služby. GitHub je certifikován v rámci EU-US Data Privacy Framework. Další informace: [prohlášení GitHub o ochraně soukromí](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare a vlastní server",
    cloudflare:
      "johannwiebe.de se doručuje přes síť Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare přeposílá požadavky na můj vlastní server, chrání před útoky a zpracovává přitom data o spojení. Na ochranu před automatizovaným přístupem může Cloudflare uložit technicky nezbytnou cookie (například „__cf_bm“). Právním základem je oprávněný zájem na bezpečném a dostupném webu (čl. 6 odst. 1 písm. f) GDPR). Cloudflare je certifikován v rámci EU-US Data Privacy Framework. Další informace: [zásady ochrany soukromí Cloudflare](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Server zapisuje přístupové logy s vaší IP adresou, datem a časem, požadovanou adresou, objemem přenesených dat, referrerem a identifikací prohlížeče. Slouží to k doručení stránky, k bezpečnosti a k hledání chyb (čl. 6 odst. 1 písm. f) GDPR). Soubory logů se mažou nejpozději po 30 dnech.",

    emailHeading: "Kontakt e-mailem",
    email:
      "Pokud mi napíšete e-mail, zpracovávám vaši adresu a obsah, abych mohl odpovědět (čl. 6 odst. 1 písm. b) nebo f) GDPR). E-maily na tyto domény se přes Cloudflare Email Routing přeposílají do mé schránky v Gmailu (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irsko). Google ukládá zprávy v mé schránce; přitom mohou být data předávána i do USA. Google je certifikován v rámci EU-US Data Privacy Framework. Další informace: [zásady ochrany soukromí Google](https://policies.google.com/privacy?hl=cs). Zprávy mažu, jakmile jsou vyřízené a neexistuje povinnost je uchovávat.",

    rightsHeading: "Vaše práva",
    rights:
      "Máte právo na přístup ke svým uloženým údajům (čl. 15 GDPR), na jejich opravu (čl. 16), výmaz (čl. 17), omezení zpracování (čl. 18) a přenositelnost údajů (čl. 20). Proti zpracování na základě čl. 6 odst. 1 písm. f) GDPR můžete vznést námitku (čl. 21). Stačí e-mail na {email}.",
    complaint:
      "Dále můžete podat stížnost u dozorového úřadu pro ochranu osobních údajů (čl. 77 GDPR). Příslušná je Zemská pověřenkyně pro ochranu osobních údajů a svobodu informací Severního Porýní-Vestfálska (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Stav k listopadu 2026",
  },
};

export default cs;
