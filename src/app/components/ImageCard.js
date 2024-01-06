import Image from "next/image";
import React from "react";
import { SectionDescription } from "./ButtonComponent";

const ImageCard = ({ img, titleText, description }) => {

  return (
    <div className="imageCard">
      <Image
        className="imageCardBackground"
        src={img}
        alt="Asian Engineer"
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
      />
      <div className="imageCardContent">
        <h3>{titleText}</h3>
        <SectionDescription
          sectionText={description}
          textAllign="center"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default ImageCard;
