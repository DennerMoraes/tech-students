import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderT";
import Footer from "@/components/FooterT";

export const metadata: Metadata = {
  title: "Teach students site",
  description: "site for teach students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
