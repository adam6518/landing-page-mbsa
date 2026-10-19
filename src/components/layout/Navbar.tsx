"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Partner", href: "#partner" },
  { label: "Kontak", href: "#kontak" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar shell" aria-label="Navigasi utama">
        <a className="brand" href="#beranda" aria-label="PT. MBSA — Beranda" onClick={() => setOpen(false)}>
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

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>

        <a className="nav-cta" href="#kontak">
          Hubungi Kami <ArrowUpRight size={16} strokeWidth={2.2} />
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.045 }}
              >
                {item.label}<ArrowUpRight size={16} />
              </motion.a>
            ))}
            <a href="#kontak" className="mobile-menu-cta" onClick={() => setOpen(false)}>
              Hubungi Kami <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
