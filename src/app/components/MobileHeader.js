"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BtnComponent } from "./ButtonComponent";
import { usePathname } from "next/navigation";

function MobileHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <a href="/">
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#333",
              width: "22.666666666666664vw",
              height: "13.333333333333334vw",
            }}
          >
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
          </div>
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
        <div
          style={{
            position: "fixed",
            top: "4rem",
            right: 0,
            width: "100vw",
            height: isMenuOpen ? "100vh" : "0vh",
            backgroundColor: "#f6f6f9",
            zIndex: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            gap: "10px",
            opacity: isMenuOpen ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <div
            className="hMenu"
            style={{
              height: isMenuOpen ? "auto" : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(30px)",
              transition: "transform 0.4s ease, height 0.5s ease",
            }}
          >
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
            <a href="tel:971 568 352 250" style={{display: isMenuOpen ? 'block' : 'none'}}>
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
