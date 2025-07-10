import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mesh MCP - Connect AI to Cardano Blockchain",
  description: "Model Context Protocol server for Cardano blockchain integration. Query addresses, UTXOs, transactions, and accounts directly from AI assistants using Mesh SDK.",
  keywords: ["Cardano", "MCP", "Model Context Protocol", "Mesh SDK", "Blockchain", "AI", "Cursor", "Claude"],
  authors: [{ name: "Mesh Team" }],
  creator: "Mesh SDK",
  publisher: "Mesh SDK",
  openGraph: {
    title: "Mesh MCP - Connect AI to Cardano Blockchain",
    description: "Model Context Protocol server for seamless Cardano blockchain integration with AI assistants",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesh MCP - Connect AI to Cardano Blockchain",
    description: "Model Context Protocol server for seamless Cardano blockchain integration with AI assistants",
    creator: "@meshsdk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
