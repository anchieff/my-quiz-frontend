import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600'],
  variable: '--font-ibm'
});

export const metadata: Metadata = {
  title: "MyQuiz",
  description: "Learn and Repeat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={ibm_plex_sans.variable}>
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
