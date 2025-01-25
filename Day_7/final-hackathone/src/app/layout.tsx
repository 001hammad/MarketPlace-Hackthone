import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CartProvider } from "./Components/CartContext";
import { SearchProvider } from "./Components/searchContext";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "hammad - h",
  description: "Generated by hammad hafeez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
        <Navbar/>
        <CartProvider>{children}</CartProvider>
        <Footer/>
        </SearchProvider>
      </body>
    </html>
  );
}
