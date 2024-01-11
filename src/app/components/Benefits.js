import React from "react";
import {  SectionName, SectionTitle } from "./ButtonComponent";
import Card from "./Card";
import { container2Data } from "../contents/Contents";

const Benefits = () => {
  const cardData = container2Data.imageCard
  return (
    <div className="container2">
      <div className="benefitsTopBox">
        <div className=".col">
          <SectionName
            sectionText={container2Data.sectionName}
            color="#5A1E90"
            weight="700"
          />
          <SectionTitle
            sectionText={container2Data.sectionTitle}
            color="#282938"
            width="32.421875vw"
          />
        </div>
        <div className="col secondCol">
          <div></div>
          <p className="benefitsDesc">
           {container2Data.description}
          </p>
        </div>
      </div>
      <div className="benefitBottomBox">
        {cardData.map((data, index) => (
          <div key={index}>
            <Card
              img={data.img}
              title={data.title}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
