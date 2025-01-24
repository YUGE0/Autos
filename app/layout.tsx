import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { getCanonicalUrl } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto",
  description: "Auto sales website",
  openGraph: {
    images: [`${getCanonicalUrl()}/Autos.png`],
  },
  alternates:{
    canonical: getCanonicalUrl(),
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
