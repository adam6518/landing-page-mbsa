import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <a
          className="footer-brand"
          href="#beranda"
          aria-label="PT. Mitra Boga Sejahtera Abadi - Kembali ke beranda"
        >
          <Image
            src="/images/logo-mbsa.png"
            alt="PT. Mitra Boga Sejahtera Abadi"
            width={300}
            height={100}
            className="footer-logo-image"
          />
        </a>

        <p>Mitra pengadaan bahan pangan untuk kebutuhan bisnis.</p>

        <a href="#beranda" className="back-top">
          Kembali ke atas <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} PT. Mitra Boga Sejahtera Abadi</span>

        <span>Informasi berdasarkan company profile perusahaan.</span>
      </div>
    </footer>
  );
}
