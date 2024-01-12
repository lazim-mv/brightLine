import Image from "next/image";
import React from "react";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "./ButtonComponent";
import { container3Data } from "../contents/Contents";

const About = () => {
  return (
    <div className="container3">
      <Image
        className="aboutImage"
        src={container3Data.img}
        alt="Asian Engineer"
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
      />

      <div className="aboutContent">
        <SectionName
          sectionText={container3Data.sectionName}
          color="#5A1E90"
          weight="700"
          padding="3.90625vw 0 1.3020833333333335vw 0"
        />
        <SectionTitle
          sectionText={container3Data.sectionTitle}
          color="#282938"
          width="32.421875vw"
        />
        <SectionDescription
          sectionText={container3Data.description}
          width="35.546875vw"
        />
        <a href="/pages/About">
          <BtnComponent
            borderColor="#5A1E90"
            color="#5A1E90"
            width="12.630208333333334vw"
            buttonText={container3Data.buttonText}
            margin="1.3020833333333335vw 0 0 0"
            arrow="true"
            h5Margin="0 0.6510416666666667vw 0 0"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
