// Lietuvių. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const lt: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Maži įrankiai tikriems darbams: Serva, Nuvo Explorer ir CLR by NMBRS, sukurti Johanno Wiebe.",
    },
    impressum: {
      title: "Rekvizitai – jw29435",
      description: "Svetainės jw29435.de rekvizitai. jw29435 – Serva, Nuvo Explorer ir CLR by NMBRS namai.",
    },
    datenschutz: {
      title: "Privatumas – jw29435",
      description:
        "Svetainių jw29435.de ir johannwiebe.de privatumo politika: serverio žurnalai, o Google Analytics – tik gavus sutikimą.",
    },
    ogImageAlt: "jw29435 logotipas: nešiojamasis kompiuteris su raidėmis JW gintariniame fone",
  },

  layout: {
    skipLink: "Pereiti prie turinio",
    homeLink: "jw29435 – pradžios puslapis",
    mainNav: "Pagrindinė navigacija",
    navProducts: "Produktai",
    navContact: "Kontaktai",
    navImpressum: "Rekvizitai",
    language: "Kalba",
    footerBy: "Produktą sukūrė **jw29435**",
    footerImpressum: "Rekvizitai",
    footerDatenschutz: "Privatumas",
    cookieSettings: "Slapukų nustatymai",
  },

  languageHint: {
    text: "Šis puslapis pasiekiamas ir lietuvių kalba.",
    action: "Skaityti lietuviškai",
    dismiss: "Uždaryti pranešimą",
  },

  home: {
    eyebrow: "jw29435 · Programos ir žiniatinklio įrankiai",
    title: "Maži įrankiai tikriems darbams.",
    lead: "Trys Johanno Wiebe produktai: vienas planuoja pamaldas, kitas kelionėje atveria jūsų Synology, trečias iš nuotraukų kuria tapybos pagal skaičius šablonus. Visi atrodo vienodai.",
    logoAlt: "jw29435 logotipas: nešiojamasis kompiuteris su raidėmis JW",
    productsHeading: "Produktai",
    contactHeading: "Kontaktai",
    contactText: "Radote klaidą ar turite idėją kuriam nors produktui? Parašykite man.",
    copy: "Kopijuoti",
    copied: "Nukopijuota",
  },

  products: {
    statusLabel: "Būsena:",
    serva: {
      platform: "Žiniatinklis · bendruomenėms",
      description:
        "Planuoja pamaldas, pamokslininkų grafikus ir choro giesmes, o pamokslininkams primena jų datą el. paštu, per WhatsApp arba tiesioginiu pranešimu.",
      action: "Atidaryti Serva",
      status: "Naudojama",
    },
    nuvo: {
      platform: "Android · planuojama iOS",
      description:
        "Naršykite failus savo Synology ir tiesiogiai leiskite muzikos aplankus vietiniame tinkle, per VPN arba HTTPS.",
      action: "Į Play testą",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Iš nuotraukos sukuria tapybos pagal skaičius šabloną, jei norite – tik iš tų spalvų, kurios yra jūsų dažų dėžutėje.",
      action: "Google Play",
      status: "Pasiekiama",
    },
  },

  consent: {
    title: "Ar galiu matuoti, kaip naudojama svetainė?",
    text: "Gavęs jūsų sutikimą, naudoju Google Analytics, kad matyčiau, kurie puslapiai atidaromi. Google tuo metu įrašo slapukus ir perduoda duomenis ir į JAV. Savo pasirinkimą bet kada galite pakeisti poraštėje per „Slapukų nustatymai“. Daugiau – [privatumo politikoje](page:datenschutz).",
    currentGranted: "Dabar: leidžiama",
    currentDenied: "Dabar: atmesta",
    deny: "Atmesti",
    allow: "Leisti",
  },

  legalNotice: {
    text: "Tai vertimas. Teisiškai privaloma yra tik versija vokiečių kalba.",
    link: "Į versiją vokiečių kalba",
  },

  impressum: {
    title: "Rekvizitai",
    intro: "Šie rekvizitai taikomi svetainėms jw29435.de ir johannwiebe.de.",
    providerHeading: "Informacija pagal DDG (Vokietijos skaitmeninių paslaugų įstatymas) 5 §",
    contactHeading: "Kontaktai",
    email: "El. paštas: {email}",
  },

  datenschutz: {
    title: "Privatumo politika",
    intro:
      "Ši politika taikoma svetainėms jw29435.de ir johannwiebe.de. Joje aprašyta, kokie duomenys atsiranda lankantis ir kas su jais vyksta.",
    serva:
      "Serva turi savo privatumo politiką: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Duomenų valdytojas",
    controllerEmail: "El. paštas: {email}",

    cookiesHeading: "Slapukai ir analizė",
    cookies:
      "Be jūsų sutikimo nė viena svetainė pati neįrašo slapukų, nenaudoja analizės įrankių ar sekiklių ir neįterpia trečiųjų šalių turinio. Šriftai pateikiami kartu su puslapiu; jūsų naršyklė tam nesijungia prie Google Fonts ar kitų paslaugų. Svetainėje jw29435.de galite leisti Google Analytics (žr. toliau).",

    analyticsHeading: "jw29435.de: Google Analytics gavus sutikimą",
    analytics1:
      "Jei reklamjuostėje spustelėsite „Leisti“, jw29435.de naudos Google Analytics 4 – Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Airija) žiniatinklio analizės paslaugą. Ji leidžia man apibendrintai matyti, kurie puslapiai kaip dažnai atidaromi, iš kur ateina lankytojai ir kokiais įrenginiais bei naršyklėmis naudojamasi. Iki tol Google Analytics neįkeliama.",
    analytics2:
      "Tam Google Analytics jūsų naršyklėje įrašo slapukus („_ga“ ir „_ga_1F5GCWHXKX“, iki dvejų metų) ir tvarko naudojimo duomenis, pavyzdžiui, atidarytus puslapius, laiką, nukreipiantįjį puslapį, apytikslę vietą, įrenginį ir naršyklę. Google Analytics 4 nesaugo IP adresų. Google Signals ir asmeninta reklama išjungtos. Duomenys tuo metu gali būti perduodami ir Google LLC į JAV; Google yra sertifikuota pagal EU-US Data Privacy Framework.",
    analytics3:
      "Pagrindas – jūsų sutikimas (Bendrojo duomenų apsaugos reglamento (BDAR) 6 straipsnio 1 dalies a punktas, TDDDG – Vokietijos telekomunikacijų ir skaitmeninių paslaugų duomenų apsaugos įstatymo – 25 § 1 dalis). Jį bet kada galite atšaukti ateities atžvilgiu: poraštėje spustelėkite „Slapukų nustatymai“, tada „Atmesti“. Google Analytics slapukai tuo metu ištrinami. Patį jūsų pasirinkimą svetainė išsaugo vietinėje naršyklės saugykloje („analytics-consent“), kad reklamjuostė nebūtų rodoma kiekvieno apsilankymo metu; tam sutikimo nereikia (TDDDG 25 § 2 dalies 2 punktas). Daugiau informacijos: [Google privatumo politika](https://policies.google.com/privacy?hl=lt).",

    hostingHeading: "jw29435.de: priegloba GitHub Pages",
    hosting:
      "jw29435.de pateikiama per GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, JAV). Atidarius puslapį, GitHub tvarko techniškai būtinus duomenis ir saugo juos serverio žurnaluose: jūsų IP adresą, datą ir laiką, atidarytą adresą ir naršyklės identifikatorių. Tai skirta puslapiui pateikti ir jo saugumui užtikrinti. Pagrindas – teisėtas interesas turėti saugią ir pasiekiamą svetainę (BDAR 6 straipsnio 1 dalies f punktas). Prie šių žurnalų prieigos neturiu; kiek laiko jie saugomi, nustato GitHub, būtent tiek, kiek reikia paslaugos saugumui ir veikimui. GitHub yra sertifikuota pagal EU-US Data Privacy Framework. Daugiau informacijos: [GitHub privatumo pareiškimas](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare ir nuosavas serveris",
    cloudflare:
      "johannwiebe.de pateikiama per Cloudflare tinklą (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, JAV). Cloudflare persiunčia užklausas į mano nuosavą serverį, apsaugo nuo atakų ir tuo metu tvarko ryšio duomenis. Siekdama apsaugoti nuo automatizuotos prieigos, Cloudflare gali įrašyti techniškai būtiną slapuką (pavyzdžiui, „__cf_bm“). Pagrindas – teisėtas interesas turėti saugią ir pasiekiamą svetainę (BDAR 6 straipsnio 1 dalies f punktas). Cloudflare yra sertifikuota pagal EU-US Data Privacy Framework. Daugiau informacijos: [Cloudflare privatumo politika](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Serveris rašo prieigos žurnalus, kuriuose yra jūsų IP adresas, data ir laikas, atidarytas adresas, perduotų duomenų kiekis, nukreipiantysis puslapis ir naršyklės identifikatorius. Tai skirta puslapiui pateikti, saugumui ir klaidoms ieškoti (BDAR 6 straipsnio 1 dalies f punktas). Žurnalų failai ištrinami ne vėliau kaip po 30 dienų.",

    emailHeading: "Susisiekimas el. paštu",
    email:
      "Jei parašote man el. laišką, tvarkau jūsų adresą ir turinį, kad galėčiau atsakyti (BDAR 6 straipsnio 1 dalies b arba f punktas). Į šiuos domenus siunčiami laiškai per Cloudflare Email Routing persiunčiami į mano Gmail pašto dėžutę (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Airija). Google saugo laiškus mano pašto dėžutėje; tuo metu duomenys gali būti perduodami ir į JAV. Google yra sertifikuota pagal EU-US Data Privacy Framework. Daugiau informacijos: [Google privatumo politika](https://policies.google.com/privacy?hl=lt). Laiškus ištrinu, kai jie išnagrinėti ir nėra pareigos jų saugoti.",

    rightsHeading: "Jūsų teisės",
    rights:
      "Turite teisę gauti informaciją apie saugomus jūsų duomenis (BDAR 15 straipsnis), teisę reikalauti juos ištaisyti (16 straipsnis), ištrinti (17 straipsnis), apriboti tvarkymą (18 straipsnis) ir teisę į duomenų perkeliamumą (20 straipsnis). Galite nesutikti su tvarkymu, grindžiamu BDAR 6 straipsnio 1 dalies f punktu (21 straipsnis). Pakanka el. laiško adresu {email}.",
    complaint:
      "Be to, galite pateikti skundą duomenų apsaugos priežiūros institucijai (BDAR 77 straipsnis). Kompetentinga institucija – Šiaurės Reino-Vestfalijos žemės duomenų apsaugos ir informacijos laisvės įgaliotinė (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Atnaujinta: 2026 m. lapkritis",
  },
};

export default lt;
