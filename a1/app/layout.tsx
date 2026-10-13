import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS5610 webdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
