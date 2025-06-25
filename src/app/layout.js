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
  title: "Desenvolvedor Web Freelancer | React, Node.js e Sites Profissionais",
  description:
    "Gabriel Martins é um desenvolvedor freelancer especializado em criar sites rápidos, responsivos e com bom SEO usando React, Node.js e Tailwind. Atende clientes de todo o Brasil.",
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
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">{children}</div>
      </body>
    </html>
  );
}
