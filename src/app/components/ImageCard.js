import Image from "next/image";
import React from "react";
import { SectionDescription } from "./ButtonComponent";

const ImageCard = ({ img, titleText, description, currentIndex, carousel }) => {
  console.log(currentIndex, "imageCard");
  return (
    <div
      className={carousel ? "imageContainer" : "imageCard"}
      style={{
        transform: currentIndex
          ? `translateX(-${currentIndex * 32.544270833333336}vw)`
          : "",
      }}
    >
      <div className={carousel ? "relative" : ""}>
        <Image
          className={carousel ? "" : "imageCardBackground"}
          src={img}
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
        />
        {carousel ? <div className="imageFrame"></div> : ""}
      </div>
      <div
        className="imageCardContent"
        style={{ bottom: carousel ? "3.2552083333333335vw" : "" }}
      >
        <h3>{titleText}</h3>
        {!carousel ? (
          <SectionDescription
            sectionText={description}
            textAllign="center"
            color="#fff"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ImageCard;
