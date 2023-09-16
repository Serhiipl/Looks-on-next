"use client";
// import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ReservationButton from "./ReservationButton";

const TheHeader = () => {
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
  const [showNav, setShowNav] = useState(false);
  function navChange() {
    setShowNav(!showNav);
    console.log("first");
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
        <nav className={showNav ? "active" : ""}>
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
