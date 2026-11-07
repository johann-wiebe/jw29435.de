type BrandImageProps = {
  /** Dateiname unter /brand/ ohne Endung, z. B. "jw-mark"; die -dark-Variante wird automatisch genutzt. */
  name: "jw-mark" | "jw-logo";
  alt: string;
  width: number;
  height: number;
  className?: string;
  eager?: boolean;
};

export function BrandImage({ name, alt, width, height, className, eager }: BrandImageProps) {
  return (
    <picture className={className}>
      <source srcSet={`/brand/${name}-dark.svg`} media="(prefers-color-scheme: dark)" />
      <img
        src={`/brand/${name}.svg`}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}
