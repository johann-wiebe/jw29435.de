import type { Product } from "../content/products";

export function ProductCard({ product }: { product: Product }) {
  const { name, icon, platform, description, action, status } = product;

  return (
    <article className="product-card">
      <img className="product-card__icon" src={icon} alt="" width={64} height={64} loading="lazy" />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__platform">{platform}</p>
      <p className="product-card__description">{description}</p>
      <div className="product-card__footer">
        {action.kind === "disabled" ? (
          <button type="button" className="button button--disabled" disabled>
            {action.label}
          </button>
        ) : (
          <a className={`button button--${action.kind}`} href={action.href}>
            {action.label}
          </a>
        )}
        <p className="status">
          <span className={`status__dot status__dot--${status.tone}`} aria-hidden="true" />
          <span className="visually-hidden">Status: </span>
          {status.label}
        </p>
      </div>
    </article>
  );
}
