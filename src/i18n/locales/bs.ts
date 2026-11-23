// Bosanski. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const bs: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Mali alati za stvarne radne procese: Serva, Nuvo Explorer i CLR by NMBRS, autor Johann Wiebe.",
    },
    impressum: {
      title: "Pravna napomena – jw29435",
      description: "Pravna napomena za jw29435.de, krovnu stranicu za Serva, Nuvo Explorer i CLR by NMBRS.",
    },
    datenschutz: {
      title: "Privatnost – jw29435",
      description:
        "Politika privatnosti za jw29435.de i johannwiebe.de: zapisnici servera, a Google Analytics samo uz pristanak.",
    },
    ogImageAlt: "Logo jw29435: laptop sa slovima JW",
  },

  layout: {
    skipLink: "Preskoči na sadržaj",
    homeLink: "jw29435 – početna stranica",
    mainNav: "Glavna navigacija",
    navProducts: "Proizvodi",
    navContact: "Kontakt",
    navImpressum: "Pravna napomena",
    language: "Jezik",
    footerBy: "Proizvod: **jw29435**",
    footerImpressum: "Pravna napomena",
    footerDatenschutz: "Privatnost",
    cookieSettings: "Postavke kolačića",
  },

  languageHint: {
    text: "Ova stranica je dostupna i na bosanskom.",
    action: "Čitajte na bosanskom",
    dismiss: "Zatvori obavještenje",
  },

  home: {
    eyebrow: "jw29435 · Aplikacije i web alati",
    title: "Mali alati za stvarne radne procese.",
    lead: "Tri proizvoda Johanna Wiebea: jedan planira bogosluženja, jedan na putu otvara vaš vlastiti Synology, jedan od fotografija pravi predloške za bojenje po brojevima. Svi izgledaju isto.",
    logoAlt: "Logo jw29435: laptop sa slovima JW",
    productsHeading: "Proizvodi",
    contactHeading: "Kontakt",
    contactText: "Pronašli ste grešku ili imate ideju za neki od proizvoda? Pišite mi.",
    copy: "Kopiraj",
    copied: "Kopirano",
  },

  products: {
    statusLabel: "Status:",
    serva: {
      platform: "Web · za crkvene zajednice",
      description:
        "Planira bogosluženja, propovjedničke službe i horske pjesme te propovjednike podsjeća na njihov termin putem e-maila, WhatsAppa ili push obavještenja.",
      action: "Otvori Serva",
      status: "U upotrebi",
    },
    nuvo: {
      platform: "Android · iOS u planu",
      description:
        "Pretražujte fajlove na vlastitom uređaju Synology i direktno reproducirajte muzičke foldere, u lokalnoj mreži, putem VPN-a ili HTTPS-a.",
      action: "Na Play test",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Od fotografije pravi predložak za bojenje po brojevima, po želji samo s bojama koje imate u svojoj kutiji s bojama.",
      action: "Na Google Playu",
      status: "Dostupno",
    },
  },

  consent: {
    title: "Smijem li mjeriti kako se stranica koristi?",
    text: "Uz vaš pristanak koristim Google Analytics da vidim koje se stranice otvaraju. Pri tome Google postavlja kolačiće i prenosi podatke i u SAD. Svoj izbor u bilo kojem trenutku možete promijeniti putem „Postavke kolačića“ u podnožju. Više o tome u [politici privatnosti](page:datenschutz).",
    currentGranted: "Trenutno: dozvoljeno",
    currentDenied: "Trenutno: odbijeno",
    deny: "Odbij",
    allow: "Dozvoli",
  },

  legalNotice: {
    text: "Ovo je prijevod. Pravno je obavezujuća samo njemačka verzija.",
    link: "Na njemačku verziju",
  },

  impressum: {
    title: "Pravna napomena",
    intro: "Ova pravna napomena vrijedi za web stranice jw29435.de i johannwiebe.de.",
    providerHeading: "Podaci u skladu s § 5 DDG (njemački Zakon o digitalnim uslugama)",
    contactHeading: "Kontakt",
    email: "E-mail: {email}",
  },

  datenschutz: {
    title: "Politika privatnosti",
    intro:
      "Ova politika vrijedi za web stranice jw29435.de i johannwiebe.de. Opisuje koji podaci nastaju pri posjeti i šta se s njima dešava.",
    serva:
      "Serva ima vlastitu politiku privatnosti: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Kontrolor",
    controllerEmail: "E-mail: {email}",

    cookiesHeading: "Kolačići i analiza",
    cookies:
      "Bez vašeg pristanka nijedna od dvije web stranice sama ne postavlja kolačiće, ne koristi analitiku ni alate za praćenje i ne ugrađuje sadržaje trećih strana. Fontovi se isporučuju zajedno sa stranicom; vaš preglednik za njih ne uspostavlja vezu s Google Fontsom ni s drugim servisima. Na jw29435.de možete dozvoliti Google Analytics (vidi ispod).",

    analyticsHeading: "jw29435.de: Google Analytics uz pristanak",
    analytics1:
      "Ako u baneru kliknete „Dozvoli“, jw29435.de koristi Google Analytics 4, uslugu web analitike kompanije Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irska). Tako u sažetom obliku vidim koje se stranice koliko često otvaraju, odakle dolaze posjete te s kojim uređajima i preglednicima. Prije toga se Google Analytics ne učitava.",
    analytics2:
      "Google Analytics u tu svrhu čuva kolačiće u vašem pregledniku („_ga“ i „_ga_1F5GCWHXKX“, do dvije godine) i obrađuje podatke o korištenju kao što su otvorene stranice, vrijeme, referrer, približna lokacija, uređaj i preglednik. Google Analytics 4 ne čuva IP adrese. Google Signals i personalizovano oglašavanje su isključeni. Pri tome se podaci mogu prenijeti i kompaniji Google LLC u SAD-u; Google je certificiran u okviru EU-US Data Privacy Framework.",
    analytics3:
      "Pravni osnov je vaš pristanak (čl. 6. st. 1. tač. (a) Opće uredbe o zaštiti podataka, GDPR; § 25 st. 1 njemačkog TDDDG). Možete ga u bilo kojem trenutku povući s djelovanjem za budućnost: u podnožju kliknite „Postavke kolačića“, a zatim „Odbij“. Kolačići Google Analyticsa se pri tome brišu. Sam vaš izbor stranica čuva u lokalnoj pohrani vašeg preglednika („analytics-consent“) kako se baner ne bi pojavljivao pri svakoj posjeti; za to nije potreban pristanak (§ 25 st. 2 br. 2 TDDDG). Više informacija: [Googleova politika privatnosti](https://policies.google.com/privacy?hl=bs).",

    hostingHeading: "jw29435.de: hosting na GitHub Pages",
    hosting:
      "jw29435.de se isporučuje putem GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, SAD). Pri otvaranju stranice GitHub obrađuje tehnički neophodne podatke i čuva ih u zapisnicima servera: vašu IP adresu, datum i vrijeme, otvorenu adresu i identifikator preglednika. To služi isporuci stranice i njenoj sigurnosti. Pravni osnov je legitimni interes za sigurnom i dostupnom web stranicom (čl. 6. st. 1. tač. (f) GDPR-a). Nemam pristup tim zapisnicima; koliko dugo se čuvaju određuje GitHub, i to onoliko dugo koliko je potrebno za sigurnost i rad usluge. GitHub je certificiran u okviru EU-US Data Privacy Framework. Više informacija: [GitHubova izjava o privatnosti](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare i vlastiti server",
    cloudflare:
      "johannwiebe.de se isporučuje putem mreže Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, SAD). Cloudflare prosljeđuje zahtjeve na moj vlastiti server, štiti od napada i pri tome obrađuje podatke o vezi. Radi zaštite od automatizovanih pristupa Cloudflare može postaviti tehnički neophodan kolačić (na primjer „__cf_bm“). Pravni osnov je legitimni interes za sigurnom i dostupnom web stranicom (čl. 6. st. 1. tač. (f) GDPR-a). Cloudflare je certificiran u okviru EU-US Data Privacy Framework. Više informacija: [Cloudflareova politika privatnosti](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Server vodi zapisnike pristupa s vašom IP adresom, datumom i vremenom, otvorenom adresom, količinom prenesenih podataka, referrerom i identifikatorom preglednika. To služi isporuci stranice, sigurnosti i otklanjanju grešaka (čl. 6. st. 1. tač. (f) GDPR-a). Fajlovi zapisnika brišu se najkasnije nakon 30 dana.",

    emailHeading: "Kontakt putem e-maila",
    email:
      "Ako mi pošaljete e-mail, obrađujem vašu adresu i sadržaj kako bih odgovorio (čl. 6. st. 1. tač. (b) odnosno (f) GDPR-a). E-mailovi na ove domene prosljeđuju se putem Cloudflare Email Routing u moje poštansko sanduče na Gmailu (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irska). Google čuva poruke u mom poštanskom sandučetu; pri tome se podaci mogu prenijeti i u SAD. Google je certificiran u okviru EU-US Data Privacy Framework. Više informacija: [Googleova politika privatnosti](https://policies.google.com/privacy?hl=bs). Poruke brišem kada su riješene i kada ne postoji obaveza njihovog čuvanja.",

    rightsHeading: "Vaša prava",
    rights:
      "Imate pravo na pristup svojim sačuvanim podacima (čl. 15. GDPR-a), na ispravku (čl. 16.), brisanje (čl. 17.), ograničenje obrade (čl. 18.) i prenosivost podataka (čl. 20.). Obradi na osnovu čl. 6. st. 1. tač. (f) GDPR-a možete se usprotiviti (čl. 21.). Dovoljan je e-mail na {email}.",
    complaint:
      "Osim toga, možete podnijeti pritužbu nadzornom organu za zaštitu podataka (čl. 77. GDPR-a). Nadležna je Povjerenica za zaštitu podataka i slobodu informisanja savezne pokrajine Sjeverna Rajna-Vestfalija (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Ažurirano: novembar 2026.",
  },
};

export default bs;
