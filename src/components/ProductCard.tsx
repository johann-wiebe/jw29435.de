import type { Product } from "../content/products";
import { defaultCode } from "../i18n/languages";
import { useI18n } from "../i18n/useI18n";

export function ProductCard({ product }: { product: Product }) {
  const { t, language } = useI18n();
  const { name, icon, action, tone } = product;
  const text = t.products[product.id];
  let href = action.kind === "disabled" ? undefined : action.href;
  if (href && product.playStore && language.code !== defaultCode) href += `&hl=${language.playHl}`;

  return (
    <article className="product-card">
      <img className="product-card__icon" src={icon} alt="" width={64} height={64} loading="lazy" />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__platform">{text.platform}</p>
      <p className="product-card__description">{text.description}</p>
      <div className="product-card__footer">
        {action.kind === "disabled" ? (
          <button type="button" className="button button--disabled" disabled>
            {text.action}
          </button>
        ) : (
          <a className={`button button--${action.kind}`} href={href}>
            {text.action}
          </a>
        )}
        <p className="status">
          <span className={`status__dot status__dot--${tone}`} aria-hidden="true" />
          <span className="visually-hidden">{t.products.statusLabel} </span>
          {text.status}
        </p>
      </div>
    </article>
  );
}
