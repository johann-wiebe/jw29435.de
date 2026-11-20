// Slovenščina. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const sl: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Majhna orodja za resnične opravke: Serva, Nuvo Explorer in CLR by NMBRS avtorja Johanna Wiebeja.",
    },
    impressum: {
      title: "Pravno obvestilo – jw29435",
      description: "Pravno obvestilo spletnega mesta jw29435.de, skupnega doma za Serva, Nuvo Explorer in CLR by NMBRS.",
    },
    datenschutz: {
      title: "Zasebnost – jw29435",
      description:
        "Pravilnik o zasebnosti za jw29435.de in johannwiebe.de: dnevniki strežnika, Google Analytics pa samo s privolitvijo.",
    },
    ogImageAlt: "Logotip jw29435: prenosnik s črkama JW na jantarnem ozadju",
  },

  layout: {
    skipLink: "Skoči na vsebino",
    homeLink: "jw29435 – domača stran",
    mainNav: "Glavna navigacija",
    navProducts: "Izdelki",
    navContact: "Kontakt",
    navImpressum: "Pravno obvestilo",
    language: "Jezik",
    footerBy: "Izdelek znamke **jw29435**",
    footerImpressum: "Pravno obvestilo",
    footerDatenschutz: "Zasebnost",
    cookieSettings: "Nastavitve piškotkov",
  },

  languageHint: {
    text: "Ta stran je na voljo tudi v slovenščini.",
    action: "Beri v slovenščini",
    dismiss: "Zapri obvestilo",
  },

  home: {
    eyebrow: "jw29435 · Aplikacije in spletna orodja",
    title: "Majhna orodja za resnične opravke.",
    lead: "Trije izdelki Johanna Wiebeja: eden načrtuje bogoslužja, drugi na poti odpre vaš lastni Synology, tretji iz fotografij naredi predloge za slikanje po številkah. Vsi so videti enako.",
    logoAlt: "Logotip jw29435: prenosnik s črkama JW",
    productsHeading: "Izdelki",
    contactHeading: "Kontakt",
    contactText: "Ste našli napako ali imate idejo za katerega od izdelkov? Pišite mi.",
    copy: "Kopiraj",
    copied: "Kopirano",
  },

  products: {
    statusLabel: "Stanje:",
    serva: {
      platform: "Splet · za cerkvene občine",
      description:
        "Načrtuje bogoslužja, pridigarske službe in zborovske pesmi ter pridigarje po e-pošti, prek storitve WhatsApp ali s potisnim obvestilom opomni na njihov termin.",
      action: "Odpri Serva",
      status: "V uporabi",
    },
    nuvo: {
      platform: "Android · iOS v načrtu",
      description:
        "Brskanje po datotekah na lastnem Synology in neposredno predvajanje glasbenih map, v lokalnem omrežju, prek VPN ali prek HTTPS.",
      action: "Na test v Play",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Iz fotografije naredi predlogo za slikanje po številkah, po želji samo z barvami, ki jih imate v svoji škatli barv.",
      action: "V Google Play",
      status: "Na voljo",
    },
  },

  consent: {
    title: "Ali smem meriti, kako se stran uporablja?",
    text: "Z vašo privolitvijo uporabljam Google Analytics, da vidim, katere strani so obiskane. Google pri tem nastavlja piškotke in prenaša podatke tudi v ZDA. Svojo izbiro lahko kadar koli spremenite prek „Nastavitve piškotkov“ v nogi strani. Več v [pravilniku o zasebnosti](page:datenschutz).",
    currentGranted: "Trenutno: dovoljeno",
    currentDenied: "Trenutno: zavrnjeno",
    deny: "Zavrni",
    allow: "Dovoli",
  },

  legalNotice: {
    text: "To je prevod. Pravno zavezujoča je samo nemška različica.",
    link: "Na nemško različico",
  },

  impressum: {
    title: "Pravno obvestilo",
    intro: "To pravno obvestilo velja za spletni mesti jw29435.de in johannwiebe.de.",
    providerHeading: "Podatki v skladu s § 5 DDG (nemški zakon o digitalnih storitvah)",
    contactHeading: "Kontakt",
    email: "E-pošta: {email}",
  },

  datenschutz: {
    title: "Pravilnik o zasebnosti",
    intro:
      "Ta pravilnik velja za spletni mesti jw29435.de in johannwiebe.de. Opisuje, kateri podatki nastanejo ob obisku in kaj se z njimi zgodi.",
    serva:
      "Serva ima lasten pravilnik o zasebnosti: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Upravljavec",
    controllerEmail: "E-pošta: {email}",

    cookiesHeading: "Piškotki in analitika",
    cookies:
      "Brez vaše privolitve nobeno od obeh spletnih mest samo ne nastavlja piškotkov, ne uporablja analitike ali sledilnikov in ne vključuje vsebin tretjih ponudnikov. Pisave se dostavijo skupaj s stranjo; vaš brskalnik se zaradi njih ne poveže z Google Fonts ali drugimi storitvami. Na jw29435.de lahko dovolite Google Analytics (glejte spodaj).",

    analyticsHeading: "jw29435.de: Google Analytics s privolitvijo",
    analytics1:
      "Če v pasici kliknete „Dovoli“, jw29435.de uporablja Google Analytics 4, storitev spletne analitike podjetja Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irska). Tako v združeni obliki vidim, katere strani so obiskane kako pogosto, od kod prihajajo obiski ter s katerimi napravami in brskalniki. Pred tem se Google Analytics ne naloži.",
    analytics2:
      "Google Analytics v ta namen shranjuje piškotke v vaš brskalnik („_ga“ in „_ga_1F5GCWHXKX“, do dveh let) in obdeluje podatke o uporabi, kot so obiskane strani, čas, napotitelj, približna lokacija, naprava in brskalnik. Google Analytics 4 ne shranjuje naslovov IP. Google Signals in prilagojeno oglaševanje sta izklopljena. Pri tem se lahko podatki prenesejo tudi družbi Google LLC v ZDA; Google je certificiran v okviru EU-US Data Privacy Framework.",
    analytics3:
      "Podlaga je vaša privolitev (točka (a) člena 6(1) Splošne uredbe o varstvu podatkov (GDPR), § 25(1) TDDDG). Kadar koli jo lahko prekličete z učinkom za prihodnost: v nogi strani kliknite „Nastavitve piškotkov“ in nato „Zavrni“. Piškotki Google Analytics se pri tem izbrišejo. Samo vašo izbiro stran shrani v lokalno shrambo vašega brskalnika („analytics-consent“), da se pasica ne prikaže ob vsakem obisku; za to privolitev ni potrebna (§ 25(2), točka 2 TDDDG). Več informacij: [pravilnik o zasebnosti Google](https://policies.google.com/privacy?hl=sl).",

    hostingHeading: "jw29435.de: gostovanje na GitHub Pages",
    hosting:
      "jw29435.de se dostavlja prek GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, ZDA). Ob odprtju strani GitHub obdeluje tehnično nujne podatke in jih shranjuje v dnevnike strežnika: vaš naslov IP, datum in čas, zahtevani naslov in identifikator brskalnika. To služi dostavi strani in njeni varnosti. Podlaga je zakoniti interes za varno in dostopno spletno mesto (točka (f) člena 6(1) GDPR). Do teh dnevnikov nimam dostopa; kako dolgo se hranijo, določa GitHub, in sicer toliko časa, kot je potrebno za varnost in delovanje storitve. GitHub je certificiran v okviru EU-US Data Privacy Framework. Več informacij: [izjava o zasebnosti GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare in lasten strežnik",
    cloudflare:
      "johannwiebe.de se dostavlja prek omrežja Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, ZDA). Cloudflare posreduje zahteve mojemu lastnemu strežniku, ščiti pred napadi in pri tem obdeluje podatke o povezavi. Za zaščito pred samodejnimi dostopi lahko Cloudflare nastavi tehnično nujen piškotek (na primer „__cf_bm“). Podlaga je zakoniti interes za varno in dostopno spletno mesto (točka (f) člena 6(1) GDPR). Cloudflare je certificiran v okviru EU-US Data Privacy Framework. Več informacij: [pravilnik o zasebnosti Cloudflare](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Strežnik zapisuje dnevnike dostopa z vašim naslovom IP, datumom in časom, zahtevanim naslovom, količino prenesenih podatkov, napotiteljem in identifikatorjem brskalnika. To služi dostavi strani, varnosti in iskanju napak (točka (f) člena 6(1) GDPR). Dnevniške datoteke se izbrišejo najpozneje po 30 dneh.",

    emailHeading: "Stik po e-pošti",
    email:
      "Če mi pišete e-poštno sporočilo, obdelam vaš naslov in vsebino, da lahko odgovorim (točka (b) oziroma (f) člena 6(1) GDPR). E-poštna sporočila na te domene se prek Cloudflare Email Routing posredujejo v moj poštni predal pri Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irska). Google shranjuje sporočila v mojem poštnem predalu; pri tem se lahko podatki prenesejo tudi v ZDA. Google je certificiran v okviru EU-US Data Privacy Framework. Več informacij: [pravilnik o zasebnosti Google](https://policies.google.com/privacy?hl=sl). Sporočila izbrišem, ko so obravnavana in ne obstaja obveznost njihove hrambe.",

    rightsHeading: "Vaše pravice",
    rights:
      "Imate pravico do dostopa do svojih shranjenih podatkov (člen 15 GDPR), do popravka (člen 16), izbrisa (člen 17), omejitve obdelave (člen 18) in prenosljivosti podatkov (člen 20). Obdelavi na podlagi točke (f) člena 6(1) GDPR lahko ugovarjate (člen 21). Zadostuje e-poštno sporočilo na {email}.",
    complaint:
      "Poleg tega se lahko pritožite pri nadzornem organu za varstvo podatkov (člen 77 GDPR). Pristojna je deželna pooblaščenka za varstvo podatkov in svobodo informacij Severnega Porenja - Vestfalije (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Stanje: november 2026",
  },
};

export default sl;
