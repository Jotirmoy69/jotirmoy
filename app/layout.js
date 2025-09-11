import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./component/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jotirmoy | Portfolio",
  description: "I build fast, scalable web apps with modern UIs and flexible databases ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
