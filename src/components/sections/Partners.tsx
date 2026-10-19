import { Handshake } from "lucide-react";

export default function Partners() {
  return (
    <section className="content-section partners-section" id="partner">
      <div className="shell partners-layout">
        <div className="section-heading">
          <span className="section-kicker"><span /> KEMITRAAN</span>
          <h2>Hubungan bisnis dibangun dengan <em>kepercayaan.</em></h2>
        </div>
        <div className="partners-message">
          <div className="partners-icon"><Handshake size={28} /></div>
          <p>
            Kami menghargai kemitraan yang mendukung pertumbuhan bisnis secara
            berkelanjutan. Informasi dan logo partner akan ditampilkan setelah
            memperoleh konfirmasi serta persetujuan penggunaan.
          </p>
          <span className="partner-status">INFORMASI PARTNER DALAM KONFIRMASI</span>
        </div>
      </div>
    </section>
  );
}
