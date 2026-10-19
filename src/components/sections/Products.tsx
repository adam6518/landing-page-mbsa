import { ArrowUpRight, Fish, Package, Wheat } from "lucide-react";

const products = [
  { name: "Tempura Ikan", category: "Produk olahan ikan", kind: "fish" },
  { name: "Tahu Bakso Ikan", category: "Produk olahan ikan", kind: "fish" },
  { name: "Scallop Ikan", category: "Produk olahan ikan", kind: "fish" },
  { name: "Drumstick", category: "Produk olahan", kind: "package" },
  { name: "Fish Roll", category: "Produk olahan ikan", kind: "fish" },
  { name: "Jagung Pipil", category: "Bahan pangan", kind: "grain" }
];

function ProductIcon({ kind }: { kind: string }) {
  if (kind === "grain") return <Wheat size={38} strokeWidth={1.25} />;
  if (kind === "package") return <Package size={38} strokeWidth={1.25} />;
  return <Fish size={38} strokeWidth={1.25} />;
}

export default function Products() {
  const whatsapp = "https://wa.me/6288808975035?text=" +
    encodeURIComponent("Halo PT. MBSA, saya ingin meminta katalog produk dan informasi harga.");

  return (
    <section className="content-section products-section" id="produk">
      <div className="shell">
        <div className="section-topline">
          <div className="section-heading">
            <span className="section-kicker"><span /> PRODUK PILIHAN</span>
            <h2>Solusi produk untuk <em>kebutuhan usaha.</em></h2>
          </div>
          <p className="section-side-copy">
            Berikut beberapa produk yang tercantum dalam company profile MBSA.
            Hubungi kami untuk katalog lengkap dan informasi ketersediaan.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-tile" key={product.name}>
              <div className={`product-art product-art-${index + 1}`}>
                <span className="product-number">0{index + 1}</span>
                <ProductIcon kind={product.kind} />
                <span className="product-art-caption">MBSA · PRODUCT RANGE</span>
              </div>
              <div className="product-info">
                <div>
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                </div>
                <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Tanyakan ${product.name} melalui WhatsApp`}>
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="catalog-cta">
          <div>
            <span className="note-label">BUTUH INFORMASI LEBIH LENGKAP?</span>
            <h3>Minta katalog dan penawaran produk.</h3>
          </div>
          <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">
            Minta Katalog Lengkap <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
