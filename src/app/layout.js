import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Suspense } from "react";
import Loading from "./Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NIT PATNA | National Institute of Technology Patna",
  description: "Official website of National Institute of Technology Patna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
      {children}
      </Suspense>
      <Footer/>
      </body>
    </html>
  );
}
