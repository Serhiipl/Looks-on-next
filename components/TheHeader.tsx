"use client";
import React, { useRef, useState } from "react";
import useOutsideClick from "../app/customHooks/useOutsideClick";
import Link from "next/link";
import Image from "next/image";
import ReservationButton from "./ReservationButton";

interface NavItem {
  title: string;
  path: string;
}

const TheHeader: React.FC = () => {
  const navItems: NavItem[] = [
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
      path: "/uslugi",
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
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useOutsideClick(navRef, () => {
    setShowNav(false);
  });

  function navChange() {
    setShowNav(!showNav);
  }

  return (
    <header className="header">
      <div className="header-wrapper">
        <Link href="/" className="logo">
          <Image
            src="/transparent.png"
            width={150}
            height={75}
            alt="theLooks Logo"
          />
        </Link>
        <nav ref={navRef} className={showNav ? "active" : ""}>
          {navItems.map((item, i) => {
            return (
              <Link
                className="nav-link"
                key={i}
                href={item.path}
                onClick={navChange}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <ReservationButton />
        <button
          id="hamburger-btn"
          className={showNav ? "active" : ""}
          onClick={navChange}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export { TheHeader };
