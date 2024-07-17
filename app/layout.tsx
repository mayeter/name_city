import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/navbar/page";
import {MainFrame} from "@/components/frame/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Play Name-City",
  description: "Brings sweet memories from childhood :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>
      <NavBar>
          <MainFrame>
              {children}
          </MainFrame>
      </NavBar>
      </body>
    </html>
  );
}
