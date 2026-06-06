import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carla Matos | Personal Trainer",
  description:
    "Personal Trainer especializada em emagrecimento, hipertrofia e qualidade de vida. Treinos personalizados, presenciais e online.",
  openGraph: {
    title: "Carla Matos | Personal Trainer",
    description:
      "Sua melhor versão começa aqui. Treinos personalizados para emagrecimento, hipertrofia e qualidade de vida.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
