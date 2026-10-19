"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, CheckCircle2, MoveUpRight } from "lucide-react";

const whatsappNumber = "6288808975035";
const whatsappMessage = encodeURIComponent(
  "Halo PT. Mitra Boga Sejahtera Abadi, saya ingin mengetahui informasi produk dan kebutuhan pengadaan."
);

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="hero-section" id="beranda">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-grid shell">
        <div className="hero-content">
          <motion.div
            className="eyebrow"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="eyebrow-dot" />
            MITRA PENGADAAN BAHAN PANGAN
          </motion.div>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Bahan pangan berkualitas,
            <span className="headline-accent"> untuk bisnis yang terus tumbuh.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.62, delay: 0.28 }}
          >
            PT. Mitra Boga Sejahtera Abadi berkomitmen mendukung kebutuhan
            pengadaan bahan makanan melalui konsistensi kualitas, pemantauan
            harga, dan layanan yang responsif.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.39 }}
          >
            <a className="button button-primary" href="#produk">
              Jelajahi Produk <ArrowUpRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Konsultasikan Kebutuhan <MoveUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.58 }}
          >
            <span className="proof-icon"><CheckCircle2 size={17} /></span>
            <span>Berorientasi pada kualitas, harga, dan kemitraan jangka panjang</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Area visual produk PT. MBSA; foto final akan ditambahkan"
          role="img"
        >
          <div className="visual-topline">
            <span>FOOD SUPPLY PARTNER</span>
            <span className="visual-index">01 / 04</span>
          </div>

          <div className="visual-art">
            <div className="art-glow" />
            <div className="art-ring art-ring-one" />
            <div className="art-ring art-ring-two" />
            <div className="art-block art-block-blue" />
            <div className="art-block art-block-yellow" />
            <div className="art-product-card">
              <div className="product-placeholder">
                <span className="placeholder-symbol">MB</span>
                <span className="placeholder-caption">PRODUCT<br />PHOTOGRAPHY</span>
              </div>
              <div className="product-card-copy">
                <span className="product-label">KATALOG PILIHAN</span>
                <strong>Produk untuk kebutuhan usaha</strong>
                <span className="product-card-note">Foto produk asli akan ditambahkan</span>
              </div>
            </div>
            <div className="floating-note">
              <span className="floating-note-icon"><CheckCircle2 size={16} /></span>
              <span><strong>Fokus pada kualitas</strong><small>Komitmen perusahaan</small></span>
            </div>
          </div>

          <div className="visual-bottomline">
            <span>PT. MITRA BOGA SEJAHTERA ABADI</span>
            <span className="visual-arrow"><ArrowDown size={15} /></span>
          </div>
        </motion.div>
      </div>

      <div className="hero-footer shell">
        <span>BERMITRA UNTUK KEBUTUHAN PANGAN BISNIS</span>
        <a href="#tentang-kami">Kenali MBSA <ArrowDown size={14} /></a>
      </div>
    </section>
  );
}
