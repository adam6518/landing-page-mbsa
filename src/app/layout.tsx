import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. Mitra Boga Sejahtera Abadi | Mitra Pengadaan Bahan Pangan",
  description:
    "PT. Mitra Boga Sejahtera Abadi berkomitmen pada kualitas produk, pemantauan harga, dan layanan pengadaan untuk kebutuhan bisnis.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "PT. Mitra Boga Sejahtera Abadi",
    description:
      "Mitra pengadaan bahan pangan untuk kebutuhan bisnis Anda.",
    type: "website",
    locale: "id_ID"
  },
  robots: {
    index: false,
    follow: false
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07345B"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
