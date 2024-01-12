import React from "react";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "./ButtonComponent";
import { container4Data } from "../contents/Contents";
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
          dashText={true}
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
              extraContent={false}
            />
          </div>
        ))}
      </div>
      <a href="/pages/Learnings">
        <BtnComponent
          borderColor="#5A1E90"
          color="#5A1E90"
          width="12.630208333333334vw"
          buttonText={container4Data.buttonText}
          margin="4.557291666666666vw 0 0 0"
          arrow="true"
          h5Margin="0 0.6510416666666667vw 0 0"
        />
      </a>
    </div>
  );
};

export default Strategies;
