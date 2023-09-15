import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import ReservationButton from "./ReservationButton";

const TheHeader = () => {
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
        <Navbar />
        <ReservationButton />
        <button id="hamburger-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
export { TheHeader };
