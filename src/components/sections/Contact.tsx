"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const whatsappNumber = "6288808975035";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Halo PT. Mitra Boga Sejahtera Abadi, saya ingin mengajukan permintaan informasi.",
      `Nama: ${name}`,
      `Perusahaan: ${company || "-"}`,
      `Email: ${email || "-"}`,
      `Kebutuhan: ${need}`
    ].join("\n");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="content-section contact-section" id="kontak">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <span className="section-kicker section-kicker-light"><span /> HUBUNGI KAMI</span>
          <h2>Mari bicarakan kebutuhan <em>pengadaan Anda.</em></h2>
          <p>
            Hubungi tim MBSA untuk meminta katalog, menanyakan informasi produk,
            atau mendiskusikan kebutuhan pengadaan bisnis Anda.
          </p>
          <div className="contact-details">
            <a href="tel:+622158908361"><span><Phone size={18} /></span><div><small>TELEPON KANTOR</small><strong>(021) 58908361</strong></div></a>
            <a href="mailto:ptmitraboga.sejahteraabadi@gmail.com"><span><Mail size={18} /></span><div><small>EMAIL</small><strong>ptmitraboga.sejahteraabadi@gmail.com</strong></div></a>
            <a href="https://www.google.com/maps/search/?api=1&query=Ruko+Permata+Regency+Blok+A2+Jl+H+Kelik+Jakarta+Barat" target="_blank" rel="noreferrer">
              <span><MapPin size={18} /></span>
              <div><small>ALAMAT KANTOR</small><strong>Ruko Permata Regency Blok A2, Jl. H. Kelik, Kembangan, Jakarta Barat</strong></div>
            </a>
          </div>
          <a className="contact-whatsapp" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo PT. MBSA, saya ingin bertanya tentang produk dan layanan pengadaan.")}`} target="_blank" rel="noreferrer">
            Hubungi melalui WhatsApp <ArrowUpRight size={17} />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="note-label">FORMULIR PERMINTAAN INFORMASI</span>
          <h3>Ceritakan kebutuhan Anda.</h3>
          <p>Setelah dikirim, formulir akan membuka WhatsApp dengan pesan yang sudah disiapkan.</p>
          <label>
            Nama <span>*</span>
            <input value={name} onChange={(event) => setName(event.target.value)} required placeholder="Nama Anda" />
          </label>
          <label>
            Nama perusahaan
            <input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Nama perusahaan (opsional)" />
          </label>
          <label>
            Email
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="nama@perusahaan.com (opsional)" />
          </label>
          <label>
            Kebutuhan produk / pengadaan <span>*</span>
            <textarea value={need} onChange={(event) => setNeed(event.target.value)} required rows={3} placeholder="Tuliskan produk atau kebutuhan Anda" />
          </label>
          <button className="button button-primary form-submit" type="submit">Lanjutkan ke WhatsApp <ArrowUpRight size={17} /></button>
          <small className="form-disclaimer">Jangan masukkan informasi rahasia atau data sensitif ke dalam formulir ini.</small>
        </form>
      </div>
    </section>
  );
}
