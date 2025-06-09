'use client';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <ul className="flex flex-wrap gap-6">
        <li><Link href="/">Início</Link></li>
        <li><Link href="/mapa">Mapa</Link></li>
        <li><Link href="/relatos">Relatos</Link></li>
        <li><Link href="/alertas">Alertas</Link></li>
        <li><Link href="/abrigos">Abrigos</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><Link href="/integrantes">Integrantes</Link></li>
      </ul>
    </nav>
  );
}
