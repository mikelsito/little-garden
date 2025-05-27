import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
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
      <body className={`${comfortaa.className} antialiased`}>
        <div style={{ backgroundColor: '#e6a990' }}>
          <main style={{ backgroundColor: '#ffe5da', minHeight: '100vh' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
