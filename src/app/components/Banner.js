import React from "react";
import { BtnComponent, SectionTitle } from "./ButtonComponent";
import Image from "next/image";
import bannerImage from "../../../public/Container5/5.png";
import { container5Data } from "../contents/Contents";


const Banner = () => {
  return (
    <div className="faciliteiesBannerContainer5">
      <div className="heroContianer bannerImage">
        <Image
          className="hImage bannerhImage"
          src={bannerImage}
          alt="Asian Engineer"
          quality={100}
          priority={true}
          unoptimized
        />
        <div className="absolute">
          <SectionTitle
            sectionText={container5Data.bannerText}
            color="#fff"
            textAllign="center"
            padding="0 0 1.3020833333333335vw 0"
            // width="44.40104166666667vw"
          />
          <BtnComponent
            arrow={true}
            bg="transparrent"
            color="#fff"
            buttonText={container5Data.buttonText}
            width="12.630208333333334vw"
            margin="0 auto"
            borderColor="#fff"
            arrowColor={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
