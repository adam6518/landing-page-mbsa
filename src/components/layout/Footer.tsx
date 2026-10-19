import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <a className="brand footer-brand" href="#beranda" aria-label="Kembali ke beranda">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-mark-top">M</span>
            <span className="brand-mark-bottom">B</span>
            <span className="brand-grain">✳</span>
          </span>
          <span className="brand-copy">
            <strong>MITRA BOGA</strong>
            <span>SEJAHTERA ABADI</span>
          </span>
        </a>
        <p>Mitra pengadaan bahan pangan untuk kebutuhan bisnis.</p>
        <a href="#beranda" className="back-top">Kembali ke atas <ArrowUpRight size={16} /></a>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} PT. Mitra Boga Sejahtera Abadi</span>
        <span>Informasi berdasarkan company profile perusahaan.</span>
      </div>
    </footer>
  );
}
