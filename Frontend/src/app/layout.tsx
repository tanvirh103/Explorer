import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const Inter = localFont({
  src: [
    {
      path: "./fonts/Inter_18pt-Light.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-Light.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-Inter",
});


export const metadata: Metadata = {
  title: "Block Explorer",
  description: "Explore the blockchain"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
