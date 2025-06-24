import "./globals.css";

import { Inter } from "next/font/google";
import { Anta } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anta = Anta({
  subsets: ["latin"],
  weight: "400", 
  variable: "--font-anta",
});

export function generateViewport() {
    return {
      themeColor: "#000000",
    };
  }  

export const metadata = {
  title: "Gabriel Martins - Desenvolvedor Web Fullstack | Portfólio",
  description:
    "Portfólio de Gabriel Martins, desenvolvedor web fullstack, mostrando projetos, habilidades e experiência profissional.",
  verification: {
    google: "EBkE2UVxki1-EEwP7ZjSMA4gbIFaf48tz8lKEk8d8nA",
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://gbr-dev-web.github.io",
    title: "Gabriel Martins - Desenvolvedor Web Fullstack | Portfólio",
    description:
      "Portfólio de Gabriel Martins, desenvolvedor web fullstack, mostrando projetos, habilidades e experiência profissional.",
    images: [
      {
        url: "https://gbr-dev-web.github.io/img/preview.jpg",
        alt: "Gabriel Martins - Desenvolvedor Web Fullstack",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Martins - Desenvolvedor Web Fullstack | Portfólio",
    description:
      "Portfólio de Gabriel Martins, desenvolvedor web fullstack, mostrando projetos, habilidades e experiência profissional.",
    images: ["https://gbr-dev-web.github.io/img/preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${anta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
