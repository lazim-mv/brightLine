import React from "react";

const Carousel = ({images, currentIndex,}) => {
  return (
    <div className="carouselContainer">
      <div className="carousel">
        <div
          className="imageContainer"
          style={{
            transform: `translateX(-${currentIndex * 32.544270833333336}vw)`,
          }}
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
  );
};

export default Carousel;
