import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Misdinar St. Clara",
  description: "Website resmi Misdinar St. Clara",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* 🔥 NAVBAR */}
        <nav className="bg-black text-white p-4 flex justify-between items-center">
          <span className="font-bold">Misdinar</span>

          <div className="space-x-4 text-sm">
            <a href="/">Home</a>
            <a href="/visi-misi">Visi Misi</a>
            <a href="/susunan-pengurus">Pengurus</a>
            <a href="/jadwal-misa">Jadwal Misa</a>
            <a href="/berita">Berita</a>
          </div>
        </nav>

        {/* 🔥 CONTENT */}
        {children}

      </body>
    </html>
  );
}