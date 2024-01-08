import React from "react";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "./ButtonComponent";
import { container6Data } from "../Contents";
import Image from "next/image";

const StudentSpace = () => {
  const cardData = container6Data.imageCard;
  return (
    <div className="container6">
      <SectionName
        sectionText={container6Data.sectionName}
        dashText={true}
        textAllign="center"
        weight="700"
      />
      <SectionTitle
        sectionText={container6Data.sectionTitle}
        textAllign="center"
      />
      <SectionDescription
        sectionText={container6Data.description}
        textAllign="center"
        width="38.15104166666667vw"
      />
      <div className="studentSpaceImageContainerGrid">
        {cardData.map((data, index) => (
          <div key={index} className={`item${index + 1} item`}>
            <Image
              className=""
              src={data.img}
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
            />
            <div className="imageCardContent">
              <h3>{data.cardTitle}</h3>

              <SectionDescription
                sectionText={data.cardDesc}
                textAllign="center"
                color="#fff"
              />
            </div>
          </div>
        ))}
      </div>
      <BtnComponent 
        buttonText={container6Data.buttonText}
        arrow={true}
        bg="transparrent"
        borderColor="#5A1E90"
        color="#5A1E90"
        margin="4.557291666666666vw 0 0 0"

      />
    </div>
  );
};

export default StudentSpace;
