import { Fragment, type ReactNode } from "react";
import { Link } from "react-router";
import { pathFor, isPageKey } from "./paths";
import { linkTarget, parseRich } from "./rich";
import { useI18n } from "./useI18n";

type RichProps = {
  text: string;
  /** Werte für {name}-Platzhalter */
  vars?: Record<string, ReactNode>;
};

/** Rendert einen Text mit [Links](…), **fett** und {Platzhaltern}; unbekannte Ziele brechen den Build ab. */
export function Rich({ text, vars = {} }: RichProps) {
  const { language } = useI18n();

  return parseRich(text).map((part, i) => {
    switch (part.kind) {
      case "text":
        return <Fragment key={i}>{part.text}</Fragment>;
      case "strong":
        return <strong key={i}>{part.text}</strong>;
      case "var":
        if (!(part.name in vars)) throw new Error(`Platzhalter {${part.name}} wird hier nicht gefüllt: ${text}`);
        return <Fragment key={i}>{vars[part.name]}</Fragment>;
      case "link": {
        const target = linkTarget(part.href);
        if (target && "page" in target && isPageKey(target.page)) {
          return (
            <Link key={i} to={pathFor(language, target.page) + target.hash}>
              {part.label}
            </Link>
          );
        }
        if (target && "external" in target) {
          return (
            <a key={i} href={target.external}>
              {part.label}
            </a>
          );
        }
        throw new Error(`Unbekanntes Linkziel „${part.href}“ in: ${text}`);
      }
    }
  });
}
