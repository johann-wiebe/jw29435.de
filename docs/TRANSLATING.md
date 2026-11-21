# Übersetzen von jw29435.de

Die Website ist auf Deutsch geschrieben; jede weitere Sprache ist **genau eine Datei**:
`src/i18n/locales/<code>.ts`. Sobald sie existiert, baut `npm run build` die Seiten `/<code>/`,
`/<code>/impressum/` und `/<code>/datenschutz/`, nimmt die Sprache in den Sprachumschalter, in die
hreflang-Links aller Seiten und in die Sitemap auf. Sonst ist nichts zu ändern.

## 1. Datei anlegen

Das Kürzel `<code>` steht in `src/i18n/languages.json` (dort sind alle 33 vorgesehenen Sprachen
schon eingetragen, z. B. `fr`, `pt`, `nb`, `sr`). Die englische Datei dient als Rahmen:

```sh
cp src/i18n/locales/en.ts src/i18n/locales/fr.ts
```

Dann in der neuen Datei die erste Kommentarzeile anpassen und den Namen der Konstante ändern:

```ts
// Français. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const fr: Messages = {
  …
};

export default fr;
```

Die Typangabe `: Messages` muss bleiben – mit ihr meldet `tsc` (im Build) jeden fehlenden,
überzähligen oder falsch geschriebenen Schlüssel.

**Übersetzt wird aus dem Deutschen** (`src/i18n/locales/de.ts`, das ist die Quelle und für die
Rechtstexte verbindlich). `en.ts` hilft beim Verständnis, ist aber nicht die Vorlage für den Inhalt.
Jeden Text der kopierten Datei ersetzen; kein englischer Satz darf stehen bleiben.

## 2. Was übersetzt wird und was nicht

Nur die Werte (Texte rechts vom Doppelpunkt) übersetzen, **nie die Schlüssel** links davon und nie die
Struktur (keine Schlüssel hinzufügen, entfernen oder umsortieren, keine Absätze teilen oder
zusammenlegen).

Bleibt unverändert:

- Marken- und Produktnamen: jw29435, Serva, Nuvo Explorer, CLR by NMBRS, Google Analytics,
  Google Signals, GitHub Pages, Cloudflare, Cloudflare Email Routing, Gmail, Synology, WhatsApp,
  Play Store/Google Play (in der in der Sprache üblichen Form).
- Domains, E-Mail-Adressen, Postanschriften und Firmennamen (Google Ireland Limited, Gordon House …,
  GitHub, Inc., Cloudflare, Inc., Google LLC). Ländernamen in Anschriften („Irland“, „USA“) dürfen in
  die Zielsprache.
- Namen von Cookies und Speichereinträgen: `_ga`, `_ga_1F5GCWHXKX`, `__cf_bm`, `analytics-consent`.
- Gesetzesangaben bleiben dieselben Vorschriften: DDG und TDDDG mit ihrem deutschen Kürzel (beim
  ersten Vorkommen darf eine Erklärung in Klammern folgen, z. B. „§ 5 DDG (German Digital Services
  Act)“). Die DSGVO heißt in der Zielsprache so, wie sie dort amtlich heißt (GDPR, RGPD, AVG, RODO, …);
  Artikelangaben in der dort üblichen Schreibweise („Art. 6(1)(a) GDPR“, „art. 6, paragraphe 1,
  point a), du RGPD“).
- Der Name der Aufsichtsbehörde: übersetzen und den deutschen Namen in Klammern dahinter setzen,
  wie in `en.ts`.

## 3. Auszeichnung in Texten

Texte sind reiner Text, **kein HTML** (`<` und `>` lässt der Build nicht durch). Erlaubt sind:

| Schreibweise | Bedeutung | Regel |
| --- | --- | --- |
| `[Linktext](https://…)` | externer Link | Linktext übersetzen. Die Adresse bleibt; bei Datenschutzerklärungen von Google, GitHub und Cloudflare darf sie auf die Sprachfassung desselben Dokuments zeigen, wenn es eine gibt (Google: `?hl=<code>`, sonst die englische Adresse aus `en.ts`). |
| `[Linktext](page:datenschutz)` | Seite derselben Sprache | Linktext übersetzen, `page:…` exakt so lassen. |
| `**fett**` | hervorgehoben | Sternchen behalten, Inhalt wie in der Quelle. |
| `{email}` | Platzhalter, den der Code füllt | Exakt so übernehmen, an die grammatisch richtige Stelle setzen. |

Der Build vergleicht jede Übersetzung mit der Quelle: Platzhalter, `page:`-Links, Anzahl der Links und
`**…**` müssen übereinstimmen, kein Text darf leer sein.

**Anführungszeichen:** Die typografischen Zeichen der Zielsprache verwenden („…“, “…”, « … », »…«,
„…”). Ein gerades `"` im Text beendet die Zeichenkette – wenn es unbedingt sein muss, als `\"`.
Apostroph als `’`.

## 4. Hinweise zu einzelnen Texten

- **Anrede:** Die deutsche Seite duzt, freundlich und knapp. In der Zielsprache die Anrede wählen, die
  dort auf Websites für eine persönliche, aber seriöse Ansprache üblich ist, und durchhalten.
- **`consent.allow`, `consent.deny`, `layout.cookieSettings`:** Diese Beschriftungen werden in
  `consent.text` und `datenschutz.analytics1/analytics3` zitiert. Dort genau dieselben Wörter
  verwenden.
- **`languageHint`:** erscheint auf den deutschen Seiten, wenn der Browser die Zielsprache bevorzugt.
  Der Satz nennt die eigene Sprache: „Cette page existe aussi en français.“, Link „Lire en
  français“, `dismiss` ist die Beschriftung für Screenreader am Schließen-Knopf.
- **`legalNotice`:** steht über übersetztem Impressum und Datenschutz: „Dies ist eine Übersetzung.
  Rechtsverbindlich ist allein die deutsche Fassung.“ plus Link zur deutschen Fassung. Inhaltlich genau
  so übersetzen.
- **`impressum`, `datenschutz`:** getreu übersetzen, nichts weglassen, nichts ergänzen, keine
  Rechtslage der Zielsprache „einbauen“. Jeder Absatz der Quelle bleibt ein Absatz.
- **`datenschutz.updated`:** „Stand: November 2026“ – Wort und Monat übersetzen, das Datum ist das der
  deutschen Fassung.
- **`meta.*.title`:** das „ – jw29435“ am Ende bleibt. `meta.*.description` höchstens etwa 160 Zeichen.
- **`products.*.platform`:** wird in Großbuchstaben angezeigt; kurz halten. „Gemeinden“ meint
  Kirchengemeinden.
- **`products.clr.description`:** „Tuschkasten“ ist ein Wasserfarbkasten (Schulmalkasten).
- **`home.lead`:** „Malvorlagen“ meint Malen-nach-Zahlen-Vorlagen.
- Was nur im Code steht und **nicht** übersetzt wird: die 404-Seite (bleibt deutsch, siehe README) und
  die Weiterleitungsseiten alter Pfade.

## 5. Registrieren

Für die 33 vorgesehenen Sprachen nichts: der Eintrag in `src/i18n/languages.json` existiert schon,
die Datei genügt. Nur kurz prüfen, dass `code` dem Dateinamen entspricht.

Eine Sprache, die dort fehlt, bekommt eine Zeile (an der Stelle, an der sie im Umschalter stehen soll:
alphabetisch nach Eigenname ohne Akzente, erst lateinische, dann griechische, dann kyrillische Schrift):

```json
{ "code": "xx", "endonym": "Eigenname", "lang": "xx", "hreflang": "xx", "ogLocale": "xx_XX", "playHl": "xx" }
```

`lang` ist der Wert für `<html lang>` (z. B. `pt-PT`, `sr-Cyrl`), `hreflang` der für Suchmaschinen
(`pt-PT`, `sr`), `playHl` der `hl`-Parameter für den Play-Store-Link, optional `aliases` für weitere
Browser-Sprachkürzel (bei `nb`: `["no", "nn"]`). Eine Datei ohne Registereintrag bricht den Build ab.

## 6. Prüfen

```sh
npm run lint && npm run build && npm run check:i18n
```

- `npm run build` scheitert bei fehlenden oder überzähligen Schlüsseln (`tsc`) und bei Abweichungen
  von der Quelle (Platzhalter, `page:`-Links, `**…**`, leere Texte, HTML) – die Meldung nennt den
  Schlüssel, z. B. `fr.impressum.email`.
- `npm run check:i18n` prüft den Build: alle Seiten jeder Sprache, `<html lang>`, hreflang in beide
  Richtungen, Sprachumschalter, tote Links, Sitemap.
- Danach `npm run preview` und `/<code>/`, `/<code>/impressum/`, `/<code>/datenschutz/` ansehen: lange
  Wörter in Knöpfen und Überschriften, Umbrüche auf schmalem Bildschirm. Für Kyrillisch und Griechisch
  zeigt die Seite die Systemschrift (DM Sans hat diese Zeichen nicht) – das ist so gewollt.

Commit pro Sprache, z. B. `feat: Französische Fassung unter /fr/`.
