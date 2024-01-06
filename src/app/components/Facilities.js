"use client";
import React, { useState } from "react";
import { SectionName, SectionTitle } from "./ButtonComponent";
import Image from "next/image";

const Facilities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/container5/1(1).png",
    "/container5/1(2).png",
    "/container5/1(3).png",
    "/container5/1(4).png",
    "/container5/1(1).png",
    "/container5/1(2).png",
    "/container5/1(3).png",
    "/container5/1(4).png",
  ];

  const totalImages = images.length;
  const clicks = totalImages - 3;
  console.log(currentIndex);

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
              src="/Home/rightGreaterThanArrowPurple.svg"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="carouselContainer">
        <div className="carousel">
          <div
            className="imageContainer"
            style={{ transform: `translateX(-${currentIndex * 32.65625}vw)` }}
          >
            {images.map((image, index) => (
              <div className="relative" key={index}>
                <Image
                  width={377}
                  height={420}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={index === currentIndex ? "visible" : "hidden"}
                />
                <div className="imageFrame"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
