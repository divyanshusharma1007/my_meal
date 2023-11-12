// Import necessary dependencies
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

// Initialize the Inter font with the "latin" subset
const inter = Inter({ subsets: ["latin"] });


// Define the RootLayout component
export default function RootLayout({ children }) {
  return (
    // HTML document with lang attribute set to "en"
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar component */}
        <Navbar />
        
        {/* Main content, passed as children */}
        {children}
        
        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
