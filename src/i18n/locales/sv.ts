// Svenska. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const sv: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Små verktyg för verkliga arbetsflöden: Serva, Nuvo Explorer och CLR by NMBRS av Johann Wiebe.",
    },
    impressum: {
      title: "Juridisk information – jw29435",
      description: "Juridisk information för jw29435.de, paraplyet för Serva, Nuvo Explorer och CLR by NMBRS.",
    },
    datenschutz: {
      title: "Integritetspolicy – jw29435",
      description:
        "Integritetspolicy för jw29435.de och johannwiebe.de: serverloggar och Google Analytics bara med samtycke.",
    },
    ogImageAlt: "jw29435-logotyp: bärbar dator med bokstäverna JW",
  },

  layout: {
    skipLink: "Hoppa till innehållet",
    homeLink: "jw29435 – startsida",
    mainNav: "Huvudnavigering",
    navProducts: "Produkter",
    navContact: "Kontakt",
    navImpressum: "Juridisk info",
    language: "Språk",
    footerBy: "En produkt från **jw29435**",
    footerImpressum: "Juridisk info",
    footerDatenschutz: "Integritet",
    cookieSettings: "Cookieinställningar",
  },

  languageHint: {
    text: "Den här sidan finns även på svenska.",
    action: "Läs på svenska",
    dismiss: "Stäng meddelandet",
  },

  home: {
    eyebrow: "jw29435 · Appar och webbverktyg",
    title: "Små verktyg för verkliga arbetsflöden.",
    lead: "Tre produkter från Johann Wiebe: en planerar gudstjänster, en öppnar din egen Synology när du är på språng, en gör om foton till mallar för måla efter nummer. Alla ser likadana ut.",
    logoAlt: "jw29435-logotyp: bärbar dator med bokstäverna JW",
    productsHeading: "Produkter",
    contactHeading: "Kontakt",
    contactText: "Har du hittat ett fel eller har en idé till någon av produkterna? Skriv till mig.",
    copy: "Kopiera",
    copied: "Kopierat",
  },

  products: {
    statusLabel: "Status:",
    serva: {
      platform: "Webb · för församlingar",
      description:
        "Planerar gudstjänster, predikoturer och körsånger och påminner predikanter om deras tur via e-post, WhatsApp eller push.",
      action: "Öppna Serva",
      status: "I bruk",
    },
    nuvo: {
      platform: "Android · iOS planerad",
      description:
        "Bläddra bland filerna på din egen Synology och spela upp musikmappar direkt, i det lokala nätverket, via VPN eller över HTTPS.",
      action: "Till Play-testet",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Gör om ett foto till en mall för måla efter nummer, om du vill bara med de färger som finns i din färglåda.",
      action: "I Play Butik",
      status: "Tillgänglig",
    },
  },

  consent: {
    title: "Får jag mäta hur webbplatsen används?",
    text: "Med ditt samtycke använder jag Google Analytics för att se vilka sidor som besöks. Google sätter då cookies och överför även data till USA. Du kan när som helst ändra ditt val via ”Cookieinställningar” i sidfoten. Läs mer i [integritetspolicyn](page:datenschutz).",
    currentGranted: "Aktuellt: tillåtet",
    currentDenied: "Aktuellt: avböjt",
    deny: "Avböj",
    allow: "Tillåt",
  },

  legalNotice: {
    text: "Detta är en översättning. Endast den tyska versionen är juridiskt bindande.",
    link: "Till den tyska versionen",
  },

  impressum: {
    title: "Juridisk information",
    intro: "Denna juridiska information gäller för webbplatserna jw29435.de och johannwiebe.de.",
    providerHeading: "Uppgifter enligt § 5 DDG (tyska lagen om digitala tjänster)",
    contactHeading: "Kontakt",
    email: "E-post: {email}",
  },

  datenschutz: {
    title: "Integritetspolicy",
    intro:
      "Denna policy gäller för webbplatserna jw29435.de och johannwiebe.de. Den beskriver vilka uppgifter som uppstår vid ett besök och vad som händer med dem.",
    serva:
      "Serva har en egen integritetspolicy: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Personuppgiftsansvarig",
    controllerEmail: "E-post: {email}",

    cookiesHeading: "Cookies och analys",
    cookies:
      "Utan ditt samtycke sätter ingen av webbplatserna själv några cookies, använder ingen analys och inga spårare och bäddar inte in innehåll från tredje part. Typsnitten levereras tillsammans med sidan; din webbläsare ansluter därför inte till Google Fonts eller andra tjänster. På jw29435.de kan du tillåta Google Analytics (se nedan).",

    analyticsHeading: "jw29435.de: Google Analytics med samtycke",
    analytics1:
      "Om du klickar på ”Tillåt” i bannern använder jw29435.de Google Analytics 4, en webbanalystjänst från Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Med den ser jag i sammanställd form vilka sidor som besöks hur ofta, varifrån besöken kommer och med vilka enheter och webbläsare. Innan dess läses Google Analytics inte in.",
    analytics2:
      "Google Analytics sparar för detta cookies i din webbläsare (”_ga” och ”_ga_1F5GCWHXKX”, i upp till två år) och behandlar användningsdata som besökta sidor, tidpunkt, hänvisande sida, ungefärlig plats, enhet och webbläsare. Google Analytics 4 sparar inga IP-adresser. Google Signals och personanpassad reklam är avstängda. Data kan då även överföras till Google LLC i USA; Google är certifierat enligt EU-US Data Privacy Framework.",
    analytics3:
      "Grunden är ditt samtycke (art. 6.1 a GDPR, § 25.1 TDDDG). Du kan när som helst återkalla det med verkan för framtiden: klicka på ”Cookieinställningar” i sidfoten och sedan på ”Avböj”. Cookies från Google Analytics raderas då. Själva ditt val sparar webbplatsen i webbläsarens lokala lagring (”analytics-consent”) så att bannern inte visas vid varje besök; för detta krävs inget samtycke (§ 25.2 punkt 2 TDDDG). Mer information: [Googles integritetspolicy](https://policies.google.com/privacy?hl=sv).",

    hostingHeading: "jw29435.de: webbhotell hos GitHub Pages",
    hosting:
      "jw29435.de levereras via GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). När en sida hämtas behandlar GitHub tekniskt nödvändiga uppgifter och sparar dem i serverloggar: din IP-adress, datum och tid, den hämtade adressen och webbläsarens identifierare. Det tjänar till att leverera sidan och till dess säkerhet. Grunden är det berättigade intresset av en säker och tillgänglig webbplats (art. 6.1 f GDPR). Jag har ingen åtkomst till dessa loggar; hur länge de sparas bestämmer GitHub, nämligen så länge det är nödvändigt för tjänstens säkerhet och drift. GitHub är certifierat enligt EU-US Data Privacy Framework. Mer information: [GitHubs integritetsmeddelande](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare och egen server",
    cloudflare:
      "johannwiebe.de levereras via Cloudflares nätverk (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare vidarebefordrar förfrågningarna till min egen server, skyddar mot attacker och behandlar då anslutningsuppgifterna. För att skydda mot automatiserad åtkomst kan Cloudflare sätta en tekniskt nödvändig cookie (till exempel ”__cf_bm”). Grunden är det berättigade intresset av en säker och tillgänglig webbplats (art. 6.1 f GDPR). Cloudflare är certifierat enligt EU-US Data Privacy Framework. Mer information: [Cloudflares integritetspolicy](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Servern skriver åtkomstloggar med din IP-adress, datum och tid, den hämtade adressen, den överförda datamängden, den hänvisande sidan och webbläsarens identifierare. Det tjänar till att leverera sidan, till säkerheten och till felsökning (art. 6.1 f GDPR). Loggfilerna raderas senast efter 30 dagar.",

    emailHeading: "Kontakt via e-post",
    email:
      "Om du skickar ett e-postmeddelande till mig behandlar jag din adress och innehållet för att kunna svara (art. 6.1 b respektive f GDPR). E-post till dessa domäner vidarebefordras via Cloudflare Email Routing till min brevlåda hos Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Google sparar meddelandena i min brevlåda; data kan då även överföras till USA. Google är certifierat enligt EU-US Data Privacy Framework. Mer information: [Googles integritetspolicy](https://policies.google.com/privacy?hl=sv). Jag raderar meddelandena när de är färdigbehandlade och det inte finns någon skyldighet att spara dem.",

    rightsHeading: "Dina rättigheter",
    rights:
      "Du har rätt till tillgång till dina sparade uppgifter (art. 15 GDPR), till rättelse (art. 16), radering (art. 17), begränsning av behandlingen (art. 18) och dataportabilitet (art. 20). Du kan invända mot en behandling som grundas på art. 6.1 f GDPR (art. 21). Ett e-postmeddelande till {email} räcker.",
    complaint:
      "Du kan också lämna in ett klagomål till en tillsynsmyndighet för dataskydd (art. 77 GDPR). Behörig är delstaten Nordrhein-Westfalens kommissionär för dataskydd och informationsfrihet (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Senast uppdaterad: november 2026",
  },
};

export default sv;
