// Hrvatski. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const hr: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Mali alati za stvarne radne procese: Serva, Nuvo Explorer i CLR by NMBRS, autor Johann Wiebe.",
    },
    impressum: {
      title: "Pravne napomene – jw29435",
      description: "Pravne napomene za jw29435.de, krovnu stranicu za Serva, Nuvo Explorer i CLR by NMBRS.",
    },
    datenschutz: {
      title: "Privatnost – jw29435",
      description:
        "Pravila privatnosti za jw29435.de i johannwiebe.de: zapisnici poslužitelja, a Google Analytics samo uz privolu.",
    },
    ogImageAlt: "Logotip jw29435: prijenosno računalo sa slovima JW",
  },

  layout: {
    skipLink: "Preskoči na sadržaj",
    homeLink: "jw29435 – početna stranica",
    mainNav: "Glavna navigacija",
    navProducts: "Proizvodi",
    navContact: "Kontakt",
    navImpressum: "Pravne napomene",
    language: "Jezik",
    footerBy: "Proizvod: **jw29435**",
    footerImpressum: "Pravne napomene",
    footerDatenschutz: "Privatnost",
    cookieSettings: "Postavke kolačića",
  },

  languageHint: {
    text: "Ova je stranica dostupna i na hrvatskom.",
    action: "Čitajte na hrvatskom",
    dismiss: "Zatvori obavijest",
  },

  home: {
    eyebrow: "jw29435 · Aplikacije i web-alati",
    title: "Mali alati za stvarne radne procese.",
    lead: "Tri proizvoda Johanna Wiebea: jedan planira bogoslužja, jedan na putu otvara vaš vlastiti Synology, jedan od fotografija izrađuje predloške za bojanje po brojevima. Svi izgledaju jednako.",
    logoAlt: "Logotip jw29435: prijenosno računalo sa slovima JW",
    productsHeading: "Proizvodi",
    contactHeading: "Kontakt",
    contactText: "Pronašli ste pogrešku ili imate ideju za neki od proizvoda? Pišite mi.",
    copy: "Kopiraj",
    copied: "Kopirano",
  },

  products: {
    statusLabel: "Status:",
    serva: {
      platform: "Web · za crkvene zajednice",
      description:
        "Planira bogoslužja, propovjedničke službe i zborske pjesme te propovjednike podsjeća na njihov termin e-poštom, WhatsAppom ili push obaviješću.",
      action: "Otvori Serva",
      status: "U uporabi",
    },
    nuvo: {
      platform: "Android · iOS u planu",
      description:
        "Pretražujte datoteke na vlastitom uređaju Synology i izravno reproducirajte glazbene mape, u lokalnoj mreži, putem VPN-a ili HTTPS-a.",
      action: "Na Play test",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Od fotografije izrađuje predložak za bojanje po brojevima, po želji samo s bojama koje imate u svojoj kutiji boja.",
      action: "Na Google Playu",
      status: "Dostupno",
    },
  },

  consent: {
    title: "Smijem li mjeriti kako se stranica koristi?",
    text: "Uz vašu privolu koristim Google Analytics kako bih vidio koje se stranice otvaraju. Pritom Google postavlja kolačiće i prenosi podatke i u SAD. Svoj odabir u bilo kojem trenutku možete promijeniti putem „Postavke kolačića“ u podnožju. Više o tome u [pravilima privatnosti](page:datenschutz).",
    currentGranted: "Trenutačno: dopušteno",
    currentDenied: "Trenutačno: odbijeno",
    deny: "Odbij",
    allow: "Dopusti",
  },

  legalNotice: {
    text: "Ovo je prijevod. Pravno je obvezujuća samo njemačka verzija.",
    link: "Na njemačku verziju",
  },

  impressum: {
    title: "Pravne napomene",
    intro: "Ove pravne napomene vrijede za web-stranice jw29435.de i johannwiebe.de.",
    providerHeading: "Podaci u skladu s § 5 DDG-a (njemački Zakon o digitalnim uslugama)",
    contactHeading: "Kontakt",
    email: "E-pošta: {email}",
  },

  datenschutz: {
    title: "Pravila privatnosti",
    intro:
      "Ova pravila vrijede za web-stranice jw29435.de i johannwiebe.de. Opisuju koji podaci nastaju pri posjetu i što se s njima događa.",
    serva:
      "Serva ima vlastita pravila privatnosti: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Voditelj obrade",
    controllerEmail: "E-pošta: {email}",

    cookiesHeading: "Kolačići i analiza",
    cookies:
      "Bez vaše privole nijedna od dviju web-stranica sama ne postavlja kolačiće, ne koristi analitiku ni alate za praćenje i ne ugrađuje sadržaje trećih strana. Fontovi se isporučuju zajedno sa stranicom; vaš preglednik za njih ne uspostavlja vezu s Google Fontsom ni s drugim servisima. Na jw29435.de možete dopustiti Google Analytics (vidi niže).",

    analyticsHeading: "jw29435.de: Google Analytics uz privolu",
    analytics1:
      "Ako u banneru kliknete „Dopusti“, jw29435.de koristi Google Analytics 4, uslugu web-analitike tvrtke Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irska). Tako u sažetom obliku vidim koje se stranice koliko često otvaraju, odakle dolaze posjeti te s kojim se uređajima i preglednicima. Prije toga Google Analytics se ne učitava.",
    analytics2:
      "Google Analytics u tu svrhu sprema kolačiće u vaš preglednik („_ga“ i „_ga_1F5GCWHXKX“, do dvije godine) i obrađuje podatke o korištenju kao što su otvorene stranice, vrijeme, referrer, približna lokacija, uređaj i preglednik. Google Analytics 4 ne sprema IP adrese. Google Signals i personalizirano oglašavanje isključeni su. Pritom se podaci mogu prenijeti i tvrtki Google LLC u SAD-u; Google je certificiran u okviru EU-US Data Privacy Framework.",
    analytics3:
      "Pravna osnova je vaša privola (čl. 6. st. 1. toč. (a) Opće uredbe o zaštiti podataka, OUZP; § 25 st. 1. njemačkog TDDDG-a). Možete je u bilo kojem trenutku povući s učinkom za budućnost: u podnožju kliknite „Postavke kolačića“, a zatim „Odbij“. Kolačići Google Analyticsa pritom se brišu. Sam vaš odabir stranica sprema u lokalnu pohranu vašeg preglednika („analytics-consent“) kako se banner ne bi pojavljivao pri svakom posjetu; za to nije potrebna privola (§ 25 st. 2. br. 2. TDDDG-a). Više informacija: [Googleova pravila privatnosti](https://policies.google.com/privacy?hl=hr).",

    hostingHeading: "jw29435.de: hosting na GitHub Pages",
    hosting:
      "jw29435.de isporučuje se putem GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, SAD). Pri otvaranju stranice GitHub obrađuje tehnički nužne podatke i sprema ih u zapisnike poslužitelja: vašu IP adresu, datum i vrijeme, otvorenu adresu i identifikator preglednika. To služi isporuci stranice i njezinoj sigurnosti. Pravna osnova je legitimni interes za sigurnom i dostupnom web-stranicom (čl. 6. st. 1. toč. (f) OUZP-a). Nemam pristup tim zapisnicima; koliko se dugo čuvaju određuje GitHub, i to onoliko dugo koliko je potrebno za sigurnost i rad usluge. GitHub je certificiran u okviru EU-US Data Privacy Framework. Više informacija: [GitHubova izjava o privatnosti](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare i vlastiti poslužitelj",
    cloudflare:
      "johannwiebe.de isporučuje se putem mreže Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, SAD). Cloudflare prosljeđuje zahtjeve na moj vlastiti poslužitelj, štiti od napada i pritom obrađuje podatke o vezi. Radi zaštite od automatiziranih pristupa Cloudflare može postaviti tehnički nužan kolačić (na primjer „__cf_bm“). Pravna osnova je legitimni interes za sigurnom i dostupnom web-stranicom (čl. 6. st. 1. toč. (f) OUZP-a). Cloudflare je certificiran u okviru EU-US Data Privacy Framework. Više informacija: [Cloudflareova pravila privatnosti](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Poslužitelj vodi zapisnike pristupa s vašom IP adresom, datumom i vremenom, otvorenom adresom, količinom prenesenih podataka, referrerom i identifikatorom preglednika. To služi isporuci stranice, sigurnosti i otklanjanju pogrešaka (čl. 6. st. 1. toč. (f) OUZP-a). Datoteke zapisnika brišu se najkasnije nakon 30 dana.",

    emailHeading: "Kontakt e-poštom",
    email:
      "Ako mi pošaljete e-poruku, obrađujem vašu adresu i sadržaj kako bih odgovorio (čl. 6. st. 1. toč. (b) odnosno (f) OUZP-a). E-poruke na ove domene prosljeđuju se putem Cloudflare Email Routing u moj poštanski sandučić na Gmailu (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irska). Google sprema poruke u mojem poštanskom sandučiću; pritom se podaci mogu prenijeti i u SAD. Google je certificiran u okviru EU-US Data Privacy Framework. Više informacija: [Googleova pravila privatnosti](https://policies.google.com/privacy?hl=hr). Poruke brišem kada su riješene i kada ne postoji obveza njihova čuvanja.",

    rightsHeading: "Vaša prava",
    rights:
      "Imate pravo na pristup svojim spremljenim podacima (čl. 15. OUZP-a), na ispravak (čl. 16.), brisanje (čl. 17.), ograničenje obrade (čl. 18.) i prenosivost podataka (čl. 20.). Obradi na temelju čl. 6. st. 1. toč. (f) OUZP-a možete se usprotiviti (čl. 21.). Dovoljna je e-poruka na {email}.",
    complaint:
      "Osim toga, možete podnijeti pritužbu nadzornom tijelu za zaštitu podataka (čl. 77. OUZP-a). Nadležna je Povjerenica za zaštitu podataka i slobodu informiranja savezne zemlje Sjeverna Rajna-Vestfalija (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Ažurirano: studeni 2026.",
  },
};

export default hr;
