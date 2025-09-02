import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import TopProgress from "./components/TopProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saksham Manav",
  description: "Portfolio of Saksham Manav",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" attribute="class">
          <TopProgress />
          {/* Google Analytics - gtag.js */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-ZVL0MDQDWL`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'G-ZVL0MDQDWL');`}
          </Script>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
