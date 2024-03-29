"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BtnComponent } from "./ButtonComponent";
import { usePathname } from "next/navigation";

function MobileHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log(pathname, "jkfsdfjdks");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  return (
    <div
      style={{
        backgroundColor: "#f6f6f9",
        height: "21.333333333333336vw",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
      className="mHeader"
    >
      <div
        style={{
          width: "100%",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
        className="mHeaderContainer"
      >
        <div
          className="logoAndHamburger"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "87.2vw",
          }}
        >
          <a href="/">
            <Image
              src="/logo.png"
              width={120}
              height={30}
              alt="ImageHeader"
              style={{
                width: "22.666666666666664vw",
                height: "13.333333333333334vw",
              }}
            />
          </a>
          <button
            aria-label="HamburgerMenu"
            onClick={toggleMenu}
            className={`hamburger-button ${isMenuOpen ? "open" : ""}`}
            style={{ position: "relative", display: "flex", border: "none" }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <div
          style={{
            position: "fixed",
            top: "21.333333333333336vw",
            left: 0,
            width: "100vw",
            height: isMenuOpen ? "auto" : "0vh",
            backgroundColor: "#f6f6f9",
            zIndex: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 0 30px 0",
            gap: "10px",
            opacity: isMenuOpen ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <div
            className="hMenu"
            style={{
              height: isMenuOpen ? "auto" : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(-4.8vw)",
              transition: "transform 0.4s ease, height 0.1s ease",
            }}
          >
            {menuList.map((item, index) => (
              <a
                key={index}
                className={`linksWrapper linksText ${
                  pathname !== undefined &&
                  pathname !== null &&
                  pathname !== "" &&
                  pathname === item.href
                    ? "active"
                    : ""
                }`}
                href={item.href}
                style={{
                  transform: isMenuOpen
                    ? "translateY(0)"
                    : "translateY(-100vw)",
                }}
              >
                {item.text}
              </a>
            ))}
            <a
              href="/pages/Contact"
              style={{ display: isMenuOpen ? "block" : "none" }}
            >
              <BtnComponent
                bg="#5A1E90"
                color="#ffffff"
                width="11.45833333333333vw"
                buttonText="Contact Now"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
