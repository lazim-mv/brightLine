import React from "react";
import {  SectionName, SectionTitle } from "./ButtonComponent";
import Card from "./Card";
import { container2Data } from "../Contents";

const Benefits = () => {
  return (
    <div className="container2">
      <div className="benefitsTopBox">
        <div className=".col">
          <SectionName
            sectionText="Benefits of Bright Line School"
            color="#5A1E90"
            weight="700"
          />
          <SectionTitle
            sectionText="Experience the Best with Signature"
            color="#282938"
            width="32.421875vw"
          />
        </div>
        <div className="col secondCol">
          <div></div>
          <p className="benefitsDesc">
            Risus scelerisque a non turpis vitae malesuada sed venenatis. In
            fringilla commodo suspendisse nunc enim tristique.
          </p>
        </div>
      </div>
      <div className="benefitBottomBox">
        {container2Data.map((data, index) => (
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
