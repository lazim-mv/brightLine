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
        backgroundColor: "#ffffff",
        height:"21.333333333333336vw",
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
              width: "17.057866666666666vw",
              height: "13.355466666666665vw",
            }}
          >
            <Image
              src="/logo.png"
              width={120}
              height={30}
              alt="ImageHeader"
              style={{
                width: "17.057866666666666vw",
                height: "13.355466666666665vw",
              }}
            />
          </div>
        </a>
        <button
          aria-label="HamBurgerMenu"
          onClick={toggleMenu}
          style={{
            fontSize: "1rem",
            color: "#02040e",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
          }}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="#02040E"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="#02040E"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div
          style={{
            position: "fixed",
            top: "4rem",
            right: 0,
            width: "95vw",
            height: "100vh",
            backgroundColor: "#ffffff",
            zIndex: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "24px",
            gap: "10px",
            transform: isMenuOpen
              ? "translate(0px,0px)"
              : "translate(720px,0px)",
            transition: "transform 0.8s ease 0s",
          }}
        >
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
      </div>
    </div>
  );
}

export default MobileHeader;
