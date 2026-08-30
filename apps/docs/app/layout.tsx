import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "fumadocs-ui/style.css";
import "./globals.css";
import LenisProvider from "./LenisProvider";

const rajdhani = Rajdhani({ weight: ["600", "700"], subsets: ["latin"], variable: "--font-rajdhani" });

export const metadata: Metadata = {
  title: "Assistant Documentation",
  description: "Official documentation for the Assistant project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rajdhani.variable}`}>
        <RootProvider>
          <LenisProvider>{children}</LenisProvider>
        </RootProvider>
      </body>
    </html>
  );
}
