// English (British spelling). Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const en: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Small tools for real workflows: Serva, Nuvo Explorer and CLR by NMBRS by Johann Wiebe.",
    },
    impressum: {
      title: "Legal notice – jw29435",
      description: "Legal notice of jw29435.de, the home of Serva, Nuvo Explorer and CLR by NMBRS.",
    },
    datenschutz: {
      title: "Privacy policy – jw29435",
      description:
        "Privacy policy for jw29435.de and johannwiebe.de: server logs, and Google Analytics only with consent.",
    },
    ogImageAlt: "jw29435 logo: laptop with the letters JW on amber",
  },

  layout: {
    skipLink: "Skip to content",
    homeLink: "jw29435 – home page",
    mainNav: "Main navigation",
    navProducts: "Products",
    navContact: "Contact",
    navImpressum: "Legal notice",
    language: "Language",
    footerBy: "A product by **jw29435**",
    footerImpressum: "Legal notice",
    footerDatenschutz: "Privacy",
    cookieSettings: "Cookie settings",
  },

  languageHint: {
    text: "This page is also available in English.",
    action: "Read in English",
    dismiss: "Dismiss",
  },

  home: {
    eyebrow: "jw29435 · Apps and web tools",
    title: "Small tools for real workflows.",
    lead: "Three products by Johann Wiebe: one plans church services, one opens your own Synology on the go, one turns photos into painting templates. All three share the same look.",
    logoAlt: "jw29435 logo: laptop with the letters JW",
    productsHeading: "Products",
    contactHeading: "Contact",
    contactText: "Found a bug or have an idea for one of the products? Drop me a line.",
    copy: "Copy",
    copied: "Copied",
  },

  products: {
    statusLabel: "Status:",
    serva: {
      platform: "Web · for congregations",
      description:
        "Plans church services, preaching rotas and choir songs, and reminds preachers of their date by email, WhatsApp or push notification.",
      action: "Open Serva",
      status: "In use",
    },
    nuvo: {
      platform: "Android · iOS planned",
      description:
        "Browse the files on your own Synology and play music folders directly, on your local network, via VPN or over HTTPS.",
      action: "Join the Play test",
      status: "Alpha",
    },
    clr: {
      platform: "Android",
      description:
        "Turns a photo into a paint-by-number template, if you like using only the colours in your own paint box.",
      action: "Get it on Google Play",
      status: "Available",
    },
  },

  consent: {
    title: "May I measure how this site is used?",
    text: "With your consent, I use Google Analytics to see which pages are visited. Google sets cookies and also transfers data to the USA. You can change your choice at any time via “Cookie settings” in the footer. More in the [privacy policy](page:datenschutz).",
    currentGranted: "Current choice: allowed",
    currentDenied: "Current choice: declined",
    deny: "Decline",
    allow: "Allow",
  },

  legalNotice: {
    text: "This is a translation. Only the German version is legally binding.",
    link: "Read the German version",
  },

  impressum: {
    title: "Legal notice",
    intro: "This legal notice applies to the websites jw29435.de and johannwiebe.de.",
    providerHeading: "Information pursuant to § 5 DDG (German Digital Services Act)",
    contactHeading: "Contact",
    email: "Email: {email}",
  },

  datenschutz: {
    title: "Privacy policy",
    intro:
      "This policy applies to the websites jw29435.de and johannwiebe.de. It describes which data is generated when you visit them and what happens to it.",
    serva:
      "Serva has its own privacy policy: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Controller",
    controllerEmail: "Email: {email}",

    cookiesHeading: "Cookies and analytics",
    cookies:
      "Without your consent, neither website sets any cookies of its own, uses analytics or trackers, or embeds content from third parties. The fonts are delivered together with the page; your browser does not connect to Google Fonts or any other service for them. On jw29435.de you can allow Google Analytics (see below).",

    analyticsHeading: "jw29435.de: Google Analytics with consent",
    analytics1:
      "If you click “Allow” in the banner, jw29435.de uses Google Analytics 4, a web analytics service provided by Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Ireland). This lets me see, in aggregated form, which pages are visited how often, where the visits come from and which devices and browsers are used. Google Analytics is not loaded before that.",
    analytics2:
      "For this purpose, Google Analytics stores cookies in your browser (“_ga” and “_ga_1F5GCWHXKX”, for up to two years) and processes usage data such as the pages visited, time, referrer, approximate location, device and browser. Google Analytics 4 does not store IP addresses. Google Signals and personalised advertising are switched off. In the process, data may also be transferred to Google LLC in the USA; Google is certified under the EU-US Data Privacy Framework.",
    analytics3:
      "The legal basis is your consent (Art. 6(1)(a) GDPR, § 25(1) TDDDG). You can withdraw it at any time with effect for the future: click “Cookie settings” in the footer and then “Decline”. The Google Analytics cookies are deleted when you do so. The site stores your choice itself in your browser’s local storage (“analytics-consent”) so that the banner does not appear on every visit; no consent is required for this (§ 25(2) no. 2 TDDDG). Further information: [Google’s privacy policy](https://policies.google.com/privacy?hl=en).",

    hostingHeading: "jw29435.de: Hosting on GitHub Pages",
    hosting:
      "jw29435.de is delivered via GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When a page is requested, GitHub processes technically necessary data and stores it in server logs: your IP address, the date and time, the requested address and the browser identifier. This serves to deliver the page and to keep it secure. The legal basis is the legitimate interest in a secure and available website (Art. 6(1)(f) GDPR). I have no access to these logs; how long they are kept is determined by GitHub, namely for as long as is necessary for the security and operation of the service. GitHub is certified under the EU-US Data Privacy Framework. Further information: [GitHub’s privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare and my own server",
    cloudflare:
      "johannwiebe.de is delivered via the Cloudflare network (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare forwards requests to my own server, protects against attacks and processes the connection data in doing so. To protect against automated access, Cloudflare may set a technically necessary cookie (for example “__cf_bm”). The legal basis is the legitimate interest in a secure and available website (Art. 6(1)(f) GDPR). Cloudflare is certified under the EU-US Data Privacy Framework. Further information: [Cloudflare’s privacy policy](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "The server writes access logs containing your IP address, the date and time, the requested address, the amount of data transferred, the referrer and the browser identifier. This serves to deliver the page, for security and for troubleshooting (Art. 6(1)(f) GDPR). The log files are deleted after 30 days at the latest.",

    emailHeading: "Contact by email",
    email:
      "If you send me an email, I process your address and the content in order to reply (Art. 6(1)(b) or (f) GDPR). Emails to these domains are forwarded via Cloudflare Email Routing to my Gmail mailbox (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). Google stores the messages in my mailbox; in the process, data may also be transferred to the USA. Google is certified under the EU-US Data Privacy Framework. Further information: [Google’s privacy policy](https://policies.google.com/privacy?hl=en). I delete the messages once they have been dealt with and there is no obligation to retain them.",

    rightsHeading: "Your rights",
    rights:
      "You have the right to access the data stored about you (Art. 15 GDPR), to rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18) and data portability (Art. 20). You may object to processing based on Art. 6(1)(f) GDPR (Art. 21). An email to {email} is sufficient.",
    complaint:
      "You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The competent authority is the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Last updated: November 2026",
  },
};

export default en;
