import type { Metadata } from "next";
import { Inter, Inter_Tight, Leckerli_One } from "next/font/google";
import { Libre_Caslon_Text, Libre_Bodoni } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import { Pacifico, Lobster } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const libreCaslon = Libre_Caslon_Text({ 
  weight: ["400", "700"], 
  subsets: ["latin"] ,
  variable: "--font-libre-caslon-text",
});

const libreBodoni = Libre_Bodoni({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
});

// export { libreCaslon, libreBodoni, pacifico, lobster };

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const leckerliOne = Leckerli_One({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-leckerli-one",
});
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Puri Literary Festival",
  description: "puri literary festival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body 
        suppressHydrationWarning
        className={`${interSans.variable} ${interTight.variable} ${leckerliOne.variable} ${libreCaslon.variable} ${libreBodoni.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
