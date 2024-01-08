import React from "react";
import ImageCard from "./ImageCard";
import { container8Data } from "../Contents";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "./ButtonComponent";

const Blogs = () => {
  const cardData = container8Data.imageCard;
  return (
    <div className="container8">
      <div className="blogsContentContainer">
        <SectionName
          sectionText={container8Data.sectionName}
          dashText={true}
          textAllign="center"
          weight="700"
        />
        <SectionTitle
          sectionText={container8Data.sectionTitle}
          color="#282938"
          width="41.53645833333333vw"
          textAllign="center"
        />
        <SectionDescription
          sectionText={container8Data.description}
          width="38.15104166666667vw"
          textAllign="center"
          padding="4.557291666666666vw"
        />
      </div>
      <div className="carousel">
        {cardData.map((data, index) => (
          <ImageCard
            key={index}
            // currentIndex={currentIndex}
            img={data.img}
            titleText={data.cardTitle}
            description={data.cardDate}
            carousel={true}
            extraContent={true}
            blogCard={true}
            blogDesc={data.cardDesc}
          />
        ))}
      </div>
      <BtnComponent
        arrow={true}
        bg="transparrent"
        color="#5A1E90"
        buttonText={container8Data.buttonText}
        width="12.630208333333334vw"
        margin="4.557291666666666vw auto 0 auto"
        borderColor="#5A1E90"
      />
    </div>
  );
};

export default Blogs;
