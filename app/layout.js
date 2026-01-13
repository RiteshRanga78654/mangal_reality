import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import your Header and Footer components
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mangal Realty",
  description: "Sustainable Luxury Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A1A10]`}
      >
        {/* Header stays at the top of every page */}
        <Header />
        
        {/* Main content area */}
        <main>
          {children}
        </main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}