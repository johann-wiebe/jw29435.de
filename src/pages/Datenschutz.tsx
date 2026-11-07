import { Address } from "../components/Address";
import { contactEmail } from "../content/site";

export function Datenschutz() {
  return (
    <article className="prose container">
      <h1>Datenschutzerklärung</h1>
      <p>
        Diese Erklärung gilt für die Websites jw29435.de und johannwiebe.de. Sie beschreibt, welche
        Daten beim Besuch anfallen und was damit passiert.
      </p>
      <p>
        Serva hat eine eigene Datenschutzerklärung:{" "}
        <a href="https://serva.jw29435.de/datenschutz">serva.jw29435.de/datenschutz</a>.
      </p>

      <h2>Verantwortlicher</h2>
      <Address />
      <p>
        E-Mail: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>

      <h2>Cookies und Analyse</h2>
      <p>
        Ohne deine Einwilligung setzen beide Websites selbst keine Cookies, verwenden kein Analytics
        und keine Tracker und binden keine Inhalte von Drittanbietern ein. Die Schriften werden
        zusammen mit der Seite ausgeliefert; dein Browser baut dafür keine Verbindung zu Google Fonts
        oder anderen Diensten auf. Auf jw29435.de kannst du Google Analytics zulassen (siehe unten).
      </p>

      <h2>jw29435.de: Google Analytics mit Einwilligung</h2>
      <p>
        Wenn du im Banner auf „Zulassen“ klickst, nutzt jw29435.de Google Analytics 4, einen
        Webanalysedienst der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland).
        Damit sehe ich in zusammengefasster Form, welche Seiten wie oft aufgerufen werden, woher die
        Besuche kommen und mit welchen Geräten und Browsern. Vorher wird Google Analytics nicht
        geladen.
      </p>
      <p>
        Google Analytics speichert dafür Cookies in deinem Browser („_ga“ und „_ga_1F5GCWHXKX“, bis
        zu zwei Jahre) und verarbeitet Nutzungsdaten wie aufgerufene Seiten, Zeitpunkt, Referrer,
        ungefähren Standort, Gerät und Browser. Google Analytics 4 speichert keine IP-Adressen.
        Google Signals und personalisierte Werbung sind ausgeschaltet. Dabei können Daten auch an
        Google LLC in den USA übermittelt werden; Google ist unter dem EU-US Data Privacy Framework
        zertifiziert.
      </p>
      <p>
        Grundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Du kannst
        sie jederzeit mit Wirkung für die Zukunft widerrufen: Klicke im Footer auf
        „Cookie-Einstellungen“ und dann auf „Ablehnen“. Die Cookies von Google Analytics werden dabei
        gelöscht. Deine Wahl selbst speichert die Seite im lokalen Speicher deines Browsers
        („analytics-consent“), damit der Banner nicht bei jedem Besuch erscheint; dafür ist keine
        Einwilligung nötig (§ 25 Abs. 2 Nr. 2 TDDDG). Weitere Informationen:{" "}
        <a href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von Google</a>.
      </p>

      <h2>jw29435.de: Hosting bei GitHub Pages</h2>
      <p>
        jw29435.de wird über GitHub Pages ausgeliefert (GitHub, Inc., 88 Colin P. Kelly Jr. Street,
        San Francisco, CA 94107, USA). Beim Aufruf einer Seite verarbeitet GitHub technisch notwendige
        Daten und speichert sie in Server-Logs: deine IP-Adresse, Datum und Uhrzeit, die aufgerufene
        Adresse und die Browserkennung. Das dient der Auslieferung der Seite und ihrer Sicherheit.
        Grundlage ist das berechtigte Interesse an einer sicheren und verfügbaren Website (Art. 6
        Abs. 1 lit. f DSGVO). Auf diese Logs habe ich keinen Zugriff; wie lange sie aufbewahrt
        werden, legt GitHub fest, und zwar so lange, wie es für Sicherheit und Betrieb des Dienstes
        nötig ist. GitHub ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere
        Informationen:{" "}
        <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">
          Datenschutzerklärung von GitHub
        </a>
        .
      </p>

      <h2>johannwiebe.de: Cloudflare und eigener Server</h2>
      <p>
        johannwiebe.de wird über das Netzwerk von Cloudflare ausgeliefert (Cloudflare, Inc., 101
        Townsend St., San Francisco, CA 94107, USA). Cloudflare leitet die Anfragen an meinen eigenen
        Server weiter, schützt vor Angriffen und verarbeitet dabei die Verbindungsdaten. Zum Schutz
        vor automatisierten Zugriffen kann Cloudflare ein technisch notwendiges Cookie setzen (zum
        Beispiel „__cf_bm“). Grundlage ist das berechtigte Interesse an einer sicheren und
        verfügbaren Website (Art. 6 Abs. 1 lit. f DSGVO). Cloudflare ist unter dem EU-US Data Privacy
        Framework zertifiziert. Weitere Informationen:{" "}
        <a href="https://www.cloudflare.com/de-de/privacypolicy/">Datenschutzerklärung von Cloudflare</a>
        .
      </p>
      <p>
        Der Server schreibt Zugriffslogs mit deiner IP-Adresse, Datum und Uhrzeit, der aufgerufenen
        Adresse, der übertragenen Datenmenge, dem Referrer und der Browserkennung. Das dient der
        Auslieferung der Seite, der Sicherheit und der Fehlersuche (Art. 6 Abs. 1 lit. f DSGVO). Die
        Logdateien werden nach spätestens 30 Tagen gelöscht.
      </p>

      <h2>Kontakt per E-Mail</h2>
      <p>
        Wenn du mir eine E-Mail schreibst, verarbeite ich deine Adresse und den Inhalt, um zu
        antworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). E-Mails an diese Domains werden über
        Cloudflare Email Routing an mein Postfach bei Gmail weitergeleitet (Google Ireland Limited,
        Gordon House, Barrow Street, Dublin 4, Irland). Google speichert die Nachrichten in meinem
        Postfach; dabei können Daten auch in die USA übermittelt werden. Google ist unter dem EU-US
        Data Privacy Framework zertifiziert. Weitere Informationen:{" "}
        <a href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von Google</a>. Ich
        lösche die Nachrichten, wenn sie erledigt sind und keine Aufbewahrungspflicht besteht.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft über deine gespeicherten Daten (Art. 15 DSGVO), auf
        Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und
        Datenübertragbarkeit (Art. 20). Einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f
        DSGVO kannst du widersprechen (Art. 21). Eine E-Mail an {contactEmail} genügt.
      </p>
      <p>
        Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO).
        Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit
        Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf,{" "}
        <a href="https://www.ldi.nrw.de">www.ldi.nrw.de</a>.
      </p>

      <p className="prose__meta">Stand: November 2026</p>
    </article>
  );
}
