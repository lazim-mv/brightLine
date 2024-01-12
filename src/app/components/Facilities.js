"use client";
import React, { useEffect, useState } from "react";
import { BtnComponent, SectionName, SectionTitle } from "./ButtonComponent";
import Image from "next/image";
import ImageCard from "./ImageCard";

const Facilities = ({
  content,
  extraContent,
  className,
  classNametopContainer,
  classNameMainContainer,
  href
}) => {
  const cardData = content.imageCard;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = cardData.length;
  const clicks = totalImages - 3;

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };

  return (
    <>
      <div className={`${classNameMainContainer} container5`} id="container5">
        <div className={`${classNametopContainer} topContainer5`}>
          <div>
            <SectionName sectionText={content.sectionName} weight="700" />
            <SectionTitle
              sectionText={content.sectionTitle}
              color="#282938"
              width="32.421875vw"
            />
          </div>
          <div className="carouselButtonContainer">
            <div
              onClick={prevImage}
              className="carouselButtonContainerLeft carouselHover"
            >
              <Image
                width={377}
                height={420}
                src="/Home/leftGreaterThanArrowPurple.svg"
                alt="arrow"
              />
            </div>
            <div
              onClick={nextImage}
              className="carouselButtonContainerRight carouselHover"
            >
              <Image
                width={377}
                height={420}
                src="/Home/RightGreaterThanArrowPurple.svg"
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <div
          className={`${className} carouselWrapper`}
          style={{
            height: extraContent
              ? "29.947916666666668vw"
              : "28.645833333333332vw",
          }}
        >
          <div className="carousel">
            {cardData.map((data, index) => (
              <ImageCard
                key={index}
                currentIndex={currentIndex}
                img={data.img}
                titleText={data.cardTitle}
                description={data.cardDate}
                carousel={true}
                extraContent={extraContent}
              />
            ))}
          </div>
        </div>
        <a href={href ? href : "pages/Facilites"}>
        <BtnComponent
          arrow={true}
          bg="transparrent"
          color="#5A1E90"
          buttonText={content.buttonText}
          width="12.630208333333334vw"
          margin="4.557291666666666vw auto 0 auto"
          borderColor="#5A1E90"
        />
        </a>
      </div>
    </>
  );
};

export default Facilities;
