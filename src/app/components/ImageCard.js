import Image from "next/image";
import React from "react";
import { SectionDescription } from "./ButtonComponent";

const ImageCard = ({
  extraContent,
  img,
  titleText,
  description,
  currentIndex,
  carousel,
  blogCard,
  blogDesc
}) => {

  return (
    <div
      className={carousel ? "imageContainer" : "imageCard"}
      style={{
        transform: currentIndex ? `translateX(-${currentIndex * 28}vw)` : "",
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
          style={{
            height: extraContent ? "20.833333333333336vw" : "",
          }}
        />
        {extraContent && ! blogCard ? (
          <div className="imageCardContent schoolEvent">
            <div className="dateAndRoundPoint">
              <div className="point"></div>
              <SectionDescription
                sectionText={description}
                color="#5A1E90"
                weight="700"
              />
            </div>
            <h3>{titleText}</h3>
          </div>
        ) : blogCard ? (
          <div className="imageCardContent schoolEvent blogsCardContent">
            <div className="dateAndRoundPoint">
              <SectionDescription
                sectionText={description}
                color="#fff"
                weight="700"
                textAllign="center"
              />
            </div>
            <h3>{titleText}</h3>
            <SectionDescription
                sectionText={blogDesc}
                color="#696969"
                weight="500"
                textAllign="left"
              />
          </div>
        ) : (
          ""
        )}
        {carousel && !extraContent ? <div className="imageFrame"></div> : ""}
      </div>
      {!extraContent ? (
        <div
          className="imageCardContent"
          style={{ bottom: carousel ? "3.2552083333333335vw" : "" }}
        >
          <h3>{titleText}</h3>

          <SectionDescription
            sectionText={description}
            textAllign="center"
            color="#fff"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageCard;
