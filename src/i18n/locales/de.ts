// Deutsche Quelle aller sichtbaren Texte. Ihr Aufbau ist der Typ `Messages`, den jede
// Übersetzung erfüllen muss (siehe docs/TRANSLATING.md). Der deutsche Text der Rechtstexte ist
// rechtsverbindlich.
//
// Inline-Auszeichnung (src/i18n/Rich.tsx):
//   [Linktext](https://…)    externer Link        [Linktext](page:datenschutz)  Seite derselben Sprache
//   **fett**                 hervorgehoben        {email}                       Platzhalter aus dem Code

const de = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Kleine Werkzeuge für echte Abläufe: Serva, Nuvo Explorer und CLR by NMBRS von Johann Wiebe.",
    },
    impressum: {
      title: "Impressum – jw29435",
      description: "Impressum von jw29435.de, dem Dach für Serva, Nuvo Explorer und CLR by NMBRS.",
    },
    datenschutz: {
      title: "Datenschutz – jw29435",
      description:
        "Datenschutzerklärung für jw29435.de und johannwiebe.de: Server-Logs und Google Analytics nur mit Einwilligung.",
    },
    ogImageAlt: "jw29435-Logo: Laptop mit den Buchstaben JW auf Amber",
  },

  layout: {
    skipLink: "Zum Inhalt springen",
    homeLink: "jw29435 – Startseite",
    mainNav: "Hauptnavigation",
    navProducts: "Produkte",
    navContact: "Kontakt",
    navImpressum: "Impressum",
    language: "Sprache",
    footerBy: "Ein Produkt von **jw29435**",
    footerImpressum: "Impressum",
    footerDatenschutz: "Datenschutz",
    cookieSettings: "Cookie-Einstellungen",
  },

  /** Hinweis auf den deutschen Seiten, wenn der Browser diese Sprache bevorzugt; steht in dieser Sprache. */
  languageHint: {
    text: "Diese Seite gibt es auch auf Deutsch.",
    action: "Auf Deutsch lesen",
    dismiss: "Hinweis schließen",
  },

  home: {
    eyebrow: "jw29435 · Apps und Web-Tools",
    title: "Kleine Werkzeuge für echte Abläufe.",
    lead: "Drei Produkte von Johann Wiebe: eins plant Gottesdienste, eins öffnet die eigene Synology unterwegs, eins macht aus Fotos Malvorlagen. Alle sehen gleich aus.",
    logoAlt: "jw29435-Logo: Laptop mit den Buchstaben JW",
    productsHeading: "Produkte",
    contactHeading: "Kontakt",
    contactText: "Fehler gefunden oder eine Idee für eines der Produkte? Schreib mir.",
    copy: "Kopieren",
    copied: "Kopiert",
  },

  products: {
    /** Nur für Screenreader vor dem Status, z. B. „Status: Alpha“ */
    statusLabel: "Status:",
    serva: {
      platform: "Web · für Gemeinden",
      description:
        "Plant Gottesdienste, Predigtdienste und Chorlieder und erinnert Prediger per E-Mail, WhatsApp oder Push an ihren Termin.",
      action: "Serva öffnen",
      status: "Im Einsatz",
    },
    nuvo: {
      platform: "Android · iOS geplant",
      description:
        "Dateien auf der eigenen Synology durchsuchen und Musikordner direkt abspielen, im LAN, per VPN oder über HTTPS.",
      action: "Zum Play-Test",
      status: "Alpha",
    },
    clr: {
      platform: "Android",
      description:
        "Macht aus einem Foto eine Malen-nach-Zahlen-Vorlage, auf Wunsch nur mit den Farben, die in deinem Tuschkasten stecken.",
      action: "Im Play Store",
      status: "Verfügbar",
    },
  },

  consent: {
    title: "Darf ich messen, wie die Seite genutzt wird?",
    text: "Mit deiner Einwilligung nutze ich Google Analytics, um zu sehen, welche Seiten aufgerufen werden. Dabei setzt Google Cookies und überträgt Daten auch in die USA. Du kannst die Wahl jederzeit über „Cookie-Einstellungen“ im Footer ändern. Mehr dazu in der [Datenschutzerklärung](page:datenschutz).",
    currentGranted: "Aktuell: zugelassen",
    currentDenied: "Aktuell: abgelehnt",
    deny: "Ablehnen",
    allow: "Zulassen",
  },

  /** Steht nur über übersetzten Rechtstexten, nie auf den deutschen Seiten. */
  legalNotice: {
    text: "Dies ist eine Übersetzung. Rechtsverbindlich ist allein die deutsche Fassung.",
    link: "Zur deutschen Fassung",
  },

  impressum: {
    title: "Impressum",
    intro: "Dieses Impressum gilt für die Websites jw29435.de und johannwiebe.de.",
    providerHeading: "Angaben gemäß § 5 DDG",
    contactHeading: "Kontakt",
    email: "E-Mail: {email}",
  },

  datenschutz: {
    title: "Datenschutzerklärung",
    intro:
      "Diese Erklärung gilt für die Websites jw29435.de und johannwiebe.de. Sie beschreibt, welche Daten beim Besuch anfallen und was damit passiert.",
    serva:
      "Serva hat eine eigene Datenschutzerklärung: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Verantwortlicher",
    controllerEmail: "E-Mail: {email}",

    cookiesHeading: "Cookies und Analyse",
    cookies:
      "Ohne deine Einwilligung setzen beide Websites selbst keine Cookies, verwenden kein Analytics und keine Tracker und binden keine Inhalte von Drittanbietern ein. Die Schriften werden zusammen mit der Seite ausgeliefert; dein Browser baut dafür keine Verbindung zu Google Fonts oder anderen Diensten auf. Auf jw29435.de kannst du Google Analytics zulassen (siehe unten).",

    analyticsHeading: "jw29435.de: Google Analytics mit Einwilligung",
    analytics1:
      "Wenn du im Banner auf „Zulassen“ klickst, nutzt jw29435.de Google Analytics 4, einen Webanalysedienst der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Damit sehe ich in zusammengefasster Form, welche Seiten wie oft aufgerufen werden, woher die Besuche kommen und mit welchen Geräten und Browsern. Vorher wird Google Analytics nicht geladen.",
    analytics2:
      "Google Analytics speichert dafür Cookies in deinem Browser („_ga“ und „_ga_1F5GCWHXKX“, bis zu zwei Jahre) und verarbeitet Nutzungsdaten wie aufgerufene Seiten, Zeitpunkt, Referrer, ungefähren Standort, Gerät und Browser. Google Analytics 4 speichert keine IP-Adressen. Google Signals und personalisierte Werbung sind ausgeschaltet. Dabei können Daten auch an Google LLC in den USA übermittelt werden; Google ist unter dem EU-US Data Privacy Framework zertifiziert.",
    analytics3:
      "Grundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Du kannst sie jederzeit mit Wirkung für die Zukunft widerrufen: Klicke im Footer auf „Cookie-Einstellungen“ und dann auf „Ablehnen“. Die Cookies von Google Analytics werden dabei gelöscht. Deine Wahl selbst speichert die Seite im lokalen Speicher deines Browsers („analytics-consent“), damit der Banner nicht bei jedem Besuch erscheint; dafür ist keine Einwilligung nötig (§ 25 Abs. 2 Nr. 2 TDDDG). Weitere Informationen: [Datenschutzerklärung von Google](https://policies.google.com/privacy?hl=de).",

    hostingHeading: "jw29435.de: Hosting bei GitHub Pages",
    hosting:
      "jw29435.de wird über GitHub Pages ausgeliefert (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Beim Aufruf einer Seite verarbeitet GitHub technisch notwendige Daten und speichert sie in Server-Logs: deine IP-Adresse, Datum und Uhrzeit, die aufgerufene Adresse und die Browserkennung. Das dient der Auslieferung der Seite und ihrer Sicherheit. Grundlage ist das berechtigte Interesse an einer sicheren und verfügbaren Website (Art. 6 Abs. 1 lit. f DSGVO). Auf diese Logs habe ich keinen Zugriff; wie lange sie aufbewahrt werden, legt GitHub fest, und zwar so lange, wie es für Sicherheit und Betrieb des Dienstes nötig ist. GitHub ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: [Datenschutzerklärung von GitHub](https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare und eigener Server",
    cloudflare:
      "johannwiebe.de wird über das Netzwerk von Cloudflare ausgeliefert (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare leitet die Anfragen an meinen eigenen Server weiter, schützt vor Angriffen und verarbeitet dabei die Verbindungsdaten. Zum Schutz vor automatisierten Zugriffen kann Cloudflare ein technisch notwendiges Cookie setzen (zum Beispiel „__cf_bm“). Grundlage ist das berechtigte Interesse an einer sicheren und verfügbaren Website (Art. 6 Abs. 1 lit. f DSGVO). Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: [Datenschutzerklärung von Cloudflare](https://www.cloudflare.com/de-de/privacypolicy/).",
    serverLogs:
      "Der Server schreibt Zugriffslogs mit deiner IP-Adresse, Datum und Uhrzeit, der aufgerufenen Adresse, der übertragenen Datenmenge, dem Referrer und der Browserkennung. Das dient der Auslieferung der Seite, der Sicherheit und der Fehlersuche (Art. 6 Abs. 1 lit. f DSGVO). Die Logdateien werden nach spätestens 30 Tagen gelöscht.",

    emailHeading: "Kontakt per E-Mail",
    email:
      "Wenn du mir eine E-Mail schreibst, verarbeite ich deine Adresse und den Inhalt, um zu antworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). E-Mails an diese Domains werden über Cloudflare Email Routing an mein Postfach bei Gmail weitergeleitet (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Google speichert die Nachrichten in meinem Postfach; dabei können Daten auch in die USA übermittelt werden. Google ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: [Datenschutzerklärung von Google](https://policies.google.com/privacy?hl=de). Ich lösche die Nachrichten, wenn sie erledigt sind und keine Aufbewahrungspflicht besteht.",

    rightsHeading: "Deine Rechte",
    rights:
      "Du hast das Recht auf Auskunft über deine gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO kannst du widersprechen (Art. 21). Eine E-Mail an {email} genügt.",
    complaint:
      "Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Stand: November 2026",
  },
};

export default de;
