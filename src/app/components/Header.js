"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {BtnComponent} from "./ButtonComponent";

function Header() {
  const pathname = usePathname();

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About", href: "/pages/About" },
    { text: "Learnings", href: "/pages/Learnings" },
    { text: "Facilities", href: "/pages/Facilities" },
    { text: "School", href: "/pages/School" },
    { text: "Student Space", href: "/pages/StudentSpace" },
    { text: "Events", href: "/pages/SchoolEvents" },
    { text: "Blogs ", href: "/pages/Blogs" },
  ];

console.log(pathname)
  return (
    <>
      <div className="hContainer bg-white">
        <a href="/">
          <div className="logoContainer">
            <Image
              src="/logo.png"
              width={130}
              height={101}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </a>
          <div className="hMenu">
              {menuList.map((item, index) => (
                <div
                  key={index}
                  className={`visibleWrapperContainer w-Auto ${
                    pathname !== undefined &&
                    pathname !== null &&
                    pathname !== "" &&
                    pathname === item.href
                      ? "active"
                      : ""
                  }`}
                >
                  <a href={item.href} className="linksWrapper">
                    <h4 className="listHoverTop whiteSpace linksText">{item.text}</h4>
                    <h4 className="listHoverBottom whiteSpace linksText">{item.text}</h4>
                  </a>
                </div>
              ))}
          </div>
        <a href="/pages/Contact">
          <BtnComponent
            bg="#5A1E90"
            color="#ffffff"
            width="11.45833333333333vw"
            buttonText="Contact Now"
            margin="0 0 0 5.013020833333334vw"
          />
        </a>
      </div>
    </>
  );
}

export default Header;
