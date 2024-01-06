import React from "react";
import {
  SectionDescription,
  SectionName,
  SectionTitle,
} from "./ButtonComponent";
import { container4Data } from "../Contents";
import ImageCard from "./ImageCard";

const Strategies = () => {
  const cardData = container4Data.imageCard;
  return (
    <div className="container4">
      <div className="container4Contents">
        <SectionName
          sectionText={container4Data.sectionName}
          color="#5A1E90"
          weight="700"
          padding="0 0 1.3020833333333335vw 0"
          textAllign="center"
        />
        <SectionTitle
          sectionText={container4Data.sectionTitle}
          color="#282938"
          textAllign="center"
        />
        <SectionDescription
          sectionText={container4Data.description}
          textAllign="center"
        />
      </div>
      <div className="container4CardContainer">
        {cardData.map((data, index) => (
          <div key={index}>
            <ImageCard
              img={data.img}
              titleText={data.cardTitle}
              description={data.cardDesc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategies;
