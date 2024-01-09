import Image from "next/image";
import React from "react";
import { SectionDescription } from "./ButtonComponent";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
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
      <div className="quickLinks">
        <h3>Quick links</h3>
        <div>
          <a href="">About</a>
          <a href="">Learnings</a>
          <a href="">Facilities</a>
          <a href="">School</a>
          <a href="">Student Space</a>
        </div>
      </div>
      <div className="footerContactUs">
        <h3>Contact Us</h3>
        <div className="footerIconContainer">
          <div>
            <Image
              src="/Footer/Maskgroup.png"
              width={130}
              height={101}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
              className="footerIcon"
            />
          </div>
          <a href="">+91 9645013281</a>
        </div>

        <div className="footerIconContainer">
          <div>
            <Image
              src="/Footer/Maskgroup-1.png"
              width={130}
              height={101}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
              className="footerIcon"
            />
          </div>
          <a href="">brightline@gmail.com</a>
        </div>

        <div className="footerIconContainer">
          <div>
            <Image
              src="/Footer/Maskgroup-2.png"
              width={130}
              height={101}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
              className="footerIcon"
            />
          </div>
          <a href="">
            6/8 Wilmette Pl, Mona Vale <br />
            NSW 2103
          </a>
        </div>
      </div>
      <div className="Social Media">
        <h3>Social Media</h3>
        <div className="socialIconsContainer">
          <div className="socialMediaIconContainer">
            <Image
              src="/Footer/1(4).png"
              width={130}
              height={101}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
              className="footerIcon"
            />
          </div>
          <div className="socialMediaIconContainer">
            <Image
              src="/Footer/1(5).png"
              width={130}
              height={101}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
              className="footerIcon"
            />
          </div>
          <div className="socialMediaIconContainer">
            <Image
              src="/Footer/1(6).png"
              width={130}
              height={101}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
              className="footerIcon"
            />
          </div>
          <div className="socialMediaIconContainer">
            <Image
              src="/Footer/1(7).png"
              width={130}
              height={101}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
              className="footerIcon"
            />
          </div>
        </div>
      </div>
      <div className="copyRight">
        <hr />
        <SectionDescription
          sectionText="Copyright © 2023 Bright Line School. All rights reserved."
          color="rgba(255, 255, 255, 0.60);"
        />
      </div>
    </div>
  );
};

export default Footer;
