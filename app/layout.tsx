import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const gtUltraFont = localFont({
  src: [
    {
      path: "../public/fonts/GT-Ultra-Standard-Light.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/GT-Ultra-Standard-Regular.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/GT-Ultra-Standard-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-gt-ultra",
});

export const metadata: Metadata = {
  title: "Movement Simulator",
  description: "Control movements of a droid inside a cellular network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gtUltraFont.className + " " + gtUltraFont.variable}>
        {children}
      </body>
    </html>
  );
}
