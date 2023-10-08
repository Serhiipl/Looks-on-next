"use client";

import Link from "next/link";
// import Image from "next/image";

export function ColoredLine() {
  return <hr className="line" />;
}

export default function SocialMediaLinks() {
  interface socialItem {
    title: string;
    path: string;
    icon: string;
    size: number;
  }

  const socialMedia: socialItem[] = [
    {
      title: "Instagram",
      path: "https://www.instagram.com/k.s.beauty.brow/",
      // icon: "../icons/instagram-ico.svg",
      icon: "icon-instagram",
      size: 25,
    },
    {
      title: "Facebook",
      path: "https://www.facebook.com/BrwiGdansk",
      // icon: "../icons/facebook-ico.svg",
      icon: "icon-facebook-ico",
      size: 25,
    },
    {
      title: "Booksy",
      path: "https://booksy.com/pl-pl/91139_ksbeautybrow_brwi-i-rzesy_20383_gdansk",
      // icon: "../icons/booksy-ico.svg",
      icon: "icon-booksy-ico",
      size: 25,
    },
  ];

  return (
    <>
      <ColoredLine />
      <div className="mediaLinksWrapper">
        {socialMedia.map((item, i) => {
          return (
            <Link className={item.icon} key={i} href={item.path}>
              {/* <Image
              width={item.size}
              height={item.size}
              src={item.icon}
              alt={item.title}
            /> */}
            </Link>
          );
        })}
      </div>
    </>
  );
}
