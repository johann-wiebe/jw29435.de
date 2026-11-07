import { BrandImage } from "../components/BrandImage";
import { CopyEmail } from "../components/CopyEmail";
import { ProductCard } from "../components/ProductCard";
import { products } from "../content/products";
import { contactEmail } from "../content/site";

export function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero__text">
          <p className="eyebrow">jw29435 · Apps und Web-Tools</p>
          <h1 id="hero-title" className="hero__title">
            Kleine Werkzeuge für echte Abläufe.
          </h1>
          <p className="hero__lead">
            Drei Produkte von Johann Wiebe: eins plant Gottesdienste, eins öffnet die eigene
            Synology unterwegs, eins macht aus Fotos Malvorlagen. Alle sehen gleich aus.
          </p>
        </div>
        <BrandImage
          name="jw-logo"
          alt="jw29435-Logo: Laptop mit den Buchstaben JW"
          width={420}
          height={254}
          className="hero__logo"
          eager
        />
      </section>

      <section id="produkte" className="section container" aria-labelledby="produkte-title">
        <h2 id="produkte-title" className="eyebrow">
          Produkte
        </h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section id="kontakt" className="section container" aria-labelledby="kontakt-title">
        <h2 id="kontakt-title" className="eyebrow">
          Kontakt
        </h2>
        <div className="contact">
          <p className="contact__text">
            Fehler gefunden oder eine Idee für eines der Produkte? Schreib mir.
          </p>
          <CopyEmail email={contactEmail} />
        </div>
      </section>
    </>
  );
}
