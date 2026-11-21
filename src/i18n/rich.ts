// Kleine, sichere Inline-Auszeichnung für Texte aus den Sprachdateien. Kein HTML:
//   [Linktext](https://…), [Linktext](mailto:…), [Linktext](page:impressum) oder (page:home#kontakt)
//   **fett**
//   {name}  Platzhalter, den der Code füllt (z. B. {email})

export type RichPart =
  | { kind: "text"; text: string }
  | { kind: "link"; label: string; href: string }
  | { kind: "strong"; text: string }
  | { kind: "var"; name: string };

const token = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|\{(\w+)\}/g;

export function parseRich(text: string): RichPart[] {
  const parts: RichPart[] = [];
  let last = 0;
  for (const match of text.matchAll(token)) {
    const index = match.index ?? 0;
    if (index > last) parts.push({ kind: "text", text: text.slice(last, index) });
    if (match[1] !== undefined) parts.push({ kind: "link", label: match[1], href: match[2] });
    else if (match[3] !== undefined) parts.push({ kind: "strong", text: match[3] });
    else parts.push({ kind: "var", name: match[4] });
    last = index + match[0].length;
  }
  if (last < text.length) parts.push({ kind: "text", text: text.slice(last) });
  return parts;
}

/** Erlaubte Linkziele: externe https-Adressen, mailto und Seiten derselben Sprache */
export function linkTarget(href: string): { page: string; hash: string } | { external: string } | null {
  const page = /^page:([a-z]+)(#[\w-]+)?$/.exec(href);
  if (page) return { page: page[1], hash: page[2] ?? "" };
  if (/^(https:\/\/|mailto:)\S+$/.test(href)) return { external: href };
  return null;
}
