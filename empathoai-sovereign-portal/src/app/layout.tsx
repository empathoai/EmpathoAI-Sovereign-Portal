import type { Metadata } from "next";
import { Libre_Baskerville, Inter_Tight } from "next/font/google";
import "./globals.css";

const serif = Libre_Baskerville({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const sans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EmpathoAI | Sovereign Portal",
  description: "Growth Architecture for Institutional Scalability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} antialiased selection:bg-brand-blue selection:text-white`}
      >
        <div className="sovereign-grid fixed inset-0 z-[-1] pointer-events-none opacity-50" />
        {children}
      </body>
    </html>
  );
}
