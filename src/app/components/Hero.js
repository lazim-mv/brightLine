import Image from "next/image";
import React from "react";
import heroImg from "../../../public/hero.png";

const Hero = () => {
  return (
    <div className="heroContianer">
      <Image
        className="hImage"
        src={heroImg}
        alt="Asian Engineer"
        quality={100}
        priority={true}
        unoptimized
      />
      <Image
        className="hImage"
        src={heroImg}
        alt="Asian Engineer"
        quality={100}
        priority={true}
        unoptimized
      />
      <Image
        className="hImage"
        src={heroImg}
        alt="Asian Engineer"
        quality={100}
        priority={true}
        unoptimized
      />
      <h1 className="heroTitle">Leading to Brightness Creating minds</h1>
    </div>
  );
};

export default Hero;
