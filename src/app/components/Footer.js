import Image from "next/image";
import React from "react";

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
        <a href="">About</a>
        <a href="">Learnings</a>
        <a href="">Facilities</a>
        <a href="">School</a>
        <a href="">Student Space</a>
      </div>
      <div className="footerContactUs">
        <h3>Contact Us</h3>
        <div className="footerIconContainer">
          <div>
            <Image
              src="/footer/Maskgroup.png"
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
              src="/footer/Maskgroup-1.png"
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
              src="/footer/Maskgroup-2.png"
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
              src="/footer/1(4).png"
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
              src="/footer/1(5).png"
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
              src="/footer/1(6).png"
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
              src="/footer/1(7).png"
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
    </div>
  );
};

export default Footer;
