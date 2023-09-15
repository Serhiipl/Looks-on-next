"use client ";
import Link from "next/link";
export default function Navbar() {
  const navItems = [
    {
      title: "Glówna",
      path: "#",
    },
    {
      title: "O nas",
      path: "#",
    },
    {
      title: "Usługi",
      path: "#",
    },
    {
      title: "Galeria",
      path: "/galeria",
    },
    {
      title: "Kontakt",
      path: "#",
    },
  ];
  return (
    <nav className="nav-menu">
      {navItems.map((item, i) => {
        return (
          <Link key={i} href={item.path}>
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
