import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/common/Header";
import Footer from "./components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "Arise Medicine",
  description: "We treat you like family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
