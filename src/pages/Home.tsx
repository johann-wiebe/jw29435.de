import { BrandImage } from "../components/BrandImage";
import { CopyEmail } from "../components/CopyEmail";
import { ProductCard } from "../components/ProductCard";
import { products } from "../content/products";
import { contactEmail } from "../content/site";
import { useI18n } from "../i18n/useI18n";

export function Home() {
  const { t } = useI18n();
  const text = t.home;

  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero__text">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {text.title}
          </h1>
          <p className="hero__lead">{text.lead}</p>
        </div>
        <BrandImage
          name="jw-logo"
          alt={text.logoAlt}
          width={420}
          height={254}
          className="hero__logo"
          eager
        />
      </section>

      <section id="produkte" className="section container" aria-labelledby="produkte-title">
        <h2 id="produkte-title" className="eyebrow">
          {text.productsHeading}
        </h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="kontakt" className="section container" aria-labelledby="kontakt-title">
        <h2 id="kontakt-title" className="eyebrow">
          {text.contactHeading}
        </h2>
        <div className="contact">
          <p className="contact__text">{text.contactText}</p>
          <CopyEmail email={contactEmail} />
        </div>
      </section>
    </>
  );
}
