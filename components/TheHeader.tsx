import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

const TheHeader = () => {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <Image
          src="/thelooks_icon.jpg"
          width={160}
          height={60}
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
