"use client";
import Link from "next/link";
export default function Navbar() {
  const navItems = [
    {
      title: "Glówna",
      path: "/",
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
    <nav>
      {navItems.map((item, i) => {
        return (
          <Link className="nav-link" key={i} href={item.path}>
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
