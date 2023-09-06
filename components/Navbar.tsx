"use client ";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="nav-menu">
      <Link href="/">Glówna</Link>
      <Link href="/">O nas</Link>
      <Link href="/">Oferta</Link>
      <Link href="/galeria">Galeria</Link>
      <Link href="/">Kontakt</Link>
    </nav>
  );
}
