import { Pacifico, Lobster, Libre_Caslon_Text, Libre_Bodoni, Inter, Inter_Tight, Leckerli_One } from "next/font/google";

export const pacifico = Pacifico({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const lobster = Lobster({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-lobster",
});

export const libreCaslon = Libre_Caslon_Text({ 
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-libre-caslon-text",
});

export const libreBodoni = Libre_Bodoni({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
});

export const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const leckerliOne = Leckerli_One({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-leckerli-one",
});

export const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"], 
});