import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Ohne Clipboard-API (z. B. kein HTTPS) wenigstens die Adresse markieren.
      const node = textRef.current;
      const selection = window.getSelection();
      if (node && selection) {
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }

  return (
    <div className="copy-email">
      <span ref={textRef} className="copy-email__address">
        {email}
      </span>
      <button type="button" className="button button--outline copy-email__button" onClick={copy}>
        <span aria-live="polite">{copied ? "Kopiert" : "Kopieren"}</span>
      </button>
    </div>
  );
}
