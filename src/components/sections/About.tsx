import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const values = [
  "Menjaga konsistensi kualitas dan kesegaran produk",
  "Memantau harga secara berkala",
  "Mengutamakan layanan pengadaan yang responsif"
];

export default function About() {
  return (
    <section className="content-section about-section" id="tentang-kami">
      <div className="shell about-grid">
        <div className="section-heading">
          <span className="section-kicker"><span /> TENTANG MBSA</span>
          <h2>Membangun kemitraan melalui <em>kualitas dan kepercayaan.</em></h2>
        </div>
        <div className="about-copy">
          <p className="section-lead">
            PT. Mitra Boga Sejahtera Abadi berfokus pada penyediaan bahan makanan
            untuk kebutuhan industri, dengan komitmen terhadap kualitas,
            konsistensi harga, dan layanan pengadaan.
          </p>
          <p>
            Kami berupaya menjadi mitra usaha yang dapat diandalkan melalui
            pemantauan harga secara berkala, layanan yang transparan, serta
            hubungan bisnis jangka panjang.
          </p>
          <ul className="check-list">
            {values.map((value) => (
              <li key={value}><CheckCircle2 size={18} />{value}</li>
            ))}
          </ul>
          <a className="text-link" href="#kontak">Diskusikan kebutuhan Anda <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <div className="shell about-note">
        <div className="about-note-mark">MB</div>
        <div>
          <span className="note-label">VISI PERUSAHAAN</span>
          <p>Menjadi mitra usaha terpercaya dalam penyediaan bahan makanan segar berkualitas tinggi untuk kebutuhan industri.</p>
        </div>
      </div>
    </section>
  );
}
