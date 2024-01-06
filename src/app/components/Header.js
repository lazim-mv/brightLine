"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {BtnComponent} from "./ButtonComponent";

function Header() {
  const pathname = usePathname();

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About", href: "/pages/About/" },
    { text: "Learnings", href: "/pages/About/" },
    { text: "Facilities", href: "/pages/Services/" },
    { text: "School", href: "/School" },
    { text: "Student Space", href: "/Student" },
    { text: "Events", href: "/Events" },
    { text: "Blogs ", href: "/pages/Contact/" },
  ];

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
                    <h4 className="listHoverTop whiteSpace">{item.text}</h4>
                    <h4 className="listHoverBottom whiteSpace">{item.text}</h4>
                  </a>
                </div>
              ))}
          </div>
        <a href="tel:971 568 352 250">
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
