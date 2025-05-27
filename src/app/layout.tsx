import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Garden",
  description: "A beautiful garden website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div style={{ backgroundColor: '#e6a990' }}>
          <main style={{ backgroundColor: '#ffe5da', minHeight: '100vh' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
