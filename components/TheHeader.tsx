import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

const TheHeader = () => {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <Image
          src="/transparent.png"
          width={150}
          height={75}
          alt="theLooks Logo"
        />
      </Link>
      <Navbar />
      <div className="button-wrapper">
        <Link href="/">Rezerwacje</Link>
      </div>
    </header>
  );
};
export { TheHeader };
