"use client";
import React, { useState } from "react";
import { BtnComponent, SectionName, SectionTitle } from "./ButtonComponent";
import Image from "next/image";
import bannerImage from "../../../public/Container5/5.png";
import { container5Data } from "../Contents";
import ImageCard from "./ImageCard";

const Facilities = () => {
  const cardData = container5Data.imageCard;
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(cardData.length, "fsdkfjsdk");
  console.log(cardData, "fsdkfjsdk");

  const totalImages = cardData.length;
  const clicks = totalImages - 3;
  console.log(clicks, "carousel");

  const nextImage = () => {
    if (currentIndex < clicks - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks - 1);
    }
  };

  return (
    <>
      <div className="container5">
        <div className="topContainer5">
          <div>
            <SectionName sectionText="Facilities" />
            <SectionTitle
              sectionText="Experience the Best with Signature"
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
        <div className="carousel">
          {cardData.map((data, index) => (
            <ImageCard
              key={index}
              currentIndex={currentIndex}
              img={data.img}
              titleText={data.cardTitle}
              carousel={true}
            />
          ))}
        </div>
      </div>
      <div className="faciliteiesBannerContainer5">
        <div className="heroContianer bannerImage">
          <Image
            className="hImage"
            src={bannerImage}
            alt="Asian Engineer"
            quality={100}
            priority={true}
            unoptimized
          />
          <div className="absolute">
            <SectionTitle
              sectionText="Leadership academy virtual, apply today with intro price"
              color="#fff"
              textAllign="center"
              padding="0 0 1.3020833333333335vw 0"
              // width="44.40104166666667vw"
            />
            <BtnComponent
              arrow={true}
              bg="transparrent"
              color="#fff"
              buttonText="Know more"
              width="12.630208333333334vw"
              margin="0 auto"
              borderColor="#fff"
              arrowColor={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
