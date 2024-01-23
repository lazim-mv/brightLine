"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import heroImg from "../../../public/hero.png";
import hh from "../../../public/AboutPage/1(1).jpg";
import hhss from "../../../public/AboutPage/1(1).png";
import hhsss from "../../../public/AboutPage/1(2).png";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(
    () => [heroImg, hh, hhss, hhsss], // Add more images as needed
    []
  );

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="heroContainer">
      <div className="heroCarousels">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "activeDot" : ""}`}
          >
            {index === activeIndex && (
              <Image
                className="hImage"
                src={image}
                alt={`Asian Engineer ${index + 1}`}
                quality={100}
                priority={true}
                unoptimized={index !== activeIndex} 
              />
            )}
          </div>
        ))}
      </div>

      <h1 className="heroTitle">Leading to Brightness Creating minds</h1>

      <div className="dotsContainer">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "activeDot" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
