import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import FooterTemplate from "@/templates/FooterTemplate";
import NavbarTemplate from "@/templates/NavbarTemplate";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TRAINING TRACKING",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-hidden`}
      >
        <main className="grid grid-cols-[auto_1fr] w-full h-screen">
          <NavbarTemplate />
          <section className="overflow-y-scroll">
            {children}
            <FooterTemplate />
          </section>
        </main>
      </body>
    </html>
  );
}
