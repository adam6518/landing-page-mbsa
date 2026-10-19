import { Clock3, Handshake, Scale, ShieldCheck } from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Komitmen terhadap kualitas",
    description: "Menjaga konsistensi kualitas dan kesegaran produk untuk mendukung kebutuhan klien.",
    icon: ShieldCheck
  },
  {
    number: "02",
    title: "Pemantauan harga berkala",
    description: "Memantau harga secara berkala untuk mendukung stabilitas dan daya saing harga.",
    icon: Scale
  },
  {
    number: "03",
    title: "Layanan responsif",
    description: "Mengutamakan proses pengadaan yang tepat waktu, responsif, dan transparan.",
    icon: Clock3
  },
  {
    number: "04",
    title: "Kemitraan jangka panjang",
    description: "Membangun hubungan bisnis yang berkelanjutan dengan para mitra.",
    icon: Handshake
  }
];

export default function Advantages() {
  return (
    <section className="content-section advantages-section" id="keunggulan">
      <div className="shell">
        <div className="advantages-intro">
          <span className="section-kicker section-kicker-light"><span /> NILAI KAMI</span>
          <h2>Prinsip yang menjaga<br /><em>kemitraan tetap kuat.</em></h2>
          <p>Komitmen yang berangkat dari visi dan misi PT. Mitra Boga Sejahtera Abadi.</p>
        </div>
        <div className="advantages-grid">
          {advantages.map(({ number, title, description, icon: Icon }) => (
            <article className="advantage-card" key={number}>
              <div className="advantage-card-top">
                <span>{number}</span>
                <Icon size={25} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
