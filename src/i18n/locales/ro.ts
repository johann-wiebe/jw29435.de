// Română. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const ro: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Instrumente mici pentru procese reale: Serva, Nuvo Explorer și CLR by NMBRS, de Johann Wiebe.",
    },
    impressum: {
      title: "Informații legale – jw29435",
      description: "Informații legale pentru jw29435.de, casa comună a Serva, Nuvo Explorer și CLR by NMBRS.",
    },
    datenschutz: {
      title: "Confidențialitate – jw29435",
      description:
        "Politica de confidențialitate pentru jw29435.de și johannwiebe.de: jurnale de server și Google Analytics doar cu consimțământ.",
    },
    ogImageAlt: "Logo jw29435: laptop cu literele JW",
  },

  layout: {
    skipLink: "Salt la conținut",
    homeLink: "jw29435 – pagina principală",
    mainNav: "Navigare principală",
    navProducts: "Produse",
    navContact: "Contact",
    navImpressum: "Informații legale",
    language: "Limbă",
    footerBy: "Un produs de la **jw29435**",
    footerImpressum: "Informații legale",
    footerDatenschutz: "Confidențialitate",
    cookieSettings: "Setări cookie-uri",
  },

  languageHint: {
    text: "Această pagină este disponibilă și în limba română.",
    action: "Citiți în limba română",
    dismiss: "Închideți notificarea",
  },

  home: {
    eyebrow: "jw29435 · Aplicații și instrumente web",
    title: "Instrumente mici pentru procese reale.",
    lead: "Trei produse de Johann Wiebe: unul planifică slujbele religioase, unul deschide propriul Synology de oriunde, unul transformă fotografiile în șabloane de pictură pe numere. Toate arată la fel.",
    logoAlt: "Logo jw29435: laptop cu literele JW",
    productsHeading: "Produse",
    contactHeading: "Contact",
    contactText: "Ați găsit o eroare sau aveți o idee pentru unul dintre produse? Scrieți-mi.",
    copy: "Copiați",
    copied: "Copiat",
  },

  products: {
    statusLabel: "Stare:",
    serva: {
      platform: "Web · pentru comunități bisericești",
      description:
        "Planifică slujbele religioase, rândul predicatorilor și cântările corului și le amintește predicatorilor de programare prin e-mail, WhatsApp sau notificare push.",
      action: "Deschideți Serva",
      status: "În folosință",
    },
    nuvo: {
      platform: "Android · iOS planificat",
      description:
        "Răsfoiți fișierele de pe propriul Synology și redați direct dosare cu muzică, în rețeaua locală, prin VPN sau prin HTTPS.",
      action: "La testul Play",
      status: "Alpha",
    },
    clr: {
      platform: "Android",
      description:
        "Transformă o fotografie într-un șablon de pictură pe numere, la cerere doar cu culorile din cutia dumneavoastră de acuarele.",
      action: "În Play Store",
      status: "Disponibil",
    },
  },

  consent: {
    title: "Pot măsura cum este folosit site-ul?",
    text: "Cu consimțământul dumneavoastră folosesc Google Analytics pentru a vedea ce pagini sunt accesate. Google setează cookie-uri și transferă date și în SUA. Vă puteți modifica oricând alegerea prin „Setări cookie-uri” din subsolul paginii. Mai multe în [politica de confidențialitate](page:datenschutz).",
    currentGranted: "În prezent: permis",
    currentDenied: "În prezent: refuzat",
    deny: "Refuzați",
    allow: "Permiteți",
  },

  legalNotice: {
    text: "Aceasta este o traducere. Doar versiunea în limba germană are valoare juridică obligatorie.",
    link: "La versiunea în limba germană",
  },

  impressum: {
    title: "Informații legale",
    intro: "Aceste informații legale se aplică site-urilor jw29435.de și johannwiebe.de.",
    providerHeading: "Informații conform § 5 DDG (Legea germană privind serviciile digitale)",
    contactHeading: "Contact",
    email: "E-mail: {email}",
  },

  datenschutz: {
    title: "Politica de confidențialitate",
    intro:
      "Această politică se aplică site-urilor jw29435.de și johannwiebe.de. Ea descrie ce date apar la vizitare și ce se întâmplă cu ele.",
    serva:
      "Serva are propria politică de confidențialitate: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Operator",
    controllerEmail: "E-mail: {email}",

    cookiesHeading: "Cookie-uri și analiză",
    cookies:
      "Fără consimțământul dumneavoastră, niciunul dintre site-uri nu setează el însuși cookie-uri, nu folosește Analytics și nici instrumente de urmărire și nu încorporează conținut de la terți. Fonturile sunt livrate împreună cu pagina; browserul dumneavoastră nu stabilește pentru ele nicio conexiune cu Google Fonts sau cu alte servicii. Pe jw29435.de puteți permite Google Analytics (vezi mai jos).",

    analyticsHeading: "jw29435.de: Google Analytics cu consimțământ",
    analytics1:
      "Dacă dați clic pe „Permiteți” în banner, jw29435.de folosește Google Analytics 4, un serviciu de analiză web al Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irlanda). Astfel văd, în formă agregată, ce pagini sunt accesate și cât de des, de unde provin vizitele și cu ce dispozitive și browsere. Înainte de aceasta, Google Analytics nu este încărcat.",
    analytics2:
      "În acest scop, Google Analytics stochează cookie-uri în browserul dumneavoastră („_ga” și „_ga_1F5GCWHXKX”, până la doi ani) și prelucrează date de utilizare precum paginile accesate, momentul, referrerul, locația aproximativă, dispozitivul și browserul. Google Analytics 4 nu stochează adrese IP. Google Signals și publicitatea personalizată sunt dezactivate. În acest proces, datele pot fi transferate și către Google LLC în SUA; Google este certificată în cadrul EU-US Data Privacy Framework.",
    analytics3:
      "Temeiul este consimțământul dumneavoastră (art. 6 alin. (1) lit. (a) din RGPD, § 25 alin. 1 TDDDG). Îl puteți retrage oricând, cu efect pentru viitor: dați clic în subsolul paginii pe „Setări cookie-uri” și apoi pe „Refuzați”. Cookie-urile Google Analytics sunt șterse în acest caz. Alegerea în sine este salvată de site în spațiul de stocare local al browserului dumneavoastră („analytics-consent”), pentru ca bannerul să nu apară la fiecare vizită; pentru aceasta nu este necesar consimțământul (§ 25 alin. 2 nr. 2 TDDDG). Informații suplimentare: [Politica de confidențialitate Google](https://policies.google.com/privacy?hl=ro).",

    hostingHeading: "jw29435.de: găzduire pe GitHub Pages",
    hosting:
      "jw29435.de este livrat prin GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, SUA). La accesarea unei pagini, GitHub prelucrează date necesare din punct de vedere tehnic și le stochează în jurnale de server: adresa dumneavoastră IP, data și ora, adresa accesată și identificatorul browserului. Aceasta servește livrării paginii și securității acesteia. Temeiul este interesul legitim pentru un site securizat și disponibil (art. 6 alin. (1) lit. (f) din RGPD). Nu am acces la aceste jurnale; cât timp sunt păstrate stabilește GitHub, și anume atât cât este necesar pentru securitatea și funcționarea serviciului. GitHub este certificată în cadrul EU-US Data Privacy Framework. Informații suplimentare: [Declarația de confidențialitate GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare și server propriu",
    cloudflare:
      "johannwiebe.de este livrat prin rețeaua Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, SUA). Cloudflare redirecționează solicitările către serverul meu propriu, protejează împotriva atacurilor și prelucrează în acest proces datele de conexiune. Pentru protecția împotriva accesărilor automatizate, Cloudflare poate seta un cookie necesar din punct de vedere tehnic (de exemplu „__cf_bm”). Temeiul este interesul legitim pentru un site securizat și disponibil (art. 6 alin. (1) lit. (f) din RGPD). Cloudflare este certificată în cadrul EU-US Data Privacy Framework. Informații suplimentare: [Politica de confidențialitate Cloudflare](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Serverul scrie jurnale de acces cu adresa dumneavoastră IP, data și ora, adresa accesată, volumul de date transferat, referrerul și identificatorul browserului. Aceasta servește livrării paginii, securității și depanării (art. 6 alin. (1) lit. (f) din RGPD). Fișierele jurnal sunt șterse după cel mult 30 de zile.",

    emailHeading: "Contact prin e-mail",
    email:
      "Dacă îmi trimiteți un e-mail, prelucrez adresa și conținutul acestuia pentru a vă răspunde (art. 6 alin. (1) lit. (b), respectiv lit. (f) din RGPD). E-mailurile către aceste domenii sunt redirecționate prin Cloudflare Email Routing către căsuța mea poștală Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanda). Google stochează mesajele în căsuța mea poștală; în acest proces, datele pot fi transferate și în SUA. Google este certificată în cadrul EU-US Data Privacy Framework. Informații suplimentare: [Politica de confidențialitate Google](https://policies.google.com/privacy?hl=ro). Șterg mesajele după ce au fost rezolvate și nu există o obligație de păstrare.",

    rightsHeading: "Drepturile dumneavoastră",
    rights:
      "Aveți dreptul de acces la datele dumneavoastră stocate (art. 15 din RGPD), de rectificare (art. 16), de ștergere (art. 17), de restricționare a prelucrării (art. 18) și de portabilitate a datelor (art. 20). Vă puteți opune unei prelucrări întemeiate pe art. 6 alin. (1) lit. (f) din RGPD (art. 21). Este suficient un e-mail la {email}.",
    complaint:
      "De asemenea, puteți depune o plângere la o autoritate de supraveghere a protecției datelor (art. 77 din RGPD). Autoritatea competentă este Comisarul de stat pentru protecția datelor și libertatea informației din Renania de Nord-Westfalia (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Actualizat la: noiembrie 2026",
  },
};

export default ro;
