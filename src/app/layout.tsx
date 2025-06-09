

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mapa de Sobrevivência',
  description: 'Projeto FIAP para mapeamento de áreas de risco',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${inter.className} bg-gradient-to-b from-blue-100 to-white min-h-screen`}
      >
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
